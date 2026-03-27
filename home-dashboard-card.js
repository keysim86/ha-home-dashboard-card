// ============================================================
//  home-dashboard-card.js  v1.0.0
//  Instalacja: /config/www/home-dashboard-card.js
//  Resource:   url: /local/home-dashboard-card.js
//              type: module
//  Użycie:     type: custom:home-dashboard-card
// ============================================================

const STYLES = `
*{box-sizing:border-box;margin:0;padding:0}
:host{display:block;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif}
.hdc{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:20px;overflow:hidden;color:#e2e8f0}
.hdc-hdr{padding:14px 18px 0;display:flex;align-items:center;justify-content:space-between}
.hdc-title{font-size:16px;font-weight:600;color:#f1f5f9;display:flex;align-items:center;gap:8px}
.hdc-live{display:inline-flex;align-items:center;gap:5px;font-size:11px;color:#4ade80}
.hdc-live::before{content:'';width:5px;height:5px;border-radius:50%;background:#4ade80;animation:hbl 1.5s infinite}
@keyframes hbl{0%,100%{opacity:1}50%{opacity:.2}}
.hdc-clk{font-size:11px;color:#475569;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.07);padding:3px 10px;border-radius:20px;font-family:monospace}
.hdc-tabs{display:flex;gap:2px;padding:12px 18px 0;border-bottom:1px solid rgba(255,255,255,.06);overflow-x:auto;scrollbar-width:none}
.hdc-tabs::-webkit-scrollbar{display:none}
.hdc-tab{padding:6px 13px;border-radius:9px 9px 0 0;font-size:11px;font-weight:500;cursor:pointer;color:#64748b;border:none;background:transparent;transition:all .2s;white-space:nowrap}
.hdc-tab:hover{color:#94a3b8;background:rgba(255,255,255,.03)}
.hdc-tab.active{color:#38bdf8;background:rgba(56,189,248,.08);border-bottom:2px solid #38bdf8}
.hdc-bdg{background:#ef4444;color:#fff;font-size:9px;padding:1px 5px;border-radius:8px;font-weight:700;margin-left:3px;vertical-align:middle}
.hdc-pane{padding:14px 18px 18px;display:none}
.hdc-pane.active{display:block}
.hdc-st{font-size:9px;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:#334155;margin:12px 0 7px}
.hdc-st:first-child{margin-top:0}
.hdc-g2{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}
.hdc-g3{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.hdc-ga{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:8px}
.hdc-gaa{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:7px}
.hdc-sc{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:12px;padding:11px 13px}
.hdc-sc-lbl{font-size:10px;color:#475569;margin-bottom:3px}
.hdc-sc-val{font-size:19px;font-weight:700;line-height:1}
.hdc-sc-sub{font-size:10px;color:#334155;margin-top:3px}
.hdc-box{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:13px;padding:13px}
.hdc-box-title{font-size:11px;font-weight:600;color:#64748b;margin-bottom:9px}
.hdc-ir{display:flex;align-items:center;justify-content:space-between;padding:6px 0;border-bottom:1px solid rgba(255,255,255,.04)}
.hdc-ir:last-child{border-bottom:none}
.hdc-ir-lbl{font-size:11px;color:#64748b}
.hdc-ir-val{font-size:11px;font-weight:500;color:#f1f5f9}
.hdc-ir-val.g{color:#4ade80}.hdc-ir-val.r{color:#f87171}.hdc-ir-val.y{color:#fbbf24}.hdc-ir-val.b{color:#38bdf8}.hdc-ir-val.o{color:#fb923c}.hdc-ir-val.p{color:#a78bfa}
.hdc-br{display:flex;align-items:center;gap:7px;margin-bottom:6px}
.hdc-br-lbl{font-size:11px;color:#64748b;width:130px;flex-shrink:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.hdc-br-bg{flex:1;height:5px;background:rgba(255,255,255,.06);border-radius:3px;overflow:hidden}
.hdc-br-fill{height:100%;border-radius:3px;transition:width .6s ease}
.hdc-br-val{font-size:11px;color:#64748b;width:52px;text-align:right;flex-shrink:0}
.hdc-chips{display:flex;flex-wrap:wrap;gap:4px;margin-top:6px}
.hdc-ch{font-size:10px;padding:2px 7px;border-radius:7px;background:rgba(255,255,255,.05);color:#94a3b8;border:1px solid rgba(255,255,255,.06)}
.hdc-ch.g{background:rgba(34,197,94,.1);color:#4ade80;border-color:rgba(34,197,94,.2)}
.hdc-ch.r{background:rgba(239,68,68,.1);color:#f87171;border-color:rgba(239,68,68,.2)}
.hdc-ch.b{background:rgba(56,189,248,.1);color:#38bdf8;border-color:rgba(56,189,248,.2)}
.hdc-ch.y{background:rgba(234,179,8,.1);color:#facc15;border-color:rgba(234,179,8,.2)}
.hdc-ch.o{background:rgba(251,146,60,.1);color:#fb923c;border-color:rgba(251,146,60,.2)}
.hdc-pav{width:46px;height:46px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;flex-shrink:0}
.hdc-pc{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:13px;padding:13px}
.hdc-pc.home{border-color:rgba(34,197,94,.22);background:rgba(34,197,94,.03)}
.hdc-pc.away{border-color:rgba(239,68,68,.16)}
.hdc-fmap{background:#0a0d12;border:1px solid rgba(255,255,255,.07);border-radius:13px;height:100px;position:relative;overflow:hidden;margin-top:10px}
.hdc-fmap-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(56,189,248,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,.04) 1px,transparent 1px);background-size:20px 20px}
.hdc-fmap-lbl{position:absolute;top:6px;left:10px;font-size:9px;color:#334155}
.hdc-mpin{position:absolute;width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;border:2px solid rgba(255,255,255,.15);transform:translate(-50%,-50%)}
.hdc-mpin.pu{animation:hmp 2.2s infinite}
@keyframes hmp{0%,100%{box-shadow:0 0 0 0 rgba(56,189,248,.5)}70%{box-shadow:0 0 0 8px rgba(56,189,248,0)}}
.hdc-thcard{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:15px;text-align:center}
.hdc-th-title{font-size:10px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#475569;margin-bottom:8px}
.hdc-th-big{font-size:34px;font-weight:700;line-height:1}
.hdc-th-target{font-size:12px;color:#64748b;margin-top:3px}
.hdc-th-btns{display:flex;gap:5px;justify-content:center;margin-top:8px}
.hdc-tbtn{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:8px;color:#94a3b8;font-size:14px;width:30px;height:26px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .15s}
.hdc-tbtn:hover{background:rgba(255,255,255,.1);color:#f1f5f9}
.hdc-th-mode{font-size:10px;margin-top:7px;padding:2px 9px;border-radius:7px;display:inline-block}
.hdc-th-mode.heat{background:rgba(251,146,60,.15);color:#fb923c}
.hdc-th-mode.dhw{background:rgba(56,189,248,.15);color:#38bdf8}
.hdc-th-mode.off{background:rgba(100,116,139,.1);color:#64748b}
.hdc-vrow{display:flex;gap:8px;margin-bottom:10px}
.hdc-vc{flex:1;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:10px;padding:10px;text-align:center}
.hdc-ports{display:grid;grid-template-columns:repeat(auto-fill,minmax(40px,1fr));gap:5px}
.hdc-port{border-radius:7px;padding:6px 4px;text-align:center;border:1px solid rgba(255,255,255,.06);background:rgba(255,255,255,.04);cursor:pointer;transition:all .15s}
.hdc-port.up{background:rgba(34,197,94,.1);border-color:rgba(34,197,94,.25);color:#4ade80}
.hdc-port.poe{background:rgba(56,189,248,.1);border-color:rgba(56,189,248,.25);color:#38bdf8}
.hdc-port.down{background:rgba(100,116,139,.06);border-color:rgba(100,116,139,.1);color:#334155}
.hdc-port-num{font-size:11px;font-weight:700;display:block}
.hdc-port-ico{font-size:12px;display:block;margin-bottom:1px}
.hdc-camgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:10px;margin-bottom:12px}
.hdc-camcard{background:#000;border:1px solid rgba(255,255,255,.08);border-radius:13px;overflow:hidden;cursor:pointer;position:relative;transition:border-color .2s}
.hdc-camcard:hover{border-color:rgba(56,189,248,.3)}
.hdc-camcard.focus{border-color:#38bdf8}
.hdc-camfeed{width:100%;aspect-ratio:16/9;position:relative;overflow:hidden;background:#060810;display:flex;align-items:center;justify-content:center}
.hdc-camfeed img{width:100%;height:100%;object-fit:cover;display:block}
.hdc-camfeed .hdc-cam-placeholder{width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:6px;color:#334155;font-size:11px}
.hdc-cam-ov{position:absolute;inset:0;pointer-events:none}
.hdc-cam-top{position:absolute;top:0;left:0;right:0;padding:6px 10px;background:linear-gradient(180deg,rgba(0,0,0,.7),transparent);display:flex;align-items:center;justify-content:space-between}
.hdc-cam-bot{position:absolute;bottom:0;left:0;right:0;padding:5px 10px;background:linear-gradient(0deg,rgba(0,0,0,.7),transparent);display:flex;justify-content:space-between;align-items:center}
.hdc-cam-name{font-size:11px;font-weight:600;color:#fff}
.hdc-cam-rec{font-size:9px;color:#f87171;display:flex;align-items:center;gap:3px}
.hdc-cam-rec::before{content:'';width:5px;height:5px;border-radius:50%;background:#ef4444;animation:hbl 1.2s infinite}
.hdc-cam-ts{font-size:9px;color:rgba(255,255,255,.6);font-family:monospace}
.hdc-cam-ch{font-size:9px;color:rgba(255,255,255,.35)}
.hdc-cam-focus{background:#000;border:1px solid rgba(56,189,248,.2);border-radius:14px;overflow:hidden;margin-bottom:12px;position:relative}
.hdc-cam-focus img{width:100%;display:block;max-height:600px;object-fit:contain}
.hdc-cam-focus .hdc-cam-placeholder{height:220px}
.hdc-pxcard{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:12px;padding:12px}
.hdc-pxbdg{font-size:9px;padding:2px 6px;border-radius:5px;font-weight:700}
.hdc-pxbdg.run{background:rgba(34,197,94,.15);color:#4ade80}
.hdc-pxbdg.stop{background:rgba(100,116,139,.1);color:#64748b}
.hdc-pxbar-bg{height:4px;background:rgba(255,255,255,.06);border-radius:2px;overflow:hidden;margin-top:3px}
.hdc-pxbar-fill{height:100%;border-radius:2px;transition:width .6s ease}
.hdc-carcard{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:13px;padding:14px}
.hdc-carbar{height:7px;background:rgba(255,255,255,.07);border-radius:4px;overflow:hidden;margin:5px 0 8px}
.hdc-carbar-fill{height:100%;border-radius:4px;transition:width .6s ease}
.hdc-alert{display:flex;align-items:center;gap:8px;padding:8px 12px;border-radius:9px;font-size:11px;margin-bottom:5px}
.hdc-alert.error{background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.2);color:#f87171}
.hdc-alert.warn{background:rgba(234,179,8,.08);border:1px solid rgba(234,179,8,.2);color:#fbbf24}
.hdc-alert.info{background:rgba(56,189,248,.08);border:1px solid rgba(56,189,248,.2);color:#38bdf8}
.hdc-alert.ok{background:rgba(34,197,94,.08);border:1px solid rgba(34,197,94,.2);color:#4ade80}
.hdc-alert-msg{flex:1}
.hdc-alert-t{font-size:10px;color:#334155;flex-shrink:0}
`;

