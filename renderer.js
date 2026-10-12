// ===================== DATA =====================
const data = {
  skills: [
    { id: "attack", name: "Attack", icon: "attack.png" },
    { id: "strength", name: "Strength", icon: "strength.png" },
    { id: "defence", name: "Defence", icon: "defence.png" },
    { id: "ranged", name: "Ranged", icon: "ranged.png" },
    { id: "prayer", name: "Prayer", icon: "prayer.png" },
    { id: "magic", name: "Magic", icon: "magic.png" },
    { id: "runecraft", name: "Runecraft", icon: "runecrafting.png" },
    { id: "construction", name: "Construction", icon: "construction.png" },
    { id: "hitpoints", name: "Hitpoints", icon: "hitpoints.png" },
    { id: "agility", name: "Agility", icon: "agility.png" },
    { id: "herblore", name: "Herblore", icon: "herblore.png" },
    { id: "thieving", name: "Thieving", icon: "thieving.png" },
    { id: "crafting", name: "Crafting", icon: "crafting.png" },
    { id: "fletching", name: "Fletching", icon: "fletching.png" },
    { id: "slayer", name: "Slayer", icon: "slayer.png" },
    { id: "hunter", name: "Hunter", icon: "hunter.png" },
    { id: "mining", name: "Mining", icon: "mining.png" },
    { id: "smithing", name: "Smithing", icon: "smithing.png" },
    { id: "fishing", name: "Fishing", icon: "fishing.png" },
    { id: "cooking", name: "Cooking", icon: "cooking.png" },
    { id: "firemaking", name: "Firemaking", icon: "firemaking.png" },
    { id: "woodcutting", name: "Woodcutting", icon: "woodcutting.png" },
    { id: "farming", name: "Farming", icon: "farming.png" },
    { id: "sailing", name: "Sailing", icon: "sailing.png" },
  ],

  bosses: [
    { id: "mad_angel", name: "Mad Angel", icon: "mad_angel.png" },
    { id: "maggot_king", name: "Maggot King", icon: "maggot_king.png" },
    { id: "brutus", name: "Brutus", icon: "brutus.png" },
    { id: "shellbane_gryphon", name: "Shellbane Gryphon", icon: "shellbane_gryphon.png" },
    { id: "barrows", name: "Barrows", icon: "barrows.png" },
    { id: "scurrius", name: "Scurrius", icon: "scurrius.png" },
    { id: "giant_mole", name: "Giant Mole", icon: "giant_mole.png" },
    { id: "deranged_archaeologist", name: "Deranged Archaeologist", icon: "deranged_archaeologist.png" },
    { id: "dagannoth_kings", name: "Dagannoth Kings", icon: "dagannoth_kings.png" },
    { id: "sarachnis", name: "Sarachnis", icon: "sarachnis.png" },
    { id: "perilous_moons", name: "Perilous Moons", icon: "perilous_moons.png" },
    { id: "kalphite_queen", name: "Kalphite Queen", icon: "kalphite_queen.png" },

    { id: "kree_arra", name: "Kree'arra", icon: "kree_arra.png" },
    { id: "commander_zilyana", name: "Commander Zilyana", icon: "commander_zilyana.png" },
    { id: "general_graardor", name: "General Graardor", icon: "general_graardor.png" },
    { id: "kril_tsutsaroth", name: "K'ril Tsutsaroth", icon: "kril_tsutsaroth.png" },

    { id: "the_hueycoatl", name: "The Hueycoatl", icon: "the_hueycoatl.png" },
    { id: "corporeal_beast", name: "Corporeal Beast", icon: "corporeal_beast.png" },
    { id: "nex", name: "Nex", icon: "nex.png" },

    { id: "chaos_fanatic", name: "Chaos Fanatic", icon: "chaos_fanatic.png" },
    { id: "crazy_archaeologist", name: "Crazy Archaeologist", icon: "crazy_archaeologist.png" },
    { id: "scorpia", name: "Scorpia", icon: "scorpia.png" },
    { id: "king_black_dragon", name: "King Black Dragon", icon: "king_black_dragon.png" },
    { id: "chaos_elemental", name: "Chaos Elemental", icon: "chaos_elemental.png" },

    { id: "calvarion", name: "Calvar'ion", icon: "calvarion.png" },
    { id: "vetion", name: "Vet'ion", icon: "vetion.png" },
    { id: "spindel", name: "Spindel", icon: "spindel.png" },
    { id: "venenatis", name: "Venenatis", icon: "venenatis.png" },
    { id: "artio", name: "Artio", icon: "artio.png" },
    { id: "callisto", name: "Callisto", icon: "callisto.png" },

    { id: "obor", name: "Obor", icon: "obor.png" },
    { id: "bryophyta", name: "Bryophyta", icon: "bryophyta.png" },

    { id: "amoxliatl", name: "Amoxliatl", icon: "amoxliatl.png" },
    { id: "royal_titans", name: "Royal Titans", icon: "royal_titans.png" },
    { id: "doom_of_mokhaiotl", name: "Doom of Mokhaiotl", icon: "doom_of_mokhaiotl.png" },

    { id: "zulrah", name: "Zulrah", icon: "zulrah.png" },
    { id: "vorkath", name: "Vorkath", icon: "vorkath.png" },
    { id: "phantom_muspah", name: "Phantom Muspah", icon: "phantom_muspah.png" },

    { id: "the_nightmare", name: "The Nightmare", icon: "the_nightmare.png" },
    { id: "phosanis_nightmare", name: "Phosani's Nightmare", icon: "phosanis_nightmare.png" },

    { id: "yama", name: "Yama", icon: "yama.png" },
    { id: "duke_sucellus", name: "Duke Sucellus", icon: "duke_sucellus.png" },
    { id: "the_leviathan", name: "The Leviathan", icon: "the_leviathan.png" },
    { id: "the_whisperer", name: "The Whisperer", icon: "the_whisperer.png" },
    { id: "vardorvis", name: "Vardorvis", icon: "vardorvis.png" },

    { id: "crystalline_hunllef", name: "Crystalline Hunllef", icon: "crystalline_hunllef.png" },
    { id: "corrupted_hunllef", name: "Corrupted Hunllef", icon: "corrupted_hunllef.png" },

    { id: "tztok_jad", name: "TzTok-Jad", icon: "tztok_jad.png" },
    { id: "tzkal_zuk", name: "TzKal-Zuk", icon: "tzkal_zuk.png" },

    { id: "sol_heredit", name: "Sol Heredit", icon: "sol_heredit.png" },
    { id: "tempoross", name: "Tempoross", icon: "tempoross.png" },
    { id: "zalcano", name: "Zalcano", icon: "zalcano.png" },
    { id: "wintertodt", name: "Wintertodt", icon: "wintertodt.png" },
  ],

  raids: [
    { id: "cox", name: "Chambers of Xeric", icon: "cox.png" },
    { id: "tob", name: "Theatre of Blood", icon: "tob.png" },
    { id: "toa", name: "Tombs of Amascut", icon: "toa.png" },
  ],
};

