// Shared state survives renderer reloads; installation requires an explicit click.
module.exports = function setupUpdates({ app, updater, ipcMain, send }) {
  let state = { phase: 'idle', message: '' };
  let busy = false;
  const enabled = !!app.isPackaged && !!updater;
  const publish = (phase, message) => { state = { phase, message }; send(state); };
  const fail = () => { busy = false; publish('error', 'Mise à jour indisponible. Vérifie ta connexion et réessaie plus tard.'); };
  if (enabled) {
    updater.autoDownload = true;
    updater.autoInstallOnAppQuit = false;
    updater.allowDowngrade = false;
    updater.on('checking-for-update', () => publish('checking', 'Recherche de mises à jour…'));
    updater.on('update-available', () => publish('downloading', 'Téléchargement de la mise à jour…'));
    updater.on('download-progress', p => publish('downloading', `Téléchargement : ${Math.round(p.percent)} %`));
    updater.on('update-not-available', () => { busy = false; publish('current', 'Ton application est à jour.'); });
    updater.on('update-downloaded', () => { busy = false; publish('ready', 'Mise à jour prête. Tu peux redémarrer quand tu veux.'); });
    updater.on('error', fail);
  }
  async function check() {
    if (!enabled) return { ok: false, message: 'Disponible dans la version installée.' };
    if (busy || state.phase === 'ready') return { ok: true, message: state.message };
    busy = true;
    try { await updater.checkForUpdates(); return { ok: state.phase !== 'error', message: state.message }; }
    catch { fail(); return { ok: false, message: state.message }; }
  }
  ipcMain.handle('update:check', check);
  ipcMain.handle('update:state', () => state);
  ipcMain.handle('update:install', () => {
    if (!enabled || state.phase !== 'ready') return false;
    publish('installing', 'Redémarrage…');
    setImmediate(() => updater.quitAndInstall(false, true));
    return true;
  });
  return { check };
};