// ============================================================
//  HELPERS
// ============================================================
function s(hass, entity) {
  if (!hass || !entity) return null;
  return hass.states[entity] || null;
}
function sv(hass, entity, fallback = '—') {
  const st = s(hass, entity);
  return st ? st.state : fallback;
}
function sn(hass, entity, decimals = 1) {
  const v = parseFloat(sv(hass, entity, '0'));
  return isNaN(v) ? 0 : +v.toFixed(decimals);
}
function sa(hass, entity, attr) {
  const st = s(hass, entity);
  return st ? st.attributes[attr] : null;
}
function isOn(hass, entity) {
  const v = sv(hass, entity, 'off').toLowerCase();
  return ['on', 'open', 'unlocked', 'home', 'true', 'connected'].includes(v);
}
function pad(n) { return String(n).padStart(2, '0'); }
function nowStr() {
  const d = new Date();
  return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}
function timeStr() {
  const d = new Date();
  return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}
function battColor(pct) {
  if (pct < 20) return 'r';
  if (pct < 40) return 'y';
  return 'g';
}
function battIcon(pct) {
  if (pct < 10) return '🔋';
  if (pct < 30) return '🪫';
  return '🔋';
}
function evalCondition(val, cond) {
  const num = parseFloat(val);
  const m = cond.trim().match(/^([<>!=]+)\s*(.+)$/);
  if (!m) return false;
  const [, op, rhs] = m;
  const rhsNum = parseFloat(rhs);
  if (op === '<')  return num < rhsNum;
  if (op === '>')  return num > rhsNum;
  if (op === '<=') return num <= rhsNum;
  if (op === '>=') return num >= rhsNum;
  if (op === '==' || op === '=') return String(val).toLowerCase() === String(rhs).toLowerCase();
  if (op === '!=') return String(val).toLowerCase() !== String(rhs).toLowerCase();
  return false;
}

// ============================================================
//  TAB RENDERERS
// ============================================================

function renderOsoby(hass, cfg) {
  const persons = cfg.persons || [];
  let cards = persons.map((p, i) => {
    const loc = sv(hass, p.entity, 'unknown');
    const isHome = loc === 'home';
    const bl = sn(hass, p.battery_level, 0);
    const bst = sv(hass, p.battery_state, '');
    const charging = bst.toLowerCase() === 'charging';
    const steps = sv(hass, p.steps, '—');
    const initials = p.name ? p.name[0] : '?';
    return `
      <div class="hdc-pc ${isHome?'home':'away'}">
        <div style="display:flex;gap:10px;margin-bottom:9px;align-items:flex-start">
          <div class="hdc-pav" style="color:${p.color};background:${p.color}22">${initials}</div>
          <div>
            <div style="font-size:13px;font-weight:600;color:#f1f5f9">${p.name}</div>
            <div style="font-size:10px;color:#475569">${p.device_tracker ? sa(hass, p.device_tracker, 'friendly_name') || p.device_tracker : ''}</div>
            <div style="font-size:10px;margin-top:2px;color:${isHome?'#4ade80':'#f87171'}">● ${isHome?'W domu':'Poza domem'}</div>
          </div>
        </div>
        <div class="hdc-chips">
          ${p.battery_state ? `<span class="hdc-ch ${charging?'g':''}">${charging?'⚡ Ładuje':'Brak ładowania'}</span>` : ''}
          ${p.battery_level ? `<span class="hdc-ch ${battColor(bl)}">${battIcon(bl)} ${bl}%</span>` : ''}
          ${p.steps ? `<span class="hdc-ch y">👟 ${parseInt(steps).toLocaleString('pl')}</span>` : ''}
        </div>
      </div>`;
  }).join('');

  return `
    <div id="hdc-persons-list"><div class="hdc-ga">${cards}</div></div>
    <div style="font-size:10px;color:#475569;margin:10px 0 4px;padding-left:2px">📍 Lokalizacje</div>
    <div id="hdc-fmap-real" style="height:240px;border-radius:13px;overflow:hidden;border:1px solid rgba(255,255,255,.07)"></div>`;
}

function renderEnergia(hass, cfg) {
  const e = cfg.energy || {};
  const pw   = sn(hass, e.total_power, 0);
  const kwh  = sn(hass, e.daily_kwh, 1);
  const mkwh = sn(hass, e.monthly_kwh, 0);
  const v1   = sn(hass, e.voltage_l1, 0);
  const v2   = sn(hass, e.voltage_l2, 0);
  const v3   = sn(hass, e.voltage_l3, 0);
  const p1   = sn(hass, e.power_l1, 0);
  const p2   = sn(hass, e.power_l2, 0);
  const p3   = sn(hass, e.power_l3, 0);

  const t = e.tariffs || {};
  const tSD  = sn(hass, t.szczytowa_daily, 2);
  const tPD  = sn(hass, t.pozaszczytowa_daily, 2);
  const tND  = sn(hass, t.nocna_daily, 2);
  const tSumD = t.szczytowa_daily
    ? (Math.round((parseFloat(tSD) + parseFloat(tPD) + parseFloat(tND)) * 100) / 100).toFixed(2)
    : null;
  const tSM  = sn(hass, t.szczytowa_monthly, 2);
  const tPM  = sn(hass, t.pozaszczytowa_monthly, 2);
  const tNM  = sn(hass, t.nocna_monthly, 2);
  const tSumM = t.szczytowa_monthly
    ? (Math.round((parseFloat(tSM) + parseFloat(tPM) + parseFloat(tNM)) * 100) / 100).toFixed(2)
    : null;

  const consumers = (e.consumers || [])
    .map(c => ({ ...c, _w: sn(hass, c.entity, 0) }))
    .sort((a, b) => b._w - a._w || (a.name || '').localeCompare(b.name || '', 'pl'))
    .map(c => {
      const w = c._w;
      const max = c.max_w || 500;
      const pct = Math.min(100, Math.round(w / max * 100));
      const col = w > max * 0.8 ? '#f87171' : w > max * 0.5 ? '#fbbf24' : '#38bdf8';
      return `<div class="hdc-br">
        <span class="hdc-br-lbl">${c.name}</span>
        <div class="hdc-br-bg"><div class="hdc-br-fill" style="width:${pct}%;background:${col}"></div></div>
        <span class="hdc-br-val">${w} W</span>
      </div>`;
    }).join('');

  const vColor = v => v > 253 ? 'r' : v < 207 ? 'y' : 'g';

  return `
    <div class="hdc-g3" style="margin-bottom:10px">
      <div class="hdc-sc"><div class="hdc-sc-lbl">Moc całkowita</div><div class="hdc-sc-val" style="color:#38bdf8">${pw} W</div><div class="hdc-sc-sub">live · teraz</div></div>
      <div class="hdc-sc"><div class="hdc-sc-lbl">Zużycie dziś</div><div class="hdc-sc-val" style="color:#fbbf24">${kwh} kWh</div><div class="hdc-sc-sub">dobowe</div></div>
      <div class="hdc-sc"><div class="hdc-sc-lbl">Ten miesiąc</div><div class="hdc-sc-val" style="color:#4ade80">${mkwh} kWh</div><div class="hdc-sc-sub">kalendarzowo</div></div>
    </div>
    ${e.voltage_l1 ? `
    <div class="hdc-st">Napięcia i moce fazowe</div>
    <div class="hdc-g3" style="margin-bottom:10px">
      <div class="hdc-box">
        <div class="hdc-box-title">L1</div>
        <div class="hdc-ir"><span class="hdc-ir-lbl">Napięcie</span><span class="hdc-ir-val ${vColor(v1)}">${v1} V</span></div>
        <div class="hdc-ir"><span class="hdc-ir-lbl">Moc</span><span class="hdc-ir-val b">${p1} W</span></div>
      </div>
      <div class="hdc-box">
        <div class="hdc-box-title">L2</div>
        <div class="hdc-ir"><span class="hdc-ir-lbl">Napięcie</span><span class="hdc-ir-val ${vColor(v2)}">${v2} V</span></div>
        <div class="hdc-ir"><span class="hdc-ir-lbl">Moc</span><span class="hdc-ir-val b">${p2} W</span></div>
      </div>
      <div class="hdc-box">
        <div class="hdc-box-title">L3</div>
        <div class="hdc-ir"><span class="hdc-ir-lbl">Napięcie</span><span class="hdc-ir-val ${vColor(v3)}">${v3} V</span></div>
        <div class="hdc-ir"><span class="hdc-ir-lbl">Moc</span><span class="hdc-ir-val b">${p3} W</span></div>
      </div>
    </div>` : ''}
    ${t.szczytowa_daily ? `
    <div class="hdc-st">Taryfa G13s</div>
    <div style="display:grid;grid-template-columns:${t.szczytowa_monthly ? '1fr 1fr' : '1fr'};gap:8px;margin-bottom:10px">
      <div class="hdc-box">
        <div class="hdc-box-title">Zużycie dziś</div>
        <div class="hdc-ir"><span class="hdc-ir-lbl">☀ Szczytowa</span><span class="hdc-ir-val o">${tSD} kWh</span></div>
        <div class="hdc-ir"><span class="hdc-ir-lbl">🌤 Pozaszczytowa</span><span class="hdc-ir-val y">${tPD} kWh</span></div>
        <div class="hdc-ir"><span class="hdc-ir-lbl">🌙 Nocna</span><span class="hdc-ir-val b">${tND} kWh</span></div>
        <div class="hdc-ir" style="border-top:1px solid rgba(255,255,255,.07);margin-top:4px;padding-top:4px"><span class="hdc-ir-lbl">Σ Razem</span><span class="hdc-ir-val">${tSumD} kWh</span></div>
      </div>
      ${t.szczytowa_monthly ? `
      <div class="hdc-box">
        <div class="hdc-box-title">Zużycie w miesiącu</div>
        <div class="hdc-ir"><span class="hdc-ir-lbl">☀ Szczytowa</span><span class="hdc-ir-val o">${tSM} kWh</span></div>
        <div class="hdc-ir"><span class="hdc-ir-lbl">🌤 Pozaszczytowa</span><span class="hdc-ir-val y">${tPM} kWh</span></div>
        <div class="hdc-ir"><span class="hdc-ir-lbl">🌙 Nocna</span><span class="hdc-ir-val b">${tNM} kWh</span></div>
        <div class="hdc-ir" style="border-top:1px solid rgba(255,255,255,.07);margin-top:4px;padding-top:4px"><span class="hdc-ir-lbl">Σ Razem</span><span class="hdc-ir-val">${tSumM} kWh</span></div>
      </div>` : ''}
    </div>` : ''}
    ${consumers ? `<div class="hdc-st">Top odbiorniki</div>${consumers}` : ''}`;
}