const MODE_LABEL = { skills: "Skills", bosses: "Bosses", raids: "Raids" };
const MODE_UI_ICON = {
  skills: "assets/ui/skill.png",
  bosses: "assets/ui/boss.png",
  raids: "assets/ui/raid.png",
};
const MODE_ASSET_DIR = {
  skills: "assets/skills/",
  bosses: "assets/bosses/",
  raids: "assets/raids/",
};

function modeBadge(mode) {
  const src = MODE_UI_ICON[mode] || MODE_UI_ICON.skills;
  const text = MODE_LABEL[mode] || mode;
  return `
    <span class="modeBadge">
      <img src="${src}" alt="${text}">
      <span>${text}</span>
    </span>
  `;
}

// ===================== STORAGE KEYS =====================
const KEY_SELECTED_PREFIX = "osrs_selected_ids_";
const KEY_HISTORY = "osrs_history";

// --------------------- SETTINGS (pro) ---------------------
const HAS_SETTINGS_API = !!(window.api && window.api.settings);
let SETTINGS = {
  avoidRepeats: true,
  clickVolume: 100,
  rollVolume: 100,
  resultVolume: 100,
  theme: 'dark',
  volume: 70,
discordWebhook: '',
  discordEnabled: false,
  history: [],
};

async function loadPersistentSettings() {
  if (HAS_SETTINGS_API) {
    const all = await window.api.settings.getAll();
    SETTINGS = { ...SETTINGS, ...all };
    // Import legacy options once; preserve the existing JSON history.
    if (!all.settingsSchemaVersion) {
      const legacy = readLegacySettings();
      delete legacy.history;
      SETTINGS = { ...SETTINGS, ...legacy };
      for (const [key, value] of Object.entries(legacy)) await window.api.settings.set(key, value);
      await window.api.settings.set('settingsSchemaVersion', 1);
    }
  } else SETTINGS = { ...SETTINGS, ...readLegacySettings() };
  return SETTINGS;
}

function readLegacySettings() {
  const out = {};
  for (const key of ['avoidRepeats', 'clickVolume', 'rollVolume', 'resultVolume']) {
    const raw = localStorage.getItem('osrs_' + key);
    if (raw !== null) out[key] = key === 'avoidRepeats' ? raw === 'true' : clamp(Number(raw) || 0, 0, 100);
  }
  const theme = localStorage.getItem(KEY_THEME);
  if (theme) out.theme = theme === 'dark' ? 'dark' : 'light';
  const volume = localStorage.getItem(KEY_VOLUME);
  if (volume !== null && Number.isFinite(Number(volume))) out.volume = clamp(Number(volume) * 100, 0, 100);
  const webhook = localStorage.getItem(KEY_DISCORD_WEBHOOK);
  if (webhook !== null) { out.discordWebhook = webhook; out.discordEnabled = !!webhook; }
  try { const history = JSON.parse(localStorage.getItem(KEY_HISTORY) || '[]'); if (Array.isArray(history)) out.history = history; } catch {}
  return out;
}

function persistSetting(key, value) {
  SETTINGS[key] = value;
  if (HAS_SETTINGS_API) {
    window.api.settings.set(key, value).catch(error => window.logger?.log?.('Settings save failed: ' + error));
  } else {
    const keys = { theme: KEY_THEME, volume: KEY_VOLUME, discordWebhook: KEY_DISCORD_WEBHOOK, discordEnabled: KEY_DISCORD_ENABLED, history: KEY_HISTORY };
    const stored = key === 'history' ? JSON.stringify(value) : key === 'volume' ? String(value / 100) : String(value);
    if (keys[key]) localStorage.setItem(keys[key], stored);
    else if (['avoidRepeats', 'clickVolume', 'rollVolume', 'resultVolume'].includes(key)) localStorage.setItem('osrs_' + key, stored);
  }
}

