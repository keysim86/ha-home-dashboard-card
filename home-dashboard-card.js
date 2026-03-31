// ============================================================
//  home-dashboard-card.js  v1.7.4
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
.hdc-port{border-radius:7px;padding:6px 4px;text-align:center;border:1px solid rgba(255,255,255,.06);background:rgba(255,255,255,.04);cursor:default;transition:all .15s}
.hdc-port.clickable{cursor:pointer}
.hdc-port.clickable:hover{filter:brightness(1.25)}
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
.hdc-gate-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(100px,1fr));gap:7px;margin-bottom:4px}
.hdc-gate-tile{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:11px;padding:10px 8px;cursor:pointer;transition:all .15s;text-align:center;user-select:none}
.hdc-gate-tile:hover{background:rgba(255,255,255,.08)}
.hdc-gate-tile.closed,.hdc-gate-tile.locked{background:rgba(34,197,94,.07);border-color:rgba(34,197,94,.25)}
.hdc-gate-tile.open,.hdc-gate-tile.unlocked{background:rgba(251,146,60,.1);border-color:rgba(251,146,60,.35)}
.hdc-gate-tile.opening,.hdc-gate-tile.closing{background:rgba(56,189,248,.08);border-color:rgba(56,189,248,.25)}
.hdc-gate-ico{font-size:22px;margin-bottom:4px}
.hdc-gate-name{font-size:10px;font-weight:600;color:#94a3b8;margin-bottom:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.hdc-gate-tile.closed .hdc-gate-name,.hdc-gate-tile.locked .hdc-gate-name{color:#4ade80}
.hdc-gate-tile.open .hdc-gate-name,.hdc-gate-tile.unlocked .hdc-gate-name{color:#fb923c}
.hdc-gate-tile.opening .hdc-gate-name,.hdc-gate-tile.closing .hdc-gate-name{color:#38bdf8}
.hdc-gate-state{font-size:9px;color:#334155}
.hdc-gate-tile.closed .hdc-gate-state,.hdc-gate-tile.locked .hdc-gate-state{color:#16a34a}
.hdc-gate-tile.open .hdc-gate-state,.hdc-gate-tile.unlocked .hdc-gate-state{color:#c2410c}
.hdc-gate-tile.opening .hdc-gate-state,.hdc-gate-tile.closing .hdc-gate-state{color:#38bdf8}
.hdc-gate-light{font-size:9px;margin-top:4px;color:#334155;display:flex;align-items:center;justify-content:center;gap:3px}
.hdc-gate-light.on{color:#fbbf24}
.hdc-gate-timer{font-size:9px;margin-top:3px;color:#fb923c;font-variant-numeric:tabular-nums}
.hdc-gate-tile.closed .hdc-gate-timer,.hdc-gate-tile.locked .hdc-gate-timer{display:none}
.hdc-mailbox{display:flex;align-items:center;gap:10px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:11px;padding:8px 12px;margin-top:7px}
.hdc-mailbox.mail{background:rgba(251,191,36,.08);border-color:rgba(251,191,36,.35)}
.hdc-mailbox-ico{font-size:22px;flex-shrink:0}
.hdc-mailbox-info{flex:1;min-width:0}
.hdc-mailbox-status{font-size:11px;font-weight:600;color:#94a3b8}
.hdc-mailbox.mail .hdc-mailbox-status{color:#fbbf24}
.hdc-mailbox-batt{font-size:10px;color:#475569;margin-top:2px}
.hdc-sw-tile{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:12px;padding:12px 14px;cursor:pointer;transition:all .15s;display:flex;align-items:center;gap:10px;user-select:none}
.hdc-sw-tile:hover{background:rgba(255,255,255,.07)}
.hdc-sw-tile.on{background:rgba(56,189,248,.1);border-color:rgba(56,189,248,.3)}
.hdc-sw-tile.on.light{background:rgba(251,191,36,.1);border-color:rgba(251,191,36,.3)}
.hdc-sw-tile-ico{font-size:20px;width:32px;text-align:center;flex-shrink:0}
.hdc-sw-tile-info{flex:1;min-width:0}
.hdc-sw-tile-name{font-size:11px;font-weight:500;color:#94a3b8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.hdc-sw-tile.on .hdc-sw-tile-name{color:#e2e8f0}
.hdc-sw-tile-state{font-size:10px;margin-top:2px;color:#334155}
.hdc-sw-tile.on .hdc-sw-tile-state{color:#38bdf8}
.hdc-sw-tile.on.light .hdc-sw-tile-state{color:#fbbf24}
.hdc-sw-dot{width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,.1);flex-shrink:0}
.hdc-sw-tile.on .hdc-sw-dot{background:#38bdf8}
.hdc-sw-tile.on.light .hdc-sw-dot{background:#fbbf24}
.hdc-sw-timer{font-size:9px;color:#475569;margin-top:2px;font-variant-numeric:tabular-nums;display:none}
.hdc-sw-tile.on .hdc-sw-timer{display:block;color:#38bdf8}
.hdc-sw-tile.on.light .hdc-sw-timer{color:#fbbf24}
.hdc-comfort-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:10px}
.hdc-comfort-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:13px;padding:12px 14px;position:relative}
.hdc-comfort-room{font-size:12px;font-weight:700;color:#e2e8f0;margin-bottom:10px;display:flex;align-items:center;gap:6px}
.hdc-comfort-sensors{display:grid;grid-template-columns:1fr 1fr;gap:5px 10px}
.hdc-cs{display:flex;flex-direction:column;gap:1px;cursor:pointer;border-radius:6px;padding:3px 4px;margin:-3px -4px;transition:background .12s}
.hdc-cs-label{font-size:9px;color:#475569;text-transform:uppercase;letter-spacing:.04em}
.hdc-cs-val{font-size:14px;font-weight:600;color:#e2e8f0;font-variant-numeric:tabular-nums}
.hdc-cs-wide{grid-column:1/-1}
.hdc-chum{display:flex;align-items:center;gap:8px;margin-top:10px;padding-top:8px;border-top:1px solid rgba(255,255,255,.06);flex-wrap:wrap}
.hdc-chum-toggle{font-size:10px!important;height:26px!important;padding:0 10px!important;width:auto!important}
.hdc-chum-hum{display:flex;align-items:center;gap:6px;margin-left:auto}
.hdc-chum-val{font-size:12px;font-weight:600;color:#e2e8f0;min-width:36px;text-align:center;font-variant-numeric:tabular-nums}
.hdc-chum-btn{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:7px;color:#94a3b8;cursor:pointer;width:26px;height:26px;font-size:15px;line-height:1;display:flex;align-items:center;justify-content:center;transition:background .12s}
.hdc-chum-btn:hover{background:rgba(255,255,255,.12)}
.hdc-cbatt{display:flex;align-items:center;gap:5px;margin-top:8px;padding-top:7px;border-top:1px solid rgba(255,255,255,.06);font-size:10px;color:#475569}
.hdc-cbatt-bar{flex:1;height:5px;border-radius:3px;background:rgba(255,255,255,.08);overflow:hidden}
.hdc-cbatt-fill{height:100%;border-radius:3px;transition:width .3s}
.hdc-cupdated{font-size:9px;color:#334155;font-variant-numeric:tabular-nums;position:absolute;bottom:8px;right:10px}.hdc-cs:hover{background:rgba(255,255,255,.06)}
.hdc-hm-overlay{position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.75);display:flex;align-items:center;justify-content:center}
.hdc-hm-box{background:#0f172a;border:1px solid rgba(255,255,255,.12);border-radius:16px;padding:20px;width:660px;max-width:95vw}
.hdc-hm-head{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:14px}
.hdc-hm-title{font-size:14px;font-weight:700;color:#e2e8f0}
.hdc-hm-entity{font-size:10px;color:#475569;margin-top:2px}
.hdc-hm-close{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:8px;color:#94a3b8;cursor:pointer;font-size:16px;width:32px;height:32px;display:flex;align-items:center;justify-content:center;transition:background .12s}
.hdc-hm-close:hover{background:rgba(255,255,255,.12);color:#e2e8f0}
.hdc-hm-ranges{display:flex;gap:6px;margin-bottom:14px;flex-wrap:wrap}
.hdc-hm-range{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:7px;color:#94a3b8;cursor:pointer;font-size:11px;padding:5px 12px;transition:all .12s}
.hdc-hm-range.active,.hdc-hm-range:hover{background:rgba(56,189,248,.15);border-color:#38bdf8;color:#38bdf8}
.hdc-hm-chart-wrap{position:relative;height:280px}
.hdc-hm-loading{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#475569;font-size:12px;background:#0f172a}
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

function formatAgo(isoString) {
  if (!isoString) return '—';
  const secs = Math.floor((Date.now() - new Date(isoString).getTime()) / 1000);
  if (secs < 5)   return 'przed chwilą';
  if (secs < 60)  return `${secs} s temu`;
  const m = Math.floor(secs / 60);
  if (m < 60)     return `${m} min temu`;
  const h = Math.floor(m / 60);
  if (h < 24)     return `${h} h temu`;
  return `${Math.floor(h / 24)} dni temu`;
}

function _comfortLastUpdated(hass, room) {
  const entity = room.temperature || room.humidity || room.pressure;
  if (!entity) return null;
  return hass.states[entity]?.last_updated || null;
}

function personLocation(hass, loc) {
  if (!loc || loc === 'unknown') return { label: 'Poza domem', color: '#f87171', isHome: false };
  if (loc === 'home') return { label: 'W domu', color: '#4ade80', isHome: true };
  if (loc === 'not_home') return { label: 'Poza domem', color: '#f87171', isHome: false };
  const zoneName = hass.states[`zone.${loc}`]?.attributes?.friendly_name || loc;
  return { label: zoneName, color: '#fbbf24', isHome: false };
}

function formatGateElapsed(lastChanged) {
  const secs = Math.floor((Date.now() - new Date(lastChanged).getTime()) / 1000);
  if (secs < 0) return '';
  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  const s = secs % 60;
  if (h > 0) return `⏱ ${h}h ${String(m).padStart(2,'0')}m`;
  if (m > 0) return `⏱ ${m}m ${String(s).padStart(2,'0')}s`;
  return `⏱ ${s}s`;
}

function renderOsoby(hass, cfg) {
  const persons = cfg.persons || [];
  let cards = persons.map((p, i) => {
    const loc = sv(hass, p.entity, 'unknown');
    const { label: locLabel, color: locColor, isHome } = personLocation(hass, loc);
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
            <div style="font-size:10px;margin-top:2px;color:${locColor}">● ${locLabel}</div>
          </div>
        </div>
        <div class="hdc-chips">
          ${p.battery_state ? `<span class="hdc-ch ${charging?'g':''}">${charging?'⚡ Ładuje':'Brak ładowania'}</span>` : ''}
          ${p.battery_level ? `<span class="hdc-ch ${battColor(bl)}">${battIcon(bl)} ${bl}%</span>` : ''}
          ${p.steps ? `<span class="hdc-ch y">👟 ${parseInt(steps).toLocaleString('pl')}</span>` : ''}
        </div>
      </div>`;
  }).join('');

  // Gates / Garage section
  const gates = cfg.gates || [];
  let gatesHtml = '';
  if (gates.length) {
    const stateLabel = st => ({ open: 'Otwarta', closed: 'Zamknięta', opening: 'Otwieranie…', closing: 'Zamykanie…', locked: 'Zamknięta', unlocked: 'Otwarta' }[st] || st || '—');
    const tiles = gates.map(g => {
      const st = hass.states[g.entity];
      const state = st?.state || 'unknown';
      const ico = g.icon || (g.entity.includes('garaz') || g.entity.includes('garage') ? '🏠' : g.entity.includes('bramka') || g.entity.includes('wicket') ? '🚶' : '🚗');
      const lightOn = g.light ? hass.states[g.light]?.state === 'on' : null;
      const lightHtml = lightOn !== null
        ? `<div class="hdc-gate-light${lightOn ? ' on' : ''}">💡 ${lightOn ? 'Włączone' : 'Wyłączone'}</div>`
        : '';
      const isOpen = ['open', 'unlocked', 'opening', 'closing'].includes(state);
      const timerText = isOpen && st?.last_changed ? formatGateElapsed(st.last_changed) : '';
      return `<div id="hdc-gate-${g.entity.replace('.', '-')}" class="hdc-gate-tile ${state}" data-action="${g.entity.startsWith('lock.') ? 'lock_toggle' : 'cover_toggle'}" data-entity="${g.entity}">
        <div class="hdc-gate-ico">${ico}</div>
        <div class="hdc-gate-name">${g.name || st?.attributes?.friendly_name || g.entity}</div>
        <div class="hdc-gate-state">${stateLabel(state)}</div>
        <div class="hdc-gate-timer">${timerText}</div>
        ${lightHtml}
      </div>`;
    }).join('');
    const mbCfg = cfg.mailbox;
    let mailboxHtml = '';
    if (mbCfg) {
      const mbSt = hass.states[mbCfg.entity];
      const hasMail = mbSt?.state === 'on';
      const battSt = mbCfg.battery ? hass.states[mbCfg.battery] : null;
      const battVal = battSt ? Math.round(parseFloat(battSt.state)) : null;
      const battColor = battVal !== null ? (battVal > 50 ? '#4ade80' : battVal > 20 ? '#fbbf24' : '#f87171') : '#475569';
      mailboxHtml = `<div id="hdc-mailbox" class="hdc-mailbox${hasMail ? ' mail' : ''}">
        <div class="hdc-mailbox-ico">${hasMail ? '📬' : '📭'}</div>
        <div class="hdc-mailbox-info">
          <div class="hdc-mailbox-status">${mbCfg.name || 'Skrzynka pocztowa'} — ${hasMail ? 'Jest poczta!' : 'Pusta'}</div>
          ${battVal !== null ? `<div class="hdc-mailbox-batt" style="color:${battColor}">🔋 ${battVal}%</div>` : ''}
        </div>
      </div>`;
    }
    gatesHtml = `<div class="hdc-st" style="margin-top:14px">Bramy i garaże</div>
      <div class="hdc-gate-grid">${tiles}</div>${mailboxHtml}`;
  }

  // Waste collection section
  const wasteSensors = (cfg.waste || {}).sensors || [];
  let wasteRows = '';
  if (wasteSensors.length) {
    const rows = wasteSensors
      .filter(ws => !(ws.toggle && hass.states[ws.toggle] && hass.states[ws.toggle].state !== 'on'))
      .map(ws => {
        const st = hass.states[ws.entity];
        return { ws, st, daysTo: st?.attributes?.daysTo != null ? parseInt(st.attributes.daysTo) : Infinity };
      })
      .sort((a, b) => a.daysTo - b.daysTo || (a.ws.name || '').localeCompare(b.ws.name || '', 'pl'))
      .map(({ ws, st }) => {
      if (!st) return '';
      const daysTo = st.attributes.daysTo != null ? parseInt(st.attributes.daysTo) : null;
      // Stan sensora to data sformatowana przez value_template w HA
      const dateStr = (st.state && st.state !== 'unknown' && st.state !== 'unavailable') ? st.state : '—';
      let urgency = '', daysLabel = '—';
      if (daysTo === 0)                    { urgency = '#f87171'; daysLabel = '🔴 Dziś!'; }
      else if (daysTo === 1)               { urgency = '#fb923c'; daysLabel = '🟠 Jutro'; }
      else if (daysTo !== null && daysTo <= 3) { urgency = '#fbbf24'; daysLabel = `za ${daysTo} dni`; }
      else if (daysTo !== null)            { urgency = '#64748b'; daysLabel = `za ${daysTo} dni`; }
      const urgent = daysTo !== null && daysTo <= 1;
      return `<div style="display:flex;align-items:center;gap:10px;padding:8px 10px;background:${urgent?'rgba(248,113,113,.12)':'rgba(255,255,255,.03)'};border-radius:8px;border:1px solid ${urgent?'rgba(248,113,113,.4)':'rgba(255,255,255,.06)'}">
        <span style="font-size:20px">${ws.icon || '🗑️'}</span>
        <div style="flex:1;min-width:0">
          <div style="font-size:12px;font-weight:600;color:${urgent?'#fca5a5':'#f1f5f9'}">${ws.name || ws.entity}</div>
          <div style="font-size:10px;color:${urgent?'#f87171':'#475569'}">${dateStr}</div>
        </div>
        <div style="font-size:11px;font-weight:600;color:${urgency || '#64748b'}">${daysLabel}</div>
      </div>`;
      }).filter(Boolean).join('');
    wasteRows = `
      <div class="hdc-st" style="margin-top:14px">Harmonogram odpadów</div>
      <div style="display:flex;flex-direction:column;gap:6px">${rows || '<div style="color:#475569;font-size:11px;padding:8px">Brak danych</div>'}</div>`;
  }

  return `
    <div style="display:flex;gap:12px;align-items:flex-start">
      <div style="flex:1;min-width:0">
        <div id="hdc-persons-list"><div class="hdc-ga">${cards}</div></div>
        ${gatesHtml}
        ${wasteRows}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:10px;color:#475569;margin:0 0 4px;padding-left:2px">📍 Lokalizacje</div>
        <div id="hdc-fmap-real" style="height:570px;border-radius:13px;overflow:hidden;border:1px solid rgba(255,255,255,.07)"></div>
      </div>
    </div>`;
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

  const sh = (entity, label) => entity ? ` style="cursor:pointer" data-action="sensor_history" data-entity="${entity}" data-label="${label}"` : '';
  return `
    <div class="hdc-g3" style="margin-bottom:10px">
      <div class="hdc-sc"${sh(e.total_power,  'Moc całkowita')}><div class="hdc-sc-lbl">Moc całkowita</div><div class="hdc-sc-val" style="color:#38bdf8">${pw} W</div><div class="hdc-sc-sub">live · teraz</div></div>
      <div class="hdc-sc"${sh(e.daily_kwh,    'Zużycie dziś')}><div class="hdc-sc-lbl">Zużycie dziś</div><div class="hdc-sc-val" style="color:#fbbf24">${kwh} kWh</div><div class="hdc-sc-sub">dobowe</div></div>
      <div class="hdc-sc"${sh(e.monthly_kwh,  'Ten miesiąc')}><div class="hdc-sc-lbl">Ten miesiąc</div><div class="hdc-sc-val" style="color:#4ade80">${mkwh} kWh</div><div class="hdc-sc-sub">kalendarzowo</div></div>
    </div>
    ${e.voltage_l1 ? `
    <div class="hdc-st">Napięcia i moce fazowe</div>
    <div class="hdc-g3" style="margin-bottom:10px">
      <div class="hdc-box"${sh(e.voltage_l1, 'Napięcie L1')}>
        <div class="hdc-box-title">L1</div>
        <div class="hdc-ir"><span class="hdc-ir-lbl">Napięcie</span><span class="hdc-ir-val ${vColor(v1)}">${v1} V</span></div>
        <div class="hdc-ir"><span class="hdc-ir-lbl">Moc</span><span class="hdc-ir-val b">${p1} W</span></div>
      </div>
      <div class="hdc-box"${sh(e.voltage_l2, 'Napięcie L2')}>
        <div class="hdc-box-title">L2</div>
        <div class="hdc-ir"><span class="hdc-ir-lbl">Napięcie</span><span class="hdc-ir-val ${vColor(v2)}">${v2} V</span></div>
        <div class="hdc-ir"><span class="hdc-ir-lbl">Moc</span><span class="hdc-ir-val b">${p2} W</span></div>
      </div>
      <div class="hdc-box"${sh(e.voltage_l3, 'Napięcie L3')}>
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
        <div class="hdc-ir"${sh(t.szczytowa_daily,     '☀ Szczytowa dziś')}><span class="hdc-ir-lbl">☀ Szczytowa</span><span class="hdc-ir-val o">${tSD} kWh</span></div>
        <div class="hdc-ir"${sh(t.pozaszczytowa_daily, '🌤 Pozaszczytowa dziś')}><span class="hdc-ir-lbl">🌤 Pozaszczytowa</span><span class="hdc-ir-val y">${tPD} kWh</span></div>
        <div class="hdc-ir"${sh(t.nocna_daily,         '🌙 Nocna dziś')}><span class="hdc-ir-lbl">🌙 Nocna</span><span class="hdc-ir-val b">${tND} kWh</span></div>
        <div class="hdc-ir" style="border-top:1px solid rgba(255,255,255,.07);margin-top:4px;padding-top:4px"><span class="hdc-ir-lbl">Σ Razem</span><span class="hdc-ir-val">${tSumD} kWh</span></div>
      </div>
      ${t.szczytowa_monthly ? `
      <div class="hdc-box">
        <div class="hdc-box-title">Zużycie w miesiącu</div>
        <div class="hdc-ir"${sh(t.szczytowa_monthly,     '☀ Szczytowa miesiąc')}><span class="hdc-ir-lbl">☀ Szczytowa</span><span class="hdc-ir-val o">${tSM} kWh</span></div>
        <div class="hdc-ir"${sh(t.pozaszczytowa_monthly, '🌤 Pozaszczytowa miesiąc')}><span class="hdc-ir-lbl">🌤 Pozaszczytowa</span><span class="hdc-ir-val y">${tPM} kWh</span></div>
        <div class="hdc-ir"${sh(t.nocna_monthly,         '🌙 Nocna miesiąc')}><span class="hdc-ir-lbl">🌙 Nocna</span><span class="hdc-ir-val b">${tNM} kWh</span></div>
        <div class="hdc-ir" style="border-top:1px solid rgba(255,255,255,.07);margin-top:4px;padding-top:4px"><span class="hdc-ir-lbl">Σ Razem</span><span class="hdc-ir-val">${tSumM} kWh</span></div>
      </div>` : ''}
    </div>` : ''}
    ${consumers ? `<div class="hdc-st">Top odbiorniki</div>${consumers}` : ''}`;
}

function renderVaillant(hass, cfg) {
  const v = cfg.vaillant || {};
  const coTemp   = sn(hass, v.temp_current || sa(hass, v.climate_co, 'current_temperature') ? v.climate_co : null, 1);
  const coTmpInp = v.co_temp_input;
  const coSet    = coTmpInp ? sn(hass, coTmpInp, 1)
    : sa(hass, v.climate_co, 'temperature') || sa(hass, v.climate_co, 'target_temp_high') || sa(hass, v.climate_co, 'target_temp_low') || '—';
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

  const PM_LABEL   = { schedule:'Harmonogram', manual:'Ręczny', eco:'Eco', away:'Poza domem',
    boost:'Turbo', sleep:'Sen', home:'Dom', comfort:'Komfort', off:'Wyłączony', none:'—' };
  const HVAC_LABEL = { heat:'Grzanie', auto:'Auto', heat_cool:'Auto', cool:'Chłodzenie',
    fan_only:'Wentylator', dry:'Osuszanie', off:'Wył.' };
  const pmLabel   = p => PM_LABEL[p]   || p;
  const hvacLabel = m => HVAC_LABEL[m] || m;
  const modeStatus = (hvac, pmCur) => hvac === 'off' ? 'Wyłączone'
    : `${hvacLabel(hvac)}${pmCur && pmCur !== 'none' ? ' · ' + pmLabel(pmCur) : ''}`;

  const coPmCur   = sa(hass, v.climate_co,  'preset_mode')  || '';
  const coPmList  = (sa(hass, v.climate_co,  'preset_modes') || []).filter(p => p !== 'none');
  const coHvac    = sv(hass, v.climate_co,   'off');
  const coHvacModes = sa(hass, v.climate_co, 'hvac_modes') || [];

  const cwuPmCur   = sa(hass, v.climate_cwu, 'preset_mode')  || '';
  const cwuPmList  = (sa(hass, v.climate_cwu,'preset_modes') || []).filter(p => p !== 'none');
  const cwuHvac    = sv(hass, v.climate_cwu, 'off');
  const cwuHvacModes = sa(hass, v.climate_cwu,'hvac_modes') || [];

  const modeBtns = (entity, pmList, pmCur, hvac, hvacModes) => `
    <div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:6px;justify-content:center">
      ${hvacModes.filter(m => m !== 'none').map(m => {
        const isOff = m === 'off';
        const active = hvac === m;
        const style = active ? (isOff
          ? 'background:rgba(248,113,113,.2);border-color:#f87171;color:#f87171'
          : 'background:rgba(56,189,248,.15);border-color:#38bdf8;color:#38bdf8') : '';
        return `<button class="hdc-tbtn" style="font-size:10px;width:auto;height:22px;padding:0 8px;${style}"
          data-action="set_hvac_mode" data-entity="${entity}" data-mode="${m}">${isOff?'⏻ ':''}${hvacLabel(m)}</button>`;
      }).join('')}
      ${hvac !== 'off' ? pmList.map(p => `<button class="hdc-tbtn" style="font-size:10px;width:auto;height:22px;padding:0 8px;${pmCur===p?'background:rgba(56,189,248,.15);border-color:#38bdf8;color:#38bdf8':''}"
        data-action="set_preset" data-entity="${entity}" data-preset="${p}">${pmLabel(p)}</button>`).join('') : ''}
    </div>`;

  return `
    <div class="hdc-st">Termostaty</div>
    <div class="hdc-ga" style="margin-bottom:10px">
      <div class="hdc-thcard">
        <div class="hdc-th-title">🏠 Ogrzewanie CO</div>
        <div id="hdc-vl-coact" class="hdc-th-big" style="color:#fb923c">${coAct}°</div>
        <div class="hdc-th-target">cel: <span id="hdc-co-set">${coSet}</span>°C</div>
        <div class="hdc-th-btns">
          ${coTmpInp ? `
          <button class="hdc-tbtn" data-action="input_down" data-entity="${coTmpInp}" data-step="0.5" data-min="-50" data-max="100">−</button>
          <button class="hdc-tbtn" data-action="input_up"   data-entity="${coTmpInp}" data-step="0.5" data-min="-50" data-max="100">+</button>
          ` : `
          <button class="hdc-tbtn" data-action="climate_down" data-entity="${v.climate_co}" data-step="0.5">−</button>
          <button class="hdc-tbtn" data-action="climate_up"   data-entity="${v.climate_co}" data-step="0.5">+</button>
          `}
        </div>
        <div id="hdc-vl-flame" class="hdc-th-mode heat">● ${modeStatus(coHvac, coPmCur)}</div>
        ${modeBtns(v.climate_co, coPmList, coPmCur, coHvac, coHvacModes)}
      </div>
      <div class="hdc-thcard">
        <div class="hdc-th-title">🚿 CWU</div>
        <div id="hdc-vl-cwucur" class="hdc-th-big" style="color:#38bdf8">${cwuCur}°</div>
        <div class="hdc-th-target">cel: <span id="hdc-cwu-set">${cwuTgt}</span>°C</div>
        <div class="hdc-th-btns">
          <button class="hdc-tbtn" data-action="climate_down" data-entity="${v.climate_cwu}" data-step="1">−</button>
          <button class="hdc-tbtn" data-action="climate_up" data-entity="${v.climate_cwu}" data-step="1">+</button>
        </div>
        <div id="hdc-vl-cwumode" class="hdc-th-mode dhw">● ${modeStatus(cwuHvac, cwuPmCur)}</div>
        ${modeBtns(v.climate_cwu, cwuPmList, cwuPmCur, cwuHvac, cwuHvacModes)}
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
  const orlenWearM3  = sv(hass, m.orlen_wear_m3, '—');
  const orlenWearKwh = sv(hass, m.orlen_wear_kwh, '—');
  const orlenConv    = sv(hass, m.orlen_conversion, '—');
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
      ${m.tauron_daily     ? `<div class="hdc-sc" style="cursor:pointer" data-action="sensor_history" data-entity="${m.tauron_daily}"     data-label="Dziś łącznie"><div class="hdc-sc-lbl">Dziś łącznie</div><div class="hdc-sc-val" style="color:#fbbf24">${daily} kWh</div><div class="hdc-sc-sub">szczyt+poza+noc</div></div>` : ''}
      ${m.tauron_monthly   ? `<div class="hdc-sc" style="cursor:pointer" data-action="sensor_history" data-entity="${m.tauron_monthly}"   data-label="Miesiąc"><div class="hdc-sc-lbl">Miesiąc</div><div class="hdc-sc-val" style="color:#4ade80">${monthly} kWh</div></div>` : ''}
      ${m.tauron_price     ? `<div class="hdc-sc" style="cursor:pointer" data-action="sensor_history" data-entity="${m.tauron_price}"     data-label="Cena aktualna"><div class="hdc-sc-lbl">Cena aktualna</div><div class="hdc-sc-val" style="color:#f87171">${price} zł/kWh</div></div>` : ''}
    </div>
    <div class="hdc-g3" style="margin-bottom:12px">
      ${m.tauron_daily_peak    ? `<div class="hdc-box" style="cursor:pointer" data-action="sensor_history" data-entity="${m.tauron_daily_peak}"    data-label="⚡ Szczytowa"><div class="hdc-box-title" style="color:#fbbf24">⚡ Szczytowa</div><div class="hdc-sc-val" style="color:#fbbf24;font-size:22px">${dailyPeak} kWh</div></div>` : ''}
      ${m.tauron_daily_offpeak ? `<div class="hdc-box" style="cursor:pointer" data-action="sensor_history" data-entity="${m.tauron_daily_offpeak}" data-label="⚡ Pozaszczytowa"><div class="hdc-box-title" style="color:#a78bfa">⚡ Pozaszczytowa</div><div class="hdc-sc-val" style="color:#a78bfa;font-size:22px">${dailyOff} kWh</div></div>` : ''}
      ${m.tauron_daily_night   ? `<div class="hdc-box" style="cursor:pointer" data-action="sensor_history" data-entity="${m.tauron_daily_night}"   data-label="🌙 Nocna"><div class="hdc-box-title" style="color:#38bdf8">🌙 Nocna</div><div class="hdc-sc-val" style="color:#38bdf8;font-size:22px">${dailyNight} kWh</div></div>` : ''}
    </div>
    <div class="hdc-st">🔵 myORLEN · Gaz</div>
    <div class="hdc-g3" style="margin-bottom:6px">
      ${m.orlen_meter   ? `<div class="hdc-sc" style="cursor:pointer" data-action="sensor_history" data-entity="${m.orlen_meter}"   data-label="Odczyt licznika"><div class="hdc-sc-lbl">Odczyt licznika</div><div class="hdc-sc-val" style="color:#a78bfa;font-size:15px">${orlenMeter} m³</div></div>` : ''}
      <div class="hdc-sc"><div class="hdc-sc-lbl">Ostatnia faktura</div><div class="hdc-sc-val" style="color:#fbbf24;font-size:15px">${orlenInv}</div></div>
      ${m.orlen_cost    ? `<div class="hdc-sc" style="cursor:pointer" data-action="sensor_history" data-entity="${m.orlen_cost}"    data-label="Tracking kosztów"><div class="hdc-sc-lbl">Tracking kosztów</div><div class="hdc-sc-val" style="color:#4ade80;font-size:15px">${orlenCost}</div></div>` : ''}
    </div>
    <div class="hdc-g3" style="margin-bottom:10px">
      ${m.orlen_wear_m3   ? `<div class="hdc-sc" style="cursor:pointer" data-action="sensor_history" data-entity="${m.orlen_wear_m3}"   data-label="Zużycie m³"><div class="hdc-sc-lbl">Zużycie (faktura) m³</div><div class="hdc-sc-val" style="color:#a78bfa;font-size:15px">${orlenWearM3} m³</div></div>` : ''}
      ${m.orlen_wear_kwh  ? `<div class="hdc-sc" style="cursor:pointer" data-action="sensor_history" data-entity="${m.orlen_wear_kwh}"  data-label="Zużycie kWh"><div class="hdc-sc-lbl">Zużycie (faktura) kWh</div><div class="hdc-sc-val" style="color:#38bdf8;font-size:15px">${orlenWearKwh} kWh</div></div>` : ''}
      ${m.orlen_conversion? `<div class="hdc-sc" style="cursor:pointer" data-action="sensor_history" data-entity="${m.orlen_conversion}" data-label="Wsp. konwersji"><div class="hdc-sc-lbl">Wsp. konwersji</div><div class="hdc-sc-val" style="color:#fb923c;font-size:15px">${orlenConv} kWh/m³</div></div>` : ''}
    </div>
    <div class="hdc-st">💧 Woda</div>
    <div class="hdc-g2" style="margin-bottom:10px">
      ${m.water_meter    ? `<div class="hdc-sc" style="cursor:pointer" data-action="sensor_history" data-entity="${m.water_meter}"    data-label="Stan licznika"><div class="hdc-sc-lbl">Stan licznika</div><div class="hdc-sc-val" style="color:#2dd4bf">${waterMeter} m³</div></div>` : ''}
      ${m.water_quarterly? `<div class="hdc-sc" style="cursor:pointer" data-action="sensor_history" data-entity="${m.water_quarterly}" data-label="Kwartalnie"><div class="hdc-sc-lbl">Kwartalnie</div><div class="hdc-sc-val" style="color:#38bdf8">${waterQ} m³</div></div>` : ''}
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
    // Porty PoE (sw01/sw02/sw03) są zawsze klikalne; porty routera tylko gdy switch.*
    const canClick = p.entity && (poe || p.entity.startsWith('switch.'));
    const clickAttr = canClick ? ` data-action="toggle" data-entity="${p.entity}"` : '';
    const eid = `hdc-port-${p.entity.replace('.', '-')}`;
    return `<div id="${eid}" class="hdc-port${canClick?' clickable':''} ${on?(poe?'poe':'up'):'down'}" title="${p.label}${canClick?(on?' — kliknij aby wyłączyć':' — kliknij aby włączyć'):''}"${clickAttr}>
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
          ? `<img id="hdc-focus-img" src="${camUrl(focusCam.entity)}" data-entity="${focusCam.entity}" alt="${focusCam.name}">`
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

    // Location from device_tracker (supports both 'location' and 'device_tracker' YAML keys)
    const tracker = v.location || v.device_tracker;
    let locLine = '';
    if (tracker) {
      const dtSt = hass.states[tracker];
      if (dtSt) {
        const zone = dtSt.state;
        const addr = dtSt.attributes.address || dtSt.attributes.location_name || null;
        const locLabel = addr || (zone === 'home' ? '🏠 Dom' : zone === 'not_home' ? '🚗 W trasie' : zone);
        locLine = `<div style="font-size:11px;color:#64748b;margin:6px 0 2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">📍 ${locLabel}</div>`;
      }
    }

    // Map placeholder
    const mapDiv = tracker
      ? `<div id="hdc-car-map-${idx}" style="height:380px;border-radius:10px;overflow:hidden;border:1px solid rgba(255,255,255,.07);margin-top:8px"></div>`
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
          ${bat !== null ? `<div class="hdc-sc" style="padding:8px"><div class="hdc-sc-lbl">Bat. 12V</div><div class="hdc-sc-val" style="color:${battColor(bat)};font-size:15px">${bat}%</div></div>` : `<div class="hdc-sc" style="padding:8px"><div class="hdc-sc-lbl">&nbsp;</div><div class="hdc-sc-val">&nbsp;</div></div>`}
        </div>
        ${lastUpd !== '—' ? `<div style="font-size:10px;color:#475569;margin-bottom:6px">🕐 ${lastUpd}</div>` : ''}
        <div class="hdc-chips">
          ${locked !== null ? `<button id="hdc-car-lock-${idx}" class="hdc-tbtn" style="font-size:11px;width:auto;height:24px;padding:0 10px;${locked?'background:rgba(74,222,128,.15);border-color:#4ade80;color:#4ade80':'background:rgba(248,113,113,.15);border-color:#f87171;color:#f87171'}" data-action="lock_toggle" data-entity="${v.lock}">${locked?'🔒 Zamknięty':'🔓 Otwarty'}</button>` : ''}
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
  const ramFreeRaw = sv(hass, p.node_ram_free, '');
  const ramFree = ramFreeRaw !== '' ? (parseFloat(ramFreeRaw).toFixed(2) + ' GB') : '—';
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
//  PRZEŁĄCZNIKI
// ============================================================

function renderPrzelaczniki(hass, cfg) {
  const groups = (cfg.switches || {}).groups || [];
  if (!groups.length) return `<div style="color:#475569;font-size:12px;padding:12px">Brak konfiguracji przełączników.<br>Dodaj sekcję <code>switches.groups</code> w konfiguracji karty.</div>`;

  return groups.map(group => {
    const entities = group.entities || [];
    const showTimer = !!group.show_timer;
    const tiles = entities.map(item => {
      const st = hass.states[item.entity];
      const isOn = st ? st.state === 'on' : false;
      const isLight = item.entity.startsWith('light.');
      const domain = item.entity.split('.')[0];
      const defaultIco = isLight ? (isOn ? '💡' : '🔆') : domain === 'switch' ? '🔌' : domain === 'fan' ? '💨' : '⚙️';
      const ico = item.icon || defaultIco;
      const name = item.name || st?.attributes?.friendly_name || item.entity;
      const stateLabel = isOn ? 'Włączone' : 'Wyłączone';
      const typeClass = isLight ? 'light' : '';
      const swId = `hdc-sw-${item.entity.replace('.', '-')}`;
      const timerHtml = showTimer ? `<div class="hdc-sw-timer">${isOn && st?.last_changed ? formatGateElapsed(st.last_changed) : ''}</div>` : '';
      return `<div id="${swId}" class="hdc-sw-tile${isOn ? ' on' : ''}${typeClass ? ' ' + typeClass : ''}" data-action="toggle" data-entity="${item.entity}">
        <div class="hdc-sw-tile-ico">${ico}</div>
        <div class="hdc-sw-tile-info">
          <div class="hdc-sw-tile-name">${name}</div>
          <div class="hdc-sw-tile-state">${stateLabel}</div>
          ${timerHtml}
        </div>
        <div class="hdc-sw-dot"></div>
      </div>`;
    }).join('');

    return `<div class="hdc-st">${group.icon ? group.icon + ' ' : ''}${group.name || 'Grupa'}</div>
      <div class="hdc-gaa" style="margin-bottom:14px">${tiles}</div>`;
  }).join('');
}


function _tempColor(v)  { return v < 16 ? '#38bdf8' : v < 20 ? '#7dd3fc' : v < 25 ? '#4ade80' : v < 28 ? '#fbbf24' : '#f87171'; }
function _humColor(v)   { return v < 30 ? '#fb923c' : v < 60 ? '#4ade80' : '#38bdf8'; }
function _co2Color(v)   { return v < 800 ? '#4ade80' : v < 1200 ? '#fbbf24' : '#f87171'; }
function _aqiColor(v)   { return v < 50 ? '#4ade80' : v < 100 ? '#fbbf24' : v < 150 ? '#fb923c' : '#f87171'; }
function _vocColor(v)   { return v < 220 ? '#4ade80' : v < 660 ? '#fbbf24' : '#f87171'; }
function _luxColor(v)   { return v < 50 ? '#64748b' : v < 1000 ? '#fbbf24' : '#fde68a'; }

const COMFORT_SENSORS = [
  { key: 'temperature',  label: '🌡️ Temperatura',   unit: '°C',     dec: 1, colorFn: _tempColor },
  { key: 'humidity',     label: '💧 Wilgotność',     unit: '%',      dec: 0, colorFn: _humColor },
  { key: 'pressure',     label: '🔵 Ciśnienie',      unit: ' hPa',   dec: 0 },
  { key: 'illuminance',  label: '☀️ Nasłonecz.',     unit: ' lx',    dec: 0, colorFn: _luxColor },
  { key: 'co2',          label: 'CO₂',               unit: ' ppm',   dec: 0, colorFn: _co2Color },
  { key: 'aqi',          label: 'AQI',               unit: '',       dec: 0, colorFn: _aqiColor },
  { key: 'pm25',         label: 'PM2.5',             unit: ' µg/m³', dec: 1 },
  { key: 'pm10',         label: 'PM10',              unit: ' µg/m³', dec: 1 },
  { key: 'voc',          label: 'VOC',               unit: ' ppb',   dec: 0, colorFn: _vocColor },
];

function _comfortSensorHtml(hass, room) {
  return COMFORT_SENSORS.filter(s => room[s.key]).map(s => {
    const st = hass.states[room[s.key]];
    const raw = st ? parseFloat(st.state) : NaN;
    const display = isNaN(raw) ? '—' : raw.toFixed(s.dec) + s.unit;
    const color = !isNaN(raw) && s.colorFn ? s.colorFn(raw) : '#e2e8f0';
    return `<div class="hdc-cs" id="hdc-cs-${room[s.key].replace('.', '-')}" data-action="sensor_history" data-entity="${room[s.key]}" data-label="${s.label}">
      <div class="hdc-cs-label">${s.label}</div>
      <div class="hdc-cs-val" style="color:${color}">${display}</div>
    </div>`;
  }).join('');
}

function _comfortHumHtml(hass, room) {
  if (!room.humidifier) return '';
  const st = hass.states[room.humidifier];
  const isOn = st?.state === 'on';
  const target = st?.attributes?.humidity ?? null;
  const minH = st?.attributes?.min_humidity ?? 20;
  const maxH = st?.attributes?.max_humidity ?? 80;
  const step = Math.max(1, Math.round((maxH - minH) / 15));
  const eid = room.humidifier.replace('.', '-');
  return `<div class="hdc-chum" id="hdc-chum-${eid}">
    <button class="hdc-tbtn hdc-chum-toggle" data-action="humidifier_toggle" data-entity="${room.humidifier}"
      style="font-size:10px;height:26px;padding:0 10px;width:auto;${isOn ? 'background:rgba(56,189,248,.15);border-color:#38bdf8;color:#38bdf8' : ''}">
      💧 ${isOn ? 'Włączony' : 'Wyłączony'}
    </button>
    ${target !== null ? `<div class="hdc-chum-hum">
      <button class="hdc-chum-btn" data-action="humidifier_hum" data-entity="${room.humidifier}" data-delta="${-step}">−</button>
      <span class="hdc-chum-val" id="hdc-chumv-${eid}">${target}%</span>
      <button class="hdc-chum-btn" data-action="humidifier_hum" data-entity="${room.humidifier}" data-delta="${step}">+</button>
    </div>` : ''}
  </div>`;
}

function _comfortBattHtml(hass, room) {
  if (!room.battery) return '';
  const st = hass.states[room.battery];
  const val = st ? Math.round(parseFloat(st.state)) : NaN;
  const display = isNaN(val) ? '—' : val + '%';
  const color = isNaN(val) ? '#475569' : val > 50 ? '#4ade80' : val > 20 ? '#fbbf24' : '#f87171';
  const width = isNaN(val) ? 0 : val;
  const eid = room.battery.replace('.', '-');
  return `<div class="hdc-cbatt" id="hdc-cbatt-${eid}" data-action="sensor_history" data-entity="${room.battery}" data-label="🔋 Bateria" style="cursor:pointer">
    🔋 <span style="color:${color};font-weight:600;min-width:28px">${display}</span>
    <div class="hdc-cbatt-bar"><div class="hdc-cbatt-fill" style="width:${width}%;background:${color}"></div></div>
  </div>`;
}

function _comfortControlsHtml(hass, room) {
  if (!room.fan && !room.light) return '';
  const fanOn   = room.fan   ? hass.states[room.fan]?.state   === 'on' : false;
  const lightOn = room.light ? hass.states[room.light]?.state === 'on' : false;
  const fanId   = room.fan   ? room.fan.replace('.', '-')   : '';
  const lightId = room.light ? room.light.replace('.', '-') : '';
  return `<div style="display:flex;gap:6px;margin-top:8px;padding-top:7px;border-top:1px solid rgba(255,255,255,.06);flex-wrap:wrap">
    ${room.fan ? `<button id="hdc-ctrl-fan-${fanId}" class="hdc-tbtn" style="font-size:10px;height:26px;padding:0 10px;width:auto;${fanOn?'background:rgba(56,189,248,.15);border-color:#38bdf8;color:#38bdf8':''}" data-action="toggle" data-entity="${room.fan}">💨 ${fanOn?'Wł.':'Wył.'}</button>` : ''}
    ${room.light ? `<button id="hdc-ctrl-light-${lightId}" class="hdc-tbtn" style="font-size:10px;height:26px;padding:0 10px;width:auto;${lightOn?'background:rgba(251,191,36,.15);border-color:#fbbf24;color:#fbbf24':''}" data-action="toggle" data-entity="${room.light}">💡 ${lightOn?'Wł.':'Wył.'}</button>` : ''}
  </div>`;
}

function renderKomfort(hass, cfg) {
  const rooms = (cfg.comfort || {}).rooms || [];
  if (!rooms.length) return `<div style="color:#475569;font-size:12px;padding:12px">Brak konfiguracji.<br>Dodaj sekcję <code>comfort.rooms</code> w konfiguracji karty.</div>`;
  return `<div class="hdc-comfort-grid">${rooms.map((room, idx) => {
    const lastUpd = _comfortLastUpdated(hass, room);
    return `<div class="hdc-comfort-card">
      <div class="hdc-comfort-room">${room.icon || '🏠'} ${room.name || 'Pomieszczenie'}</div>
      <div class="hdc-comfort-sensors">${_comfortSensorHtml(hass, room)}</div>
      ${_comfortHumHtml(hass, room)}
      ${_comfortBattHtml(hass, room)}
      ${_comfortControlsHtml(hass, room)}
      <div class="hdc-cupdated" id="hdc-cupdated-${idx}">🕐 ${formatAgo(lastUpd)}</div>
    </div>`;
  }).join('')}</div>`;
}

// ============================================================
//  MAIN ELEMENT CLASS
// ============================================================

const ALL_TABS = [
  { id: 'home',     label: '🏠 Home',      render: renderOsoby, badge: true },
  { id: 'energia',   label: '⚡ Energia',   render: renderEnergia },
  { id: 'vaillant',  label: '🔥 Vaillant',  render: renderVaillant },
  { id: 'metering',  label: '📊 Metering',  render: renderMetering },
  { id: 'tplink',    label: '📶 TP-Link',   render: renderTPLink },
  { id: 'kamery',    label: '📹 Kamery',    render: renderKamery },
  { id: 'auta',      label: '🚗 Auta',      render: renderAuta },
  { id: 'proxmox',   label: '🖧 Proxmox',   render: renderProxmox },
  { id: 'alerty',    label: '🔔 Alerty',    render: renderAlerty, badge: true },
  { id: 'przelaczniki', label: '💡 Przełączniki', render: renderPrzelaczniki },
  { id: 'klimat',       label: '🌡️ Klimat',      render: renderKomfort },
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
    this._activeTab = (config.tabs && config.tabs[0]) || 'home';
  }

  set hass(hass) {
    this._hass = hass;
    if (!this._built) {
      this._build();
      this._built = true;
    } else {
      this._updatePane();
      this._updateAlertBadge();
      this._updateWasteBadge();
    }
  }

  _build() {
    const cfg = this._config;
    const tabs = this._resolveTabs(cfg);

    this.shadowRoot.innerHTML = `
      <style>${STYLES}</style>
      <div class="hdc">
        ${cfg.show_header === false ? '' : `<div class="hdc-hdr">
          <div class="hdc-title">
            <span>🏠</span>
            <span>${cfg.title || 'MirHome'}</span>
            <span class="hdc-live">live</span>
          </div>
          <span class="hdc-clk" id="hdc-clk">00:00:00</span>
        </div>`}
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
    this._startGateTimers();
    this._updateAlertBadge();
    this._updateWasteBadge();
  }

  _resolveTabs(cfg) {
    let allowed = cfg.tabs ? [...cfg.tabs] : ALL_TABS.map(t => t.id);
    // Auto-dodaj przelaczniki jeśli switches.groups jest skonfigurowane, a zakładki są podane jawnie
    if (cfg.tabs && (cfg.switches || {}).groups?.length && !allowed.includes('przelaczniki')) {
      allowed.push('przelaczniki');
    }
    // Auto-dodaj komfort jeśli comfort.rooms jest skonfigurowane
    if (cfg.tabs && (cfg.comfort || {}).rooms?.length && !allowed.includes('klimat')) {
      allowed.push('klimat');
    }
    // Zachowaj kolejność z YAML
    const tabMap = Object.fromEntries(ALL_TABS.map(t => [t.id, t]));
    return allowed.filter(id => tabMap[id]).map(id => tabMap[id]);
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
      if (this._activeTab === 'home' && !tabChanged) {
        this._updateOsobyLive();
        return;
      }
      if (this._activeTab === 'kamery'       && !tabChanged) return;
      if (this._activeTab === 'auta'         && !tabChanged) { this._updateAutaLive(); return; }
      if (this._activeTab === 'przelaczniki' && !tabChanged) { this._updateSwitchesLive(); return; }
      if (this._activeTab === 'tplink'       && !tabChanged) { this._updateTPLinkLive(); return; }
      if (this._activeTab === 'klimat'       && !tabChanged) { this._updateKomfortLive(); return; }
      pane.innerHTML = tab.render(this._hass, this._config);
      if (this._activeTab === 'home') setTimeout(() => this._initOsobyMap(), 0);
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
      const { label: locLabel, color: locColor, isHome } = personLocation(hass, loc);
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
              <div style="font-size:10px;margin-top:2px;color:${locColor}">● ${locLabel}</div>
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

    // Aktualizacja bram in-place
    const stateLabel = st => ({ open: 'Otwarta', closed: 'Zamknięta', opening: 'Otwieranie…', closing: 'Zamykanie…', locked: 'Zamknięta', unlocked: 'Otwarta' }[st] || st || '—');
    (cfg.gates || []).forEach(g => {
      const tile = this.shadowRoot.getElementById(`hdc-gate-${g.entity.replace('.', '-')}`);
      if (!tile) return;
      const st = hass.states[g.entity];
      const state = st?.state || 'unknown';
      tile.className = `hdc-gate-tile ${state}`;
      const stEl = tile.querySelector('.hdc-gate-state');
      if (stEl) stEl.textContent = stateLabel(state);
      const ltEl = tile.querySelector('.hdc-gate-light');
      if (ltEl && g.light) {
        const lightOn = hass.states[g.light]?.state === 'on';
        ltEl.className = `hdc-gate-light${lightOn ? ' on' : ''}`;
        ltEl.textContent = `💡 ${lightOn ? 'Włączone' : 'Wyłączone'}`;
      }
      const tmEl = tile.querySelector('.hdc-gate-timer');
      if (tmEl) {
        const isOpen = ['open', 'unlocked', 'opening', 'closing'].includes(state);
        tmEl.textContent = isOpen && st?.last_changed ? formatGateElapsed(st.last_changed) : '';
      }
    });

    // Aktualizacja skrzynki pocztowej in-place
    const mbCfg = cfg.mailbox;
    if (mbCfg) {
      const mbEl = this.shadowRoot.getElementById('hdc-mailbox');
      if (mbEl) {
        const mbSt = hass.states[mbCfg.entity];
        const hasMail = mbSt?.state === 'on';
        mbEl.className = `hdc-mailbox${hasMail ? ' mail' : ''}`;
        const icoEl = mbEl.querySelector('.hdc-mailbox-ico');
        if (icoEl) icoEl.textContent = hasMail ? '📬' : '📭';
        const stEl = mbEl.querySelector('.hdc-mailbox-status');
        if (stEl) stEl.textContent = `${mbCfg.name || 'Skrzynka pocztowa'} — ${hasMail ? 'Jest poczta!' : 'Pusta'}`;
        const battEl = mbEl.querySelector('.hdc-mailbox-batt');
        if (battEl && mbCfg.battery) {
          const battSt = hass.states[mbCfg.battery];
          const battVal = battSt ? Math.round(parseFloat(battSt.state)) : null;
          if (battVal !== null) {
            battEl.style.color = battVal > 50 ? '#4ade80' : battVal > 20 ? '#fbbf24' : '#f87171';
            battEl.textContent = `🔋 ${battVal}%`;
          }
        }
      }
    }
  }

  _updateVaillantLive() {
    const hass = this._hass;
    const v = this._config.vaillant || {};
    const sr = this.shadowRoot;
    const setText = (id, val) => { const el = sr.getElementById(id); if (el) el.textContent = val; };
    const coAct  = sa(hass, v.climate_co,   'current_temperature') || '—';
    const coSet  = v.co_temp_input ? sn(hass, v.co_temp_input, 1)
      : sa(hass, v.climate_co, 'temperature') || sa(hass, v.climate_co, 'target_temp_high') || sa(hass, v.climate_co, 'target_temp_low') || '—';
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
    const PM_LABEL   = { schedule:'Harmonogram', manual:'Ręczny', eco:'Eco', away:'Poza domem',
      boost:'Turbo', sleep:'Sen', home:'Dom', comfort:'Komfort', off:'Wyłączony', none:'—' };
    const HVAC_LABEL = { heat:'Grzanie', auto:'Auto', heat_cool:'Auto', cool:'Chłodzenie',
      fan_only:'Wentylator', dry:'Osuszanie', off:'Wył.' };
    const hvacLabel = m => HVAC_LABEL[m] || m;
    const pmLabel   = p => PM_LABEL[p]   || p;
    const modeStatus = (hvac, pmCur) => hvac === 'off' ? 'Wyłączone'
      : `${hvacLabel(hvac)}${pmCur && pmCur !== 'none' ? ' · ' + pmLabel(pmCur) : ''}`;
    const coHvac  = sv(hass, v.climate_co,  'off');
    const coPmCur = sa(hass, v.climate_co,  'preset_mode') || '';
    const cwuHvac  = sv(hass, v.climate_cwu, 'off');
    const cwuPmCur = sa(hass, v.climate_cwu, 'preset_mode') || '';
    setText('hdc-vl-tind',    `${tInd}°C`);
    setText('hdc-vl-tout',    `${tOut}°C`);
    setText('hdc-vl-tgtSup',  `${tTgtSup}°C`);
    setText('hdc-vl-tgtSup2', `${tTgtSup}°C`);
    setText('hdc-vl-sup',     `${tSup}°C`);
    setText('hdc-vl-ret',     `${tRet}°C`);
    setText('hdc-vl-coact',   `${coAct}°`);
    setText('hdc-co-set',     coSet);
    setText('hdc-vl-flame',   `● ${modeStatus(coHvac, coPmCur)}`);
    setText('hdc-vl-cwumode', `● ${modeStatus(cwuHvac, cwuPmCur)}`);
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
      // start może być sekundami (number) lub ISO stringiem (string)
      const toMs = d => typeof d.start === 'string' ? new Date(d.start).getTime()
        : (d.start > 1e12 ? d.start : d.start * 1000);
      const cutoff = d30.getTime();
      const heatDay = (statDay[gasHeatId] || []).slice().sort((a,b) => toMs(a) - toMs(b))
        .filter(d => toMs(d) >= cutoff)
        .map(d => ({ x: new Date(toMs(d)), y: toVal(d) }));
      const cwuDay  = gasCwuId ? (statDay[gasCwuId] || []).slice().sort((a,b) => toMs(a) - toMs(b))
        .filter(d => toMs(d) >= cutoff)
        .map(d => ({ x: new Date(toMs(d)), y: toVal(d) })) : [];

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
      const heatMon = (statMon[gasHeatId] || []).slice().sort((a, b) => toMs(a) - toMs(b));
      const cwuMon  = gasCwuId ? (statMon[gasCwuId] || []).slice().sort((a, b) => toMs(a) - toMs(b)) : [];
      if (c4 && heatMon.length) {
        if (c4._hdcChart) c4._hdcChart.destroy();
        const monMap = {};
        heatMon.forEach(d => {
          const dt = new Date(toMs(d));
          const mk = dt.getFullYear() + '-' + String(dt.getMonth() + 1).padStart(2, '0');
          monMap[mk] = monMap[mk] || { label: MONTH_PL[dt.getMonth()] + ' ' + dt.getFullYear(), heat: 0, cwu: 0 };
          monMap[mk].heat += toVal(d);
        });
        cwuMon.forEach(d => {
          const dt = new Date(toMs(d));
          const mk = dt.getFullYear() + '-' + String(dt.getMonth() + 1).padStart(2, '0');
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
    const persons = (cfg.persons || []).filter(p => p.entity);
    if (!persons.length) {
      mapDiv.innerHTML = '<div style="color:#475569;font-size:11px;padding:16px;text-align:center">Brak skonfigurowanych encji osób</div>';
      return;
    }
    mapDiv.innerHTML = '';
    window.loadCardHelpers?.().then(helpers => {
      const card = helpers.createCardElement({
        type: 'map',
        entities: persons.map(p => ({ entity: p.entity })),
        auto_fit: true,
        default_zoom: 14,
        dark_mode: true,
      });
      card.style.cssText = 'display:block;height:570px;width:100%';
      mapDiv.appendChild(card);
      card.hass = hass;
    });
  }

  _initCarMaps() {
    const hass = this._hass;
    const vehicles = this._config.vehicles || [];
    vehicles.forEach((v, idx) => {
      const tracker = v.location || v.device_tracker;
      if (!tracker) return;
      const mapDiv = this.shadowRoot.getElementById(`hdc-car-map-${idx}`);
      if (!mapDiv) return;
      mapDiv.innerHTML = '';
      window.loadCardHelpers?.().then(helpers => {
        const trackerState = hass.states[tracker];
        const lat = trackerState?.attributes?.latitude;
        const lon = trackerState?.attributes?.longitude;
        const cardCfg = {
          type: 'map',
          entities: [{ entity: tracker }],
          dark_mode: true,
        };
        if (lat && lon) {
          cardCfg.auto_fit = true;
          cardCfg.default_zoom = 15;
        } else {
          cardCfg.auto_fit = true;
          cardCfg.fit_zones = true;
          cardCfg.default_zoom = 15;
        }
        const card = helpers.createCardElement(cardCfg);
        card.style.cssText = 'display:block;height:380px;width:100%';
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

    // Toggle obsługujemy przed sprawdzeniem stanu — encja może być unavailable
    if (action === 'toggle') {
      const domain = entity.split('.')[0];
      const st = this._hass.states[entity];
      const on = st?.state === 'on';
      if (['switch', 'light', 'fan', 'input_boolean', 'number'].includes(domain)) {
        this._hass.callService(domain, on ? 'turn_off' : 'turn_on', { entity_id: entity });
      } else {
        this._hass.callService('homeassistant', 'toggle', { entity_id: entity });
      }
      return;
    }

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
      const domain = entity.split('.')[0];
      this._hass.callService(domain, 'set_value', { entity_id: entity, value: clamped });
    }
    if (action === 'sensor_history') {
      const label = btn.dataset.label || entity;
      this._showSensorHistory(entity, label);
      return;
    }
    if (action === 'set_preset') {
      this._hass.callService('climate', 'set_preset_mode', { entity_id: entity, preset_mode: btn.dataset.preset });
    }
    if (action === 'set_hvac_mode') {
      this._hass.callService('climate', 'set_hvac_mode', { entity_id: entity, hvac_mode: btn.dataset.mode });
    }
    if (action === 'lock_toggle') {
      const lockState = this._hass.states[entity];
      if (!lockState) return;
      const isLocked = lockState.state === 'locked';
      this._hass.callService('lock', isLocked ? 'unlock' : 'lock', { entity_id: entity });
    }
    if (action === 'cover_toggle') {
      const coverState = this._hass.states[entity];
      if (!coverState) return;
      const st = coverState.state;
      if (st === 'open')    this._hass.callService('cover', 'close_cover', { entity_id: entity });
      else if (st === 'closed') this._hass.callService('cover', 'open_cover',  { entity_id: entity });
      else                      this._hass.callService('cover', 'stop_cover',  { entity_id: entity });
    }
    if (action === 'humidifier_toggle') {
      const humState = this._hass.states[entity];
      if (!humState) return;
      this._hass.callService('humidifier', humState.state === 'on' ? 'turn_off' : 'turn_on', { entity_id: entity });
    }
    if (action === 'humidifier_hum') {
      const humState = this._hass.states[entity];
      if (!humState) return;
      const current = humState.attributes?.humidity ?? 50;
      const delta = parseInt(btn.dataset.delta || '0');
      const minH = humState.attributes?.min_humidity ?? 20;
      const maxH = humState.attributes?.max_humidity ?? 80;
      const newVal = Math.min(maxH, Math.max(minH, current + delta));
      this._hass.callService('humidifier', 'set_humidity', { entity_id: entity, humidity: newVal });
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

  _updateAutaLive() {
    const hass = this._hass;
    const vehicles = this._config.vehicles || [];
    vehicles.forEach((v, idx) => {
      if (!v.lock) return;
      const btn = this.shadowRoot.getElementById(`hdc-car-lock-${idx}`);
      if (!btn) return;
      const lockState = hass.states[v.lock];
      if (!lockState) return;
      const locked = lockState.state === 'locked';
      btn.textContent = locked ? '🔒 Zamknięty' : '🔓 Otwarty';
      btn.style.cssText = `font-size:11px;width:auto;height:24px;padding:0 10px;${locked
        ? 'background:rgba(74,222,128,.15);border-color:#4ade80;color:#4ade80'
        : 'background:rgba(248,113,113,.15);border-color:#f87171;color:#f87171'}`;
    });
  }

  _updateWasteBadge() {
    const sensors = ((this._config.waste || {}).sensors) || [];
    let count = 0;
    sensors.forEach(ws => {
      if (ws.toggle && this._hass.states[ws.toggle] && this._hass.states[ws.toggle].state !== 'on') return;
      const st = this._hass.states[ws.entity];
      if (!st) return;
      const daysTo = st.attributes.daysTo != null ? parseInt(st.attributes.daysTo) : null;
      if (daysTo !== null && daysTo <= 1) count++;
    });
    const badge = this.shadowRoot.getElementById('hdc-badge-home');
    if (badge) {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'inline' : 'none';
    }
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

  _updateSwitchesLive() {
    const hass = this._hass;
    const groups = (this._config.switches || {}).groups || [];
    groups.forEach(group => {
      (group.entities || []).forEach(item => {
        const tile = this.shadowRoot.getElementById(`hdc-sw-${item.entity.replace('.', '-')}`);
        if (!tile) return;
        const st = hass.states[item.entity];
        const isOn = st ? st.state === 'on' : false;
        const isLight = item.entity.startsWith('light.');
        tile.classList.toggle('on', isOn);
        tile.classList.toggle('light', isLight && isOn);
        const stateEl = tile.querySelector('.hdc-sw-tile-state');
        if (stateEl) stateEl.textContent = isOn ? 'Włączone' : 'Wyłączone';
      });
    });
  }

  _updateKomfortLive() {
    const hass = this._hass;
    const rooms = (this._config.comfort || {}).rooms || [];
    rooms.forEach((room, idx) => {
      // Sensory
      COMFORT_SENSORS.filter(s => room[s.key]).forEach(s => {
        const el = this.shadowRoot.getElementById(`hdc-cs-${room[s.key].replace('.', '-')}`);
        if (!el) return;
        const st = hass.states[room[s.key]];
        const raw = st ? parseFloat(st.state) : NaN;
        const display = isNaN(raw) ? '—' : raw.toFixed(s.dec) + s.unit;
        const color = !isNaN(raw) && s.colorFn ? s.colorFn(raw) : '#e2e8f0';
        const valEl = el.querySelector('.hdc-cs-val');
        if (valEl) { valEl.textContent = display; valEl.style.color = color; }
      });
      // Humidifier
      // Humidifier
      if (room.humidifier) {
        const eid = room.humidifier.replace('.', '-');
        const humEl = this.shadowRoot.getElementById(`hdc-chum-${eid}`);
        if (humEl) {
          const st = hass.states[room.humidifier];
          const isOn = st?.state === 'on';
          const target = st?.attributes?.humidity ?? null;
          const toggleBtn = humEl.querySelector('.hdc-chum-toggle');
          if (toggleBtn) {
            toggleBtn.textContent = `💧 ${isOn ? 'Włączony' : 'Wyłączony'}`;
            toggleBtn.style.cssText = `font-size:10px;height:26px;padding:0 10px;width:auto;${isOn ? 'background:rgba(56,189,248,.15);border-color:#38bdf8;color:#38bdf8' : ''}`;
          }
          const valEl = this.shadowRoot.getElementById(`hdc-chumv-${eid}`);
          if (valEl && target !== null) valEl.textContent = `${target}%`;
        }
      }
      // Battery
      if (room.battery) {
        const battEl = this.shadowRoot.getElementById(`hdc-cbatt-${room.battery.replace('.', '-')}`);
        if (battEl) {
          const bst = hass.states[room.battery];
          const val = bst ? Math.round(parseFloat(bst.state)) : NaN;
          const color = isNaN(val) ? '#475569' : val > 50 ? '#4ade80' : val > 20 ? '#fbbf24' : '#f87171';
          const span = battEl.querySelector('span');
          if (span) { span.textContent = isNaN(val) ? '—' : val + '%'; span.style.color = color; }
          const fill = battEl.querySelector('.hdc-cbatt-fill');
          if (fill) { fill.style.width = (isNaN(val) ? 0 : val) + '%'; fill.style.background = color; }
        }
      }
      // Last updated
      const updEl = this.shadowRoot.getElementById(`hdc-cupdated-${idx}`);
      if (updEl) updEl.textContent = `🕐 ${formatAgo(_comfortLastUpdated(hass, room))}`;
    });
    // Fan / light controls per room
    rooms.forEach(room => {
      if (room.fan) {
        const fanOn = hass.states[room.fan]?.state === 'on';
        const btn = this.shadowRoot.getElementById(`hdc-ctrl-fan-${room.fan.replace('.', '-')}`);
        if (btn) {
          btn.textContent = `💨 ${fanOn ? 'Wł.' : 'Wył.'}`;
          btn.style.cssText = `font-size:10px;height:26px;padding:0 10px;width:auto;${fanOn ? 'background:rgba(56,189,248,.15);border-color:#38bdf8;color:#38bdf8' : ''}`;
        }
      }
      if (room.light) {
        const lightOn = hass.states[room.light]?.state === 'on';
        const btn = this.shadowRoot.getElementById(`hdc-ctrl-light-${room.light.replace('.', '-')}`);
        if (btn) {
          btn.textContent = `💡 ${lightOn ? 'Wł.' : 'Wył.'}`;
          btn.style.cssText = `font-size:10px;height:26px;padding:0 10px;width:auto;${lightOn ? 'background:rgba(251,191,36,.15);border-color:#fbbf24;color:#fbbf24' : ''}`;
        }
      }
    });
  }

  _updateTPLinkLive() {
    const hass = this._hass;
    const t = this._config.tplink || {};
    const allPorts = [
      ...(t.router_ports || []).map(p => ({ ...p, _poe: false })),
      ...(t.sw01_ports  || []).map(p => ({ ...p, _poe: true })),
      ...(t.sw02_ports  || []).map(p => ({ ...p, _poe: true })),
      ...(t.sw03_ports  || []).map(p => ({ ...p, _poe: true })),
    ];
    allPorts.forEach(p => {
      const el = this.shadowRoot.getElementById(`hdc-port-${p.entity.replace('.', '-')}`);
      if (!el) return;
      const on = isOn(hass, p.entity);
      const canClick = p.entity && (p._poe || p.entity.startsWith('switch.'));
      el.className = `hdc-port${canClick ? ' clickable' : ''} ${on ? (p._poe ? 'poe' : 'up') : 'down'}`;
      el.title = `${p.label}${canClick ? (on ? ' — kliknij aby wyłączyć' : ' — kliknij aby włączyć') : ''}`;
    });
  }

  _buildHistoryModal() {
    if (this.shadowRoot.getElementById('hdc-hm-overlay')) return;
    const el = document.createElement('div');
    el.id = 'hdc-hm-overlay';
    el.className = 'hdc-hm-overlay';
    el.style.display = 'none';
    el.innerHTML = `
      <div class="hdc-hm-box">
        <div class="hdc-hm-head">
          <div>
            <div class="hdc-hm-title" id="hdc-hm-title">Historia</div>
            <div class="hdc-hm-entity" id="hdc-hm-entity"></div>
          </div>
          <button class="hdc-hm-close" id="hdc-hm-close">✕</button>
        </div>
        <div class="hdc-hm-ranges">
          ${[7,14,30,60,90].map(d => `<button class="hdc-hm-range${d===7?' active':''}" data-days="${d}">${d} dni</button>`).join('')}
        </div>
        <div class="hdc-hm-chart-wrap">
          <canvas id="hdc-hm-chart"></canvas>
          <div class="hdc-hm-loading" id="hdc-hm-loading">Ładowanie…</div>
        </div>
      </div>`;
    this.shadowRoot.appendChild(el);
    el.addEventListener('click', e => {
      if (e.target === el) this._closeHistoryModal();
    });
    this.shadowRoot.getElementById('hdc-hm-close').addEventListener('click', () => this._closeHistoryModal());
    el.addEventListener('click', e => {
      const btn = e.target.closest('.hdc-hm-range');
      if (!btn) return;
      el.querySelectorAll('.hdc-hm-range').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      this._loadHistoryChart(this._hmEntity, parseInt(btn.dataset.days));
    });
  }

  _closeHistoryModal() {
    const el = this.shadowRoot.getElementById('hdc-hm-overlay');
    if (el) el.style.display = 'none';
    const canvas = this.shadowRoot.getElementById('hdc-hm-chart');
    if (canvas && canvas._hdcChart) { canvas._hdcChart.destroy(); canvas._hdcChart = null; }
  }

  _showSensorHistory(entity, label) {
    this._buildHistoryModal();
    this._hmEntity = entity;
    const overlay = this.shadowRoot.getElementById('hdc-hm-overlay');
    overlay.style.display = 'flex';
    this.shadowRoot.getElementById('hdc-hm-title').textContent = label;
    this.shadowRoot.getElementById('hdc-hm-entity').textContent = entity;
    overlay.querySelectorAll('.hdc-hm-range').forEach(b => b.classList.toggle('active', b.dataset.days === '7'));
    this._loadHistoryChart(entity, 7);
  }

  async _loadHistoryChart(entity, days) {
    const loading = this.shadowRoot.getElementById('hdc-hm-loading');
    if (loading) loading.style.display = 'flex';
    const canvas = this.shadowRoot.getElementById('hdc-hm-chart');
    if (canvas && canvas._hdcChart) { canvas._hdcChart.destroy(); canvas._hdcChart = null; }

    const end = new Date();
    const start = new Date(end.getTime() - days * 24 * 3600 * 1000);
    let points = [];
    try {
      const raw = await this._hass.callApi('GET',
        `history/period/${start.toISOString()}?filter_entity_id=${entity}&end_time=${end.toISOString()}&minimal_response=true&no_attributes=true`);
      if (raw && raw[0]) {
        points = raw[0]
          .map(p => ({ x: new Date(p.last_changed), y: parseFloat(p.state) }))
          .filter(p => !isNaN(p.y));
      }
    } catch(e) { console.warn('[hdc] history fetch error', e); }

    if (loading) loading.style.display = 'none';
    if (!canvas) return;

    const drawChart = () => {
      if (canvas._hdcChart) canvas._hdcChart.destroy();
      canvas._hdcChart = new Chart(canvas, {
        type: 'line',
        data: { datasets: [{ data: points, borderColor: '#38bdf8', backgroundColor: 'rgba(56,189,248,.08)',
          borderWidth: 1.5, pointRadius: 0, tension: 0.3, fill: true }] },
        options: {
          responsive: true, maintainAspectRatio: false, animation: false,
          plugins: { legend: { display: false }, tooltip: {
            callbacks: { label: ctx => `${ctx.parsed.y}` }
          }},
          scales: {
            x: { type: 'time', time: { unit: days <= 14 ? 'day' : 'week' },
              ticks: { color: '#475569', maxTicksLimit: 8 }, grid: { color: 'rgba(255,255,255,.04)' } },
            y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,.04)' } }
          }
        }
      });
    };

    if (window.Chart?.defaults) {
      drawChart();
    } else {
      const loadScript = (id, src, cb) => {
        if (document.getElementById(id)) { if (window.Chart) cb(); else document.getElementById(id).addEventListener('load', cb); return; }
        const s = document.createElement('script'); s.id = id; s.src = src; s.onload = cb;
        document.head.appendChild(s);
      };
      loadScript('hdc-chartjs', 'https://cdn.jsdelivr.net/npm/chart.js@4/dist/chart.umd.min.js', () =>
        loadScript('hdc-chartjs-adapter', 'https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns@3/dist/chartjs-adapter-date-fns.bundle.min.js', drawChart));
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

  _startGateTimers() {
    this._gateTimerInterval = setInterval(() => {
      const cfg = this._config || {};
      const hass = this._hass;
      if (!hass) return;
      if (this._activeTab === 'home') {
        (cfg.gates || []).forEach(g => {
          const tile = this.shadowRoot.getElementById(`hdc-gate-${g.entity.replace('.', '-')}`);
          if (!tile) return;
          const st = hass.states[g.entity];
          const state = st?.state || 'unknown';
          const tmEl = tile.querySelector('.hdc-gate-timer');
          if (!tmEl) return;
          const isOpen = ['open', 'unlocked', 'opening', 'closing'].includes(state);
          tmEl.textContent = isOpen && st?.last_changed ? formatGateElapsed(st.last_changed) : '';
        });
      }
      if (this._activeTab === 'klimat') {
        (cfg.comfort?.rooms || []).forEach((room, idx) => {
          const updEl = this.shadowRoot.getElementById(`hdc-cupdated-${idx}`);
          if (updEl) updEl.textContent = `🕐 ${formatAgo(_comfortLastUpdated(hass, room))}`;
        });
      }
      if (this._activeTab === 'przelaczniki') {
        (cfg.switches?.groups || []).filter(g => g.show_timer).forEach(group => {
          (group.entities || []).forEach(item => {
            const tile = this.shadowRoot.getElementById(`hdc-sw-${item.entity.replace('.', '-')}`);
            if (!tile) return;
            const tmEl = tile.querySelector('.hdc-sw-timer');
            if (!tmEl) return;
            const st = hass.states[item.entity];
            const isOn = st?.state === 'on';
            tmEl.textContent = isOn && st?.last_changed ? formatGateElapsed(st.last_changed) : '';
          });
        });
      }
    }, 1000);
  }

  disconnectedCallback() {
    clearInterval(this._clockInterval);
    clearInterval(this._camRefreshInterval);
    clearInterval(this._gateTimerInterval);
  }

  getCardSize() { return 8; }

  static getConfigElement() {
    return document.createElement('home-dashboard-card-editor');
  }

  static getStubConfig() {
    return {
      title: 'MirHome',
      tabs: ['home', 'energia', 'vaillant', 'metering', 'tplink', 'kamery', 'auta', 'proxmox', 'alerty'],
    };
  }
}

customElements.define('home-dashboard-card', HomeDashboardCard);
window.customCards = window.customCards || [];
window.customCards.push({
  type: 'home-dashboard-card',
  name: 'MirHome Dashboard',
  description: 'Kompletny dashboard domowy — home, energia, Vaillant, metering, TP-Link, kamery, auta, Proxmox.',
  preview: true,
});

console.info(
  '%c HOME-DASHBOARD-CARD %c v1.0.0 ',
  'background:#38bdf8;color:#0d0f14;font-weight:700;padding:2px 6px;border-radius:4px 0 0 4px',
  'background:#0d0f14;color:#38bdf8;font-weight:700;padding:2px 6px;border-radius:0 4px 4px 0'
);