function renderVaillant(hass, cfg) {
  const v = cfg.vaillant || {};
  const coTemp   = sn(hass, v.temp_current || sa(hass, v.climate_co, 'current_temperature') ? v.climate_co : null, 1);
  const coSet    = sa(hass, v.climate_co, 'temperature') || sa(hass, v.climate_co, 'target_temp_high') || sa(hass, v.climate_co, 'target_temp_low') || '—';
  const coMode   = sv(hass, v.climate_co, 'off');
  const cwuCur   = sn(hass, v.cwu_current, 1);
  const cwuTgt   = sn(hass, v.cwu_target, 1);
  const tSup     = sn(hass, v.temp_supply, 1);
  const tRet     = sn(hass, v.temp_return, 1);
  const tTgtSup  = sn(hass, v.temp_target_supply, 1);
  const tOut     = sn(hass, v.temp_outdoor, 1);
  const tOutAvg  = sn(hass, v.temp_outdoor_avg, 1);
  const flame    = isOn(hass, v.flame);
  const fanSpd   = sv(hass, v.fan_speed, '—');
  const pwr      = sn(hass, v.power, 1);
  const press    = sn(hass, v.pressure, 1);
  const curve    = sv(hass, v.heat_curve, '—');
  const pump     = isOn(hass, v.pump);
  const elCO     = sn(hass, v.el_co, 2);
  const elCWU    = sn(hass, v.el_cwu, 2);

  const pressColor = press < 1.0 ? 'r' : press > 2.5 ? 'r' : press < 1.4 ? 'y' : 'g';

  const coAct = sa(hass, v.climate_co, 'current_temperature') || '—';

  const tInd = v.temp_indoor ? sn(hass, v.temp_indoor, 1) : coAct;

  return `
    <div class="hdc-st">Termostaty</div>
    <div class="hdc-ga" style="margin-bottom:10px">
      <div class="hdc-thcard">
        <div class="hdc-th-title">🏠 Ogrzewanie CO</div>
        <div id="hdc-vl-coact" class="hdc-th-big" style="color:#fb923c">${coAct}°</div>
        <div class="hdc-th-target">cel: <span id="hdc-co-set">${coSet}</span>°C</div>
        <div class="hdc-th-btns">
          <button class="hdc-tbtn" data-action="climate_down" data-entity="${v.climate_co}" data-step="0.5">−</button>
          <button class="hdc-tbtn" data-action="climate_up" data-entity="${v.climate_co}" data-step="0.5">+</button>
        </div>
        <div id="hdc-vl-flame" class="hdc-th-mode heat">● ${flame?'Ogrzewanie aktywne':'Standby'}</div>
        ${v.climate_zone0 ? (() => { const pm = sa(hass, v.climate_zone0, 'preset_mode'); return `<div id="hdc-vl-z0mode" class="hdc-th-mode off" style="margin-top:4px">📅 ${pm && pm !== 'none' ? pm : 'Harmonogram'}</div>`; })() : ''}
      </div>
      <div class="hdc-thcard">
        <div class="hdc-th-title">🚿 CWU</div>
        <div id="hdc-vl-cwucur" class="hdc-th-big" style="color:#38bdf8">${cwuCur}°</div>
        <div class="hdc-th-target">cel: <span id="hdc-cwu-set">${cwuTgt}</span>°C</div>
        <div class="hdc-th-btns">
          <button class="hdc-tbtn" data-action="climate_down" data-entity="${v.climate_cwu}" data-step="1">−</button>
          <button class="hdc-tbtn" data-action="climate_up" data-entity="${v.climate_cwu}" data-step="1">+</button>
        </div>
        <div class="hdc-th-mode dhw">● Podgrzewanie CWU</div>
      </div>
    </div>
    <div class="hdc-st">Kocioł Vaillant ecoTEC Plus</div>
    <div class="hdc-g2">
      <div class="hdc-box">
        <div class="hdc-box-title">🌡 Temperatury CO</div>
        <div class="hdc-ir"><span class="hdc-ir-lbl">Zasilanie</span><span id="hdc-vl-sup2" class="hdc-ir-val o">${tSup}°C</span></div>
        <div class="hdc-ir"><span class="hdc-ir-lbl">Powrót</span><span id="hdc-vl-ret2" class="hdc-ir-val y">${tRet}°C</span></div>
        <div class="hdc-ir"><span class="hdc-ir-lbl">Cel zasilania</span><span id="hdc-vl-tgtSup" class="hdc-ir-val b">${tTgtSup}°C</span></div>
        <div class="hdc-ir"><span class="hdc-ir-lbl">Zewnętrzna</span><span id="hdc-vl-tout2" class="hdc-ir-val b">${tOut}°C</span></div>
        <div class="hdc-ir"><span class="hdc-ir-lbl">Śr. zewn. 24h</span><span class="hdc-ir-val b">${tOutAvg}°C</span></div>
      </div>
      <div class="hdc-box">
        <div class="hdc-box-title">⚙️ Praca palnika</div>
        <div class="hdc-ir"><span class="hdc-ir-lbl">Płomień</span><span id="hdc-vl-flameval" class="hdc-ir-val ${flame?'o':''}">🔥 ${flame?'Aktywny':'Nieaktywny'}</span></div>
        <div class="hdc-ir"><span class="hdc-ir-lbl">Moc</span><span id="hdc-vl-pwr" class="hdc-ir-val o">${pwr} kW</span></div>
        <div class="hdc-ir"><span class="hdc-ir-lbl">Wentylator</span><span class="hdc-ir-val b">${parseInt(fanSpd).toLocaleString('pl')} rpm</span></div>
        <div class="hdc-ir"><span class="hdc-ir-lbl">Krzywa grzewcza</span><span class="hdc-ir-val">${curve}</span></div>
      </div>
      <div class="hdc-box">
        <div class="hdc-box-title">💧 Obieg wodny</div>
        <div class="hdc-ir"><span class="hdc-ir-lbl">Ciśnienie CO</span><span id="hdc-vl-press" class="hdc-ir-val ${pressColor}">${press} bar</span></div>
        <div class="hdc-ir"><span class="hdc-ir-lbl">Pompa CO</span><span id="hdc-vl-pump" class="hdc-ir-val ${pump?'g':''}">${pump?'Aktywna':'Nieaktywna'}</span></div>
      </div>
      <div class="hdc-box">
        <div class="hdc-box-title">📊 Energia (MyVaillant)</div>
        <div class="hdc-ir"><span class="hdc-ir-lbl">El. CO dziś</span><span id="hdc-vl-elco" class="hdc-ir-val y">${elCO} kWh</span></div>
        <div class="hdc-ir"><span class="hdc-ir-lbl">El. CWU dziś</span><span id="hdc-vl-elcwu" class="hdc-ir-val b">${elCWU} kWh</span></div>
      </div>
    </div>
    ${(v.settings || []).length ? `
    <div class="hdc-st">Ustawienia</div>
    <div class="hdc-box" style="margin-bottom:10px">
      ${(v.settings || []).map(s => {
        const st = hass.states[s.entity];
        const val = st ? parseFloat(st.state) : 0;
        const step = st ? (parseFloat(st.attributes.step) || 1) : 1;
        const min  = st ? (parseFloat(st.attributes.min)  ?? -999) : -999;
        const max  = st ? (parseFloat(st.attributes.max)  ?? 9999) : 9999;
        const dec  = s.decimals !== undefined ? s.decimals : (step < 0.01 ? 3 : step < 0.1 ? 2 : step < 1 ? 1 : 0);
        const unit = s.unit !== undefined ? s.unit : (st?.attributes.unit_of_measurement || '');
        return `<div class="hdc-ir" style="padding:6px 0">
          <span class="hdc-ir-lbl">${s.name || s.entity}</span>
          <span style="display:flex;align-items:center;gap:6px">
            <button class="hdc-tbtn" data-action="input_down" data-entity="${s.entity}" data-step="${step}" data-min="${min}" data-max="${max}">−</button>
            <span style="min-width:50px;text-align:center;font-size:13px;font-weight:600;color:#f1f5f9">${val.toFixed(dec)}${unit ? ' ' + unit : ''}</span>
            <button class="hdc-tbtn" data-action="input_up" data-entity="${s.entity}" data-step="${step}" data-min="${min}" data-max="${max}">+</button>
          </span>
        </div>`;
      }).join('')}
    </div>` : ''}
    ${v.gas_heating ? `
    <div class="hdc-st">Dzienne zużycie gazu (ostatnie 30 dni)</div>
    <div class="hdc-g2" style="margin-bottom:6px">
      <div><div id="hdc-vg-heat" style="font-size:20px;font-weight:700;color:#fb923c">— m³</div><div style="font-size:10px;color:#475569">Ogrzewanie</div></div>
      <div style="text-align:right"><div id="hdc-vg-cwu" style="font-size:20px;font-weight:700;color:#38bdf8">— m³</div><div style="font-size:10px;color:#475569">CWU</div></div>
    </div>
    <div style="position:relative;height:180px;margin-bottom:14px"><canvas id="hdc-vc3"></canvas></div>
    <div class="hdc-st">Miesięczne zużycie gazu</div>
    <div class="hdc-g2" style="margin-bottom:6px">
      <div><div id="hdc-vg-mon" style="font-size:20px;font-weight:700;color:#fb923c">— m³</div><div style="font-size:10px;color:#475569">Zużycie gazu</div></div>
      <div style="text-align:right"><div id="hdc-vg-year" style="font-size:20px;font-weight:700;color:#38bdf8">— m³</div><div style="font-size:10px;color:#475569">Roczne zużycie gazu</div></div>
    </div>
    <div style="position:relative;height:200px;margin-bottom:14px"><canvas id="hdc-vc4"></canvas></div>` : ''}
    <div class="hdc-st">Regulacja Centralnego Ogrzewania (24h)</div>
    <div class="hdc-g2" style="margin-bottom:6px">
      <div><div id="hdc-vl-tind" style="font-size:20px;font-weight:700;color:#4ade80">${tInd}°C</div><div style="font-size:10px;color:#475569">Temp. w domu</div></div>
      <div style="text-align:right"><div id="hdc-vl-tout" style="font-size:20px;font-weight:700;color:#38bdf8">${tOut}°C</div><div style="font-size:10px;color:#475569">Temp. na zewnątrz</div></div>
    </div>
    <div style="position:relative;height:160px;margin-bottom:14px"><canvas id="hdc-vc1"></canvas></div>
    <div class="hdc-st">Temperatura Ogrzewania (24h)</div>
    <div class="hdc-g3" style="margin-bottom:6px">
      <div><div id="hdc-vl-tgtSup2" style="font-size:20px;font-weight:700;color:#38bdf8">${tTgtSup}°C</div><div style="font-size:10px;color:#475569">Temp. Docelowa</div></div>
      <div style="text-align:center"><div id="hdc-vl-sup" style="font-size:20px;font-weight:700;color:#f87171">${tSup}°C</div><div style="font-size:10px;color:#475569">Temp. Zasilania</div></div>
      <div style="text-align:right"><div id="hdc-vl-ret" style="font-size:20px;font-weight:700;color:#fbbf24">${tRet}°C</div><div style="font-size:10px;color:#475569">Temp. Powrotu</div></div>
    </div>
    <div style="position:relative;height:160px;margin-bottom:14px"><canvas id="hdc-vc2"></canvas></div>`;
}