function onSettingsChanged(payload) {
  if (!payload) return;
  // Apply only the changed key to avoid overwriting pending local edits.
  if (payload.key) SETTINGS[payload.key] = payload.value;
  else if (payload.all) SETTINGS = { ...SETTINGS, ...payload.all };
  syncSettingsUi();
  renderHistory();
}

function syncSettingsUi() {
  document.getElementById('avoidRepeats').checked = !!SETTINGS.avoidRepeats;
  for (const key of ['clickVolume', 'rollVolume', 'resultVolume']) {
    document.getElementById(key).value = String(SETTINGS[key]);
    document.getElementById(key + 'Value').textContent = String(SETTINGS[key]);
    document.getElementById(key).style.setProperty?.('--fill', SETTINGS[key] + '%');
  }
  setTheme(SETTINGS.theme);
  globalVolume = clamp(Number(SETTINGS.volume) / 100, 0, 1);
  volumeSlider.value = String(Math.round(globalVolume * 100));
  volumeValue.textContent = volumeSlider.value;
  volumeSlider.style.setProperty?.('--fill', volumeSlider.value + '%');
  if (discordWebhook) discordWebhook.value = SETTINGS.discordWebhook || '';
  if (discordEnable) discordEnable.checked = !!SETTINGS.discordEnabled;
}
const KEY_COUNT = "osrs_pick_count";
const KEY_VOLUME = "osrs_volume";
const KEY_MODE = "osrs_mode";
const KEY_THEME = "osrs_theme"; // light|dark
const KEY_DISCORD_ENABLED = "osrs_discord_enabled"; // "1"|"0"
const KEY_DISCORD_WEBHOOK = "osrs_discord_webhook"; // url

const HISTORY_PAGE_SIZE = 3;
let historyPage = 1;

let globalVolume = 0.7;
let currentMode = "skills";

// selections
let selectedSet = new Set();

// ===================== DOM =====================
const result = document.getElementById("result");
const countInput = document.getElementById("count");
const rollBtn = document.getElementById("roll");



// --- UX polish: button pop + result flash ---
function _pop(el){
  if(!el) return;
  el.classList.remove('btn-pop');
  // force reflow
  void el.offsetWidth;
  el.classList.add('btn-pop');
}
function _flash(el){
  if(!el) return;
  el.classList.remove('result-flash');
  void el.offsetWidth;
  el.classList.add('result-flash');
}

const picker = document.getElementById("skillPicker");
const catalogSearch = document.getElementById('catalogSearch');
const catalogFilter = document.getElementById('catalogFilter');
const NEW_BOSSES = new Set(['mad_angel', 'maggot_king', 'brutus', 'shellbane_gryphon']);
const selectAllBtn = document.getElementById("selectAll");
const selectNoneBtn = document.getElementById("selectNone");

const historyBox = document.getElementById("history");

const prevPageBtn = document.getElementById("prevPage");
const nextPageBtn = document.getElementById("nextPage");
const copyHistoryBtn = document.getElementById("copyHistory");
const clearHistoryBtn = document.getElementById("clearHistory");
const pageInfo = document.getElementById("pageInfo");

const modeButtons = document.querySelectorAll(".modeBtn");

// Options
const btnOptions = document.getElementById("btnOptions");
const optionsOverlay = document.getElementById("optionsOverlay");
const optionsModal = document.getElementById("optionsModal");
const btnCloseOptions = document.getElementById("btnCloseOptions");
const btnTestDiscord = document.getElementById("btnTestDiscord");
const discordStatus = document.getElementById("discordStatus");
const volumeSlider = document.getElementById("volume");
const volumeValue = document.getElementById("volumeValue");

const discordEnable = document.getElementById("discordEnable");
const discordWebhook = document.getElementById("discordWebhook");

// Discord branding
const DISCORD_LOGO_URL = "https://raw.githubusercontent.com/MarcanQc/OSRS-Randomizer-Logo/main/logo.png";


// theme toggle
const themeSelect = document.getElementById("theme");
const btnThemeLight = document.getElementById("btnThemeLight");
const btnThemeDark = document.getElementById("btnThemeDark");

// SFX
const sfxClick = document.getElementById("sfxClick");
const sfxRoll = document.getElementById("sfxRoll");
const sfxWin = document.getElementById("sfxWin");

// ===================== HELPERS =====================
function clamp(n, a, b) { return Math.max(a, Math.min(b, n)); }
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));


function isValidDiscordWebhook(url) {
  if (!url) return false;
  try {
    const u = new URL(url);
    const hostOk = u.hostname === "discord.com" || u.hostname === "discordapp.com" || u.hostname.endsWith(".discord.com");
    const pathOk = u.pathname.startsWith("/api/webhooks/");
    return u.protocol === "https:" && hostOk && pathOk;
  } catch {
    return false;
  }
}

