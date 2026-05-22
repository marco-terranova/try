import{a as l}from"./chunk-5QFN5IOB.js";import{e as c,g as d}from"./chunk-VO6BFWYU.js";import{j as n}from"./chunk-VI73JOY6.js";var f=(()=>{let o=class o{constructor(t){this.dbService=t}stampaEtichetteBox(t){return n(this,null,function*(){return new Promise((e,r)=>{this.dbService.getEtichetteBox(t).subscribe({next:i=>{let{box:a,oggetti:m}=i,p=this.buildEtichetteHtml(a,m);this.apriFinestraStampa(p),e()},error:i=>r(i)})})})}buildEtichetteHtml(t,e){let r=e.map(i=>`
      <div class="etichetta">
        <div class="etichetta-header">
          <span class="etichetta-box">${this.esc(t.nome)}</span>
          ${i.fragile?'<span class="fragile-badge">FRAGILE</span>':""}
        </div>
        <div class="etichetta-nome">${this.esc(i.nome)}</div>
        <div class="etichetta-footer">
          <span class="etichetta-tipo">${this.esc(i.tipo||"\u2014")}</span>
          <span class="etichetta-qty">Q.t\xE0: ${i.quantita}</span>
        </div>
        ${i.descrizione?`<div class="etichetta-desc">${this.esc(i.descrizione)}</div>`:""}
      </div>
    `).join("");return`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Etichette \u2014 ${this.esc(t.nome)}</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Helvetica Neue', Arial, sans-serif;
      background: #fff;
      padding: 12mm;
    }

    h1 {
      font-size: 14pt;
      margin-bottom: 8mm;
      color: #1a1a2e;
      border-bottom: 1px solid #ccc;
      padding-bottom: 4mm;
    }

    .griglia {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 6mm;
    }

    .etichetta {
      border: 1.5px solid #333;
      border-radius: 4mm;
      padding: 4mm 5mm;
      min-height: 32mm;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      page-break-inside: avoid;
    }

    .etichetta-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2mm;
    }

    .etichetta-box {
      font-size: 7pt;
      color: #666;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .fragile-badge {
      background: #e53935;
      color: #fff;
      font-size: 6pt;
      font-weight: bold;
      padding: 1px 3px;
      border-radius: 2px;
    }

    .etichetta-nome {
      font-size: 11pt;
      font-weight: 700;
      color: #1a1a2e;
      line-height: 1.2;
      margin: 1mm 0;
      word-break: break-word;
    }

    .etichetta-footer {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-top: 2mm;
    }

    .etichetta-tipo {
      font-size: 7.5pt;
      color: #444;
      font-style: italic;
    }

    .etichetta-qty {
      font-size: 7.5pt;
      font-weight: 600;
      color: #333;
    }

    .etichetta-desc {
      font-size: 6.5pt;
      color: #777;
      margin-top: 2mm;
      border-top: 0.5px dashed #ccc;
      padding-top: 1.5mm;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    @media print {
      body { padding: 8mm; }
      .griglia { gap: 4mm; }
    }
  </style>
</head>
<body>
  <h1>\u{1F4E6} Etichette box \u2014 ${this.esc(t.nome)} (${this.esc(t.armadio)})</h1>
  <div class="griglia">
    ${r}
  </div>
</body>
</html>`}apriFinestraStampa(t){let e=window.open("","_blank","width=900,height=700");e&&(e.document.write(t),e.document.close(),e.focus(),setTimeout(()=>{e.print(),e.close()},400))}downloadCsv(t){this.dbService.getExportCsv(t).subscribe({next:e=>{this.triggerDownload(e,"peekbox-inventario.csv","text/csv;charset=utf-8;")},error:e=>console.error("Errore export CSV:",e)})}downloadJson(t){this.dbService.getExportJson(t).subscribe({next:e=>{this.triggerDownload(e,"peekbox-inventario.json","application/json")},error:e=>console.error("Errore export JSON:",e)})}triggerDownload(t,e,r){let i=URL.createObjectURL(new Blob([t],{type:r})),a=document.createElement("a");a.href=i,a.download=e,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(i)}esc(t){return t?t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):""}};o.\u0275fac=function(e){return new(e||o)(d(l))},o.\u0275prov=c({token:o,factory:o.\u0275fac,providedIn:"root"});let s=o;return s})();export{f as a};