function renderMetering(hass, cfg) {
  const m = cfg.metering || {};
  const daily     = sn(hass, m.tauron_daily, 1);
  const dailyPeak = sn(hass, m.tauron_daily_peak, 1);
  const dailyOff  = sn(hass, m.tauron_daily_offpeak, 1);
  const dailyNight= sn(hass, m.tauron_daily_night, 1);
  const monthly   = sn(hass, m.tauron_monthly, 0);
  const price     = sn(hass, m.tauron_price, 2);
  const orlenMeter= sv(hass, m.orlen_meter, '—');
  const orlenInv  = sv(hass, m.orlen_invoice, '—');
  const orlenCost = sv(hass, m.orlen_cost, '—');
  const waterMeter= sn(hass, m.water_meter, 3);
  const waterQ    = sn(hass, m.water_quarterly, 1);
  const salt      = sn(hass, m.ecowater_salt, 0);
  const saltDays  = sn(hass, m.ecowater_days_salt, 0);
  const flow      = sn(hass, m.ecowater_flow, 1);
  const waterToday= sn(hass, m.ecowater_today, 2);
  const daysRegen = sn(hass, m.ecowater_days_regen, 0);
  const rock      = sn(hass, m.ecowater_rock, 2);
  const saltColor = salt < 20 ? 'r' : salt < 40 ? 'y' : 'g';
  const saltDaysColor = saltDays < 7 ? 'r' : saltDays < 14 ? 'y' : 'g';

  const dwDoor    = sv(hass, m.dishwasher_door, '—');
  const dwSalt    = isOn(hass, m.dishwasher_salt);
  const dwRinse   = isOn(hass, m.dishwasher_rinse);
  const dwWater   = sn(hass, m.dishwasher_water, 1);
  const dwEnergy  = sn(hass, m.dishwasher_energy, 2);
  const dwRemain  = sv(hass, m.dishwasher_remaining, '—');
  const dwPhase   = sv(hass, m.dishwasher_program, '—');

  return `
    <div class="hdc-st">⚡ Tauron AMIplus · G13s</div>
    <div class="hdc-g3" style="margin-bottom:10px">
      <div class="hdc-sc"><div class="hdc-sc-lbl">Dziś łącznie</div><div class="hdc-sc-val" style="color:#fbbf24">${daily} kWh</div><div class="hdc-sc-sub">szczyt+poza+noc</div></div>
      <div class="hdc-sc"><div class="hdc-sc-lbl">Miesiąc</div><div class="hdc-sc-val" style="color:#4ade80">${monthly} kWh</div></div>
      <div class="hdc-sc"><div class="hdc-sc-lbl">Cena aktualna</div><div class="hdc-sc-val" style="color:#f87171">${price} zł/kWh</div></div>
    </div>
    <div class="hdc-g3" style="margin-bottom:12px">
      <div class="hdc-box"><div class="hdc-box-title" style="color:#fbbf24">⚡ Szczytowa</div><div class="hdc-sc-val" style="color:#fbbf24;font-size:22px">${dailyPeak} kWh</div></div>
      <div class="hdc-box"><div class="hdc-box-title" style="color:#a78bfa">⚡ Pozaszczytowa</div><div class="hdc-sc-val" style="color:#a78bfa;font-size:22px">${dailyOff} kWh</div></div>
      <div class="hdc-box"><div class="hdc-box-title" style="color:#38bdf8">🌙 Nocna</div><div class="hdc-sc-val" style="color:#38bdf8;font-size:22px">${dailyNight} kWh</div></div>
    </div>
    <div class="hdc-st">🔵 myORLEN · Gaz</div>
    <div class="hdc-g3" style="margin-bottom:10px">
      <div class="hdc-sc"><div class="hdc-sc-lbl">Odczyt licznika</div><div class="hdc-sc-val" style="color:#a78bfa;font-size:15px">${orlenMeter} m³</div></div>
      <div class="hdc-sc"><div class="hdc-sc-lbl">Ostatnia faktura</div><div class="hdc-sc-val" style="color:#fbbf24;font-size:15px">${orlenInv}</div></div>
      <div class="hdc-sc"><div class="hdc-sc-lbl">Tracking kosztów</div><div class="hdc-sc-val" style="color:#4ade80;font-size:15px">${orlenCost}</div></div>
    </div>
    <div class="hdc-st">💧 Woda</div>
    <div class="hdc-g2" style="margin-bottom:10px">
      <div class="hdc-sc"><div class="hdc-sc-lbl">Stan licznika</div><div class="hdc-sc-val" style="color:#2dd4bf">${waterMeter} m³</div></div>
      <div class="hdc-sc"><div class="hdc-sc-lbl">Kwartalnie</div><div class="hdc-sc-val" style="color:#38bdf8">${waterQ} m³</div></div>
    </div>
    <div class="hdc-box" style="margin-bottom:10px">
      <div class="hdc-box-title">💎 EcoWater · Zmiękczacz</div>
      <div class="hdc-g2">
        <div>
          <div class="hdc-ir"><span class="hdc-ir-lbl">Poziom soli</span><span class="hdc-ir-val ${saltColor}">${salt}%</span></div>
          <div class="hdc-ir"><span class="hdc-ir-lbl">Dni do braku</span><span class="hdc-ir-val ${saltDaysColor}">${saltDays}</span></div>
          <div class="hdc-ir"><span class="hdc-ir-lbl">Dni od regen.</span><span class="hdc-ir-val">${daysRegen}</span></div>
        </div>
        <div>
          <div class="hdc-ir"><span class="hdc-ir-lbl">Przepływ</span><span class="hdc-ir-val b">${flow} l/min</span></div>
          <div class="hdc-ir"><span class="hdc-ir-lbl">Dziś zużyto</span><span class="hdc-ir-val b">${waterToday}</span></div>
          <div class="hdc-ir"><span class="hdc-ir-lbl">Usunięto kamień</span><span class="hdc-ir-val p">${rock}</span></div>
        </div>
      </div>
    </div>
    <div class="hdc-box">
      <div class="hdc-box-title">🍽 Zmywarka Haier hOn</div>
      <div class="hdc-g2">
        <div>
          <div class="hdc-ir"><span class="hdc-ir-lbl">Drzwi</span><span class="hdc-ir-val ${dwDoor==='on'?'g':'y'}">${dwDoor==='on'?'Zamknięte':'Otwarte'}</span></div>
          <div class="hdc-ir"><span class="hdc-ir-lbl">Sól</span><span class="hdc-ir-val ${!dwSalt?'g':'r'}">${!dwSalt?'OK':'Uzupełnij'}</span></div>
          <div class="hdc-ir"><span class="hdc-ir-lbl">Nabłyszczacz</span><span class="hdc-ir-val ${!dwRinse?'g':'y'}">${!dwRinse?'OK':'Uzupełnij'}</span></div>
        </div>
        <div>
          <div class="hdc-ir"><span class="hdc-ir-lbl">Zużycie wody</span><span class="hdc-ir-val b">${dwWater} l</span></div>
          <div class="hdc-ir"><span class="hdc-ir-lbl">Zużycie prądu</span><span class="hdc-ir-val y">${dwEnergy} kWh</span></div>
          <div class="hdc-ir"><span class="hdc-ir-lbl">Pozostało</span><span class="hdc-ir-val">${dwRemain}</span></div>
        </div>
      </div>
    </div>`;
}

function renderTPLink(hass, cfg) {
  const t = cfg.tplink || {};
  const vacState  = sv(hass, t.vacuum, '—');
  const vacBat    = sn(hass, t.vacuum_battery, 0);
  const vacArea   = sv(hass, t.vacuum_area, '—');
  const vacTime   = sv(hass, t.vacuum_time, '—');
  const vacSig    = sv(hass, t.vacuum_signal, '—');
  const vacErr    = sv(hass, t.vacuum_error, 'Brak');

  const updates = (t.updates || []).map(u => {
    const upd = s(hass, u.entity);
    const hasUpdate = upd && upd.state === 'on';
    return `<div class="hdc-sc" style="padding:8px">
      <div class="hdc-sc-lbl">${u.name}</div>
      <div class="hdc-sc-val" style="font-size:13px;color:${hasUpdate?'#fbbf24':'#4ade80'}">${hasUpdate?'↑ Dostępna':'✓ Aktualny'}</div>
    </div>`;
  }).join('');

  const renderPorts = (ports, poe = false) => (ports || []).map(p => {
    const on = isOn(hass, p.entity);
    return `<div class="hdc-port ${on?(poe?'poe':'up'):'down'}" title="${p.label}">
      <span class="hdc-port-ico">${poe?'⚡':'🔗'}</span>
      <span class="hdc-port-num">${p.label}</span>
    </div>`;
  }).join('');

  const ink_black   = sn(hass, t.ink_black, 0);
  const ink_cyan    = sn(hass, t.ink_cyan, 0);
  const ink_magenta = sn(hass, t.ink_magenta, 0);
  const ink_yellow  = sn(hass, t.ink_yellow, 0);
  const inkColor = v => v < 15 ? '#f87171' : v < 30 ? '#fbbf24' : '#94a3b8';

  return `
    <div class="hdc-st">🤖 Zosia (odkurzacz)</div>
    <div class="hdc-box" style="margin-bottom:10px">
      <div class="hdc-g3">
        <div>
          <div class="hdc-ir"><span class="hdc-ir-lbl">Status</span><span class="hdc-ir-val g">${vacState}</span></div>
          <div class="hdc-ir"><span class="hdc-ir-lbl">Bateria</span><span class="hdc-ir-val ${battColor(vacBat)}">${vacBat}%</span></div>
          <div class="hdc-ir"><span class="hdc-ir-lbl">Błąd</span><span class="hdc-ir-val ${vacErr&&vacErr!=='Brak'?'r':'g'}">${vacErr||'Brak'}</span></div>
        </div>
        <div>
          <div class="hdc-ir"><span class="hdc-ir-lbl">Pow. dziś</span><span class="hdc-ir-val b">${vacArea} m²</span></div>
          <div class="hdc-ir"><span class="hdc-ir-lbl">Czas pracy</span><span class="hdc-ir-val b">${vacTime}</span></div>
          <div class="hdc-ir"><span class="hdc-ir-lbl">Sygnał WiFi</span><span class="hdc-ir-val g">${vacSig}</span></div>
        </div>
      </div>
    </div>
    <div class="hdc-st">🔄 Firmware</div>
    <div class="hdc-gaa" style="margin-bottom:10px">${updates}</div>
    <div class="hdc-st">🔌 MIR-R01 · Router</div>
    <div class="hdc-box" style="margin-bottom:10px">
      <div class="hdc-ports">${renderPorts(t.router_ports, false)}</div>
    </div>
    <div class="hdc-st">🔌 MIR-SW01 · 16-port PoE</div>
    <div class="hdc-box" style="margin-bottom:10px">
      <div class="hdc-ports">${renderPorts(t.sw01_ports, true)}</div>
    </div>
    <div class="hdc-st">🔌 MIR-SW02 · 8-port PoE</div>
    <div class="hdc-box" style="margin-bottom:10px">
      <div class="hdc-ports">${renderPorts(t.sw02_ports, true)}</div>
    </div>
    <div class="hdc-st">🔌 MIR-SW03 · 8-port PoE</div>
    <div class="hdc-box" style="margin-bottom:10px">
      <div class="hdc-ports">${renderPorts(t.sw03_ports, true)}</div>
    </div>
    <div class="hdc-st">🖨 HP OfficeJet Pro 8020</div>
    <div class="hdc-g2">
      <div class="hdc-box">
        <div class="hdc-box-title">Status</div>
        <div class="hdc-ir"><span class="hdc-ir-lbl">Status</span><span class="hdc-ir-val g">${sv(hass, t.printer_status,'—')}</span></div>
        <div class="hdc-ir"><span class="hdc-ir-lbl">Strony</span><span class="hdc-ir-val b">${sv(hass, t.printer_pages,'—')}</span></div>
        <div class="hdc-ir"><span class="hdc-ir-lbl">Zacięcia</span><span class="hdc-ir-val g">${sv(hass, t.printer_jams,'—')}</span></div>
      </div>
      <div class="hdc-box">
        <div class="hdc-box-title">🎨 Atramenty</div>
        <div class="hdc-br"><span class="hdc-br-lbl">⬛ Czarny</span><div class="hdc-br-bg"><div class="hdc-br-fill" style="width:${ink_black}%;background:${inkColor(ink_black)}"></div></div><span class="hdc-br-val">${ink_black}%</span></div>
        <div class="hdc-br"><span class="hdc-br-lbl">🩵 Cyan</span><div class="hdc-br-bg"><div class="hdc-br-fill" style="width:${ink_cyan}%;background:#38bdf8"></div></div><span class="hdc-br-val">${ink_cyan}%</span></div>
        <div class="hdc-br"><span class="hdc-br-lbl">🩷 Magenta</span><div class="hdc-br-bg"><div class="hdc-br-fill" style="width:${ink_magenta}%;background:#f472b6"></div></div><span class="hdc-br-val">${ink_magenta}%</span></div>
        <div class="hdc-br"><span class="hdc-br-lbl">💛 Yellow</span><div class="hdc-br-bg"><div class="hdc-br-fill" style="width:${ink_yellow}%;background:#fbbf24"></div></div><span class="hdc-br-val">${ink_yellow}%</span></div>
      </div>
    </div>`;
}