function loadDiscordSettings() {
  return { enabled: !!SETTINGS.discordEnabled, webhook: (SETTINGS.discordWebhook || '').trim() };
}
function saveDiscordSettings(enabled, webhook) {
  const w = (webhook || '').trim();
  persistSetting('discordWebhook', w);
  persistSetting('discordEnabled', !!enabled && !!w);
}
function setDiscordStatus(msg, isOk) {
  if (!discordStatus) return;
  discordStatus.textContent = msg || "";
  discordStatus.style.opacity = msg ? "1" : "0.9";
  discordStatus.style.color = isOk ? "var(--good, #35c759)" : "var(--bad, #ff3b30)";
}

let _lastDiscordPostAt = 0;
async function postToDiscordWebhook({ mode, pickedNames, count }) {
  const { enabled, webhook } = loadDiscordSettings();
  if (!enabled) return { ok: false, reason: "disabled" };
  if (!isValidDiscordWebhook(webhook)) return { ok: false, reason: "invalid_url" };

  const now = Date.now();
  if (now - _lastDiscordPostAt < 2000) return { ok: false, reason: "rate_limited" }; // simple anti-spam
  _lastDiscordPostAt = now;

  const modeLabel = (mode || "").toUpperCase();

// Discord embed (plus beau que du texte brut)
const pickedText = (pickedNames || []).join(", ");
const pickedValue =
  pickedText.length > 1024 ? pickedText.slice(0, 1023) + "…" : (pickedText || "—");

const payload = {
  username: "OSRS Randomizer",
  allowed_mentions: { parse: [] },
  embeds: [
    {
      title: "🎲 OSRS Randomizer",
      description: "Nouveau tirage généré.",
      color: 0xc0392b,
      fields: [
        { name: "Mode", value: `**${modeLabel || "—"}**`, inline: true },
        { name: "Nombre", value: `**${count ?? (pickedNames?.length ?? 0)}**`, inline: true },
        { name: "Résultat", value: pickedValue, inline: false },
      ],
      timestamp: new Date().toISOString(),
      thumbnail: { url: DISCORD_LOGO_URL },
      footer: { text: "OSRS Randomizer" },
    },
  ],
};

try {
  const res = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.warn("Discord webhook HTTP error:", res.status, body);
      return { ok: false, reason: "http_error", status: res.status, body };
    }

    return { ok: true };
  } catch (e) {
    console.warn("Discord webhook failed:", e);
    return { ok: false, reason: "network_error", error: String(e) };
  }
}


function playSfx(aud, base = 0.7) {
  if (!aud) return;
    try {
    // Avoid stacking / double audio
    try { aud.pause(); aud.currentTime = 0; } catch {}
    const vol = (Number(SETTINGS.volume) / 100) || 0;
    const key = aud === sfxRoll ? 'rollVolume' : aud === sfxWin ? 'resultVolume' : 'clickVolume';
    const channel = clamp(Number(SETTINGS[key] ?? 100), 0, 100) / 100;
    aud.volume = Math.max(0, Math.min(1, base * vol * channel));
    const p = aud.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  } catch {}
}
function stopSfx(aud) {
  if (!aud) return;
  try { aud.pause(); aud.currentTime = 0; } catch {}
}

function poolWithoutRecent(pool, n) {
  if (!SETTINGS.avoidRepeats) return pool;
  const recent = loadHistory().filter(entry => entry.mode === currentMode).slice(0, 3);
  const needed = Math.min(n, pool.length);
  while (recent.length) {
    const excluded = new Set(recent.flatMap(entry => entry.ids));
    const available = pool.filter(item => !excluded.has(item.id));
    if (available.length >= needed) return available;
    recent.pop(); // Release the oldest draw first when the selection is small.
  }
  return pool;
}

function pickRandomUnique(arr, n) {
  const copy = [...arr];
  const out = [];
  n = Math.max(1, Math.min(n, copy.length));
  for (let i = 0; i < n; i++) {
    const idx = Math.floor(Math.random() * copy.length);
    out.push(copy.splice(idx, 1)[0]);
  }
  return out;
}

function getItemsForMode(mode) { return data[mode] ?? []; }
function itemById(mode, id) { return getItemsForMode(mode).find((x) => x.id === id); }
function selectedKey(mode) { return KEY_SELECTED_PREFIX + mode; }
function assetDir(mode) { return MODE_ASSET_DIR[mode] ?? "assets/skills/"; }

function iconTag(mode, item, className, fallbackClass) {
  const src = assetDir(mode) + item.icon;
  return `
    <img class="${className}" src="${src}" alt="${item.name}" draggable="false"
      onerror="this.style.display='none'; this.insertAdjacentHTML('afterend','<span class=${fallbackClass}>?</span>')">
  `;
}

// ===================== THEME =====================
function loadTheme() {
  const raw = SETTINGS.theme;
  return raw === "dark" ? "dark" : "light";
}
function applyTheme(theme) {
  if (theme === "dark") document.documentElement.classList.add("theme-dark");
  else document.documentElement.classList.remove("theme-dark");
}
function syncThemeButtons(theme) {
  if (!btnThemeLight || !btnThemeDark) return;
  btnThemeLight.classList.toggle("active", theme === "light");
  btnThemeDark.classList.toggle("active", theme === "dark");
}
function setTheme(theme) {
  const t = theme === "dark" ? "dark" : "light";
  if (themeSelect) themeSelect.value = t;
  applyTheme(t);
  syncThemeButtons(t);
}
function saveTheme(theme) {
  const v = theme === "dark" ? "dark" : "light";
  persistSetting('theme', v);
  applyTheme(v);
  syncThemeButtons(v);
}

