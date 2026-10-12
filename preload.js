const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('app', {
  quit: () => ipcRenderer.send('app:quit'),
});

// Preserve compatibility with any existing code
contextBridge.exposeInMainWorld('api', {
  settings: {
    getAll: () => ipcRenderer.invoke('settings:getAll'),
    get: (key) => ipcRenderer.invoke('settings:get', key),
    set: (key, value) => ipcRenderer.invoke('settings:set', key, value),
    reset: () => ipcRenderer.invoke('settings:reset'),
    onChange: (cb) => {
      if (typeof cb !== 'function') return () => {};
      const handler = (_evt, payload) => cb(payload);
      ipcRenderer.on('settings:changed', handler);
      return () => ipcRenderer.removeListener('settings:changed', handler);
    },
  },
});


// App info / diagnostics
contextBridge.exposeInMainWorld('appInfo', {
  getInfo: () => ipcRenderer.invoke('app:getInfo'),
  openLogsDir: () => ipcRenderer.invoke('app:openLogsDir'),
  checkUpdates: () => ipcRenderer.invoke('update:check'),
  getUpdateState: () => ipcRenderer.invoke('update:state'),
  installUpdate: () => ipcRenderer.invoke('update:install'),
  onUpdate: (cb) => {
    const listener = (_event, state) => cb(state);
    ipcRenderer.on('update:state', listener);
    return () => ipcRenderer.removeListener('update:state', listener);
  },
});

// Simple file logger (writes to userData/logs/app.log via main)
contextBridge.exposeInMainWorld('logger', {
  log: (msg) => ipcRenderer.send('log:write', String(msg)),
});
