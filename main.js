const { app, BrowserWindow, ipcMain, shell, Menu, Tray, nativeImage, dialog } = require('electron');
const path = require('path');
const fs = require('fs');

const log = require('electron-log');
let autoUpdater = null;
try {
  ({ autoUpdater } = require('electron-updater'));
  // Pipe auto-updater logs to our log file as well
  autoUpdater.logger = log;
  autoUpdater.logger.transports.file.level = 'info';
} catch (_) {
  autoUpdater = null;
}





// --------------------- SINGLE INSTANCE ---------------------
// Prevent multiple instances of the app.
// If a user launches the app again, we focus the existing window.
const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) {
  app.quit();
} else {
  app.on('second-instance', () => {
    try {
      if (app.isReady()) showMainWindow();
    } catch (_) {}
  });
}

// --------------------- LOGGING HELPERS ---------------------
function getLogsDir() {
  const dir = path.join(app.getPath('userData'), 'logs');
  try { fs.mkdirSync(dir, { recursive: true }); } catch (_) {}
  return dir;
}

function logToFile(message) {
  try {
    const file = path.join(getLogsDir(), 'app.log');
    const line = `[${new Date().toISOString()}] ${message}\n`;
    fs.appendFileSync(file, line, 'utf-8');
  } catch (_) {}
}

// Capture main-process crashes to log
process.on('uncaughtException', (err) => {
  logToFile(`MAIN uncaughtException: ${err && err.stack ? err.stack : err}`);
});
process.on('unhandledRejection', (reason) => {
  logToFile(`MAIN unhandledRejection: ${reason}`);
});



let mainWindow = null;
let tray = null;
let isQuitting = false;


// --------------------- SETTINGS STORE ---------------------
// Stored in a JSON file under Electron's userData directory.
// This is more reliable than localStorage for sharing between windows.
const SETTINGS_FILE = 'settings.json';

function getSettingsPath() {
  return path.join(app.getPath('userData'), SETTINGS_FILE);
}

const DEFAULT_SETTINGS = {
  avoidRepeats: true,
  clickVolume: 100,
  rollVolume: 100,
  resultVolume: 100,
  theme: 'dark',            // 'dark' | 'light'
  volume: 70,               // 0-100
  discordWebhook: '',       // string
  discordEnabled: false,    // boolean (send on draw)
  minimizeToTray: false,
  trayPreferenceVersion: 1,     // boolean
  history: [],              // [{t, mode, ids}]
};

function safeParseJSON(txt) {
  try { return JSON.parse(txt); } catch { return null; }
}

function loadSettings() {
  const p = getSettingsPath();
  try {
    if (!fs.existsSync(p)) return { ...DEFAULT_SETTINGS };
    const raw = fs.readFileSync(p, 'utf8');
    const parsed = safeParseJSON(raw);
    if (!parsed || typeof parsed !== 'object') return { ...DEFAULT_SETTINGS };
    const settings = { ...DEFAULT_SETTINGS, ...parsed, minimizeToTray: false };
    // One-time change requested for existing installations; later choices persist.
    if (parsed.trayPreferenceVersion !== 1) {
      settings.minimizeToTray = false;
      settings.trayPreferenceVersion = 1;
      saveSettings(settings);
    }
    return settings;
  } catch {
    return { ...DEFAULT_SETTINGS };
  }
}

function saveSettings(settings) {
  const p = getSettingsPath();
  try {
    fs.mkdirSync(path.dirname(p), { recursive: true });
    fs.writeFileSync(p, JSON.stringify(settings, null, 2), 'utf8');
  } catch {}
}

let settingsCache = null;
function getSettings() {
  if (!settingsCache) settingsCache = loadSettings();
  return settingsCache;
}

function setSetting(key, value) {
  const s = getSettings();
  s[key] = value;
  saveSettings(s);
  return s;
}

function broadcastSettingsChanged(payload) {
  const msg = payload || { all: getSettings() };
  try {
    if (mainWindow && !mainWindow.isDestroyed()) mainWindow.webContents.send('settings:changed', msg);
  } catch {}
}