// ===================== GLOBAL CLICK SOUND =====================
document.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn || btn === rollBtn || btn.classList.contains("pick")) return;
  if (rollBtn && rollBtn.classList.contains("isRolling")) return;
  if (btn.id === "btnTestSound") return;
  playSfx(sfxClick, 0.6);
});

// ===================== MODE =====================
function loadMode() {
  const raw = localStorage.getItem(KEY_MODE);
  if (raw && ["skills", "bosses", "raids"].includes(raw)) currentMode = raw;
}
function saveMode(mode) {
  currentMode = mode;
  localStorage.setItem(KEY_MODE, mode);
}

// ===================== SELECTED =====================
function loadSelected(mode) {
  try {
    const raw = localStorage.getItem(selectedKey(mode));
    if (!raw) return null;
    const ids = JSON.parse(raw);
    if (!Array.isArray(ids)) return null;
    const validIds = ids.filter((id) => !!itemById(mode, id));
    // Extend an old "All" selection without changing custom or empty selections.
    if (mode === 'bosses' && localStorage.getItem('osrs_boss_catalog_2026_10') !== '1') {
      localStorage.setItem('osrs_boss_catalog_2026_10', '1');
      const added = new Set(['mad_angel', 'maggot_king', 'brutus', 'shellbane_gryphon']);
      const previous = getItemsForMode(mode).filter(item => !added.has(item.id));
      if (previous.every(item => validIds.includes(item.id)) && validIds.length === previous.length) {
        const expanded = getItemsForMode(mode).map(item => item.id);
        localStorage.setItem(selectedKey(mode), JSON.stringify(expanded));
        return expanded;
      }
    }
    return validIds;
  } catch { return null; }
}
function saveSelected(mode, set) {
  localStorage.setItem(selectedKey(mode), JSON.stringify([...set]));
}

// ===================== PICKER =====================
function filteredItems() {
  const query = (catalogSearch?.value || '').trim().toLowerCase();
  const filter = catalogFilter?.value || 'all';
  return getItemsForMode(currentMode).filter(item =>
    item.name.toLowerCase().includes(query) &&
    (filter !== 'selected' || selectedSet.has(item.id)) &&
    (filter !== 'unselected' || !selectedSet.has(item.id)) &&
    (filter !== 'new' || (currentMode === 'bosses' && NEW_BOSSES.has(item.id))));
}
function renderPicker() {
  const items = filteredItems();
  updatePickerSummary(items.length);
  picker.innerHTML = items.map((it) => {
    const isActive = selectedSet.has(it.id);
    const isNew = currentMode === 'bosses' && NEW_BOSSES.has(it.id);
    return `<button type="button" class="pick ${isActive ? 'active' : ''}" data-id="${it.id}" aria-pressed="${isActive}" draggable="false">
      ${isNew ? '<span class="new-badge">Nouveau</span>' : ''}
      ${iconTag(currentMode, it, 'pickIcon', 'iconFallback')}
      <span class="pick-name">${it.name}</span>
    </button>`;
  }).join('') || '<div class="catalog-empty"><strong>Aucune activité trouvée.</strong><span>Essaie un autre nom ou un autre filtre.</span></div>';
}

function updatePickerSummary(visibleCount = filteredItems().length) {
  const total = getItemsForMode(currentMode).length;
  document.getElementById('selectionCount').textContent = selectedSet.size + ' / ' + total + ' inclus';
  document.getElementById('visibleCount').textContent = visibleCount + ' activité' + (visibleCount > 1 ? 's' : '') + ' affichée' + (visibleCount > 1 ? 's' : '');
  document.getElementById('drawMode').textContent = MODE_LABEL[currentMode];
  document.getElementById('catalogTitle').textContent = MODE_LABEL[currentMode];
  document.getElementById('drawHint').textContent = selectedSet.size ? 'Parmi ' + selectedSet.size + ' activité' + (selectedSet.size > 1 ? 's' : '') + ' sélectionnée' + (selectedSet.size > 1 ? 's' : '') + '.' : 'Inclus au moins une activité pour commencer.';
}

function renderEmptyResult() {
  result.innerHTML = '<div class="empty-result"><img src="assets/ui/boss.png" alt="" /><h2>Aucun tirage</h2><p>Choisis tes activités, puis clique sur Tirer.</p></div>';
}

function attachPickerListenersOnce() {
  // Prevent native image dragging without intercepting normal clicks or keyboard input.
  document.addEventListener('dragstart', (event) => {
    if (event.target.closest?.('img, .pick')) event.preventDefault();
  });
  picker.addEventListener("click", (e) => {
    const card = e.target.closest(".pick");
    if (!card) return;

    playSfx(sfxClick, 0.45);

    const id = card.dataset.id;
    if (!id) return;

    if (selectedSet.has(id)) selectedSet.delete(id);
    else selectedSet.add(id);

    saveSelected(currentMode, selectedSet);
    const filter = catalogFilter?.value;
    if (filter === 'selected' || filter === 'unselected') {
      const visibleCards = Array.from(picker.querySelectorAll('.pick'));
      const position = visibleCards.indexOf(card);
      const hadFocus = document.activeElement === card;
      renderPicker();
      if (hadFocus) {
        const remaining = picker.querySelectorAll('.pick');
        (remaining[Math.min(position, remaining.length - 1)] || catalogFilter)?.focus({ preventScroll: true });
      }
    } else {
      // Keep the same DOM node under the pointer during rapid clicks.
      card.classList.toggle('active', selectedSet.has(id));
      card.setAttribute('aria-pressed', String(selectedSet.has(id)));
      updatePickerSummary();
    }
  });
  catalogSearch?.addEventListener('input', renderPicker);
  catalogFilter?.addEventListener('change', renderPicker);
}