function renderKamery(hass, cfg) {
  const c = cfg.cameras || {};
  const channels = c.channels || [];
  const diskTotal = c.nvr_disk_total_gb || 4000;
  const diskUsed  = c.nvr_disk_used_gb || 0;
  const diskPct   = Math.round(diskUsed / diskTotal * 100);
  const diskFree  = diskTotal - diskUsed;
  const diskColor = diskPct > 85 ? '#f87171' : diskPct > 70 ? '#fbbf24' : '#4ade80';

  const camUrl = (entity) => {
    const token = sa(hass, entity, 'access_token');
    return `/api/camera_proxy/${entity}?token=${token}&t=${Date.now()}`;
  };

  const focusCam = channels[0] || {};
  const focusHtml = `
    <div class="hdc-cam-focus">
      <div class="hdc-camfeed" style="aspect-ratio:16/9;max-height:480px">
        ${focusCam.entity
          ? `<img id="hdc-focus-img" src="${camUrl(focusCam.entity)}" data-entity="${focusCam.entity}" alt="${focusCam.name}" style="width:100%;height:100%;object-fit:cover">`
          : `<div class="hdc-cam-placeholder">📹<span>${focusCam.name||'Brak kamery'}</span></div>`
        }
      </div>
      <div class="hdc-cam-ov">
        <div class="hdc-cam-top">
          <span class="hdc-cam-name" id="hdc-focus-name">${focusCam.label||'CH?'} · ${focusCam.name||''}</span>
          <span class="hdc-cam-rec">REC</span>
        </div>
        <div class="hdc-cam-bot">
          <span class="hdc-cam-ts" id="hdc-focus-ts">${nowStr()}</span>
          <span class="hdc-cam-ch">HIKVISION · DS-7608NXI</span>
        </div>
      </div>
    </div>`;

  const grid = channels.map((ch, i) => `
    <div class="hdc-camcard${i===0?' focus':''}" data-cam-idx="${i}" data-cam-entity="${ch.entity||''}">
      <div class="hdc-camfeed">
        ${ch.entity
          ? `<img class="hdc-cam-thumb" src="${camUrl(ch.entity)}" data-entity="${ch.entity}" alt="${ch.name}" style="width:100%;height:100%;object-fit:cover" onerror="this.style.display='none'">`
          : `<div class="hdc-cam-placeholder">📹<span>${ch.name}</span></div>`
        }
      </div>
      <div class="hdc-cam-ov">
        <div class="hdc-cam-top">
          <span class="hdc-cam-name">${ch.label} · ${ch.name}</span>
          <span class="hdc-cam-rec">REC</span>
        </div>
        <div class="hdc-cam-bot">
          <span class="hdc-cam-ts hdc-cam-tick">${timeStr()}</span>
          <span class="hdc-cam-ch">${ch.label||''}</span>
        </div>
      </div>
    </div>`).join('');

  return `
    <div class="hdc-st">Aktywny podgląd · <span id="hdc-focus-label" style="color:#38bdf8">${focusCam.label} · ${focusCam.name}</span></div>
    ${focusHtml}
    <div class="hdc-st">Wszystkie kamery · HIKVISION DS-7608NXI-K2</div>
    <div class="hdc-camgrid">${grid}</div>
    <div class="hdc-st">Rejestrator NVR</div>
    <div class="hdc-g2">
      <div class="hdc-box">
        <div class="hdc-box-title">📼 Nagrywanie</div>
        <div class="hdc-ir"><span class="hdc-ir-lbl">Kanały</span><span class="hdc-ir-val b">${channels.length} / 8</span></div>
        <div class="hdc-ir"><span class="hdc-ir-lbl">Retencja</span><span class="hdc-ir-val">30 dni</span></div>
        <div class="hdc-ir"><span class="hdc-ir-lbl">Status NVR</span><span class="hdc-ir-val g">Online</span></div>
      </div>
      <div class="hdc-box">
        <div class="hdc-box-title">💾 Dysk NVR</div>
        <div class="hdc-br"><span class="hdc-br-lbl">Zajęte</span><div class="hdc-br-bg"><div class="hdc-br-fill" style="width:${diskPct}%;background:${diskColor}"></div></div><span class="hdc-br-val">${diskPct}%</span></div>
        <div class="hdc-ir"><span class="hdc-ir-lbl">Wolne</span><span class="hdc-ir-val g">${(diskFree/1000).toFixed(1)} TB</span></div>
        <div class="hdc-ir"><span class="hdc-ir-lbl">Pojemność</span><span class="hdc-ir-val">${(diskTotal/1000).toFixed(0)} TB</span></div>
      </div>
    </div>`;
}

function renderAuta(hass, cfg) {
  const vehicles = cfg.vehicles || [];
  const cards = vehicles.map((v, idx) => {
    const fuel     = sn(hass, v.fuel_level, 0);
    const fuelLt   = v.fuel_amount ? sn(hass, v.fuel_amount, 1) : null;
    const range    = sv(hass, v.fuel_range, '—');
    const odo      = sv(hass, v.odometer, '—');
    const bat      = v.battery ? sn(hass, v.battery, 0) : null;
    const lastUpdRaw = sv(hass, v.last_update, '');
    const lastUpd = lastUpdRaw ? (() => { const d = new Date(lastUpdRaw); return isNaN(d) ? lastUpdRaw : `${String(d.getDate()).padStart(2,'0')}-${String(d.getMonth()+1).padStart(2,'0')}-${d.getFullYear()} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}:${String(d.getSeconds()).padStart(2,'0')}`; })() : '—';
    const fuelColor = fuel < 15 ? '#f87171' : fuel < 30 ? '#fbbf24' : '#4ade80';
    const locked   = v.lock ? sv(hass, v.lock, 'unlocked') === 'locked' : null;

    // Connection status
    let connChip = '';
    if (v.connection) {
      const connSt = hass.states[v.connection];
      const online = connSt && (connSt.state === 'on' || connSt.state === 'online' || connSt.state === 'connected');
      connChip = `<span class="hdc-ch ${online?'g':'r'}">${online?'🟢 Online':'🔴 Offline'}</span>`;
    }

    // Location from device_tracker
    let locLine = '';
    if (v.device_tracker) {
      const dtSt = hass.states[v.device_tracker];
      if (dtSt) {
        const zone = dtSt.state;
        const addr = dtSt.attributes.address || dtSt.attributes.location_name || null;
        const locLabel = addr || (zone === 'home' ? '🏠 Dom' : zone === 'not_home' ? '🚗 W trasie' : zone);
        locLine = `<div style="font-size:11px;color:#64748b;margin:6px 0 2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">📍 ${locLabel}</div>`;
      }
    }

    // Map placeholder (only if device_tracker configured)
    const mapDiv = v.device_tracker
      ? `<div id="hdc-car-map-${idx}" style="height:180px;border-radius:10px;overflow:hidden;border:1px solid rgba(255,255,255,.07);margin-top:8px"></div>`
      : '';

    return `
      <div class="hdc-carcard">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
          <span style="font-size:26px">${v.icon||'🚗'}</span>
          <div style="flex:1;min-width:0">
            <div style="font-size:14px;font-weight:600;color:#f1f5f9">${v.name}</div>
            <div style="font-size:11px;color:#475569;font-family:monospace">${v.plate||''}</div>
          </div>
        </div>
        <div style="font-size:10px;color:#64748b;display:flex;justify-content:space-between;margin-bottom:3px">
          <span>⛽ Paliwo</span>
          <span style="color:${fuelColor};font-weight:600">${fuel}%${fuelLt !== null ? ` · ${fuelLt} L` : ''}</span>
        </div>
        <div class="hdc-carbar"><div class="hdc-carbar-fill" style="width:${fuel}%;background:${fuelColor}"></div></div>
        <div class="hdc-g3" style="gap:6px;margin-bottom:8px">
          <div class="hdc-sc" style="padding:8px"><div class="hdc-sc-lbl">Zasięg</div><div class="hdc-sc-val" style="color:${fuelColor};font-size:15px">${range}</div></div>
          <div class="hdc-sc" style="padding:8px"><div class="hdc-sc-lbl">Przebieg</div><div class="hdc-sc-val" style="font-size:15px">${parseInt(odo).toLocaleString('pl')}</div></div>
          ${bat !== null ? `<div class="hdc-sc" style="padding:8px"><div class="hdc-sc-lbl">Bat. 12V</div><div class="hdc-sc-val" style="color:${battColor(bat)};font-size:15px">${bat}%</div></div>` : `<div class="hdc-sc" style="padding:8px"><div class="hdc-sc-lbl">Ostat. poz.</div><div class="hdc-sc-val" style="font-size:12px;color:#64748b">${lastUpd}</div></div>`}
        </div>
        <div class="hdc-chips">
          ${locked !== null ? `<span class="hdc-ch ${locked?'g':'r'}">${locked?'🔒 Zamknięty':'🔓 Otwarty'}</span>` : ''}
          ${connChip}
        </div>
        ${locLine}
        ${mapDiv}
      </div>`;
  }).join('');
  return `<div class="hdc-ga">${cards}</div>`;
}

