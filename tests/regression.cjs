const fs = require('fs');
const vm = require('vm');
const path = require('path');
const assert = require('assert/strict');
const root = path.join(__dirname, '..');
const findings = [];
function check(name, fn) { fn(); findings.push({name, reproduced:true}); }
function element(value = '') {
  const classes = new Set();
  return {value, innerHTML:'', textContent:'', style:{}, dataset:{}, handlers:{},
    classList:{add:(x)=>classes.add(x), remove:(x)=>classes.delete(x), contains:(x)=>classes.has(x), toggle:()=>{}},
    addEventListener(type, fn){ (this.handlers[type] ||= []).push(fn); },
    setAttribute(){}, contains(){return false;}, querySelectorAll(){return [];}, pause(){}, play(){return Promise.resolve();}};
}
const html = fs.readFileSync(path.join(root,'app.html'),'utf8');
const elements = {};
for (const m of html.matchAll(/<[^>]+\bid="([^"]+)"[^>]*>/g)) elements[m[1]] = element(m[0].match(/\bvalue="([^"]*)"/)?.[1] || '');
elements.theme.value='light';
const saved = new Map([['osrs_theme','dark'],['osrs_volume','0.2'],['osrs_discord_webhook','https://discord.com/api/webhooks/test/token']]);
let getAllCalls=0;let subscriber;let persisted={theme:'dark',volume:20,discordWebhook:'https://discord.com/api/webhooks/test/token',discordEnabled:true,settingsSchemaVersion:1,history:[{t:1,mode:'skills',ids:['attack']}]};
const writes=[];
const c = vm.createContext({console, URL, Date, Math, performance, setTimeout,
  localStorage:{getItem:k=>saved.get(k)??null,setItem:(k,v)=>saved.set(k,String(v)),removeItem:k=>saved.delete(k)},
  document:{getElementById:id=>elements[id]??null,querySelector:()=>null,querySelectorAll:()=>[],addEventListener(){},documentElement:element()},
  window:{api:{settings:{getAll:async()=>{getAllCalls++;return structuredClone(persisted);},onChange:fn=>subscriber=fn,set:async(k,v)=>{writes.push({k,v});persisted[k]=structuredClone(v);}}}}, confirm:()=>false});