function setAll(checked) {
  const items = getItemsForMode(currentMode).map((x) => x.id);
  selectedSet = checked ? new Set(items) : new Set();
  saveSelected(currentMode, selectedSet);
  renderPicker();
}

function getPool() {
  const items = getItemsForMode(currentMode);
  return items.filter((x) => selectedSet.has(x.id));
}

// ===================== HISTORY =====================
function loadHistory() {
  return Array.isArray(SETTINGS.history) ? SETTINGS.history : [];
}
function saveHistory(items) {
  persistSetting('history', items.slice(0, 50));
}

function addHistory(mode, pickedItems) {
  const items = [...loadHistory()];
  items.unshift({ t: Date.now(), mode, ids: pickedItems.map((x) => x.id) });
  saveHistory(items);
  historyPage = 1;
  renderHistory();
}

function renderHistory() {
  const items = loadHistory();

  if (items.length === 0) {
    historyBox.innerHTML = `<div class="history-empty">Aucun tirage enregistré.</div>`;
    pageInfo.textContent = `Page 1 / 1`;
    prevPageBtn.disabled = true;
    nextPageBtn.disabled = true;
    return;
  }

  const totalPages = Math.max(1, Math.ceil(items.length / HISTORY_PAGE_SIZE));
  historyPage = Math.min(Math.max(1, historyPage), totalPages);

  const start = (historyPage - 1) * HISTORY_PAGE_SIZE;
  const pageItems = items.slice(start, start + HISTORY_PAGE_SIZE);

  historyBox.innerHTML = pageItems.map((it) => {
    const when = new Date(it.t).toLocaleString();
    const mode = it.mode || "skills";
    const title = modeBadge(mode);

    const list = (it.ids || [])
      .map((id) => itemById(mode, id))
      .filter(Boolean)
      .map((x) => `
        <span style="display:flex;align-items:center;gap:8px;">
          ${iconTag(mode, x, "hicon", "iconFallback")}
          <strong>${x.name}</strong>
        </span>
      `).join(" ");

    return `
      <div class="hitem">
        <div>
          <div>${title}</div>
          <div class="htime">${when}</div>
        </div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:flex-end;">
          ${list}
        </div>
      </div>
    `;
  }).join("");

  pageInfo.textContent = `Page ${historyPage} / ${totalPages}`;
  prevPageBtn.disabled = historyPage <= 1;
  nextPageBtn.disabled = historyPage >= totalPages;
}

// ===================== RESULT =====================
function renderPicked(picked, extraClass = "") {
  result.innerHTML = picked.map((x) => `
    <div class="card ${extraClass}">
      ${iconTag(currentMode, x, "icon", "iconFallbackBig")}
      <div class="name">${x.name}</div>
    </div>
  `).join("");

_flash(result);
}

// ===================== ROULETTE + LOOT REVEAL =====================
async function rouletteAnimation(pool, finalPicked) {
  rollBtn.disabled = true;
  rollBtn.classList.add("isRolling");
  result.classList.add("rolling");
  rollBtn.textContent = "Tirage…";
  modeButtons.forEach(button => button.disabled = true);

  playSfx(sfxRoll, 0.35);

  const totalDuration = 1800;
  const startSpeed = 50;
  const endSpeed = 180;
  const startTime = performance.now();

  while (true) {
    const now = performance.now();
    const progress = Math.min((now - startTime) / totalDuration, 1);
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const delay = startSpeed + (endSpeed - startSpeed) * easeOut;

    const x = pool[Math.floor(Math.random() * pool.length)];
    renderPicked([x], "spinCard");

    if (progress >= 1) break;
    await sleep(delay);
  }

  stopSfx(sfxRoll);
  result.classList.remove("rolling");

  if (finalPicked.length <= 1) {
    renderPicked(finalPicked, "finalCard");
    playSfx(sfxWin, 0.75);
  } else {
    result.innerHTML = finalPicked.map(() => `
      <div class="card" style="opacity:0.0; transform: scale(0.98);">
        <span class="iconFallbackBig">?</span>
        <div class="name">...</div>
      </div>
    `).join("");

    for (let i = 0; i < finalPicked.length; i++) {
      const x = finalPicked[i];
      const cards = Array.from(result.querySelectorAll(".card"));
      const card = cards[i];
      if (!card) continue;

      card.innerHTML = `
        ${iconTag(currentMode, x, "icon", "iconFallbackBig")}
        <div class="name">${x.name}</div>
      `;
      card.classList.add("finalCard");
      card.style.opacity = "1";
      card.style.transform = "scale(1)";
      playSfx(sfxClick, 0.55);
      await sleep(220);
    }

    playSfx(sfxWin, 0.75);
  }

  rollBtn.disabled = false;
  rollBtn.classList.remove("isRolling");
  rollBtn.innerHTML = 'Relancer';
  modeButtons.forEach(button => button.disabled = false);
}