function renderProxmox(hass, cfg) {
  const p = cfg.proxmox || {};
  const cpu     = sn(hass, p.node_cpu, 0);
  const ramPct  = sn(hass, p.node_ram_pct, 0);
  const ramFree = sv(hass, p.node_ram_free, '—');
  const diskPct = sn(hass, p.node_disk_pct, 0);
  const lxcRun  = sv(hass, p.node_lxc_running, '—');
  const vmRun   = sv(hass, p.node_vm_running, '—');
  const cpuColor = cpu > 80 ? '#f87171' : cpu > 60 ? '#fbbf24' : '#38bdf8';
  const ramColor = ramPct > 85 ? '#f87171' : ramPct > 70 ? '#fbbf24' : '#a78bfa';

  const lxcs = (p.lxc || []).map(l => {
    const lcpu = sn(hass, l.cpu, 0);
    const lram = sn(hass, l.ram, 0);
    const running = isOn(hass, l.status);
    return `<div class="hdc-pxcard">
      <div style="display:flex;align-items:center;gap:6px;margin-bottom:8px">
        <span class="hdc-pxbdg ${running?'run':'stop'}">${running?'RUN':'STOP'}</span>
        <div>
          <div style="font-size:12px;font-weight:600;color:#f1f5f9">${l.name}</div>
          <div style="font-size:9px;color:#334155;font-family:monospace">#${l.id} · ${l.info||''}</div>
        </div>
      </div>
      <div style="font-size:9px;color:#475569;display:flex;justify-content:space-between;margin-bottom:2px"><span>CPU</span><span>${lcpu}%</span></div>
      <div class="hdc-pxbar-bg"><div class="hdc-pxbar-fill" style="width:${lcpu}%;background:#38bdf8"></div></div>
      <div style="font-size:9px;color:#475569;display:flex;justify-content:space-between;margin:4px 0 2px"><span>RAM</span><span>${lram}%</span></div>
      <div class="hdc-pxbar-bg"><div class="hdc-pxbar-fill" style="width:${lram}%;background:#a78bfa"></div></div>
    </div>`;
  }).join('');

  const vms = (p.vms || []).map(v => {
    const vcpu = sn(hass, v.cpu, 0);
    const vram = sn(hass, v.ram, 0);
    const running = isOn(hass, v.status);
    return `<div class="hdc-pxcard">
      <div style="display:flex;align-items:center;gap:6px;margin-bottom:8px">
        <span class="hdc-pxbdg ${running?'run':'stop'}">${running?'RUN':'STOP'}</span>
        <div>
          <div style="font-size:12px;font-weight:600;color:#f1f5f9">${v.name}</div>
          <div style="font-size:9px;color:#334155;font-family:monospace">#${v.id} · ${v.info||''}</div>
        </div>
      </div>
      <div style="font-size:9px;color:#475569;display:flex;justify-content:space-between;margin-bottom:2px"><span>CPU</span><span>${vcpu}%</span></div>
      <div class="hdc-pxbar-bg"><div class="hdc-pxbar-fill" style="width:${vcpu}%;background:#fb923c"></div></div>
      <div style="font-size:9px;color:#475569;display:flex;justify-content:space-between;margin:4px 0 2px"><span>RAM</span><span>${vram}%</span></div>
      <div class="hdc-pxbar-bg"><div class="hdc-pxbar-fill" style="width:${vram}%;background:#a78bfa"></div></div>
    </div>`;
  }).join('');

  return `
    <div class="hdc-g3" style="margin-bottom:10px">
      <div class="hdc-sc"><div class="hdc-sc-lbl">CPU node</div><div class="hdc-sc-val" style="color:${cpuColor}">${cpu}%</div></div>
      <div class="hdc-sc"><div class="hdc-sc-lbl">RAM</div><div class="hdc-sc-val" style="color:${ramColor}">${ramPct}%</div><div class="hdc-sc-sub">wolne: ${ramFree}</div></div>
      <div class="hdc-sc"><div class="hdc-sc-lbl">Disk</div><div class="hdc-sc-val" style="color:#4ade80">${diskPct}%</div></div>
      <div class="hdc-sc"><div class="hdc-sc-lbl">LXC aktywne</div><div class="hdc-sc-val" style="color:#f472b6">${lxcRun}</div></div>
      <div class="hdc-sc"><div class="hdc-sc-lbl">QEMU aktywne</div><div class="hdc-sc-val" style="color:#2dd4bf">${vmRun}</div></div>
    </div>
    <div class="hdc-st">LXC Kontenery</div>
    <div class="hdc-gaa" style="margin-bottom:10px">${lxcs}</div>
    <div class="hdc-st">QEMU Maszyny wirtualne</div>
    <div class="hdc-ga">${vms}</div>`;
}

function renderAlerty(hass, cfg) {
  const rules = cfg.alerts || [];
  const active = [];
  rules.forEach(rule => {
    const val = sv(hass, rule.entity, '');
    if (evalCondition(val, rule.condition || '')) {
      active.push({ msg: rule.message, sev: rule.severity || 'warn' });
    }
  });
  const activeHtml = active.length
    ? active.map(a => `<div class="hdc-alert ${a.sev}"><span>⚠</span><span class="hdc-alert-msg">${a.msg}</span><span class="hdc-alert-t">teraz</span></div>`).join('')
    : `<div class="hdc-alert ok"><span>✓</span><span class="hdc-alert-msg">Brak aktywnych alertów</span></div>`;

  return `
    <div class="hdc-st">Aktywne alerty (${active.length})</div>
    ${activeHtml}
    <div class="hdc-st">Aktualizacje systemowe</div>
    ${(cfg.updates_tracked || []).map(u => {
      const upd = s(hass, u);
      const has = upd && upd.state === 'on';
      if (!has) return '';
      const name = sa(hass, u, 'friendly_name') || u;
      return `<div class="hdc-alert info"><span>📦</span><span class="hdc-alert-msg">${name}</span><span class="hdc-alert-t">dostępna</span></div>`;
    }).join('') || '<div style="font-size:11px;color:#334155;padding:6px 0">Brak oczekujących aktualizacji.</div>'}`;
}


// ============================================================
//  MAIN ELEMENT CLASS
// ============================================================

const ALL_TABS = [
  { id: 'osoby',     label: '👨‍👩‍👧‍👦 Osoby',    render: renderOsoby },
  { id: 'energia',   label: '⚡ Energia',   render: renderEnergia },
  { id: 'vaillant',  label: '🔥 Vaillant',  render: renderVaillant },
  { id: 'metering',  label: '📊 Metering',  render: renderMetering },
  { id: 'tplink',    label: '📶 TP-Link',   render: renderTPLink },
  { id: 'kamery',    label: '📹 Kamery',    render: renderKamery },
  { id: 'auta',      label: '🚗 Auta',      render: renderAuta },
  { id: 'proxmox',   label: '🖧 Proxmox',   render: renderProxmox },
  { id: 'alerty',    label: '🔔 Alerty',    render: renderAlerty, badge: true },
];

class HomeDashboardCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._hass = null;
    this._config = {};
    this._activeTab = null;
    this._clockInterval = null;
    this._camRefreshInterval = null;
    this._built = false;
    this._tabChanged = false;
  }

  setConfig(config) {
    this._config = config;
    this._activeTab = (config.tabs && config.tabs[0]) || 'osoby';
  }

  set hass(hass) {
    this._hass = hass;
    if (!this._built) {
      this._build();
      this._built = true;
    } else {
      this._updatePane();
      this._updateAlertBadge();
    }
  }

  _build() {
    const cfg = this._config;
    const tabs = this._resolveTabs(cfg);

    this.shadowRoot.innerHTML = `
      <style>${STYLES}</style>
      <div class="hdc">
        <div class="hdc-hdr">
          <div class="hdc-title">
            <span>🏠</span>
            <span>${cfg.title || 'MirHome'}</span>
            <span class="hdc-live">live</span>
          </div>
          <span class="hdc-clk" id="hdc-clk">00:00:00</span>
        </div>
        <div class="hdc-tabs" id="hdc-tabs">
          ${tabs.map(t => `
            <button class="hdc-tab${t.id === this._activeTab ? ' active' : ''}" data-tab="${t.id}">
              ${t.label}${t.badge ? `<span class="hdc-bdg" id="hdc-badge-${t.id}" style="display:none">!</span>` : ''}
            </button>`).join('')}
        </div>
        <div class="hdc-pane active" id="hdc-pane"></div>
      </div>`;

    // Tab click handler
    this.shadowRoot.getElementById('hdc-tabs').addEventListener('click', e => {
      const btn = e.target.closest('[data-tab]');
      if (!btn) return;
      this._activeTab = btn.dataset.tab;
      this._tabChanged = true;
      this.shadowRoot.querySelectorAll('.hdc-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      this._updatePane();
    });

    // Climate/action buttons delegation
    this.shadowRoot.getElementById('hdc-pane').addEventListener('click', e => {
      const btn = e.target.closest('[data-action]');
      if (!btn) return;
      this._handleAction(btn);
    });

    // Camera thumbnail click
    this.shadowRoot.getElementById('hdc-pane').addEventListener('click', e => {
      const card = e.target.closest('[data-cam-idx]');
      if (!card) return;
      this._focusCamera(card);
    });

    this._tabChanged = true;
    this._updatePane();
    this._startClock();
    this._startCamRefresh();
    this._updateAlertBadge();
  }

  _resolveTabs(cfg) {
    const allowed = cfg.tabs || ALL_TABS.map(t => t.id);
    return ALL_TABS.filter(t => allowed.includes(t.id));
  }

  _updatePane() {
    const pane = this.shadowRoot.getElementById('hdc-pane');
    if (!pane) return;
    const tab = ALL_TABS.find(t => t.id === this._activeTab);
    if (!tab) return;
    const tabChanged = this._tabChanged;
    this._tabChanged = false;
    try {
      // Na aktualizacjach hass (nie zmiana zakładki) nie niszcz mapy/canvasów —
      // odśwież tylko dane tekstowe in-place
      if (this._activeTab === 'vaillant' && !tabChanged) {
        this._updateVaillantLive();
        return;
      }
      if (this._activeTab === 'osoby' && !tabChanged) {
        this._updateOsobyLive();
        return;
      }
      if (this._activeTab === 'kamery' && !tabChanged) return;
      pane.innerHTML = tab.render(this._hass, this._config);
      if (this._activeTab === 'osoby') setTimeout(() => this._initOsobyMap(), 0);
      if (this._activeTab === 'auta') setTimeout(() => this._initCarMaps(), 0);
      if (this._activeTab === 'vaillant') setTimeout(() => this._initVaillantCharts(), 0);
    } catch(err) {
      pane.innerHTML = `<div style="color:#f87171;font-size:12px;padding:12px">Błąd renderowania: ${err.message}</div>`;
      console.error('[home-dashboard-card]', err);
    }
  }

  _updateOsobyLive() {
    const listDiv = this.shadowRoot.getElementById('hdc-persons-list');
    if (!listDiv) return;
    const hass = this._hass;
    const cfg = this._config;
    const persons = cfg.persons || [];
    const cards = persons.map((p) => {
      const loc = sv(hass, p.entity, 'unknown');
      const isHome = loc === 'home';
      const bl = sn(hass, p.battery_level, 0);
      const bst = sv(hass, p.battery_state, '');
      const charging = bst.toLowerCase() === 'charging';
      const steps = sv(hass, p.steps, '—');
      const initials = p.name ? p.name[0] : '?';
      return `
        <div class="hdc-pc ${isHome?'home':'away'}">
          <div style="display:flex;gap:10px;margin-bottom:9px;align-items:flex-start">
            <div class="hdc-pav" style="color:${p.color};background:${p.color}22">${initials}</div>
            <div>
              <div style="font-size:13px;font-weight:600;color:#f1f5f9">${p.name}</div>
              <div style="font-size:10px;color:#475569">${p.device_tracker ? sa(hass, p.device_tracker, 'friendly_name') || p.device_tracker : ''}</div>
              <div style="font-size:10px;margin-top:2px;color:${isHome?'#4ade80':'#f87171'}">● ${isHome?'W domu':'Poza domem'}</div>
            </div>
          </div>
          <div class="hdc-chips">
            ${p.battery_state ? `<span class="hdc-ch ${charging?'g':''}">${charging?'⚡ Ładuje':'Brak ładowania'}</span>` : ''}
            ${p.battery_level ? `<span class="hdc-ch ${battColor(bl)}">${battIcon(bl)} ${bl}%</span>` : ''}
            ${p.steps ? `<span class="hdc-ch y">👟 ${parseInt(steps).toLocaleString('pl')}</span>` : ''}
          </div>
        </div>`;
    }).join('');
    listDiv.innerHTML = `<div class="hdc-ga">${cards}</div>`;
  }

  _updateVaillantLive() {
    const hass = this._hass;
    const v = this._config.vaillant || {};
    const sr = this.shadowRoot;
    const setText = (id, val) => { const el = sr.getElementById(id); if (el) el.textContent = val; };
    const coAct  = sa(hass, v.climate_co,   'current_temperature') || '—';
    const coSet  = sa(hass, v.climate_co,   'temperature')         || '—';
    const cwuCur = sn(hass, v.cwu_current, 1);
    const cwuTgt = sn(hass, v.cwu_target,  1);
    const tSup   = sn(hass, v.temp_supply,  1);
    const tRet   = sn(hass, v.temp_return,  1);
    const tTgtSup= sn(hass, v.temp_target_supply, 1);
    const tOut   = sn(hass, v.temp_outdoor, 1);
    const tInd   = v.temp_indoor ? sn(hass, v.temp_indoor, 1) : coAct;
    const press  = sn(hass, v.pressure, 1);
    const pwr    = sn(hass, v.power,    1);
    const flame  = isOn(hass, v.flame);
    const pump   = isOn(hass, v.pump);
    const elCO   = sn(hass, v.el_co,  2);
    const elCWU  = sn(hass, v.el_cwu, 2);
    setText('hdc-vl-tind',    `${tInd}°C`);
    setText('hdc-vl-tout',    `${tOut}°C`);
    setText('hdc-vl-tgtSup',  `${tTgtSup}°C`);
    setText('hdc-vl-tgtSup2', `${tTgtSup}°C`);
    setText('hdc-vl-sup',     `${tSup}°C`);
    setText('hdc-vl-ret',     `${tRet}°C`);
    setText('hdc-vl-coact',   `${coAct}°`);
    setText('hdc-co-set',     coSet);
    setText('hdc-vl-flame',   `● ${flame ? 'Ogrzewanie aktywne' : 'Standby'}`);
    if (v.climate_zone0) { const pm = sa(hass, v.climate_zone0, 'preset_mode'); setText('hdc-vl-z0mode', '📅 ' + (pm && pm !== 'none' ? pm : 'Harmonogram')); }
    setText('hdc-vl-cwucur',  `${cwuCur}°`);
    setText('hdc-cwu-set',    cwuTgt);
    setText('hdc-vl-sup2',    `${tSup}°C`);
    setText('hdc-vl-ret2',    `${tRet}°C`);
    setText('hdc-vl-tout2',   `${tOut}°C`);
    setText('hdc-vl-press',   `${press} bar`);
    setText('hdc-vl-pump',    pump ? 'Aktywna' : 'Nieaktywna');
    setText('hdc-vl-pwr',     `${pwr} kW`);
    setText('hdc-vl-flameval', `🔥 ${flame ? 'Aktywny' : 'Nieaktywny'}`);
    setText('hdc-vl-elco',    `${elCO} kWh`);
    setText('hdc-vl-elcwu',   `${elCWU} kWh`);
  }

  async _initVaillantCharts() {
    const v = this._config.vaillant || {};
    const hass = this._hass;
    const entities = [v.temp_supply, v.temp_return, v.temp_target_supply,
      v.temp_indoor || null, v.temp_outdoor].filter(Boolean);
    if (!entities.length) return;

    const draw = async () => {
      const now = new Date();
      const start = new Date(now.getTime() - 24 * 60 * 60 * 1000);
      let hist;
      try {
        hist = await hass.callWS({
          type: 'history/history_during_period',
          start_time: start.toISOString(),
          end_time: now.toISOString(),
          entity_ids: entities,
          minimal_response: true,
          no_attributes: true,
          significant_changes_only: false,
        });
      } catch(e) { console.error('[hdc] vaillant chart', e); return; }

      const pts = id => (hist[id] || [])
        .filter(d => d.s && d.s !== 'unavailable' && d.s !== 'unknown')
        .map(d => ({ x: new Date((d.lu || d.last_updated_ts) * 1000), y: parseFloat(d.s) }))
        .filter(d => !isNaN(d.y));

      const defOpts = () => ({
        type: 'line',
        options: {
          responsive: true, maintainAspectRatio: false, animation: false,
          plugins: {
            legend: { display: true, position: 'bottom',
              labels: { color: '#94a3b8', font: { size: 10 }, boxWidth: 10, padding: 8 } },
            tooltip: { mode: 'index', intersect: false,
              backgroundColor: '#1e293b', titleColor: '#94a3b8', bodyColor: '#f1f5f9',
              callbacks: { label: c => ` ${c.dataset.label}: ${c.parsed.y.toFixed(1)} °C` } }
          },
          scales: {
            x: { type: 'time', time: { unit: 'hour', displayFormats: { hour: 'HH:mm' } },
              ticks: { color: '#475569', maxTicksLimit: 8, font: { size: 9 } },
              grid: { color: 'rgba(255,255,255,.05)' } },
            y: { ticks: { color: '#475569', font: { size: 9 } },
              grid: { color: 'rgba(255,255,255,.05)' } }
          }
        }
      });

      const mkChart = (id, datasets) => {
        const el = this.shadowRoot.getElementById(id);
        if (!el || !datasets.length) return;
        if (el._hdcChart) el._hdcChart.destroy();
        const cfg = defOpts();
        cfg.data = { datasets };
        el._hdcChart = new Chart(el, cfg);
      };

      const ds = (label, id, color) => {
        const data = pts(id);
        return data.length ? { label, data, borderColor: color, backgroundColor: 'transparent',
          pointRadius: 0, borderWidth: 1.5, tension: 0.3 } : null;
      };

      const indId = v.temp_indoor || null;
      mkChart('hdc-vc1', [
        ds('Zasilanie',        v.temp_supply,        '#fb923c'),
        ds('Powrót',           v.temp_return,         '#fbbf24'),
        ds('Temp. w domu',     indId,                 '#4ade80'),
        ds('Temp. na zewn.',   v.temp_outdoor,        '#38bdf8'),
      ].filter(Boolean));

      mkChart('hdc-vc2', [
        ds('Temp. Docelowa',   v.temp_target_supply,  '#38bdf8'),
        ds('Temp. Zasilania',  v.temp_supply,          '#f87171'),
        ds('Temp. Powrotu',    v.temp_return,          '#fbbf24'),
      ].filter(Boolean));
    };

    const loadScript = (id, src, cb) => {
      if (document.getElementById(id)) { if (window.Chart) cb(); else document.getElementById(id).addEventListener('load', cb); return; }
      const s = document.createElement('script'); s.id = id; s.src = src; s.onload = cb;
      document.head.appendChild(s);
    };
    const drawGas = async () => {
      const gasHeatId = v.gas_heating;
      const gasCwuId  = v.gas_cwu;
      if (!gasHeatId) return;
      const MONTH_PL = ['Sty','Lut','Mar','Kwi','Maj','Cze','Lip','Sie','Wrz','Paź','Lis','Gru'];
      const now = new Date();

      // Daily — last 30 days
      const d30 = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
      // Monthly — last 12 months
      const m12 = new Date(now); m12.setFullYear(m12.getFullYear() - 1); m12.setDate(1);

      const ids = [gasHeatId, gasCwuId].filter(Boolean);
      let statDay, statMon;
      try {
        [statDay, statMon] = await Promise.all([
          hass.callWS({ type: 'recorder/statistics_during_period',
            start_time: d30.toISOString(), end_time: now.toISOString(),
            statistic_ids: ids, period: 'day', types: ['change'], units: { volume: 'm³' } }),
          hass.callWS({ type: 'recorder/statistics_during_period',
            start_time: m12.toISOString(), end_time: now.toISOString(),
            statistic_ids: ids, period: 'month', types: ['change'], units: { volume: 'm³' } }),
        ]);
      } catch(e) { console.error('[hdc] gas stats', e); return; }

      const toVal = (d) => Math.max(0, Math.round((d.change || 0) * 10) / 10);
      const heatDay = (statDay[gasHeatId] || []).slice().sort((a,b) => a.start - b.start)
        .map(d => ({ x: new Date(d.start * 1000), y: toVal(d) }));
      const cwuDay  = gasCwuId ? (statDay[gasCwuId] || []).slice().sort((a,b) => a.start - b.start)
        .map(d => ({ x: new Date(d.start * 1000), y: toVal(d) })) : [];

      // Update today header values (last element after sort = most recent)
      const todayHeat = heatDay.length ? heatDay[heatDay.length - 1].y : 0;
      const todayCwu  = cwuDay.length  ? cwuDay[cwuDay.length - 1].y   : 0;
      const elH = this.shadowRoot.getElementById('hdc-vg-heat');
      const elC = this.shadowRoot.getElementById('hdc-vg-cwu');
      if (elH) elH.textContent = todayHeat.toFixed(1) + ' m³';
      if (elC && gasCwuId) elC.textContent = todayCwu.toFixed(1) + ' m³';

      const barOpts = {
        responsive: true, maintainAspectRatio: false, animation: false,
        plugins: {
          legend: { display: true, position: 'bottom',
            labels: { color: '#94a3b8', font: { size: 10 }, boxWidth: 10, padding: 8 } },
          tooltip: { mode: 'index', intersect: false,
            backgroundColor: '#1e293b', titleColor: '#94a3b8', bodyColor: '#f1f5f9',
            callbacks: { label: c => ` ${c.dataset.label}: ${c.parsed.y.toFixed(1)} m³` } }
        },
        scales: {
          x: { ticks: { color: '#475569', font: { size: 9 } }, grid: { color: 'rgba(255,255,255,.05)' } },
          y: { ticks: { color: '#475569', font: { size: 9 } }, grid: { color: 'rgba(255,255,255,.05)' } }
        }
      };

      // Chart 3 — daily bars (stacked: heating + CWU)
      const c3 = this.shadowRoot.getElementById('hdc-vc3');
      if (c3 && heatDay.length) {
        if (c3._hdcChart) c3._hdcChart.destroy();
        const labels = heatDay.map(d => d.x.toLocaleDateString('pl-PL', { day: 'numeric', month: 'short' }));
        const ds3 = [{ label: 'Ogrzewanie', data: heatDay.map(d => d.y),
          backgroundColor: '#fb923c', borderRadius: 3, stack: 'gas' }];
        if (cwuDay.length) ds3.push({ label: 'CWU', data: cwuDay.map(d => d.y),
          backgroundColor: '#38bdf8', borderRadius: 3, stack: 'gas' });
        c3._hdcChart = new Chart(c3, { type: 'bar', data: { labels, datasets: ds3 },
          options: { ...barOpts,
            plugins: { ...barOpts.plugins,
              tooltip: { ...barOpts.plugins.tooltip,
                callbacks: {
                  label: c => ` ${c.dataset.label}: ${c.parsed.y.toFixed(1)} m³`,
                  footer: items => {
                    const sum = items.reduce((a, b) => a + b.parsed.y, 0);
                    return items.length > 1 ? `Suma: ${sum.toFixed(1)} m³` : '';
                  }
                }
              }
            },
            scales: {
              x: { ...barOpts.scales.x, stacked: true },
              y: { ...barOpts.scales.y, stacked: true }
            }
          }
        });
      }

      // Chart 4 — monthly bars (merge heat+cwu by year-month key to avoid index mismatch)
      const c4 = this.shadowRoot.getElementById('hdc-vc4');
      const heatMon = (statMon[gasHeatId] || []).slice().sort((a, b) => a.start - b.start);
      const cwuMon  = gasCwuId ? (statMon[gasCwuId] || []).slice().sort((a, b) => a.start - b.start) : [];
      if (c4 && heatMon.length) {
        if (c4._hdcChart) c4._hdcChart.destroy();
        const monMap = {};
        heatMon.forEach(d => {
          const dt = new Date(d.start * 1000);
          const mk = dt.getFullYear() + '-' + String(dt.getMonth()).padStart(2, '0');
          monMap[mk] = monMap[mk] || { label: MONTH_PL[dt.getMonth()], heat: 0, cwu: 0 };
          monMap[mk].heat += toVal(d);
        });
        cwuMon.forEach(d => {
          const dt = new Date(d.start * 1000);
          const mk = dt.getFullYear() + '-' + String(dt.getMonth()).padStart(2, '0');
          if (monMap[mk]) monMap[mk].cwu += toVal(d);
        });
        const monKeys = Object.keys(monMap).sort();
        const labels = monKeys.map(k => monMap[k].label);
        const totalByMonth = monKeys.map(k => Math.round((monMap[k].heat + monMap[k].cwu) * 10) / 10);
        const thisMonth = totalByMonth[totalByMonth.length - 1] || 0;
        const yearTotal = Math.round(totalByMonth.reduce((a, b) => a + b, 0) * 10) / 10;
        const elM = this.shadowRoot.getElementById('hdc-vg-mon');
        const elY = this.shadowRoot.getElementById('hdc-vg-year');
        if (elM) elM.textContent = thisMonth.toFixed(1) + ' m³';
        if (elY) elY.textContent = yearTotal.toFixed(1) + ' m³';
        c4._hdcChart = new Chart(c4, { type: 'bar',
          data: { labels, datasets: [{ label: 'Zużycie gazu', data: totalByMonth,
            backgroundColor: '#fb923c', borderRadius: 3 }] },
          options: { ...barOpts }
        });
      }
    };

    const allDraw = async () => { await draw(); await drawGas(); };

    if (window.Chart && window.Chart.defaults) {
      allDraw();
    } else {
      loadScript('hdc-chartjs', 'https://cdn.jsdelivr.net/npm/chart.js@4/dist/chart.umd.min.js', () =>
        loadScript('hdc-chartjs-adapter', 'https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns@3/dist/chartjs-adapter-date-fns.bundle.min.js', allDraw)
      );
    }
  }

  _initOsobyMap() {
    const mapDiv = this.shadowRoot.getElementById('hdc-fmap-real');
    if (!mapDiv) return;
    const hass = this._hass;
    const cfg = this._config;
    const persons = (cfg.persons || []).filter(p => p.device_tracker);
    if (!persons.length) {
      mapDiv.innerHTML = '<div style="color:#475569;font-size:11px;padding:16px;text-align:center">Brak skonfigurowanych trackerów lokalizacji</div>';
      return;
    }
    mapDiv.innerHTML = '';
    window.loadCardHelpers?.().then(helpers => {
      const card = helpers.createCardElement({
        type: 'map',
        entities: persons.map(p => ({ entity: p.device_tracker })),
        auto_fit: true,
        dark_mode: true,
      });
      card.style.cssText = 'display:block;height:240px;width:100%';
      mapDiv.appendChild(card);
      card.hass = hass;
    });
  }

  _initCarMaps() {
    const hass = this._hass;
    const vehicles = this._config.vehicles || [];
    vehicles.forEach((v, idx) => {
      if (!v.device_tracker) return;
      const mapDiv = this.shadowRoot.getElementById(`hdc-car-map-${idx}`);
      if (!mapDiv) return;
      mapDiv.innerHTML = '';
      window.loadCardHelpers?.().then(helpers => {
        const card = helpers.createCardElement({
          type: 'map',
          entities: [{ entity: v.device_tracker }],
          auto_fit: true,
          dark_mode: true,
        });
        card.style.cssText = 'display:block;height:180px;width:100%';
        mapDiv.appendChild(card);
        card.hass = hass;
      });
    });
  }

  _handleAction(btn) {
    const action = btn.dataset.action;
    const entity = btn.dataset.entity;
    const step   = parseFloat(btn.dataset.step || '0.5');
    if (!this._hass || !entity) return;
    const state = this._hass.states[entity];
    if (!state) return;

    if (action === 'climate_up' || action === 'climate_down') {
      const hasTemp = state.attributes.temperature != null;
      const hasHigh = state.attributes.target_temp_high != null;
      const hasLow  = state.attributes.target_temp_low != null;
      if (!hasTemp && !hasHigh && !hasLow) return;
      const current = hasTemp
        ? parseFloat(state.attributes.temperature)
        : hasHigh ? parseFloat(state.attributes.target_temp_high)
        : parseFloat(state.attributes.target_temp_low);
      const newTemp = Math.round((action === 'climate_up' ? current + step : current - step) * 10) / 10;
      const params = { entity_id: entity };
      if (hasTemp) { params.temperature = newTemp; }
      else { params.target_temp_high = newTemp; params.target_temp_low = newTemp; }
      this._hass.callService('climate', 'set_temperature', params);
    }
    if (action === 'input_up' || action === 'input_down') {
      const current = parseFloat(state.state);
      const min = parseFloat(btn.dataset.min ?? '-999');
      const max = parseFloat(btn.dataset.max ?? '9999');
      const newVal = action === 'input_up' ? current + step : current - step;
      const clamped = Math.min(max, Math.max(min, Math.round(newVal * 1000) / 1000));
      this._hass.callService('input_number', 'set_value', { entity_id: entity, value: clamped });
    }
    if (action === 'toggle') {
      this._hass.callService('homeassistant', 'toggle', { entity_id: entity });
    }
  }

  _focusCamera(card) {
    const idx = parseInt(card.dataset.camIdx || '0');
    const channels = (this._config.cameras || {}).channels || [];
    const ch = channels[idx];
    if (!ch) return;

    const focusImg  = this.shadowRoot.getElementById('hdc-focus-img');
    const focusName = this.shadowRoot.getElementById('hdc-focus-name');
    const focusLbl  = this.shadowRoot.getElementById('hdc-focus-label');

    if (focusImg) {
      const token = this._hass.states[ch.entity]?.attributes?.access_token || '';
      focusImg.src = `/api/camera_proxy/${ch.entity}?token=${token}&t=${Date.now()}`;
      focusImg.dataset.entity = ch.entity;
    }
    if (focusName) focusName.textContent = `${ch.label} · ${ch.name}`;
    if (focusLbl)  focusLbl.textContent  = `${ch.label} · ${ch.name}`;

    this.shadowRoot.querySelectorAll('.hdc-camcard').forEach(c => c.classList.remove('focus'));
    card.classList.add('focus');
  }

  _updateAlertBadge() {
    const cfg = this._config;
    const rules = cfg.alerts || [];
    let count = 0;
    rules.forEach(rule => {
      const val = sv(this._hass, rule.entity, '');
      if (evalCondition(val, rule.condition || '')) count++;
    });
    const badge = this.shadowRoot.getElementById('hdc-badge-alerty');
    if (badge) {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'inline' : 'none';
    }
  }

  _startClock() {
    const tick = () => {
      const el = this.shadowRoot.getElementById('hdc-clk');
      if (el) el.textContent = timeStr();
      // update cam timestamps
      this.shadowRoot.querySelectorAll('.hdc-cam-tick').forEach(e => {
        e.textContent = timeStr();
      });
      const fts = this.shadowRoot.getElementById('hdc-focus-ts');
      if (fts) fts.textContent = nowStr();
    };
    tick();
    this._clockInterval = setInterval(tick, 1000);
  }

  _startCamRefresh() {
    this._camRefreshInterval = setInterval(() => {
      if (this._activeTab !== 'kamery') return;
      const refreshImg = (img) => {
        const entity = img.dataset.entity;
        if (!entity) return;
        const token = this._hass?.states[entity]?.attributes?.access_token || '';
        img.src = `/api/camera_proxy/${entity}?token=${token}&t=${Date.now()}`;
      };
      this.shadowRoot.querySelectorAll('.hdc-cam-thumb').forEach(refreshImg);
      const focus = this.shadowRoot.getElementById('hdc-focus-img');
      if (focus) refreshImg(focus);
    }, 10000);
  }

  disconnectedCallback() {
    clearInterval(this._clockInterval);
    clearInterval(this._camRefreshInterval);
  }

  getCardSize() { return 8; }

  static getConfigElement() {
    return document.createElement('home-dashboard-card-editor');
  }

  static getStubConfig() {
    return {
      title: 'MirHome',
      tabs: ['osoby', 'energia', 'vaillant', 'metering', 'tplink', 'kamery', 'auta', 'proxmox', 'alerty'],
    };
  }
}

customElements.define('home-dashboard-card', HomeDashboardCard);
window.customCards = window.customCards || [];
window.customCards.push({
  type: 'home-dashboard-card',
  name: 'MirHome Dashboard',
  description: 'Kompletny dashboard domowy — osoby, energia, Vaillant, metering, TP-Link, kamery, auta, Proxmox.',
  preview: true,
});

console.info(
  '%c HOME-DASHBOARD-CARD %c v1.0.0 ',
  'background:#38bdf8;color:#0d0f14;font-weight:700;padding:2px 6px;border-radius:4px 0 0 4px',
  'background:#0d0f14;color:#38bdf8;font-weight:700;padding:2px 6px;border-radius:0 4px 4px 0'
);
