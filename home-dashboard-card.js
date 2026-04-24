// ============================================================
//  home-dashboard-card.js  v1.19.2
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
.hdc-cam-focus img{width:100%;display:block;max-height:680px;object-fit:contain}
.hdc-cam-focus .hdc-cam-placeholder{height:280px}
.hdc-cam-sidebar-layout{display:flex;gap:10px;align-items:flex-start;margin-bottom:12px}
.hdc-cam-main{flex:1;min-width:0}
.hdc-cam-main .hdc-cam-focus{margin-bottom:0}
.hdc-cam-thumbs-col{width:185px;flex-shrink:0}
.hdc-cam-thumb-list{display:flex;flex-direction:column;gap:6px;max-height:65vh;overflow-y:auto;padding-right:2px}
.hdc-camcard.sidebar-thumb{border-radius:9px}
.hdc-camcard.sidebar-thumb .hdc-cam-name{font-size:10px}
.hdc-camcard.sidebar-thumb .hdc-cam-ts{font-size:8px}
@media(max-width:600px){
  .hdc-cam-sidebar-layout{flex-direction:column}
  .hdc-cam-thumbs-col{width:100%}
  .hdc-cam-thumb-list{flex-direction:row;flex-wrap:wrap;max-height:none}
  .hdc-cam-thumb-list .hdc-camcard{width:calc(50% - 3px)}
}
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
.hdc-sw-tile-name{font-size:12px;font-weight:500;color:#94a3b8;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;line-height:1.35;word-break:break-word}
.hdc-st-sub{font-size:9px;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:#1e293b;margin:8px 0 5px;padding-left:2px}
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
.hdc-sw-search{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:8px;color:#e2e8f0;font-size:12px;padding:5px 10px;width:100%;box-sizing:border-box;margin-bottom:12px;outline:none}
.hdc-sw-search::placeholder{color:#475569}
.hdc-sw-search:focus{border-color:rgba(148,163,184,.4);background:rgba(255,255,255,.08)}
.hdc-lz4{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:12px;padding:10px 13px}
.hdc-lz4-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}
.hdc-lz4-name{font-size:11px;font-weight:600;color:#94a3b8}
.hdc-lz4-batt{font-size:10px;color:#64748b}
.hdc-lz4-row{display:flex;align-items:center;gap:7px;padding:5px 0;border-bottom:1px solid rgba(255,255,255,.04);cursor:pointer;transition:opacity .15s;user-select:none}
.hdc-lz4-row:last-child{border-bottom:none}
.hdc-lz4-row:hover{opacity:.75}
.hdc-lz4-act{font-size:9px;font-weight:700;color:#475569;width:22px;flex-shrink:0;text-align:center;background:rgba(255,255,255,.06);border-radius:4px;padding:1px 0}
.hdc-lz4-dev{font-size:11px;color:#94a3b8;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.hdc-lz4-st{font-size:10px;font-weight:600;padding:1px 7px;border-radius:5px;flex-shrink:0}
.hdc-lz4-st.on{background:rgba(74,222,128,.15);color:#4ade80}
.hdc-lz4-st.off{background:rgba(100,116,139,.1);color:#64748b}
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
.hdc-cupdated{font-size:9px;color:#334155;font-variant-numeric:tabular-nums;text-align:right;margin-top:6px}.hdc-cs:hover{background:rgba(255,255,255,.06)}
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
    const picture = p.entity ? hass.states[p.entity]?.attributes?.entity_picture : null;
    const avatarInner = picture
      ? `<img src="${picture}" style="width:100%;height:100%;object-fit:cover;border-radius:50%">`
      : initials;
    const avatarStyle = picture ? '' : `color:${p.color};background:${p.color}22`;
    return `
      <div class="hdc-pc ${isHome?'home':'away'}"${p.entity ? ` data-action="person_map" data-entity="${p.entity}" style="cursor:pointer"` : ''}>
        <div style="display:flex;gap:10px;margin-bottom:9px;align-items:flex-start">
          <div class="hdc-pav" style="${avatarStyle};overflow:hidden">${avatarInner}</div>
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

  const windyUrl = cfg.weather && cfg.weather.windy_embed;
  const windyBtnHtml = windyUrl ? `
    <button data-action="windy_open" style="display:flex;align-items:center;gap:10px;width:100%;background:rgba(56,189,248,.06);border:1px solid rgba(56,189,248,.15);border-radius:11px;padding:10px 14px;cursor:pointer;margin-top:7px;text-align:left;transition:background .15s" onmouseover="this.style.background='rgba(56,189,248,.12)'" onmouseout="this.style.background='rgba(56,189,248,.06)'">
      <span style="font-size:22px;flex-shrink:0">🌤️</span>
      <div>
        <div style="font-size:12px;font-weight:600;color:#7dd3fc">Pogoda</div>
        <div style="font-size:10px;color:#475569;margin-top:1px">Kliknij aby zobaczyć mapę pogody</div>
      </div>
      <span style="margin-left:auto;font-size:14px;color:#475569">›</span>
    </button>` : '';

  return `
    <div id="hdc-persons-list"><div class="hdc-ga">${cards}</div></div>
    ${gatesHtml}
    ${windyBtnHtml}
    ${wasteRows}`;
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
  const HVAC_LABEL = { heat:'Grzanie', auto:'Auto', heat_cool:'Grzanie', cool:'Chłodzenie',
    fan_only:'Wentylator', dry:'Osuszanie', off:'Wył.' };
  const pmLabel   = p => PM_LABEL[p]   || p;
  const hvacLabel = m => HVAC_LABEL[m] || m;
  const modeStatus = (hvac, pmCur) => hvac === 'off' ? 'Wyłączone'
    : `${hvacLabel(hvac)}${pmCur && pmCur !== 'none' ? ' · ' + pmLabel(pmCur) : ''}`;

  const sfMode    = v.sf_mode_entity ? sv(hass, v.sf_mode_entity, 'auto') : 'auto';
  const isVeto    = sfMode === 'veto';
  const vetoDate  = v.veto_end_date ? sv(hass, v.veto_end_date, '') : '';
  const vetoTime  = v.veto_end_time ? sv(hass, v.veto_end_time, '').substring(0, 5) : '';
  const vetoUntil = (vetoDate || vetoTime) ? `do ${vetoDate}${vetoDate && vetoTime ? ' ' : ''}${vetoTime}` : '';
  const coModeText = isVeto ? `🔒 Veto${vetoUntil ? ' ' + vetoUntil : ''}` : null;

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
      ${((() => { const seen = new Set(); return hvacModes.filter(m => m !== 'none').filter(m => { const lbl = hvacLabel(m); if (seen.has(lbl)) return false; seen.add(lbl); return true; }); })()).map(m => {
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
        <div id="hdc-vl-coact" class="hdc-th-big" style="color:#fb923c;${(v.temp_indoor||v.climate_co)?'cursor:pointer':''}" ${(v.temp_indoor||v.climate_co)?`data-action="sensor_history" data-entity="${v.temp_indoor||v.climate_co}" data-label="Temp. CO"`:''} >${coAct}°</div>
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
        <div id="hdc-vl-flame" class="hdc-th-mode heat" style="${isVeto?'color:#fb923c':''}">● ${coModeText || modeStatus(coHvac, coPmCur)}</div>
        <div id="hdc-vl-co-btns">${modeBtns(v.climate_co, coPmList, coPmCur, coHvac, coHvacModes)}</div>
      </div>
      <div class="hdc-thcard">
        <div class="hdc-th-title">🚿 CWU</div>
        <div id="hdc-vl-cwucur" class="hdc-th-big" style="color:#38bdf8;${v.cwu_current?'cursor:pointer':''}" ${v.cwu_current?`data-action="sensor_history" data-entity="${v.cwu_current}" data-label="Temp. CWU"`:''} >${cwuCur}°</div>
        <div class="hdc-th-target">cel: <span id="hdc-cwu-set">${cwuTgt}</span>°C</div>
        <div class="hdc-th-btns">
          <button class="hdc-tbtn" data-action="climate_down" data-entity="${v.climate_cwu}" data-step="1">−</button>
          <button class="hdc-tbtn" data-action="climate_up" data-entity="${v.climate_cwu}" data-step="1">+</button>
        </div>
        <div id="hdc-vl-cwumode" class="hdc-th-mode dhw">● ${modeStatus(cwuHvac, cwuPmCur)}</div>
        <div id="hdc-vl-cwu-btns">${modeBtns(v.climate_cwu, cwuPmList, cwuPmCur, cwuHvac, cwuHvacModes)}</div>
      </div>
    </div>
    <div class="hdc-st">Kocioł Vaillant ecoTEC Plus</div>
    <div class="hdc-g2">
      <div class="hdc-box">
        <div class="hdc-box-title">🌡 Temperatury CO</div>
        <div class="hdc-ir"${v.temp_supply?' style="cursor:pointer" data-action="sensor_history" data-entity="'+v.temp_supply+'" data-label="Zasilanie"':''}><span class="hdc-ir-lbl">Zasilanie</span><span id="hdc-vl-sup2" class="hdc-ir-val o">${tSup}°C</span></div>
        <div class="hdc-ir"${v.temp_return?' style="cursor:pointer" data-action="sensor_history" data-entity="'+v.temp_return+'" data-label="Powrót"':''}><span class="hdc-ir-lbl">Powrót</span><span id="hdc-vl-ret2" class="hdc-ir-val y">${tRet}°C</span></div>
        <div class="hdc-ir"${v.temp_target_supply?' style="cursor:pointer" data-action="sensor_history" data-entity="'+v.temp_target_supply+'" data-label="Cel zasilania"':''}><span class="hdc-ir-lbl">Cel zasilania</span><span id="hdc-vl-tgtSup" class="hdc-ir-val b">${tTgtSup}°C</span></div>
        <div class="hdc-ir"${v.temp_outdoor?' style="cursor:pointer" data-action="sensor_history" data-entity="'+v.temp_outdoor+'" data-label="Zewnętrzna"':''}><span class="hdc-ir-lbl">Zewnętrzna</span><span id="hdc-vl-tout2" class="hdc-ir-val b">${tOut}°C</span></div>
        <div class="hdc-ir"${v.temp_outdoor_avg?' style="cursor:pointer" data-action="sensor_history" data-entity="'+v.temp_outdoor_avg+'" data-label="Śr. zewn. 24h"':''}><span class="hdc-ir-lbl">Śr. zewn. 24h</span><span id="hdc-vl-toutavg" class="hdc-ir-val b">${tOutAvg}°C</span></div>
      </div>
      <div class="hdc-box">
        <div class="hdc-box-title">⚙️ Praca palnika</div>
        <div class="hdc-ir"${v.flame?' style="cursor:pointer" data-action="sensor_history" data-entity="'+v.flame+'" data-label="Płomień"':''}><span class="hdc-ir-lbl">Płomień</span><span id="hdc-vl-flameval" class="hdc-ir-val ${flame?'o':''}">🔥 ${flame?'Aktywny':'Nieaktywny'}</span></div>
        <div class="hdc-ir"${v.power?' style="cursor:pointer" data-action="sensor_history" data-entity="'+v.power+'" data-label="Moc"':''}><span class="hdc-ir-lbl">Moc</span><span id="hdc-vl-pwr" class="hdc-ir-val o">${pwr} kW</span></div>
        <div class="hdc-ir"${v.fan_speed?' style="cursor:pointer" data-action="sensor_history" data-entity="'+v.fan_speed+'" data-label="Wentylator"':''}><span class="hdc-ir-lbl">Wentylator</span><span id="hdc-vl-fan" class="hdc-ir-val b">${parseInt(fanSpd).toLocaleString('pl')} rpm</span></div>
        <div class="hdc-ir"${v.heat_curve?' style="cursor:pointer" data-action="sensor_history" data-entity="'+v.heat_curve+'" data-label="Krzywa grzewcza"':''}><span class="hdc-ir-lbl">Krzywa grzewcza</span><span id="hdc-vl-curve" class="hdc-ir-val">${curve}</span></div>
      </div>
      <div class="hdc-box">
        <div class="hdc-box-title">💧 Obieg wodny</div>
        <div class="hdc-ir"${v.pressure?' style="cursor:pointer" data-action="sensor_history" data-entity="'+v.pressure+'" data-label="Ciśnienie CO"':''}><span class="hdc-ir-lbl">Ciśnienie CO</span><span id="hdc-vl-press" class="hdc-ir-val ${pressColor}">${press} bar</span></div>
        <div class="hdc-ir"${v.pump?' style="cursor:pointer" data-action="sensor_history" data-entity="'+v.pump+'" data-label="Pompa CO"':''}><span class="hdc-ir-lbl">Pompa CO</span><span id="hdc-vl-pump" class="hdc-ir-val ${pump?'g':''}">${pump?'Aktywna':'Nieaktywna'}</span></div>
      </div>
      <div class="hdc-box">
        <div class="hdc-box-title">📊 Energia (MyVaillant)</div>
        <div class="hdc-ir"${v.el_co?' style="cursor:pointer" data-action="sensor_history" data-entity="'+v.el_co+'" data-label="El. CO dziś"':''}><span class="hdc-ir-lbl">El. CO dziś</span><span id="hdc-vl-elco" class="hdc-ir-val y">${elCO} kWh</span></div>
        <div class="hdc-ir"${v.el_cwu?' style="cursor:pointer" data-action="sensor_history" data-entity="'+v.el_cwu+'" data-label="El. CWU dziś"':''}><span class="hdc-ir-lbl">El. CWU dziś</span><span id="hdc-vl-elcwu" class="hdc-ir-val b">${elCWU} kWh</span></div>
      </div>
    </div>
    ${(v.settings || []).length ? `
    <div class="hdc-st">Ustawienia</div>
    <div class="hdc-box" style="margin-bottom:10px">
      ${(v.settings || []).map(s => {
        const st = hass.states[s.entity];
        const val = st ? parseFloat(st.state) : 0;
        const _n = (v, fb) => { const n = parseFloat(v); return isNaN(n) ? fb : n; };
        const step = _n(st?.attributes?.step, 1);
        const min  = _n(st?.attributes?.min,  -999);
        const max  = _n(st?.attributes?.max,  9999);
        const dec  = s.decimals !== undefined ? s.decimals : (step < 0.01 ? 3 : step < 0.1 ? 2 : step < 1 ? 1 : 0);
        const unit = s.unit !== undefined ? s.unit : (st?.attributes.unit_of_measurement || '');
        return `<div class="hdc-ir" style="padding:6px 0">
          <span class="hdc-ir-lbl">${s.name || s.entity}</span>
          <span style="display:flex;align-items:center;gap:6px">
            <button class="hdc-tbtn" data-action="input_down" data-entity="${s.entity}" data-step="${step}" data-min="${min}" data-max="${max}">−</button>
            <span id="hdc-vl-set-${s.entity.replace(/\./g,'-')}" style="min-width:50px;text-align:center;font-size:13px;font-weight:600;color:#f1f5f9">${val.toFixed(dec)}${unit ? ' ' + unit : ''}</span>
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
    <div style="position:relative;height:200px;margin-bottom:14px"><canvas id="hdc-vc4"></canvas></div>
    <div class="hdc-st">Roczne zużycie gazu</div>
    <div class="hdc-g2" style="margin-bottom:6px">
      <div><div id="hdc-vg-yr-cur" style="font-size:20px;font-weight:700;color:#fb923c">— m³</div><div style="font-size:10px;color:#475569">Ten rok</div></div>
      <div style="text-align:right"><div id="hdc-vg-yr-prev" style="font-size:20px;font-weight:700;color:#38bdf8">— m³</div><div style="font-size:10px;color:#475569">Poprzedni rok</div></div>
    </div>
    <div style="position:relative;height:200px;margin-bottom:14px"><canvas id="hdc-vc5"></canvas></div>` : ''}
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
  const amiplusDaily   = sn(hass, m.tauron_amiplus_daily, 2);
  const amiplusMonthly = sn(hass, m.tauron_amiplus_monthly, 2);
  const amiplusBalance = sn(hass, m.tauron_amiplus_balance, 2);
  const _amiplusBalRaw   = sa(hass, m.tauron_amiplus_balance, 'due_date') || sa(hass, m.tauron_amiplus_balance, 'paymentDate') || '';
  const amiplusBalDue    = _amiplusBalRaw ? String(_amiplusBalRaw).substring(0, 10).split('-').reverse().join('.') : '';
  const amiplusBalColor  = amiplusBalance > 0 ? '#f87171' : amiplusBalance < 0 ? '#4ade80' : '#94a3b8';
  const orlenMeter= sv(hass, m.orlen_meter, '—');
  const orlenInv  = sv(hass, m.orlen_invoice, '—');
  const orlenCost = sv(hass, m.orlen_cost, '—');
  const orlenWearM3  = sv(hass, m.orlen_wear_m3, '—');
  const orlenWearKwh = sv(hass, m.orlen_wear_kwh, '—');
  const orlenConv    = sv(hass, m.orlen_conversion, '—');
  const orlenTariff  = sa(hass, m.orlen_meter, "tariff") || "";
  const _orlenReadRaw    = sa(hass, m.orlen_meter, "reading_date_local");
  const orlenReadDate    = _orlenReadRaw ? String(_orlenReadRaw).substring(0,10).split("-").reverse().join(".") : "";
  const orlenReadType    = sa(hass, m.orlen_meter, "reading_type") || "";
  const _orlenInvDateRaw = sa(hass, m.orlen_cost, "last_invoice_date");
  const orlenLastInvDate = _orlenInvDateRaw ? String(_orlenInvDateRaw).substring(0,10).split("-").reverse().join(".") : "";
  const orlenLastInvAmt  = sa(hass, m.orlen_cost, "last_invoice_gross_amount");
  const orlenLastInvNum  = sa(hass, m.orlen_cost, "last_invoice_number") || "";
  const orlenLastInvAmtFmt = orlenLastInvAmt != null ? parseFloat(orlenLastInvAmt).toFixed(2) + " zł" : "";
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
    ${(m.tauron_amiplus_daily || m.tauron_amiplus_monthly || m.tauron_amiplus_balance) ? `
    <div class="hdc-st">🌐 Mój Tauron · AMIplus online</div>
    <div class="hdc-g3" style="margin-bottom:12px">
      ${m.tauron_amiplus_daily   ? `<div class="hdc-sc" style="cursor:pointer" data-action="sensor_history" data-entity="${m.tauron_amiplus_daily}"   data-label="AMIplus · Wczoraj"><div class="hdc-sc-lbl">Wczoraj</div><div class="hdc-sc-val" style="color:#fbbf24">${amiplusDaily} kWh</div><div class="hdc-sc-sub">portal AMIplus</div></div>` : ''}
      ${m.tauron_amiplus_monthly ? `<div class="hdc-sc" style="cursor:pointer" data-action="sensor_history" data-entity="${m.tauron_amiplus_monthly}" data-label="AMIplus · Miesiąc"><div class="hdc-sc-lbl">Miesiąc</div><div class="hdc-sc-val" style="color:#4ade80">${amiplusMonthly} kWh</div><div class="hdc-sc-sub">portal AMIplus</div></div>` : ''}
      ${m.tauron_amiplus_balance ? `<div class="hdc-sc" style="cursor:pointer" data-action="sensor_history" data-entity="${m.tauron_amiplus_balance}" data-label="Należności Tauron"><div class="hdc-sc-lbl">Należności</div><div class="hdc-sc-val" style="color:${amiplusBalColor}">${amiplusBalance} PLN</div>${amiplusBalDue ? `<div class="hdc-sc-sub">termin: ${amiplusBalDue}</div>` : ''}</div>` : ''}
    </div>` : ''}
    <div class="hdc-st">🔵 myORLEN · Gaz${orlenTariff ? ` · <span style="color:#94a3b8;font-size:11px">${orlenTariff}</span>` : ""}</div>
    <div class="hdc-g3" style="margin-bottom:6px">
      ${m.orlen_meter   ? `<div class="hdc-sc" style="cursor:pointer" data-action="sensor_history" data-entity="${m.orlen_meter}"   data-label="Odczyt licznika"><div class="hdc-sc-lbl">Odczyt licznika</div><div class="hdc-sc-val" style="color:#a78bfa;font-size:15px">${orlenMeter} m³</div>${orlenReadDate ? `<div class="hdc-sc-sub">${orlenReadDate}${orlenReadType ? " · " + orlenReadType : ""}</div>` : ""}</div>` : ''}
      ${m.orlen_invoice ? `<div class="hdc-sc" style="cursor:pointer" data-action="sensor_history" data-entity="${m.orlen_invoice}" data-label="Saldo / Ostatnia faktura"><div class="hdc-sc-lbl">Saldo / Ostatnia faktura</div><div class="hdc-sc-val" style="color:#fbbf24;font-size:15px">${orlenInv} PLN</div>${orlenLastInvAmtFmt ? `<div class="hdc-sc-sub">${orlenLastInvAmtFmt}${orlenLastInvDate ? " · "+orlenLastInvDate : ""}</div>` : ""}${orlenLastInvNum ? `<div class="hdc-sc-sub" style="font-size:9px;color:#475569">${orlenLastInvNum}</div>` : ""}</div>` : ""}
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

  const statusItems = (t.status_monitors || []).map(item => {
    const on = isOn(hass, item.entity);
    const clickAttr = item.entity ? ` style="cursor:pointer" data-action="sensor_history" data-entity="${item.entity}" data-label="${item.name}"` : '';
    return `<div class="hdc-box" style="margin-bottom:8px;display:flex;align-items:center;gap:12px;padding:10px 14px${item.entity?';cursor:pointer':''}"${clickAttr}>
      <div style="width:8px;height:8px;border-radius:50%;background:${on?'#4ade80':'#f87171'};flex-shrink:0;box-shadow:0 0 6px ${on?'#4ade8080':'#f8717180'}"></div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#94a3b8;margin-bottom:4px">${item.name}</div>
        <div style="font-size:10px;color:${on?'#4ade80':'#f87171'};font-weight:600">${on?'on':'off'}</div>
      </div>
    </div>`;
  }).join('');

  const dlVal = sn(hass, t.speedtest_download, 1);
  const ulVal = sn(hass, t.speedtest_upload, 1);
  const pingVal = sn(hass, t.speedtest_ping, 0);

  return `
    ${statusItems ? `<div class="hdc-st">📡 Status</div>
    <div style="margin-bottom:10px">${statusItems}</div>` : ''}
    ${(t.speedtest_download || t.speedtest_upload || t.speedtest_ping) ? `
    <div class="hdc-st">📶 SpeedTest</div>
    <div class="hdc-box" style="margin-bottom:10px">
      <div style="font-size:11px;color:#94a3b8;margin-bottom:10px">${t.speedtest_label || 'Prędkość Internetu (24h)'}</div>
      <div class="hdc-g3" style="margin-bottom:12px">
        ${t.speedtest_download ? `<div style="cursor:pointer" data-action="sensor_history" data-entity="${t.speedtest_download}" data-label="Pobieranie">
          <div style="font-size:24px;font-weight:700;color:#38bdf8">${dlVal}</div>
          <div style="font-size:10px;color:#475569">Pobieranie (Mbit/s)</div>
        </div>` : ''}
        ${t.speedtest_upload ? `<div style="cursor:pointer" data-action="sensor_history" data-entity="${t.speedtest_upload}" data-label="Wysyłanie">
          <div style="font-size:24px;font-weight:700;color:#fb923c">${ulVal}</div>
          <div style="font-size:10px;color:#475569">Wysyłanie (Mbit/s)</div>
        </div>` : ''}
        ${t.speedtest_ping ? `<div style="cursor:pointer" data-action="sensor_history" data-entity="${t.speedtest_ping}" data-label="Ping">
          <div style="font-size:24px;font-weight:700;color:#f87171">${pingVal}</div>
          <div style="font-size:10px;color:#475569">Ping (ms)</div>
        </div>` : ''}
      </div>
      <div style="position:relative;height:160px"><canvas id="hdc-speedtest-chart"></canvas></div>
    </div>` : ''}
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
  const thumbPos  = c.thumbnails || 'bottom'; // 'bottom' | 'right'
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
  const focusMaxH = thumbPos === 'right' ? 'none' : '640px';
  const focusHtml = `
    <div class="hdc-cam-focus">
      <div class="hdc-camfeed" style="aspect-ratio:16/9;max-height:${focusMaxH};position:relative;overflow:hidden">
        ${focusCam.entity
          ? `<ha-camera-stream id="hdc-focus-stream" data-entity="${focusCam.entity}" muted allow-exoplayer style="width:100%;height:100%;display:block"></ha-camera-stream>`
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

  const sidebarClass = thumbPos === 'right' ? ' sidebar-thumb' : '';
  const cards = channels.map((ch, i) => `
    <div class="hdc-camcard${i===0?' focus':''}${sidebarClass}" data-cam-idx="${i}" data-cam-entity="${ch.entity||''}">
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

  const nvrHtml = `
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

  if (thumbPos === 'right') {
    return `
      <div class="hdc-cam-sidebar-layout">
        <div class="hdc-cam-main">
          <div class="hdc-st">Aktywny podgląd · <span id="hdc-focus-label" style="color:#38bdf8">${focusCam.label} · ${focusCam.name}</span></div>
          ${focusHtml}
        </div>
        <div class="hdc-cam-thumbs-col">
          <div class="hdc-st" style="margin-top:0">Kamery</div>
          <div class="hdc-cam-thumb-list">${cards}</div>
        </div>
      </div>
      ${nvrHtml}`;
  }

  return `
    <div class="hdc-st">Aktywny podgląd · <span id="hdc-focus-label" style="color:#38bdf8">${focusCam.label} · ${focusCam.name}</span></div>
    ${focusHtml}
    <div class="hdc-st">Wszystkie kamery · HIKVISION DS-7608NXI-K2</div>
    <div class="hdc-camgrid">${cards}</div>
    ${nvrHtml}`;
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
        locLine = `<div id="hdc-car-loc-${idx}" style="font-size:11px;color:#64748b;margin:6px 0 2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">📍 ${locLabel}</div>`;
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
          <span id="hdc-car-fuel-${idx}" style="color:${fuelColor};font-weight:600">${fuel}%${fuelLt !== null ? ` · ${fuelLt} L` : ''}</span>
        </div>
        <div class="hdc-carbar"><div id="hdc-car-fbar-${idx}" class="hdc-carbar-fill" style="width:${fuel}%;background:${fuelColor}"></div></div>
        <div class="hdc-g3" style="gap:6px;margin-bottom:8px">
          ${v.fuel_range ? `<div class="hdc-sc" style="padding:8px;cursor:pointer" data-action="sensor_history" data-entity="${v.fuel_range}" data-label="Zasięg"><div class="hdc-sc-lbl">Zasięg</div><div id="hdc-car-range-${idx}" class="hdc-sc-val" style="color:${fuelColor};font-size:15px">${range}</div></div>` : `<div class="hdc-sc" style="padding:8px"><div class="hdc-sc-lbl">Zasięg</div><div id="hdc-car-range-${idx}" class="hdc-sc-val" style="color:${fuelColor};font-size:15px">${range}</div></div>`}
          ${v.odometer   ? `<div class="hdc-sc" style="padding:8px;cursor:pointer" data-action="sensor_history" data-entity="${v.odometer}"   data-label="Przebieg"><div class="hdc-sc-lbl">Przebieg</div><div id="hdc-car-odo-${idx}" class="hdc-sc-val" style="font-size:15px">${parseInt(odo).toLocaleString('pl')}</div></div>` : `<div class="hdc-sc" style="padding:8px"><div class="hdc-sc-lbl">Przebieg</div><div id="hdc-car-odo-${idx}" class="hdc-sc-val" style="font-size:15px">${parseInt(odo).toLocaleString('pl')}</div></div>`}
          ${bat !== null ? `<div class="hdc-sc" style="padding:8px;cursor:pointer" data-action="sensor_history" data-entity="${v.battery}"    data-label="Bat. 12V"><div class="hdc-sc-lbl">Bat. 12V</div><div id="hdc-car-bat-${idx}" class="hdc-sc-val" style="color:${battColor(bat)};font-size:15px">${bat}%</div></div>` : `<div class="hdc-sc" style="padding:8px"><div class="hdc-sc-lbl">&nbsp;</div><div id="hdc-car-bat-${idx}" class="hdc-sc-val">&nbsp;</div></div>`}
        </div>
        <div id="hdc-car-upd-${idx}" style="font-size:10px;color:#475569;margin-bottom:6px">${lastUpd !== '—' ? `🕐 ${lastUpd}` : ''}</div>
        <div class="hdc-chips">
          ${locked !== null ? `<button id="hdc-car-lock-${idx}" class="hdc-tbtn" style="font-size:11px;width:auto;height:24px;padding:0 10px;${locked?'background:rgba(74,222,128,.15);border-color:#4ade80;color:#4ade80':'background:rgba(248,113,113,.15);border-color:#f87171;color:#f87171'}" data-action="lock_toggle" data-entity="${v.lock}">${locked?'🔒 Zamknięty':'🔓 Otwarty'}</button>` : ''}
          <span id="hdc-car-conn-${idx}">${connChip}</span>
        </div>
        <div id="hdc-car-loc-wrap-${idx}">${locLine}</div>
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

  const sh = (entity, label) => entity ? ` style="cursor:pointer" data-action="sensor_history" data-entity="${entity}" data-label="${label}"` : '';
  return `
    <div class="hdc-g3" style="margin-bottom:10px">
      <div class="hdc-sc"${sh(p.node_cpu,         'CPU node')}><div class="hdc-sc-lbl">CPU node</div><div class="hdc-sc-val" style="color:${cpuColor}">${cpu}%</div></div>
      <div class="hdc-sc"${sh(p.node_ram_pct,      'RAM')}><div class="hdc-sc-lbl">RAM</div><div class="hdc-sc-val" style="color:${ramColor}">${ramPct}%</div><div class="hdc-sc-sub">wolne: ${ramFree}</div></div>
      <div class="hdc-sc"${sh(p.node_disk_pct,     'Disk')}><div class="hdc-sc-lbl">Disk</div><div class="hdc-sc-val" style="color:#4ade80">${diskPct}%</div></div>
      <div class="hdc-sc"${sh(p.node_lxc_running,  'LXC aktywne')}><div class="hdc-sc-lbl">LXC aktywne</div><div class="hdc-sc-val" style="color:#f472b6">${lxcRun}</div></div>
      <div class="hdc-sc"${sh(p.node_vm_running,   'QEMU aktywne')}><div class="hdc-sc-lbl">QEMU aktywne</div><div class="hdc-sc-val" style="color:#2dd4bf">${vmRun}</div></div>
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
  const searchHtml = `<input id="hdc-sw-search" class="hdc-sw-search" type="text" placeholder="🔍 Szukaj przełącznika lub pokoju…" autocomplete="off">`;

  const renderSwTile = (item, group) => {
    const st = hass.states[item.entity];
    const isOn = st ? st.state === 'on' : false;
    const isLight = item.entity.startsWith('light.');
    const domain = item.entity.split('.')[0];
    const defaultIco = isLight ? (isOn ? '💡' : '🔆') : domain === 'switch' ? '🔌' : domain === 'fan' ? '💨' : '⚙️';
    const ico = item.icon || defaultIco;
    const name = item.name || st?.attributes?.friendly_name || item.entity;
    const typeClass = isLight ? 'light' : '';
    const swId = `hdc-sw-${item.entity.replace('.', '-')}`;
    const timerHtml = group.show_timer ? `<div class="hdc-sw-timer">${isOn && st?.last_changed ? formatGateElapsed(st.last_changed) : ''}</div>` : '';
    return `<div id="${swId}" class="hdc-sw-tile${isOn ? ' on' : ''}${typeClass ? ' ' + typeClass : ''}" data-action="toggle" data-entity="${item.entity}" data-swname="${name}">
      <div class="hdc-sw-tile-ico">${ico}</div>
      <div class="hdc-sw-tile-info">
        <div class="hdc-sw-tile-name">${name}</div>
        <div class="hdc-sw-tile-state">${isOn ? 'Włączone' : 'Wyłączone'}</div>
        ${timerHtml}
      </div>
      <div class="hdc-sw-dot"></div>
    </div>`;
  };

  const renderLZ4Tile = (item) => {
    const battSt = item.battery ? hass.states[item.battery] : null;
    const battVal = battSt ? Math.round(parseFloat(battSt.state)) : NaN;
    const battColor = isNaN(battVal) ? '#475569' : battVal > 50 ? '#4ade80' : battVal > 20 ? '#fbbf24' : '#f87171';
    const battHtml = !isNaN(battVal) ? `<span style="color:${battColor}">${battIcon(battVal)} ${battVal}%</span>` : '';
    const battId = item.battery ? `hdc-lz4-batt-${item.battery.replace(/\./g, '-')}` : '';
    const actions = [
      { label: '1×', ...(item.single || {}) },
      { label: '2×', ...(item.double || {}) },
      { label: '⏸',  ...(item.hold   || {}) },
    ].filter(a => a.entity);
    const rows = actions.map(a => {
      const st = hass.states[a.entity];
      const isOn = st?.state === 'on';
      const devName = a.name || st?.attributes?.friendly_name || a.entity;
      return `<div class="hdc-lz4-row" data-action="toggle" data-entity="${a.entity}">
        <span class="hdc-lz4-act">${a.label}</span>
        <span class="hdc-lz4-dev">${devName}</span>
        <span id="hdc-lz4-st-${a.entity.replace(/\./g, '-')}" class="hdc-lz4-st ${isOn ? 'on' : 'off'}">${isOn ? 'Wł.' : 'Wył.'}</span>
      </div>`;
    }).join('');
    return `<div class="hdc-lz4" data-swname="${item.name || 'LZ4'}">
      <div class="hdc-lz4-head">
        <span class="hdc-lz4-name">🔘 ${item.name || 'LZ4'}</span>
        ${battId ? `<span id="${battId}" class="hdc-lz4-batt">${battHtml}</span>` : ''}
      </div>
      ${rows}
    </div>`;
  };

  const renderGroupHtml = (group, marginBottom = '14px') => {
    const regular = (group.entities || []).filter(e => e.type !== 'lz4');
    const lz4s    = (group.entities || []).filter(e => e.type === 'lz4');
    const regHtml = regular.map(e => renderSwTile(e, group)).join('');
    const lz4Html = lz4s.map(e => renderLZ4Tile(e)).join('');
    return (regHtml ? `<div class="hdc-gaa" style="margin-bottom:${lz4s.length ? '8px' : marginBottom}">${regHtml}</div>` : '')
         + (lz4Html ? `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:8px;margin-bottom:${marginBottom}">${lz4Html}</div>` : '');
  };

  // Detect room-based grouping (any group with 'room' field)
  const useRooms = groups.some(g => g.room);

  if (!useRooms) {
    const sectionsHtml = groups.map(group =>
      `<div class="hdc-sw-section" data-room="${group.name || ''}">
        <div class="hdc-st">${group.icon ? group.icon + ' ' : ''}${group.name || 'Grupa'}</div>
        ${renderGroupHtml(group)}
      </div>`
    ).join('');
    return searchHtml + sectionsHtml;
  }

  // Room-first grouping
  const roomOrder = [];
  const roomGroups = new Map();
  groups.forEach(group => {
    const room = group.room || '—';
    if (!roomGroups.has(room)) { roomOrder.push(room); roomGroups.set(room, []); }
    roomGroups.get(room).push(group);
  });

  const sectionsHtml = roomOrder.map(room => {
    const roomGroupList = roomGroups.get(room);
    const multiType = roomGroupList.length > 1;
    const innerHtml = roomGroupList.map(group => {
      const html = renderGroupHtml(group, multiType ? '10px' : '14px');
      if (!html) return '';
      const subHeader = multiType ? `<div class="hdc-st-sub">${group.icon ? group.icon + ' ' : ''}${group.name || ''}</div>` : '';
      return subHeader + html;
    }).join('');
    return `<div class="hdc-sw-section" data-room="${room}"><div class="hdc-st">${room}</div>${innerHtml}</div>`;
  }).join('');
  return searchHtml + sectionsHtml;
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
  const step = 1;
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
  if (!room.fan && !room.light && !room.humidifier_switch) return '';
  const fanOn   = room.fan              ? hass.states[room.fan]?.state              === 'on' : false;
  const lightOn = room.light            ? hass.states[room.light]?.state            === 'on' : false;
  const humSwOn = room.humidifier_switch? hass.states[room.humidifier_switch]?.state === 'on' : false;
  const fanId   = room.fan              ? room.fan.replace('.', '-')              : '';
  const lightId = room.light            ? room.light.replace('.', '-')            : '';
  const humSwId = room.humidifier_switch? room.humidifier_switch.replace('.', '-'): '';
  return `<div style="display:flex;gap:6px;margin-top:8px;padding-top:7px;border-top:1px solid rgba(255,255,255,.06);flex-wrap:wrap">
    ${room.fan              ? `<button id="hdc-ctrl-fan-${fanId}"    class="hdc-tbtn" style="font-size:10px;height:26px;padding:0 10px;width:auto;${fanOn  ?'background:rgba(56,189,248,.15);border-color:#38bdf8;color:#38bdf8':''}"   data-action="toggle" data-entity="${room.fan}">💨 ${fanOn  ?'Wł.':'Wył.'}</button>` : ''}
    ${room.light            ? `<button id="hdc-ctrl-light-${lightId}" class="hdc-tbtn" style="font-size:10px;height:26px;padding:0 10px;width:auto;${lightOn?'background:rgba(251,191,36,.15);border-color:#fbbf24;color:#fbbf24':''}" data-action="toggle" data-entity="${room.light}">💡 ${lightOn?'Wł.':'Wył.'}</button>` : ''}
    ${room.humidifier_switch? `<button id="hdc-ctrl-humidsw-${humSwId}" class="hdc-tbtn" style="font-size:10px;height:26px;padding:0 10px;width:auto;${humSwOn?'background:rgba(56,189,248,.15);border-color:#38bdf8;color:#38bdf8':''}" data-action="toggle" data-entity="${room.humidifier_switch}">💧 ${humSwOn?'Wł.':'Wył.'}</button>` : ''}
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
//  KOSIARKA
// ============================================================

const MOWER_STATE_LABEL = {
  charging_completed: 'Naładowany', charging: 'Ładowanie', mowing: 'Koszenie',
  docked: 'W stacji', paused: 'Pauza', returning: 'Powrót', idle: 'Gotowy',
  standby: 'Czuwanie', error: 'Błąd', unknown: '—',
};
const MOWER_STATE_COLOR = {
  charging_completed: '#38bdf8', charging: '#38bdf8', mowing: '#4ade80',
  docked: '#38bdf8', paused: '#fbbf24', returning: '#a78bfa', error: '#f87171',
};

function renderKosiarka(hass, cfg) {
  const m = cfg.mower || {};
  const entity = m.entity || '';
  const camEntity = m.camera || '';
  const st = hass.states[entity] || {};
  const state = st.state || 'unknown';
  const attr = st.attributes || {};
  const mowerState = attr.mower_state || state;
  const stateLabel = MOWER_STATE_LABEL[mowerState] || mowerState.replace(/_/g, ' ');
  const stateColor = MOWER_STATE_COLOR[mowerState] || '#94a3b8';
  const isDocked = state === 'docked';
  const isMowing = state === 'mowing';
  const isPaused = state === 'paused';
  const camToken = sa(hass, camEntity, 'access_token') || '';
  const camSrc = camEntity && camToken ? `/api/camera_proxy/${camEntity}?token=${camToken}&t=${Date.now()}` : '';
  const btnBase = 'flex:1;border-radius:10px;font-size:13px;padding:10px 6px;transition:background .15s';
  const btnActive  = `${btnBase};background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);color:#f1f5f9;cursor:pointer`;
  const btnInactive= `${btnBase};background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.05);color:#334155;cursor:default`;
  const btnPrimary = `${btnBase};background:rgba(74,222,128,.12);border:1px solid rgba(74,222,128,.3);color:#4ade80;cursor:pointer`;
  const sh = (ent, label) => ent ? ` style="cursor:pointer" data-action="sensor_history" data-entity="${ent}" data-label="${label}"` : '';
  return `
    ${camSrc ? `
    <div class="hdc-st">Mapa</div>
    <div style="background:#0f172a;border-radius:12px;overflow:hidden;margin-bottom:12px;min-height:120px;display:flex;align-items:center;justify-content:center">
      <img id="hdc-mower-map" src="${camSrc}" style="width:100%;display:block;max-height:420px;object-fit:contain" onerror="this.style.opacity='.15'">
    </div>` : ''}
    <div class="hdc-st">Status</div>
    <div class="hdc-g3" style="margin-bottom:10px">
      <div class="hdc-sc"${sh(entity, 'Stan kosiarki')}><div class="hdc-sc-lbl">Stan</div><div id="hdc-mow-state" class="hdc-sc-val" style="color:${stateColor};font-size:15px">${stateLabel}</div></div>
      ${m.battery ? `<div class="hdc-sc"${sh(m.battery, 'Bateria')}><div class="hdc-sc-lbl">Bateria</div><div id="hdc-mow-bat" class="hdc-sc-val" style="color:#4ade80">${sn(hass, m.battery, 0)} %</div></div>` : ''}
      ${m.charging_status ? `<div class="hdc-sc"${sh(m.charging_status, 'Ładowanie')}><div class="hdc-sc-lbl">Ładowanie</div><div id="hdc-mow-chg" class="hdc-sc-val" style="font-size:13px">${sv(hass, m.charging_status, '—')}</div></div>` : ''}
    </div>
    <div class="hdc-st">Sterowanie</div>
    <div style="display:flex;gap:8px;margin-bottom:12px">
      <button id="hdc-mow-btn-start" style="${isDocked||isPaused ? btnPrimary : btnInactive}" ${isDocked||isPaused ? `data-action="mower_start" data-entity="${entity}"` : ''}>▶ Start</button>
      <button id="hdc-mow-btn-pause" style="${isMowing ? btnActive : btnInactive}" ${isMowing ? `data-action="mower_pause" data-entity="${entity}"` : ''}>⏸ Pauza</button>
      <button id="hdc-mow-btn-dock"  style="${isMowing||isPaused ? btnActive : btnInactive}" ${isMowing||isPaused ? `data-action="mower_dock" data-entity="${entity}"` : ''}>⏏ Do stacji</button>
    </div>
    <div class="hdc-st">Statystyki</div>
    <div class="hdc-g3">
      <div class="hdc-sc"${sh(m.sessions_entity, 'Sesje kosienia')}><div class="hdc-sc-lbl">Sesje</div><div class="hdc-sc-val">${attr.cleaning_count ?? '—'} x</div></div>
      <div class="hdc-sc"${sh(m.area_entity, 'Łączna powierzchnia')}><div class="hdc-sc-lbl">Łączna pow.</div><div class="hdc-sc-val" style="font-size:14px">${attr.total_cleaned_area ?? '—'} m²</div></div>
      <div class="hdc-sc"${sh(m.duration_entity, 'Łączny czas')}><div class="hdc-sc-lbl">Łączny czas</div><div class="hdc-sc-val" style="font-size:14px">${attr.total_cleaning_time ?? '—'} min</div></div>
    </div>`;
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
  { id: 'mower',        label: '🌿 Kosiarka',    render: renderKosiarka },
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
    this._pendingInputs = {};
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

    // Switches search filter
    this.shadowRoot.getElementById('hdc-pane').addEventListener('input', e => {
      if (e.target.id !== 'hdc-sw-search') return;
      this._filterSwitches(e.target.value);
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
    // Auto-dodaj kosiarka jeśli mower.entity skonfigurowane
    if (cfg.tabs && (cfg.mower || {}).entity && !allowed.includes('mower')) {
      allowed.push('mower');
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
      if (this._activeTab === 'mower'        && !tabChanged) { this._updateMowerLive(); return; }
      pane.innerHTML = tab.render(this._hass, this._config);
      // home tab — no post-render init needed (map shown on-demand via modal)
      if (this._activeTab === 'auta') setTimeout(() => this._initCarMaps(), 0);
      if (this._activeTab === 'vaillant') setTimeout(() => this._initVaillantCharts(), 0);
      if (this._activeTab === 'tplink') setTimeout(() => this._initSpeedTestChart(), 0);
      if (this._activeTab === 'kamery') setTimeout(() => this._initCameraStream(), 0);
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
      const picture = p.entity ? hass.states[p.entity]?.attributes?.entity_picture : null;
      const avatarInner = picture
        ? `<img src="${picture}" style="width:100%;height:100%;object-fit:cover;border-radius:50%">`
        : initials;
      const avatarStyle = picture ? '' : `color:${p.color};background:${p.color}22`;
      return `
        <div class="hdc-pc ${isHome?'home':'away'}"${p.entity ? ` data-action="person_map" data-entity="${p.entity}" style="cursor:pointer"` : ''}>
          <div style="display:flex;gap:10px;margin-bottom:9px;align-items:flex-start">
            <div class="hdc-pav" style="${avatarStyle};overflow:hidden">${avatarInner}</div>
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
    const fanSpd = sv(hass, v.fan_speed, '—');
    const curve  = sv(hass, v.heat_curve, '—');
    const tOutAvg = sn(hass, v.temp_outdoor_avg, 1);
    const elCO   = sn(hass, v.el_co,  2);
    const elCWU  = sn(hass, v.el_cwu, 2);
    const PM_LABEL   = { schedule:'Harmonogram', manual:'Ręczny', eco:'Eco', away:'Poza domem',
      boost:'Turbo', sleep:'Sen', home:'Dom', comfort:'Komfort', off:'Wyłączony', none:'—' };
    const HVAC_LABEL = { heat:'Grzanie', auto:'Auto', heat_cool:'Grzanie', cool:'Chłodzenie',
      fan_only:'Wentylator', dry:'Osuszanie', off:'Wył.' };
    const hvacLabel = m => HVAC_LABEL[m] || m;
    const pmLabel   = p => PM_LABEL[p]   || p;
    const modeStatus = (hvac, pmCur) => hvac === 'off' ? 'Wyłączone'
      : `${hvacLabel(hvac)}${pmCur && pmCur !== 'none' ? ' · ' + pmLabel(pmCur) : ''}`;
    const coHvac  = sv(hass, v.climate_co,  'off');
    const coPmCur = sa(hass, v.climate_co,  'preset_mode') || '';
    const coPmList = (sa(hass, v.climate_co, 'preset_modes') || []).filter(p => p !== 'none');
    const coHvacModes = sa(hass, v.climate_co, 'hvac_modes') || [];
    const cwuHvac  = sv(hass, v.climate_cwu, 'off');
    const cwuPmCur = sa(hass, v.climate_cwu, 'preset_mode') || '';
    const cwuPmList = (sa(hass, v.climate_cwu, 'preset_modes') || []).filter(p => p !== 'none');
    const cwuHvacModes = sa(hass, v.climate_cwu, 'hvac_modes') || [];
    const sfModeL  = v.sf_mode_entity ? sv(hass, v.sf_mode_entity, 'auto') : 'auto';
    const isVetoL  = sfModeL === 'veto';
    const vetoDateL = v.veto_end_date ? sv(hass, v.veto_end_date, '') : '';
    const vetoTimeL = v.veto_end_time ? sv(hass, v.veto_end_time, '').substring(0, 5) : '';
    const vetoUntilL = (vetoDateL || vetoTimeL) ? `do ${vetoDateL}${vetoDateL && vetoTimeL ? ' ' : ''}${vetoTimeL}` : '';
    const pressColor = press < 1.0 ? 'r' : press > 2.5 ? 'r' : press < 1.4 ? 'y' : 'g';
    const modeBtnsHtml = (entity, pmList, pmCur, hvac, hvacModes) => {
      const seen = new Set();
      const modes = hvacModes.filter(m => m !== 'none').filter(m => { const lbl = hvacLabel(m); if (seen.has(lbl)) return false; seen.add(lbl); return true; });
      return `<div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:6px;justify-content:center">
        ${modes.map(m => { const isOff = m === 'off'; const active = hvac === m;
          const style = active ? (isOff ? 'background:rgba(248,113,113,.2);border-color:#f87171;color:#f87171' : 'background:rgba(56,189,248,.15);border-color:#38bdf8;color:#38bdf8') : '';
          return `<button class="hdc-tbtn" style="font-size:10px;width:auto;height:22px;padding:0 8px;${style}" data-action="set_hvac_mode" data-entity="${entity}" data-mode="${m}">${isOff?'⏻ ':''}${hvacLabel(m)}</button>`;
        }).join('')}
        ${hvac !== 'off' ? pmList.map(p => `<button class="hdc-tbtn" style="font-size:10px;width:auto;height:22px;padding:0 8px;${pmCur===p?'background:rgba(56,189,248,.15);border-color:#38bdf8;color:#38bdf8':''}" data-action="set_preset" data-entity="${entity}" data-preset="${p}">${pmLabel(p)}</button>`).join('') : ''}
      </div>`;
    };
    const flameEl = this.shadowRoot.getElementById('hdc-vl-flame');
    if (flameEl) {
      flameEl.textContent = isVetoL ? `● 🔒 Veto${vetoUntilL ? ' ' + vetoUntilL : ''}` : `● ${modeStatus(coHvac, coPmCur)}`;
      flameEl.style.color = isVetoL ? '#fb923c' : '';
    }
    const coBtnsEl = sr.getElementById('hdc-vl-co-btns');
    if (coBtnsEl) coBtnsEl.innerHTML = modeBtnsHtml(v.climate_co, coPmList, coPmCur, coHvac, coHvacModes);
    const cwuBtnsEl = sr.getElementById('hdc-vl-cwu-btns');
    if (cwuBtnsEl) cwuBtnsEl.innerHTML = modeBtnsHtml(v.climate_cwu, cwuPmList, cwuPmCur, cwuHvac, cwuHvacModes);
    setText('hdc-vl-tind',    `${tInd}°C`);
    setText('hdc-vl-tout',    `${tOut}°C`);
    setText('hdc-vl-toutavg', `${tOutAvg}°C`);
    setText('hdc-vl-tgtSup',  `${tTgtSup}°C`);
    setText('hdc-vl-tgtSup2', `${tTgtSup}°C`);
    setText('hdc-vl-sup',     `${tSup}°C`);
    setText('hdc-vl-ret',     `${tRet}°C`);
    setText('hdc-vl-coact',   `${coAct}°`);
    setText('hdc-co-set',     coSet);
    setText('hdc-vl-cwumode', `● ${modeStatus(cwuHvac, cwuPmCur)}`);
    setText('hdc-vl-cwucur',  `${cwuCur}°`);
    setText('hdc-cwu-set',    cwuTgt);
    setText('hdc-vl-sup2',    `${tSup}°C`);
    setText('hdc-vl-ret2',    `${tRet}°C`);
    setText('hdc-vl-tout2',   `${tOut}°C`);
    setText('hdc-vl-fan',     `${isNaN(parseInt(fanSpd)) ? fanSpd : parseInt(fanSpd).toLocaleString('pl')} rpm`);
    setText('hdc-vl-curve',   curve);
    setText('hdc-vl-pwr',     `${pwr} kW`);
    const pressEl = sr.getElementById('hdc-vl-press');
    if (pressEl) { pressEl.textContent = `${press} bar`; pressEl.className = `hdc-ir-val ${pressColor}`; }
    const pumpEl = sr.getElementById('hdc-vl-pump');
    if (pumpEl) { pumpEl.textContent = pump ? 'Aktywna' : 'Nieaktywna'; pumpEl.className = `hdc-ir-val ${pump ? 'g' : ''}`; }
    const flameValEl = sr.getElementById('hdc-vl-flameval');
    if (flameValEl) { flameValEl.textContent = `🔥 ${flame ? 'Aktywny' : 'Nieaktywny'}`; flameValEl.className = `hdc-ir-val ${flame ? 'o' : ''}`; }
    setText('hdc-vl-elco',    `${elCO} kWh`);
    setText('hdc-vl-elcwu',   `${elCWU} kWh`);
    (v.settings || []).forEach(s => {
      if (this._pendingInputs[s.entity] !== undefined) return; // debounce in progress — keep optimistic value
      const st = hass.states[s.entity];
      if (!st) return;
      const val = parseFloat(st.state);
      if (isNaN(val)) return;
      const step = parseFloat(st.attributes.step) || 1;
      const dec  = s.decimals !== undefined ? s.decimals : (step < 0.01 ? 3 : step < 0.1 ? 2 : step < 1 ? 1 : 0);
      const unit = s.unit !== undefined ? s.unit : (st.attributes.unit_of_measurement || '');
      const el = sr.getElementById('hdc-vl-set-' + s.entity.replace(/\./g, '-'));
      if (el) el.textContent = val.toFixed(dec) + (unit ? ' ' + unit : '');
    });
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

      // Filtr anomalii — spike przy restarcie HA (utility_meter wraca z unavailable→0→wartość)
      const maxDaily = typeof v.gas_daily_max_m3 === 'number' ? v.gas_daily_max_m3 : 30;
      const toVal    = (d) => Math.max(0, Math.min(maxDaily, Math.round((d.change || 0) * 10) / 10));
      const toValMon = (d) => Math.max(0, Math.round((d.change || 0) * 10) / 10);
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
          monMap[mk].heat += toValMon(d);
        });
        cwuMon.forEach(d => {
          const dt = new Date(toMs(d));
          const mk = dt.getFullYear() + '-' + String(dt.getMonth() + 1).padStart(2, '0');
          if (monMap[mk]) monMap[mk].cwu += toValMon(d);
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

        // Chart 5 — yearly bars
        const c5 = this.shadowRoot.getElementById('hdc-vc5');
        const yearMap = {};
        monKeys.forEach(mk => {
          const yr = mk.split('-')[0];
          yearMap[yr] = (yearMap[yr] || 0) + monMap[mk].heat + monMap[mk].cwu;
        });
        const yrKeys = Object.keys(yearMap).sort();
        const yrTotals = yrKeys.map(y => Math.round(yearMap[y] * 10) / 10);
        const curYr = String(new Date().getFullYear());
        const prevYr = String(new Date().getFullYear() - 1);
        const elYrCur  = this.shadowRoot.getElementById('hdc-vg-yr-cur');
        const elYrPrev = this.shadowRoot.getElementById('hdc-vg-yr-prev');
        if (elYrCur)  elYrCur.textContent  = ((yearMap[curYr]  || 0).toFixed(1)) + ' m³';
        if (elYrPrev) elYrPrev.textContent = ((yearMap[prevYr] || 0).toFixed(1)) + ' m³';
        if (c5 && yrTotals.length) {
          if (c5._hdcChart) c5._hdcChart.destroy();
          c5._hdcChart = new Chart(c5, { type: 'bar',
            data: { labels: yrKeys, datasets: [{ label: 'Zużycie gazu', data: yrTotals,
              backgroundColor: '#fb923c', borderRadius: 3 }] },
            options: { ...barOpts }
          });
        }
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

  _showWindyModal() {
    const cfg = this._config.weather || {};
    const windyUrl = cfg.windy_embed;
    const hasCoords = cfg.lat && cfg.lon;
    if (!windyUrl && !hasCoords) return;

    const existing = this.shadowRoot.getElementById('hdc-windy-overlay');
    if (existing) { existing.style.display = 'flex'; return; }

    // Budujemy listę zakładek dynamicznie
    const tabs = [];
    if (hasCoords)  tabs.push({ id: 'forecast', label: '📅 Prognoza' });
    if (hasCoords)  tabs.push({ id: 'radar',    label: '🌧️ Radar' });
    if (windyUrl)   tabs.push({ id: 'map',      label: '🗺️ Mapa Windy' });
    const firstTab = tabs[0].id;
    const multiTab = tabs.length > 1;

    const rvUrl = hasCoords
      ? `https://www.rainviewer.com/map.html?loc=${cfg.lat},${cfg.lon},8&oFa=0&oC=1&oU=0&oCS=1&oF=0&oAP=1&rmt=4&c=1&o=83&lm=0&layer=radar&sm=1&sn=1`
      : '';

    const tabsHtml = multiTab ? `
      <div id="hdc-wx-tabs" style="display:flex;gap:4px;padding:8px 14px 0;flex-shrink:0;flex-wrap:wrap">
        ${tabs.map((t, i) => `<button class="hdc-wx-tab${i===0?' active':''}" data-tab="${t.id}"
          style="${i===0?'background:rgba(56,189,248,.15);border:1px solid #38bdf8;color:#38bdf8':'background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);color:#94a3b8'};border-radius:7px;cursor:pointer;font-size:11px;padding:4px 12px">${t.label}</button>`).join('')}
      </div>` : '';

    const el = document.createElement('div');
    el.id = 'hdc-windy-overlay';
    el.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.9);z-index:9999;display:flex;align-items:stretch;justify-content:stretch;padding:10px;box-sizing:border-box';
    el.innerHTML = `
      <div style="background:#0a1120;border:1px solid rgba(255,255,255,.1);border-radius:14px;width:100%;display:flex;flex-direction:column;overflow:hidden">
        <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;border-bottom:1px solid rgba(255,255,255,.07);flex-shrink:0">
          <div style="font-size:13px;font-weight:600;color:#f1f5f9">🌤️ Pogoda</div>
          <button id="hdc-windy-close" style="background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:8px;color:#94a3b8;font-size:16px;cursor:pointer;width:30px;height:30px;display:flex;align-items:center;justify-content:center">✕</button>
        </div>
        ${tabsHtml}
        <div id="hdc-wx-forecast" style="flex:1;display:${firstTab==='forecast'?'flex':'none'};flex-direction:column;overflow:hidden;min-height:0"></div>
        ${rvUrl    ? `<iframe id="hdc-wx-radar" src="${rvUrl}"   style="display:${firstTab==='radar'?'block':'none'};width:100%;flex:1;border:none;min-height:0" allowfullscreen loading="lazy"></iframe>` : ''}
        ${windyUrl ? `<iframe id="hdc-wx-map"   src="${windyUrl}" style="display:${firstTab==='map'  ?'block':'none'};width:100%;flex:1;border:none;min-height:0" allowfullscreen loading="lazy"></iframe>` : ''}
      </div>`;
    this.shadowRoot.appendChild(el);
    el.addEventListener('click', e => { if (e.target === el) this._closeWindyModal(); });
    this.shadowRoot.getElementById('hdc-windy-close').addEventListener('click', () => this._closeWindyModal());

    if (multiTab) {
      el.querySelectorAll('.hdc-wx-tab').forEach(btn => {
        btn.addEventListener('click', () => {
          el.querySelectorAll('.hdc-wx-tab').forEach(b => {
            b.style.cssText = 'background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:7px;color:#94a3b8;cursor:pointer;font-size:11px;padding:4px 12px';
          });
          btn.style.cssText = 'background:rgba(56,189,248,.15);border:1px solid #38bdf8;border-radius:7px;color:#38bdf8;cursor:pointer;font-size:11px;padding:4px 12px';
          const forecast = el.querySelector('#hdc-wx-forecast');
          const radar    = el.querySelector('#hdc-wx-radar');
          const map      = el.querySelector('#hdc-wx-map');
          const tab = btn.dataset.tab;
          if (forecast) forecast.style.display = tab === 'forecast' ? 'flex'   : 'none';
          if (radar)    { radar.style.display   = tab === 'radar'    ? 'block'  : 'none'; if (tab==='radar') radar.loading='eager'; }
          if (map)      { map.style.display     = tab === 'map'      ? 'block'  : 'none'; if (tab==='map')   map.loading='eager'; }
        });
      });
    }

    if (hasCoords) {
      const forecastEl = el.querySelector('#hdc-wx-forecast');
      if (forecastEl) this._loadWeatherWidget(forecastEl, cfg.lat, cfg.lon);
    }
  }

  async _loadWeatherWidget(container, lat, lon) {
    container.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:160px;color:#475569;font-size:12px">⏳ Pobieranie prognozy ECMWF…</div>';
    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,precipitation,weathercode,windspeed_10m,windgusts_10m,winddirection_10m&models=ecmwf_ifs025&forecast_days=16&timezone=auto`;
      const resp = await fetch(url);
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const data = await resp.json();
      const h = data.hourly;

      const idx = h.time.map((t, i) => i).filter(i => parseInt(h.time[i].substring(11,13)) % 3 === 0);
      const dayMap = new Map();
      idx.forEach(i => {
        const d = h.time[i].substring(0,10);
        if (!dayMap.has(d)) dayMap.set(d, []);
        dayMap.get(d).push(i);
      });
      const days = Array.from(dayMap.entries());

      const PL_DAY = ['Nie','Pon','Wt','Śr','Czw','Pt','Sob'];
      const PL_MON = ['sty','lut','mar','kwi','maj','cze','lip','sie','wrz','paź','lis','gru'];
      const fmtDay  = s => { const d = new Date(s+'T12:00:00'); return `${PL_DAY[d.getDay()]} ${d.getDate()} ${PL_MON[d.getMonth()]}`; };

      const wmoIcon = (code, hr) => {
        const day = hr >= 6 && hr < 21;
        if (code === 0)  return day ? '☀️' : '🌙';
        if (code <= 1)   return day ? '🌤️' : '🌤️';
        if (code <= 2)   return '⛅';
        if (code === 3)  return '☁️';
        if (code <= 48)  return '🌫️';
        if (code <= 55)  return '🌦️';
        if (code <= 65)  return '🌧️';
        if (code <= 67)  return '🌨️';
        if (code <= 75)  return '❄️';
        if (code <= 82)  return '🌧️';
        if (code <= 86)  return '🌨️';
        return '⛈️';
      };
      const tCol = t => t<=-10?'#a8d8ff':t<=0?'#38bdf8':t<=5?'#7dd3fc':t<=10?'#86efac':t<=15?'#bef264':t<=20?'#fde047':t<=25?'#fb923c':t<=30?'#f87171':'#e11d48';
      const wCol = v => v<10?'#475569':v<20?'#94a3b8':v<30?'#bef264':v<40?'#fde047':v<50?'#fb923c':v<70?'#f87171':'#e11d48';
      const pCol = v => v===0?'#1e293b':v<0.5?'#7dd3fc':v<2?'#38bdf8':v<5?'#0ea5e9':v<10?'#2563eb':'#1d4ed8';

      const CELL = 46; const LBL = 112;

      const cell = (content, bg, extra='') =>
        `<td style="text-align:center;padding:3px 2px;border-right:1px solid rgba(255,255,255,.04);min-width:${CELL}px;background:${bg};${extra}">${content}</td>`;

      const lbl = (ico, txt, unit, bg) =>
        `<td style="position:sticky;left:0;background:${bg};font-size:10px;color:#64748b;padding:4px 10px;white-space:nowrap;border-right:1px solid rgba(255,255,255,.1);z-index:1;min-width:${LBL}px">${ico} ${txt}${unit?`<span style='color:#334155;margin-left:3px;font-size:9px'>${unit}</span>`:''}</td>`;

      const allIdx = days.flatMap(([,a]) => a);

      const dayHdrs = days.map(([day, a]) =>
        `<th colspan="${a.length}" style="position:sticky;top:0;z-index:2;background:#0d1829;font-size:11px;font-weight:700;color:#e2e8f0;padding:6px 4px;text-align:center;border-bottom:1px solid rgba(255,255,255,.08);border-right:1px solid rgba(255,255,255,.06);white-space:nowrap">${fmtDay(day)}</th>`
      ).join('');

      const R = [
        { ico:'🕐', lbl:'Godzina', unit:'',    bg1:'#060d1a', bg2:'#080f1e',
          fn: i => `<span style="font-size:10px;color:#475569">${h.time[i].substring(11,16)}</span>` },
        { ico:'',   lbl:'Pogoda',  unit:'',    bg1:'#080f1e', bg2:'#060d1a',
          fn: i => `<span style="font-size:15px">${wmoIcon(h.weathercode[i], parseInt(h.time[i].substring(11,13)))}</span>` },
        { ico:'🌡️', lbl:'Temperatura', unit:'°C', bg1:'#060d1a', bg2:'#080f1e',
          fn: i => `<span style="font-size:11px;font-weight:700;color:${tCol(h.temperature_2m[i])}">${Math.round(h.temperature_2m[i])}°</span>` },
        { ico:'💧', lbl:'Deszcz',  unit:'mm',  bg1:'#080f1e', bg2:'#060d1a',
          fn: i => { const p=h.precipitation[i]??0; return `<span style="font-size:10px;font-weight:600;color:${pCol(p)}">${p===0?'':p<0.1?'<0.1':p.toFixed(1)}</span>`; } },
        { ico:'💨', lbl:'Wiatr',   unit:'km/h',bg1:'#060d1a', bg2:'#080f1e',
          fn: i => `<span style="font-size:11px;font-weight:600;color:${wCol(h.windspeed_10m[i])}">${Math.round(h.windspeed_10m[i])}</span>` },
        { ico:'💨', lbl:'Porywy',  unit:'km/h',bg1:'#080f1e', bg2:'#060d1a',
          fn: i => `<span style="font-size:11px;font-weight:600;color:${wCol(h.windgusts_10m[i])}">${Math.round(h.windgusts_10m[i])}</span>` },
        { ico:'🧭', lbl:'Kier. wiatru', unit:'',bg1:'#060d1a', bg2:'#080f1e',
          fn: i => `<div style="display:inline-block;transform:rotate(${h.winddirection_10m[i]}deg);font-size:13px;color:#475569;line-height:1">↓</div>` },
      ];

      const rows = R.map((r, ri) => {
        const bg = ri % 2 === 0 ? r.bg1 : r.bg2;
        return `<tr>${lbl(r.ico, r.lbl, r.unit, bg)}${allIdx.map(i => cell(r.fn(i), bg)).join('')}</tr>`;
      }).join('');

      container.style.cssText = 'flex:1;display:flex;flex-direction:column;overflow:hidden;min-height:0';
      container.innerHTML = `
        <div style="overflow:auto;flex:1;min-height:0;-webkit-overflow-scrolling:touch">
          <table style="border-collapse:collapse;width:max-content">
            <thead>
              <tr>
                <th style="position:sticky;left:0;top:0;z-index:3;background:#0d1829;min-width:${LBL}px;border-right:1px solid rgba(255,255,255,.1);border-bottom:1px solid rgba(255,255,255,.08)"></th>
                ${dayHdrs}
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
        <div style="font-size:9px;color:#1e293b;padding:3px 10px;flex-shrink:0;text-align:right;background:#060d1a">Dane: Open-Meteo · ECMWF IFS 0.25° · 16 dni</div>`;
    } catch(e) {
      container.innerHTML = `<div style="color:#f87171;padding:20px;font-size:12px">Błąd: ${e.message}</div>`;
    }
  }

  _closeWindyModal() {
    const el = this.shadowRoot.getElementById('hdc-windy-overlay');
    if (el) el.remove();
  }

  _showPersonMap(entity) {
    const p = (this._config.persons || []).find(pc => pc.entity === entity);
    if (!p) return;
    this._closePersonMapModal();
    const el = document.createElement('div');
    el.id = 'hdc-pm-overlay';
    el.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.8);z-index:9999;display:flex;align-items:center;justify-content:center;padding:16px;box-sizing:border-box';
    el.innerHTML = `
      <div style="background:#0f172a;border:1px solid rgba(255,255,255,.1);border-radius:16px;width:100%;max-width:600px;max-height:90vh;display:flex;flex-direction:column;overflow:hidden">
        <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,.07)">
          <div style="font-size:13px;font-weight:600;color:#f1f5f9">📍 Lokalizacja — ${p.name}</div>
          <button id="hdc-pm-close" style="background:none;border:none;color:#94a3b8;font-size:18px;cursor:pointer;padding:0 4px;line-height:1">✕</button>
        </div>
        <div id="hdc-pm-map" style="height:420px;width:100%;flex:1"></div>
      </div>`;
    this.shadowRoot.appendChild(el);
    el.addEventListener('click', e => { if (e.target === el) this._closePersonMapModal(); });
    this.shadowRoot.getElementById('hdc-pm-close').addEventListener('click', () => this._closePersonMapModal());
    window.loadCardHelpers?.().then(helpers => {
      const mapDiv = this.shadowRoot.getElementById('hdc-pm-map');
      if (!mapDiv) return;
      const card = helpers.createCardElement({
        type: 'map',
        entities: [{ entity: p.entity }],
        auto_fit: true,
        default_zoom: 15,
        dark_mode: true,
      });
      card.style.cssText = 'display:block;height:420px;width:100%';
      mapDiv.appendChild(card);
      card.hass = this._hass;
    });
  }

  _closePersonMapModal() {
    const el = this.shadowRoot.getElementById('hdc-pm-overlay');
    if (el) el.remove();
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
          default_zoom: 15,
        };
        if (lat && lon) {
          cardCfg.auto_fit = false;
        } else {
          cardCfg.auto_fit = true;
          cardCfg.fit_zones = true;
        }
        const card = helpers.createCardElement(cardCfg);
        card.style.cssText = 'display:block;height:380px;width:100%';
        mapDiv.appendChild(card);
        card.hass = hass;
        setTimeout(() => window.dispatchEvent(new Event('resize')), 300);
      });
    });
  }

  _handleAction(btn) {
    const action = btn.dataset.action;
    const entity = btn.dataset.entity;
    const step   = parseFloat(btn.dataset.step || '0.5');

    if (action === 'windy_open') {
      this._showWindyModal();
      return;
    }

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

    if (action === 'sensor_history') {
      const label = btn.dataset.label || entity;
      this._showSensorHistory(entity, label);
      return;
    }

    const state = this._hass.states[entity];
    if (!state) return;

    if (action === 'climate_up' || action === 'climate_down') {
      const rawTemp = parseFloat(state.attributes.temperature);
      const rawHigh = parseFloat(state.attributes.target_temp_high);
      const rawLow  = parseFloat(state.attributes.target_temp_low);
      const hasTemp = !isNaN(rawTemp);
      const hasHigh = !isNaN(rawHigh);
      const hasLow  = !isNaN(rawLow);
      if (!hasTemp && !hasHigh && !hasLow) return;
      const current = hasTemp ? rawTemp : hasHigh ? rawHigh : rawLow;
      const newTemp = Math.round((action === 'climate_up' ? current + step : current - step) * 10) / 10;

      // Vaillant CO — sterowanie przez MQTT zamiast climate.set_temperature
      const vCfg = this._config.vaillant || {};
      if (entity === vCfg.climate_co && vCfg.sf_mode_topic) {
        const minT = parseFloat(state.attributes.min_temp) || 7;
        const maxT = parseFloat(state.attributes.max_temp) || 35;
        const t = String(Math.min(maxT, Math.max(minT, newTemp)));
        const hvacMode = state.state;
        if (hvacMode === 'heat_cool') {
          // Grzanie — tylko Z1ActualRoomTempDesired
          this._hass.callService('mqtt', 'publish', { topic: vCfg.actual_temp_topic + '/set', payload: t });
        } else {
          // Auto — Quick Veto
          this._hass.callService('mqtt', 'publish', { topic: vCfg.sf_mode_topic + '/set', payload: 'veto' });
          this._hass.callService('mqtt', 'publish', { topic: vCfg.veto_temp_topic + '/set', payload: t });
          this._hass.callService('mqtt', 'publish', { topic: vCfg.actual_temp_topic + '/set', payload: t });
        }
        return;
      }

      const params = { entity_id: entity };
      if (hasTemp) { params.temperature = newTemp; }
      else { params.target_temp_high = newTemp; params.target_temp_low = newTemp; }
      this._hass.callService('climate', 'set_temperature', params);
    }
    if (action === 'input_up' || action === 'input_down') {
      const _n = (v, fb) => { const n = parseFloat(v); return isNaN(n) ? fb : n; };
      const min = _n(btn.dataset.min, -999);
      const max = _n(btn.dataset.max,  9999);
      // Use pending (accumulated) value if mid-debounce, otherwise current state
      const base = this._pendingInputs[entity] !== undefined
        ? this._pendingInputs[entity].value
        : parseFloat(state.state);
      if (isNaN(base)) return;
      const newVal = action === 'input_up' ? base + step : base - step;
      const clamped = Math.min(max, Math.max(min, Math.round(newVal * 1000) / 1000));
      // Optimistic display update
      const elId = 'hdc-vl-set-' + entity.replace(/\./g, '-');
      const elDisp = this.shadowRoot.getElementById(elId);
      if (elDisp) {
        const st2 = this._hass.states[entity];
        const stepV = parseFloat(st2?.attributes?.step) || step;
        const dec = _n(undefined, stepV < 0.01 ? 3 : stepV < 0.1 ? 2 : stepV < 1 ? 1 : 0);
        const unit = st2?.attributes?.unit_of_measurement || '';
        elDisp.textContent = clamped.toFixed(dec) + (unit ? ' ' + unit : '');
      }
      // Debounce: cancel previous timer, schedule single callService
      if (this._pendingInputs[entity]?.timer) clearTimeout(this._pendingInputs[entity].timer);
      this._pendingInputs[entity] = {
        value: clamped,
        timer: setTimeout(() => {
          const domain = entity.split('.')[0];
          this._hass.callService(domain, 'set_value', { entity_id: entity, value: clamped });
          delete this._pendingInputs[entity];
        }, 350),
      };
    }
    if (action === 'person_map') {
      this._showPersonMap(entity);
      return;
    }
    if (action === 'set_preset') {
      this._hass.callService('climate', 'set_preset_mode', { entity_id: entity, preset_mode: btn.dataset.preset });
    }
    if (action === 'set_hvac_mode') {
      const mode = btn.dataset.mode;
      this._hass.callService('climate', 'set_hvac_mode', { entity_id: entity, hvac_mode: mode });
      // Vaillant CO — przy zmianie trybu resetuj Z1SFMode na auto
      const vCfg2 = this._config.vaillant || {};
      if (entity === vCfg2.climate_co && vCfg2.sf_mode_topic && mode !== 'off') {
        this._hass.callService('mqtt', 'publish', { topic: vCfg2.sf_mode_topic + '/set', payload: 'auto' });
      }
    }
    if (action === 'mower_start') {
      this._hass.callService('lawn_mower', 'start_mowing', { entity_id: entity });
    }
    if (action === 'mower_pause') {
      this._hass.callService('lawn_mower', 'pause', { entity_id: entity });
    }
    if (action === 'mower_dock') {
      this._hass.callService('lawn_mower', 'dock', { entity_id: entity });
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

    const focusStream = this.shadowRoot.getElementById('hdc-focus-stream');
    const focusName   = this.shadowRoot.getElementById('hdc-focus-name');
    const focusLbl    = this.shadowRoot.getElementById('hdc-focus-label');

    if (focusStream && this._hass.states[ch.entity]) {
      focusStream.dataset.entity = ch.entity;
      focusStream.hass    = this._hass;
      focusStream.stateObj = this._hass.states[ch.entity];
    }
    if (focusName) focusName.textContent = `${ch.label} · ${ch.name}`;
    if (focusLbl)  focusLbl.textContent  = `${ch.label} · ${ch.name}`;

    this.shadowRoot.querySelectorAll('.hdc-camcard').forEach(c => c.classList.remove('focus'));
    card.classList.add('focus');
  }

  _updateAutaLive() {
    const hass = this._hass;
    const sr = this.shadowRoot;
    const vehicles = this._config.vehicles || [];
    vehicles.forEach((v, idx) => {
      const fuel     = sn(hass, v.fuel_level, 0);
      const fuelLt   = v.fuel_amount ? sn(hass, v.fuel_amount, 1) : null;
      const range    = sv(hass, v.fuel_range, '—');
      const odo      = sv(hass, v.odometer, '—');
      const bat      = v.battery ? sn(hass, v.battery, 0) : null;
      const fuelColor = fuel < 15 ? '#f87171' : fuel < 30 ? '#fbbf24' : '#4ade80';
      const lastUpdRaw = sv(hass, v.last_update, '');
      const lastUpd = lastUpdRaw ? (() => { const d = new Date(lastUpdRaw); return isNaN(d) ? lastUpdRaw : `${String(d.getDate()).padStart(2,'0')}-${String(d.getMonth()+1).padStart(2,'0')}-${d.getFullYear()} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}:${String(d.getSeconds()).padStart(2,'0')}`; })() : '—';

      const fuelEl = sr.getElementById(`hdc-car-fuel-${idx}`);
      if (fuelEl) { fuelEl.textContent = `${fuel}%${fuelLt !== null ? ` · ${fuelLt} L` : ''}`; fuelEl.style.color = fuelColor; }
      const fbarEl = sr.getElementById(`hdc-car-fbar-${idx}`);
      if (fbarEl) { fbarEl.style.width = `${fuel}%`; fbarEl.style.background = fuelColor; }
      const rangeEl = sr.getElementById(`hdc-car-range-${idx}`);
      if (rangeEl) { rangeEl.textContent = range; rangeEl.style.color = fuelColor; }
      const odoEl = sr.getElementById(`hdc-car-odo-${idx}`);
      if (odoEl) odoEl.textContent = isNaN(parseInt(odo)) ? odo : parseInt(odo).toLocaleString('pl');
      if (bat !== null) {
        const batEl = sr.getElementById(`hdc-car-bat-${idx}`);
        if (batEl) { batEl.textContent = `${bat}%`; batEl.style.color = battColor(bat); }
      }
      const updEl = sr.getElementById(`hdc-car-upd-${idx}`);
      if (updEl) updEl.textContent = lastUpd !== '—' ? `🕐 ${lastUpd}` : '';

      if (v.connection) {
        const connEl = sr.getElementById(`hdc-car-conn-${idx}`);
        if (connEl) {
          const connSt = hass.states[v.connection];
          const online = connSt && (connSt.state === 'on' || connSt.state === 'online' || connSt.state === 'connected');
          connEl.innerHTML = `<span class="hdc-ch ${online?'g':'r'}">${online?'🟢 Online':'🔴 Offline'}</span>`;
        }
      }

      const tracker = v.location || v.device_tracker;
      if (tracker) {
        const locWrap = sr.getElementById(`hdc-car-loc-wrap-${idx}`);
        if (locWrap) {
          const dtSt = hass.states[tracker];
          if (dtSt) {
            const zone = dtSt.state;
            const addr = dtSt.attributes.address || dtSt.attributes.location_name || null;
            const locLabel = addr || (zone === 'home' ? '🏠 Dom' : zone === 'not_home' ? '🚗 W trasie' : zone);
            locWrap.innerHTML = `<div style="font-size:11px;color:#64748b;margin:6px 0 2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">📍 ${locLabel}</div>`;
          }
        }
      }

      if (v.lock) {
        const btn = sr.getElementById(`hdc-car-lock-${idx}`);
        if (btn) {
          const lockState = hass.states[v.lock];
          if (lockState) {
            const locked = lockState.state === 'locked';
            btn.textContent = locked ? '🔒 Zamknięty' : '🔓 Otwarty';
            btn.style.cssText = `font-size:11px;width:auto;height:24px;padding:0 10px;${locked
              ? 'background:rgba(74,222,128,.15);border-color:#4ade80;color:#4ade80'
              : 'background:rgba(248,113,113,.15);border-color:#f87171;color:#f87171'}`;
          }
        }
      }
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

  _filterSwitches(query) {
    const pane = this.shadowRoot.getElementById('hdc-pane');
    if (!pane) return;
    const q = query.toLowerCase().trim();
    pane.querySelectorAll('.hdc-sw-section').forEach(sec => {
      if (!q) {
        sec.style.display = '';
        sec.querySelectorAll('.hdc-sw-tile, .hdc-lz4').forEach(el => { el.style.display = ''; });
        return;
      }
      const roomMatch = (sec.dataset.room || '').toLowerCase().includes(q);
      let anyVisible = false;
      sec.querySelectorAll('.hdc-sw-tile, .hdc-lz4').forEach(el => {
        const show = roomMatch || (el.dataset.swname || '').toLowerCase().includes(q);
        el.style.display = show ? '' : 'none';
        if (show) anyVisible = true;
      });
      sec.style.display = anyVisible ? '' : 'none';
    });
  }

  _updateSwitchesLive() {
    const hass = this._hass;
    const groups = (this._config.switches || {}).groups || [];
    groups.forEach(group => {
      (group.entities || []).forEach(item => {
        if (item.type === 'lz4') {
          // Bateria
          if (item.battery) {
            const battEl = this.shadowRoot.getElementById(`hdc-lz4-batt-${item.battery.replace(/\./g, '-')}`);
            if (battEl) {
              const bst = hass.states[item.battery];
              const val = bst ? Math.round(parseFloat(bst.state)) : NaN;
              const color = isNaN(val) ? '#475569' : val > 50 ? '#4ade80' : val > 20 ? '#fbbf24' : '#f87171';
              battEl.innerHTML = isNaN(val) ? '' : `<span style="color:${color}">${battIcon(val)} ${val}%</span>`;
            }
          }
          // Stany urządzeń
          ['single', 'double', 'hold'].forEach(key => {
            const action = item[key];
            if (!action?.entity) return;
            const stEl = this.shadowRoot.getElementById(`hdc-lz4-st-${action.entity.replace(/\./g, '-')}`);
            if (!stEl) return;
            const isOn = hass.states[action.entity]?.state === 'on';
            stEl.className = `hdc-lz4-st ${isOn ? 'on' : 'off'}`;
            stEl.textContent = isOn ? 'Wł.' : 'Wył.';
          });
          return;
        }
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
      if (room.humidifier_switch) {
        const humSwOn = hass.states[room.humidifier_switch]?.state === 'on';
        const btn = this.shadowRoot.getElementById(`hdc-ctrl-humidsw-${room.humidifier_switch.replace('.', '-')}`);
        if (btn) {
          btn.textContent = `💧 ${humSwOn ? 'Wł.' : 'Wył.'}`;
          btn.style.cssText = `font-size:10px;height:26px;padding:0 10px;width:auto;${humSwOn ? 'background:rgba(56,189,248,.15);border-color:#38bdf8;color:#38bdf8' : ''}`;
        }
      }
    });
  }

  async _initSpeedTestChart() {
    const t = this._config.tplink || {};
    const hass = this._hass;
    const entities = [t.speedtest_download, t.speedtest_upload, t.speedtest_ping].filter(Boolean);
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
      } catch(e) { console.error('[hdc] speedtest chart', e); return; }

      const pts = id => (hist[id] || [])
        .filter(d => d.s && d.s !== 'unavailable' && d.s !== 'unknown')
        .map(d => ({ x: new Date((d.lu || d.last_updated_ts) * 1000), y: parseFloat(d.s) }))
        .filter(d => !isNaN(d.y));

      const el = this.shadowRoot.getElementById('hdc-speedtest-chart');
      if (!el) return;
      if (el._hdcChart) el._hdcChart.destroy();

      const datasets = [];
      if (t.speedtest_download) { const d = pts(t.speedtest_download); if (d.length) datasets.push({ label: 'Pobieranie (Mbit/s)', data: d, borderColor: '#38bdf8', backgroundColor: 'rgba(56,189,248,.08)', fill: true, pointRadius: 0, borderWidth: 1.5, tension: 0.3, yAxisID: 'y' }); }
      if (t.speedtest_upload)   { const d = pts(t.speedtest_upload);   if (d.length) datasets.push({ label: 'Wysyłanie (Mbit/s)',  data: d, borderColor: '#fb923c', backgroundColor: 'transparent', fill: false, pointRadius: 0, borderWidth: 1.5, tension: 0.3, yAxisID: 'y' }); }
      if (t.speedtest_ping)     { const d = pts(t.speedtest_ping);     if (d.length) datasets.push({ label: 'Ping (ms)',           data: d, borderColor: '#f87171', backgroundColor: 'transparent', fill: false, pointRadius: 0, borderWidth: 1,   tension: 0.3, yAxisID: 'y2' }); }

      if (!datasets.length) return;
      el._hdcChart = new Chart(el, {
        type: 'line',
        data: { datasets },
        options: {
          responsive: true, maintainAspectRatio: false, animation: false,
          plugins: {
            legend: { display: true, position: 'bottom', labels: { color: '#94a3b8', font: { size: 10 }, boxWidth: 10, padding: 8 } },
            tooltip: { mode: 'index', intersect: false, backgroundColor: '#1e293b', titleColor: '#94a3b8', bodyColor: '#f1f5f9' }
          },
          scales: {
            x: { type: 'time', time: { unit: 'hour', displayFormats: { hour: 'HH:mm' } },
              ticks: { color: '#475569', maxTicksLimit: 8, font: { size: 9 } },
              grid: { color: 'rgba(255,255,255,.05)' } },
            y:  { position: 'left',  ticks: { color: '#475569', font: { size: 9 } }, grid: { color: 'rgba(255,255,255,.05)' } },
            y2: { position: 'right', ticks: { color: '#f87171', font: { size: 9 } }, grid: { display: false } }
          }
        }
      });
    };

    const loadScript = (id, src, cb) => {
      if (document.getElementById(id)) { cb(); return; }
      const sc = document.createElement('script'); sc.id = id; sc.src = src;
      sc.onload = cb; document.head.appendChild(sc);
    };
    loadScript('hdc-chartjs', 'https://cdn.jsdelivr.net/npm/chart.js/dist/chart.umd.min.js', () => {
      loadScript('hdc-chartjs-adapter', 'https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns/dist/chartjs-adapter-date-fns.bundle.min.js', draw);
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
      const isClimate = entity.startsWith('climate.');
      const url = isClimate
        ? `history/period/${start.toISOString()}?filter_entity_id=${entity}&end_time=${end.toISOString()}`
        : `history/period/${start.toISOString()}?filter_entity_id=${entity}&end_time=${end.toISOString()}&minimal_response=true&no_attributes=true`;
      const raw = await this._hass.callApi('GET', url);
      if (raw && raw[0]) {
        points = raw[0]
          .map(p => {
            let y;
            if (isClimate) {
              y = p.attributes?.current_temperature ?? NaN;
            } else {
              const st = p.state;
              y = st === 'on' ? 1 : st === 'off' ? 0 : parseFloat(st);
            }
            return { x: new Date(p.last_changed || p.last_updated), y };
          })
          .filter(p => !isNaN(p.y) && p.x instanceof Date && !isNaN(p.x));
        if (points.length > 0) points.push({ x: end, y: points[points.length - 1].y });
      }
    } catch(e) { console.warn('[hdc] history fetch error', e); }

    if (loading) loading.style.display = 'none';
    if (!canvas) return;

    const isBinary = points.length > 0 && points.every(p => p.y === 0 || p.y === 1);
    const drawChart = () => {
      if (canvas._hdcChart) canvas._hdcChart.destroy();
      canvas._hdcChart = new Chart(canvas, {
        type: 'line',
        data: { datasets: [{ data: points,
          borderColor: isBinary ? '#4ade80' : '#38bdf8',
          backgroundColor: isBinary ? 'rgba(74,222,128,.15)' : 'rgba(56,189,248,.08)',
          borderWidth: isBinary ? 2 : 1.5,
          pointRadius: 0,
          stepped: isBinary ? 'before' : false,
          tension: isBinary ? 0 : 0.3,
          fill: true }] },
        options: {
          responsive: true, maintainAspectRatio: false, animation: false,
          plugins: { legend: { display: false }, tooltip: {
            callbacks: { label: ctx => isBinary ? (ctx.parsed.y === 1 ? 'on' : 'off') : `${ctx.parsed.y}` }
          }},
          scales: {
            x: { type: 'time', time: { unit: days <= 14 ? 'day' : 'week' },
              ticks: { color: '#475569', maxTicksLimit: 8 }, grid: { color: 'rgba(255,255,255,.04)' } },
            y: isBinary
              ? { min: -0.1, max: 1.5, ticks: { color: '#94a3b8', callback: v => v === 1 ? 'on' : v === 0 ? 'off' : '' }, grid: { color: 'rgba(255,255,255,.04)' } }
              : { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,.04)' } }
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

  _initCameraStream() {
    const channels = (this._config.cameras || {}).channels || [];
    const focusCam = channels[0];
    if (!focusCam?.entity) return;
    const streamEl = this.shadowRoot.getElementById('hdc-focus-stream');
    if (!streamEl) return;
    const init = () => {
      streamEl.hass    = this._hass;
      streamEl.stateObj = this._hass.states[focusCam.entity];
    };
    if (customElements.get('ha-camera-stream')) {
      init();
    } else {
      customElements.whenDefined('ha-camera-stream').then(init);
    }
  }

  _updateMowerLive() {
    const hass = this._hass;
    const m = this._config.mower || {};
    const entity = m.entity || '';
    const st = hass.states[entity] || {};
    const state = st.state || 'unknown';
    const attr = st.attributes || {};
    const mowerState = attr.mower_state || state;
    const stateLabel = MOWER_STATE_LABEL[mowerState] || mowerState.replace(/_/g, ' ');
    const stateColor = MOWER_STATE_COLOR[mowerState] || '#94a3b8';
    const isDocked = state === 'docked';
    const isMowing = state === 'mowing';
    const isPaused = state === 'paused';
    const btnBase = 'flex:1;border-radius:10px;font-size:13px;padding:10px 6px;transition:background .15s';
    const btnActive  = `${btnBase};background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);color:#f1f5f9;cursor:pointer`;
    const btnInactive= `${btnBase};background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.05);color:#334155;cursor:default`;
    const btnPrimary = `${btnBase};background:rgba(74,222,128,.12);border:1px solid rgba(74,222,128,.3);color:#4ade80;cursor:pointer`;
    const sr = this.shadowRoot;
    const set = (id, fn) => { const el = sr.getElementById(id); if (el) fn(el); };
    set('hdc-mow-state', el => { el.textContent = stateLabel; el.style.color = stateColor; });
    if (m.battery) set('hdc-mow-bat', el => { el.textContent = sn(hass, m.battery, 0) + ' %'; });
    if (m.charging_status) set('hdc-mow-chg', el => { el.textContent = sv(hass, m.charging_status, '—'); });
    set('hdc-mow-btn-start', el => {
      const active = isDocked || isPaused;
      el.style.cssText = active ? btnPrimary : btnInactive;
      if (active) { el.dataset.action = 'mower_start'; el.dataset.entity = entity; }
      else { delete el.dataset.action; delete el.dataset.entity; }
    });
    set('hdc-mow-btn-pause', el => {
      el.style.cssText = isMowing ? btnActive : btnInactive;
      if (isMowing) { el.dataset.action = 'mower_pause'; el.dataset.entity = entity; }
      else { delete el.dataset.action; delete el.dataset.entity; }
    });
    set('hdc-mow-btn-dock', el => {
      const active = isMowing || isPaused;
      el.style.cssText = active ? btnActive : btnInactive;
      if (active) { el.dataset.action = 'mower_dock'; el.dataset.entity = entity; }
      else { delete el.dataset.action; delete el.dataset.entity; }
    });
  }

  _startCamRefresh() {
    this._camRefreshInterval = setInterval(() => {
      if (this._activeTab === 'kamery') {
        this.shadowRoot.querySelectorAll('.hdc-cam-thumb').forEach(img => {
          const entity = img.dataset.entity;
          if (!entity) return;
          const token = this._hass?.states[entity]?.attributes?.access_token || '';
          img.src = `/api/camera_proxy/${entity}?token=${token}&t=${Date.now()}`;
        });
      }
      if (this._activeTab === 'kosiarka') {
        const img = this.shadowRoot.getElementById('hdc-mower-map');
        const camEntity = (this._config?.mower || {}).camera;
        if (img && camEntity) {
          const token = this._hass?.states[camEntity]?.attributes?.access_token || '';
          if (token) img.src = `/api/camera_proxy/${camEntity}?token=${token}&t=${Date.now()}`;
        }
      }
    }, 3000);
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
  '%c HOME-DASHBOARD-CARD %c v1.22.0 ',
  'background:#38bdf8;color:#0d0f14;font-weight:700;padding:2px 6px;border-radius:4px 0 0 4px',
  'background:#0d0f14;color:#38bdf8;font-weight:700;padding:2px 6px;border-radius:0 4px 4px 0'
);