function getIconPath() {
  return path.join(__dirname, 'assets', 'logo', 'icon.ico');
}

function createTray() {
  if (tray) return tray;

  // Windows tray supports .ico nicely.
  const iconPath = getIconPath();
  const img = nativeImage.createFromPath(iconPath);

  tray = new Tray(img);
  tray.setToolTip('OSRS Randomizer');

  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Ouvrir OSRS Randomizer',
      click: () => showMainWindow()
    },
    { type: 'separator' },
    {
      label: 'Quitter',
      click: () => {
        isQuitting = true;
        app.quit();
      }
    }
  ]);

  tray.setContextMenu(contextMenu);

  tray.on('double-click', () => {
    try {
      showMainWindow();
    } catch (_) {}
  });

  return tray;
}

function syncTray() {
  if (tray) { tray.destroy(); tray = null; }
}

function handleWindowClose() {
  // Normal closing always exits, including with older saved preferences.
}

function createMainWindow() {
  mainWindow = new BrowserWindow({
    autoHideMenuBar: true,
    width: 1320,
    height: 940,
    minWidth: 760,
    minHeight: 640,
    show: true,
    backgroundColor: '#0b0f14',
    icon: getIconPath(),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      sandbox: true,
    },
  });

  // Your existing app entrypoint
  mainWindow.loadFile(path.join(__dirname, 'app.html'));

  mainWindow.on('close', (e) => handleWindowClose(mainWindow, e));

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

function showMainWindow() {
  if (!mainWindow || mainWindow.isDestroyed()) createMainWindow();
  if (mainWindow.isMinimized()) mainWindow.restore();
  mainWindow.show();
  mainWindow.focus();
}

app.whenReady().then(() => {
  if (!gotTheLock) return;
  // PRO: remove default menu bar
  try { Menu.setApplicationMenu(null); } catch (_) {}

  // Windows: proper notifications/tray grouping
  try { app.setAppUserModelId('com.osrs.randomizer'); } catch (_) {}

  // Tray is optional (user setting)
  try {
    const s = getSettings();
    // Closing always exits; tray mode has been removed.
  } catch (_) {}

  ipcMain.on('app:quit', () => app.quit());

    // Settings IPC (shared between windows)
  ipcMain.handle('settings:getAll', () => getSettings());
  ipcMain.handle('settings:get', (_e, key) => getSettings()[key]);
  ipcMain.handle('settings:set', (_e, key, value) => {
    const next = setSetting(key, value);
    if (key === "minimizeToTray") syncTray();
    broadcastSettingsChanged({ key, value, all: next });
    return next;
  });
  ipcMain.handle('settings:reset', () => {
    settingsCache = { ...DEFAULT_SETTINGS, history: [], settingsSchemaVersion: 1 };
    saveSettings(settingsCache);
    syncTray();
    broadcastSettingsChanged({ all: settingsCache });
    return settingsCache;
  });

  // --------------------- APP INFO / DIAGNOSTICS ---------------------
  ipcMain.handle('app:getInfo', () => {
    return {
      productName: 'OSRS Randomizer',
      canCheckUpdates: !!app.isPackaged && !!autoUpdater,
      version: app.getVersion(),
      userData: app.getPath('userData'),
      logsDir: getLogsDir(),
      platform: process.platform,
      arch: process.arch,
    };
  });

  ipcMain.handle('app:openLogsDir', async () => {
    const dir = getLogsDir();
    try { await shell.openPath(dir); return true; } catch (_) { return false; }
  });

  ipcMain.on('log:write', (_e, message) => {
    if (typeof message === 'string') logToFile(`RENDERER: ${message}`);
  });

  
  const updates = require('./updates')({ app, updater: autoUpdater, ipcMain,
    send: state => { if (mainWindow && !mainWindow.isDestroyed()) mainWindow.webContents.send('update:state', state); }
  });
  if (app.isPackaged && autoUpdater) {
    const timer = setTimeout(() => updates.check(), 10000);
    timer.unref();
  }

  showMainWindow();
});


app.on('before-quit', () => {
  isQuitting = true;
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  // macOS behavior
  if (gotTheLock && app.isReady()) showMainWindow();
});
