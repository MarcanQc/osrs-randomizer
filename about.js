// Compact About dialog; settings live in the Settings panel.
(() => {
  const modal = document.getElementById('aboutModal');
  const close = () => {
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  };
  const status = document.getElementById('aboutStatus');
  const updates = document.getElementById('aboutCheckUpdates');
  const banner = document.getElementById('updateBanner');
  const restart = document.getElementById('updateRestart');
  function showUpdate(state) {
    status.textContent = state.message;
    banner.hidden = !['downloading', 'ready', 'installing'].includes(state.phase);
    document.getElementById('updateMessage').textContent = state.message;
    restart.hidden = state.phase !== 'ready';
    updates.disabled = ['checking', 'downloading', 'installing'].includes(state.phase);
  }
  window.appInfo?.onUpdate?.(showUpdate);
  window.appInfo?.getUpdateState?.().then(showUpdate).catch(() => {});
  restart.addEventListener('click', async () => {
    if (document.getElementById('roll').classList.contains('isRolling')) {
      document.getElementById('updateMessage').textContent = 'Attends la fin du tirage, puis clique sur Redémarrer.';
      return;
    }
    restart.disabled = true;
    try { if (!await window.appInfo.installUpdate()) restart.disabled = false; }
    catch { restart.disabled = false; }
  });
  document.querySelectorAll('.about-btn').forEach(button => button.addEventListener('click', async () => {
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    status.textContent = '';
    try {
      const info = await window.appInfo.getInfo();
      document.getElementById('aboutProduct').textContent = info.productName;
      document.getElementById('aboutVersion').textContent = `Version ${info.version}`;
      document.getElementById('aboutActions').hidden = !info.canCheckUpdates;
    } catch { status.textContent = 'Informations de version indisponibles.'; }
  }));
  document.getElementById('aboutClose').addEventListener('click', close);
  document.getElementById('aboutOverlay').addEventListener('click', close);
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') close();
  });
  updates.addEventListener('click', async () => {
    updates.disabled = true;
    status.textContent = 'Vérification…';
    try {
      const result = await window.appInfo.checkUpdates();
      status.textContent = result.message || 'Vérification terminée.';
    } catch { status.textContent = 'Impossible de vérifier les mises à jour.'; }
    finally { updates.disabled = false; }
  });
  close();
})();