async function run(){
vm.runInContext(fs.readFileSync(path.join(root,'renderer.js'),'utf8'),c);

await vm.runInContext('initialization',c);
check('Startup restores preferences and history without overwriting them',()=>{
 assert.equal(getAllCalls,1);assert.equal(writes.length,0);assert.equal(elements.theme.value,'dark');assert.equal(elements.volume.value,'20');assert.equal(vm.runInContext('loadHistory().length',c),1);
 assert.equal(elements.discordWebhook.value,persisted.discordWebhook);
});
check('New draw preserves old history',()=>{vm.runInContext("addHistory('skills',[data.skills[1]])",c);assert.equal(persisted.history.length,2);assert.equal(persisted.history[1].ids[0],'attack');});
check('Zero volume mutes audio',()=>{elements.volume.value='0';vm.runInContext('saveOptionsFromUi();playSfx(sfxClick,1)',c);assert.equal(elements.sfxClick.volume,0);assert.equal(persisted.volume,0);});
check('None survives mode changes',()=>{vm.runInContext("setAll(false);applyMode('bosses');applyMode('skills')",c);assert.equal(vm.runInContext('selectedSet.size',c),0);});
check('Mode changes are blocked during animation',()=>{elements.roll.classList.add('isRolling');vm.runInContext("applyMode('bosses')",c);assert.equal(vm.runInContext('currentMode',c),'skills');elements.roll.classList.remove('isRolling');});
check('Cancel clear keeps history',()=>{elements.clearHistory.handlers.click.forEach(fn=>fn());assert.equal(vm.runInContext('loadHistory().length',c),2);});
check('Reset broadcast updates UI and memory',()=>{subscriber({all:{theme:'dark',volume:70,discordWebhook:'',discordEnabled:false,history:[]}});assert.equal(elements.volume.value,'70');assert.equal(elements.discordWebhook.value,'');assert.equal(vm.runInContext('loadHistory().length',c),0);});
elements.count.value='1';
vm.runInContext('setAll(true)',c);
const rolling=elements.roll.handlers.click[0]();
vm.runInContext("applyMode('bosses')",c);
await rolling;
check('Complete animated draw retains original mode and valid result',()=>{
 assert.equal(vm.runInContext('loadHistory()[0].mode',c),'skills');
 assert.equal(vm.runInContext('!!itemById(loadHistory()[0].mode,loadHistory()[0].ids[0])',c),true);
 assert.equal(elements.roll.disabled,false);
});
await vm.runInContext('loadPersistentSettings()',c);
check('Reload restores saved draw',()=>{assert.equal(vm.runInContext('loadHistory().length',c),1);});
delete persisted.settingsSchemaVersion;
await vm.runInContext('loadPersistentSettings()',c);
check('Legacy migration uses percent volume and preserves JSON history',()=>{
 assert.equal(vm.runInContext('SETTINGS.volume',c),20);
 assert.equal(persisted.settingsSchemaVersion,1);
 assert.equal(persisted.history.length,1);
});
const events = {};
check('Recent exclusions respect category and release oldest draws for small pools',()=>{
 const result=vm.runInContext(`(()=>{
  const old=SETTINGS;SETTINGS={...SETTINGS,avoidRepeats:true,history:[{mode:'skills',ids:['a']},{mode:'bosses',ids:['d']},{mode:'skills',ids:['b']},{mode:'skills',ids:['c']}]};
  const pool=['a','b','c','d'].map(id=>({id}));
  const fresh=poolWithoutRecent(pool,1).map(x=>x.id).join(',');
  const relaxed=poolWithoutRecent(pool,2).map(x=>x.id).join(',');
  const all=poolWithoutRecent(pool,9).length;
  SETTINGS.avoidRepeats=false;const off=poolWithoutRecent(pool,1).length;
  SETTINGS=old;return [fresh,relaxed,all,off];
 })()`,c);
 assert.deepEqual(Array.from(result),['d','c,d',4,4]);
});
check('Audio channels mute independently and retain master volume',()=>{
 vm.runInContext('SETTINGS.volume=50;SETTINGS.clickVolume=0;SETTINGS.rollVolume=40;SETTINGS.resultVolume=80;playSfx(sfxClick,1);playSfx(sfxRoll,1);playSfx(sfxWin,1)',c);
 assert.equal(elements.sfxClick.volume,0);assert.equal(elements.sfxRoll.volume,0.2);assert.equal(elements.sfxWin.volume,0.4);
});
const windows = [];
let trayCount=0;const handlers={};let failTray=false;
let quitCalls=0;
const app={requestSingleInstanceLock:()=>true,isReady:()=>true,quit(){quitCalls++;},on:(e,f)=>events[e]=f,whenReady:()=>({then:f=>events.ready=f}),getPath:()=>'/virtual',setAppUserModelId(){}};
class Win {
  constructor(){this.handlers={};this.webContents={send(){}};windows.push(this);}
  loadFile(file){this.file=file;} on(e,f){(this.handlers[e]||=[]).push(f);} once(){} isDestroyed(){return false;} isMinimized(){return !!this.minimized;} restore(){this.minimized=false;} hide(){this.hidden=true;} show(){this.hidden=false;} focus(){}
}
const m=vm.createContext({require:name=>{
  if(name==='electron') return {app,BrowserWindow:Win,ipcMain:{on(){},handle:(key,fn)=>handlers[key]=fn},Menu:{setApplicationMenu(){},buildFromTemplate:x=>x},nativeImage:{createFromPath:()=>({})},Tray:class{constructor(){if(failTray)throw Error('tray failure');trayCount++;}setToolTip(){}setContextMenu(){}on(){}destroy(){trayCount--;}}};
  if(name==='electron-log')return {};
  if(name==='electron-updater')throw Error('unused');
  if(name==='fs')return {existsSync:()=>false,mkdirSync(){},writeFileSync(){},appendFileSync(){}};
  if(name === './updates') return require('../updates');
  return require(name);
},process:{on(){},platform:'win32'},__dirname:root,setTimeout(){}});
vm.runInContext(fs.readFileSync(path.join(root,'main.js'),'utf8'),m);

check('Startup opens only the randomizer with tray disabled',()=>{events.ready();assert.equal(trayCount,0);assert.equal(windows.length,1);assert.equal(path.basename(windows[0].file),'app.html');assert.equal(windows[0].hidden,false);});
check('Old tray preference cannot hide the window',()=>{handlers['settings:set'](null,'minimizeToTray',true);assert.equal(trayCount,0);let prevented=false;windows[0].handlers.close[0]({preventDefault(){prevented=true;}});assert.equal(prevented,false);});
check('Second instance restores the same window',()=>{windows[0].minimized=true;events['second-instance']();assert.equal(windows.length,1);assert.equal(windows[0].minimized,false);assert.equal(windows[0].hidden,false);assert.equal(windows[0].handlers.close.length,1);});
check('Without tray, closing exits without opening another window',()=>{handlers['settings:set'](null,'minimizeToTray',false);assert.equal(trayCount,0);let prevented=false;windows[0].handlers.close[0]({preventDefault(){prevented=true;}});assert.equal(prevented,false);assert.equal(windows.length,1);events['window-all-closed']();assert.equal(quitCalls,1);});
check('Tray creation failure does not trap the window',()=>{failTray=true;handlers['settings:set'](null,'minimizeToTray',true);let prevented=false;windows[0].handlers.close[0]({preventDefault(){prevented=true;}});assert.equal(prevented,false);});
check('Reset keeps migration marker and clears history',()=>{failTray=false;const settings=handlers['settings:reset']();assert.equal(settings.settingsSchemaVersion,1);assert.equal(settings.history.length,0);});
check('Search filters visible cards without changing the draw pool',()=>{
 vm.runInContext("applyMode('bosses');setAll(true)",c);
 elements.catalogSearch.value='  maD ANgel  ';
 vm.runInContext('renderPicker()',c);
 assert.equal(vm.runInContext('filteredItems().length',c),1);
 assert.equal(vm.runInContext('getPool().length',c),53);
 assert.equal(elements.skillPicker.innerHTML.includes('Mad Angel'),true);
});
check('Selection and new-boss filters combine with search',()=>{
 elements.catalogFilter.value='unselected';
 assert.equal(vm.runInContext('filteredItems().length',c),0);
 vm.runInContext('setAll(false)',c);
 assert.equal(vm.runInContext('filteredItems().length',c),1);
 elements.catalogSearch.value='';elements.catalogFilter.value='new';
 assert.equal(vm.runInContext('filteredItems().length',c),4);
});
check('Mode change clears filters and preserves an empty boss selection',()=>{
 vm.runInContext("applyMode('skills');applyMode('bosses')",c);
 assert.equal(elements.catalogSearch.value,'');assert.equal(elements.catalogFilter.value,'all');
 assert.equal(vm.runInContext('selectedSet.size',c),0);
 assert.equal(elements.selectionCount.textContent,'0 / 53 inclus');
});
check('Empty search safely shows guidance',()=>{
 elements.catalogSearch.value='<img src=x onerror=alert(1)>';
 vm.runInContext('renderPicker()',c);
 assert.equal(elements.skillPicker.innerHTML.includes('Aucune activité trouvée'),true);
 assert.equal(elements.skillPicker.innerHTML.includes('onerror=alert'),false);
});
c.confirm=()=>true;
c.window.api.settings.reset=async()=>({theme:'dark',volume:70,discordWebhook:'',discordEnabled:false,minimizeToTray:false,history:[]});
await elements.settingsReset.handlers.click[0]();
check('Reset refreshes the form and disables background mode',()=>{
 assert.equal(elements.settingsTrayToggle,undefined);
 assert.equal(elements.discordWebhook.value,'');
 assert.equal(elements.volume.value,'70');
 assert.equal(vm.runInContext('loadHistory().length',c),0);
});
check('Old tray preferences are disabled',()=>{
 vm.runInContext(`fs.existsSync=()=>true;fs.readFileSync=()=>JSON.stringify({minimizeToTray:true});`,m);
 assert.equal(vm.runInContext('loadSettings().minimizeToTray',m),false);
 vm.runInContext(`fs.readFileSync=()=>JSON.stringify({minimizeToTray:true,trayPreferenceVersion:1});`,m);
 assert.equal(vm.runInContext('loadSettings().minimizeToTray',m),false);
});
console.log('PASS: '+findings.length+' regression checks');
}
run().catch(error=>{console.error(error);process.exitCode=1;});