// ===================== OPTIONS =====================
function loadVolume() {
  const raw = localStorage.getItem(KEY_VOLUME);
  if (raw !== null) {
    const v = Number(raw);
    if (!Number.isNaN(v)) globalVolume = clamp(v, 0, 1);
  }
}
function saveVolume(v01) {
  globalVolume = clamp(v01, 0, 1);
  persistSetting('volume', Math.round(globalVolume * 100));
}

function openOptions() {
  syncSettingsUi();
  document.getElementById('settingsStatus').textContent = '';
  const theme = loadTheme();
  setTheme(theme);

  const percent = Math.round(globalVolume * 100);
  volumeSlider.value = String(percent);
  volumeValue.textContent = String(percent);

  // discord
  if (discordWebhook) {
    const ds = loadDiscordSettings();
    if (discordEnable) discordEnable.checked = ds.enabled;
    discordWebhook.value = ds.webhook;
  }
optionsOverlay.classList.remove("hidden");
  optionsOverlay.setAttribute("aria-hidden", "false");
}
function closeOptions() {
  // Auto-save on close
  if (!saveOptionsFromUi({ silent: false })) return;
  optionsOverlay.classList.add("hidden");
  optionsOverlay.setAttribute("aria-hidden", "true");
}

function saveOptionsFromUi({ silent = true } = {}) {
  // theme
  saveTheme(themeSelect?.value || loadTheme());

  // volume
  const v = clamp(Number(volumeSlider.value) / 100, 0, 1);
  saveVolume(v);

  // discord (enabled automatically when webhook is present)
  if (discordWebhook) {
    const url = (discordWebhook.value || "").trim();
    if (url && !isValidDiscordWebhook(url)) {
      if (!silent) alert("Webhook Discord invalide. Exemple: https://discord.com/api/webhooks/...");
      return false;
    }
    saveDiscordSettings(true, url);
    setDiscordStatus("", true);
  }
  return true;
}

function initOptionsUi() {
  document.getElementById('avoidRepeats').addEventListener('change', (e) => persistSetting('avoidRepeats', e.target.checked));
  for (const key of ['clickVolume', 'rollVolume', 'resultVolume']) {
    document.getElementById(key).addEventListener('input', (e) => {
      const value = clamp(Number(e.target.value), 0, 100);
      document.getElementById(key + 'Value').textContent = String(value);
      e.target.style.setProperty?.('--fill', value + '%');
      persistSetting(key, value);
    });
  }
  const status = document.getElementById('settingsStatus');
  document.getElementById('settingsReset').addEventListener('click', async () => {
    if (!confirm('Réinitialiser les réglages et effacer le webhook Discord ainsi que l’historique ? Tes sélections seront conservées.')) return;
    try {
      const all = await window.api.settings.reset();
      onSettingsChanged({ all });
      status.textContent = 'Réglages réinitialisés.';
    } catch { status.textContent = 'Impossible de réinitialiser les réglages.'; }
  });
  optionsOverlay.classList.add('hidden');
  optionsOverlay.setAttribute('aria-hidden', 'true');
  syncSettingsUi();

  if (btnThemeLight) btnThemeLight.addEventListener("click", () => setTheme("light"));
  if (btnThemeDark) btnThemeDark.addEventListener("click", () => setTheme("dark"));

  volumeSlider.addEventListener("input", () => {
    volumeValue.textContent = String(volumeSlider.value);
    volumeSlider.style.setProperty?.('--fill', volumeSlider.value + '%');
    saveVolume(Number(volumeSlider.value) / 100);
  });


  btnOptions.addEventListener("click", () => openOptions());
  btnCloseOptions.addEventListener("click", () => closeOptions());

  optionsOverlay.addEventListener("click", (e) => {
    if (!optionsModal.contains(e.target)) closeOptions();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !optionsOverlay.classList.contains("hidden")) closeOptions();
  });


  if (btnTestDiscord) {
    btnTestDiscord.addEventListener("click", async () => {
      // Sauver temporairement les valeurs du formulaire (sans fermer)
      const enabled = !!discordEnable?.checked;
      const url = (discordWebhook?.value || "").trim();

      if (!enabled) {
        setDiscordStatus("Active l’envoi d’abord.", false);
        return;
      }
      if (!url) {
        setDiscordStatus("Colle ton webhook URL.", false);
        return;
      }
      if (!isValidDiscordWebhook(url)) {
        setDiscordStatus("URL invalide (format Discord webhook).", false);
        return;
      }

      // Test direct (ne dépend pas d'un tirage)
      saveDiscordSettings(true, url);

      setDiscordStatus("Envoi du message test…", true);
      const result = await (async () => {
        try {
          const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
  username: "OSRS Randomizer",
  allowed_mentions: { parse: [] },
  embeds: [
    {
      title: "✅ Webhook Test",
      description: "Le webhook Discord fonctionne correctement.",
      color: 0xc0392b,
      thumbnail: { url: DISCORD_LOGO_URL },
      timestamp: new Date().toISOString(),
    },
  ],
}),
          });
          if (!res.ok) {
            const body = await res.text().catch(() => "");
            return { ok: false, status: res.status, body };
          }
          return { ok: true };
        } catch (e) {
          return { ok: false, error: String(e) };
        }
      })();

      if (result.ok) {
        setDiscordStatus("Test réussi ✅", true);
        playSfx(sfxClick, 0.65);
      } else if (result.status) {
        setDiscordStatus(`Erreur HTTP ${result.status} (check le webhook)`, false);
      } else {
        setDiscordStatus("Erreur réseau (voir console).", false);
      }
    });
  }


}

// ===================== SETTINGS =====================
function loadSettings() {
  const rawCount = localStorage.getItem(KEY_COUNT);
  if (rawCount) countInput.value = rawCount;

  countInput.addEventListener("change", () => {
    localStorage.setItem(KEY_COUNT, String(countInput.value || 1));
  });
}

// ===================== MODE APPLY =====================
function applyMode(mode) {
  if (rollBtn.classList.contains("isRolling")) return;
  saveMode(mode);

  modeButtons.forEach((b) => b.classList.remove("active"));
  document.querySelector(`.modeBtn[data-mode="${mode}"]`)?.classList.add("active");

  const savedSel = loadSelected(mode);
  selectedSet = savedSel !== null
    ? new Set(savedSel)
    : new Set(getItemsForMode(mode).map((x) => x.id));

  if (catalogSearch) catalogSearch.value = '';
  if (catalogFilter) catalogFilter.value = 'all';
  renderPicker();
  renderEmptyResult();

_flash(result);
}

// ===================== INIT =====================
loadMode();
document.querySelector(`.modeBtn[data-mode="${currentMode}"]`)?.classList.add("active");

const savedSel = loadSelected(currentMode);
selectedSet = savedSel !== null
  ? new Set(savedSel)
  : new Set(getItemsForMode(currentMode).map((x) => x.id));

renderPicker();
renderEmptyResult();
attachPickerListenersOnce();

rollBtn.disabled = true;
const initialization = (async () => {
  try {
    await loadPersistentSettings();
    loadSettings();
    renderHistory();
    initOptionsUi();
    if (HAS_SETTINGS_API) window.api.settings.onChange(onSettingsChanged);
    rollBtn.disabled = false;
  } catch (error) {
    result.textContent = 'Impossible de charger les réglages. Relance l’application.';
    window.logger?.log?.(String(error));
  }
})();

// Mode buttons
modeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const mode = btn.dataset.mode;
    applyMode(mode);
  });
});

// picker controls
selectAllBtn.addEventListener("click", () => setAll(true));
selectNoneBtn.addEventListener("click", () => setAll(false));

// roll
rollBtn.addEventListener("click", async () => {
  if (rollBtn.disabled) return;
  playSfx(sfxClick, 0.6);
  _pop(rollBtn);
  const drawMode = currentMode;

  const pool = getPool();
  if (pool.length === 0) {
    result.innerHTML = `<div class="warn">Choisis au moins 1 élément </div>`;
    
_flash(result);
return;
  }

  const n = clamp(Math.floor(Number(countInput.value) || 1), 1, 50);
  const finalPicked = pickRandomUnique(poolWithoutRecent(pool, n), n);

  await rouletteAnimation(pool, finalPicked);
  addHistory(drawMode, finalPicked);

  // Discord webhook (optional)
  try {
    const pickedNames = (finalPicked || []).map((x) => x?.name ?? String(x));
    await postToDiscordWebhook({ mode: drawMode, pickedNames, count: pickedNames.length });
  } catch (err) {
    console.warn("Discord webhook send failed:", err);
  }
});



prevPageBtn.addEventListener("click", () => {
  playSfx(sfxClick, 0.55);
  historyPage = Math.max(1, historyPage - 1);
  renderHistory();
});


if (copyHistoryBtn) {
  copyHistoryBtn.addEventListener("click", async () => {
    playSfx(sfxClick, 0.55);
    try {
      const hist = loadHistory();
      const lines = (hist || []).map((it) => {
        const when = new Date(it.t || Date.now()).toLocaleString();
        const items = (it.ids || []).map((id) => itemById(it.mode, id)?.name || id).join(", ");
        return `${when} — ${String(it.mode || "").toUpperCase()}: ${items}`;
      });
      await navigator.clipboard.writeText(lines.join("\n"));
    } catch {}
  });
}
if (clearHistoryBtn) {
  clearHistoryBtn.addEventListener("click", () => {
    playSfx(sfxClick, 0.55);
    const ok = confirm("Effacer l'historique ?");
    if (!ok) return;
    saveHistory([]);
    historyPage = 1;
    renderHistory();
  });
}

nextPageBtn.addEventListener("click", () => {
  playSfx(sfxClick, 0.55);
  historyPage = historyPage + 1;
  renderHistory();
});
// ===================== CREDITS =====================
const btnCredits = document.getElementById("btnCredits");
const creditsOverlay = document.getElementById("creditsOverlay");
const btnCloseCredits = document.getElementById("btnCloseCredits");

if (btnCredits) {
  btnCredits.onclick = () => creditsOverlay.classList.remove("hidden");
  btnCloseCredits.onclick = () => creditsOverlay.classList.add("hidden");

  creditsOverlay.onclick = (e) => {
    if (!e.target.closest(".modal")) {
      creditsOverlay.classList.add("hidden");
    }
  };
}
