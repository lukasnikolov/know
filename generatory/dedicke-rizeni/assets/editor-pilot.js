/* Pilot DINHE: local rich-text editing and export; no customer data stored or sent. */
(() => {
'use strict';
const form=document.getElementById('dopisForm'), original=document.getElementById('preview');
if(!form||!original)return;
const css=document.createElement('style');
css.textContent='.dn-editor-panel{background:white;border:1px solid #e2e8f0;border-radius:14px;padding:14px;margin-bottom:12px;font:14px Inter,system-ui,sans-serif}.dn-editor-panel h3{font-size:16px;font-weight:650;margin:0 0 10px}.dn-editor-actions,.dn-editor-tools{display:flex;flex-wrap:wrap;align-items:center;gap:6px}.dn-editor-tools{border-top:1px solid #e2e8f0;margin-top:10px;padding-top:10px}.dn-editor-panel button,.dn-editor-panel select{background:#fff;border:1px solid #cbd5e1;color:#334155;border-radius:7px;padding:7px 10px;font:inherit}.dn-editor-panel button:hover{background:#f1f5f9}.dn-editor-panel button[aria-pressed=true]{border-color:var(--brand-color,#94c11f);font-weight:700}.dn-editor-note{font-size:12px;color:#64748b;margin:10px 0 0}.dn-editor-status{font-size:13px;color:#334155;margin:8px 0 0}#dn-edit-paper{outline:2px solid var(--brand-color,#94c11f);outline-offset:2px;overflow-wrap:anywhere;min-height:800px}#dn-edit-paper:focus{outline-offset:3px}#preview[hidden],#dn-edit-paper[hidden],.dn-editor-panel [hidden]{display:none!important}@media(max-width:600px){#dn-edit-paper{padding:1.25rem!important}}';
document.head.append(css);
const panel=document.createElement('section');
panel.className='dn-editor-panel';
panel.innerHTML='<h3>Náhled a editace dokumentu</h3><div class="dn-editor-actions"><button type="button" data-mode="auto" aria-pressed="true">Automatický náhled</button><button type="button" data-mode="manual" aria-pressed="false">Ruční editace</button><button type="button" id="dn-restore" hidden>Obnovit z formuláře</button></div><div class="dn-editor-tools" hidden><button type="button" data-cmd="undo" title="Zpět">↶</button><button type="button" data-cmd="redo" title="Znovu">↷</button><select data-cmd="fontName" aria-label="Písmo"><option>Noto Serif</option><option>Times New Roman</option><option>Arial</option><option>Calibri</option></select><select data-cmd="fontSize" aria-label="Velikost písma"><option value="2">10 pt</option><option value="3" selected>12 pt</option><option value="4">14 pt</option><option value="5">18 pt</option></select><button type="button" data-cmd="bold" title="Tučné"><b>B</b></button><button type="button" data-cmd="italic" title="Kurzíva"><i>I</i></button><button type="button" data-cmd="underline" title="Podtržení"><u>U</u></button><button type="button" data-cmd="justifyLeft">Vlevo</button><button type="button" data-cmd="justifyCenter">Střed</button><button type="button" data-cmd="justifyRight">Vpravo</button><button type="button" data-cmd="justifyFull">Do bloku</button><button type="button" data-cmd="insertUnorderedList">• Odrážky</button><button type="button" data-cmd="insertOrderedList">1. Číslování</button><button type="button" data-cmd="removeFormat">Vymazat formát</button></div><div class="dn-editor-actions mt-2" id="dn-local-exports" hidden><button type="button" id="dn-pdf">PDF – tisk</button><button type="button" id="dn-docx">Word – DOCX</button></div><p class="dn-editor-note">Automatický režim používá původní firemní export. Ruční režim exportuje upravený náhled lokálně, bez externí firemní šablony. Úpravy se neukládají po zavření stránky.</p><p class="dn-editor-status" aria-live="polite" role="status"></p>';
original.before(panel);
const paper=document.createElement('div');
paper.id='dn-edit-paper';paper.className=original.className;paper.contentEditable='true';paper.setAttribute('role','textbox');paper.setAttribute('aria-label','Editovatelný dopis');paper.setAttribute('aria-multiline','true');paper.hidden=true;original.after(paper);
const toolbar=panel.querySelector('.dn-editor-tools'),status=panel.querySelector('.dn-editor-status'),restore=panel.querySelector('#dn-restore'),exports=panel.querySelector('#dn-local-exports');
let manual=false,dirty=false,stale=false,selection=null;
function copyPreview(){
 if(typeof updatePreview==='function')updatePreview();
 const clone=original.cloneNode(true);
 clone.querySelectorAll('[id]').forEach(n=>n.removeAttribute('id'));
 paper.replaceChildren(...clone.childNodes);dirty=false;stale=false;selection=null;
 status.textContent='Klikněte do dopisu a upravte text. Pro export použijte PDF nebo Word.';
}
function switchMode(next){
 if(next===manual)return;
 if(!next&&dirty&&!confirm('Zahodit ruční úpravy a vrátit se k automatickému náhledu?'))return;
 if(next)copyPreview();else{dirty=false;stale=false;status.textContent='';}
 manual=next;original.hidden=next;paper.hidden=!next;toolbar.hidden=!next;restore.hidden=!next;exports.hidden=!next;
 panel.querySelectorAll('[data-mode]').forEach(b=>b.setAttribute('aria-pressed',String((b.dataset.mode==='manual')===next)));
}
panel.querySelectorAll('[data-mode]').forEach(b=>b.addEventListener('click',()=>switchMode(b.dataset.mode==='manual')));
restore.addEventListener('click',()=>{if(!dirty||confirm('Nahradit ruční úpravy aktuálními údaji z formuláře?'))copyPreview();});
function edited(){dirty=true;status.textContent=stale?'Formulář se změnil. Ruční text zůstává zachován; před exportem jej zkontrolujte.':'Ruční úpravy jsou zachovány.';}
paper.addEventListener('input',edited);
function markStale(e){if(manual&&!panel.contains(e.target)&&!paper.contains(e.target)&&!e.target.closest('#formatSouboru,#fullname-input,#data-box-input')){stale=true;status.textContent='Formulář se změnil. Ruční text zůstává zachován. Zkontrolujte jej nebo obnovte z formuláře.';}}
form.addEventListener('input',markStale);form.addEventListener('change',markStale);
const contracts=document.getElementById('contracts-container');
if(contracts)new MutationObserver(()=>{if(manual){stale=true;status.textContent='Seznam smluv se změnil. Zkontrolujte ruční náhled.';}}).observe(contracts,{childList:true});
document.addEventListener('selectionchange',()=>{const s=getSelection();if(s&&s.rangeCount&&paper.contains(s.anchorNode)&&paper.contains(s.focusNode))selection=s.getRangeAt(0).cloneRange();});
function command(cmd,value){
 if(!manual)return;paper.focus();
 const s=getSelection();if(selection&&paper.contains(selection.commonAncestorContainer)){s.removeAllRanges();s.addRange(selection);}else if(!paper.contains(s.anchorNode)){const r=document.createRange();r.selectNodeContents(paper);r.collapse(false);s.removeAllRanges();s.addRange(r);}
 document.execCommand(cmd,false,value||null);edited();
}
toolbar.querySelectorAll('button[data-cmd]').forEach(b=>{b.addEventListener('mousedown',e=>e.preventDefault());b.addEventListener('click',()=>command(b.dataset.cmd));});
toolbar.querySelectorAll('select').forEach(b=>b.addEventListener('change',()=>command(b.dataset.cmd,b.value)));
paper.addEventListener('paste',e=>{e.preventDefault();document.execCommand('insertText',false,e.clipboardData.getData('text/plain'));});
paper.addEventListener('drop',e=>e.preventDefault());
function filename(){const f=new FormData(form);return ('DINHE-'+(f.get('prijmeni_zemreleho')||'dopis')+'-'+(f.get('datum')||'')).replace(/[^\p{L}\p{N} ._-]/gu,'_');}
function printPdf(){
 const w=window.open('','_blank');if(!w){alert('Povolte vyskakovací okna pro tisk PDF.');return;}
 const d=w.document;d.open();d.write('<!doctype html><html lang="cs"><head><meta charset="utf-8"><title></title><style>@page{size:A4;margin:22mm}body{margin:0;font:11pt/1.6 "Noto Serif","Times New Roman",serif;color:#000;overflow-wrap:anywhere}.text-end{text-align:right}.fw-bold{font-weight:700}.text-decoration-underline{text-decoration:underline}.small{font-size:.875em}.border-top{border-top:1px solid #ddd}.pt-4{padding-top:1.5rem}.mt-4{margin-top:1.5rem}p{margin-top:0}li{break-inside:avoid}@media screen{body{max-width:166mm;margin:20mm auto}}</style></head><body></body></html>');d.close();
 d.title=filename();d.body.append(...Array.from(paper.childNodes,n=>d.importNode(n,true)));w.focus();w.print();
}
const xml=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c])).replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g,'');
const blocks=new Set(['DIV','P','LI','UL','OL','H1','H2','H3','H4','BLOCKQUOTE']);
function wordDocument(){
 const paragraphs=[];let runs=[],alignment='left',after=0;
 const style=n=>getComputedStyle(n.nodeType===1?n:n.parentElement);
 function addText(t,n){
  if(!t)return;const c=style(n);
  let a=n.nodeType===1?n:n.parentElement,under=false;
  while(a&&a!==paper){if(style(a).textDecorationLine.includes('underline'))under=true;a=a.parentElement;}
  let font=c.fontFamily.split(',')[0].replace(/["']/g,'').trim();if(font==='Noto Serif')font='Times New Roman';
  const size=Math.max(12,Math.min(96,Math.round(parseFloat(c.fontSize)*1.5)||22));
  const rgb=c.color.match(/\d+/g),color=rgb?rgb.slice(0,3).map(x=>Number(x).toString(16).padStart(2,'0')).join(''):'000000';
  runs.push('<w:r><w:rPr><w:rFonts w:ascii="'+xml(font)+'" w:hAnsi="'+xml(font)+'"/><w:color w:val="'+color+'"/><w:sz w:val="'+size+'"/>'+((parseInt(c.fontWeight)>=600||c.fontWeight==='bold')?'<w:b/>':'')+(c.fontStyle==='italic'?'<w:i/>':'')+(under?'<w:u w:val="single"/>':'')+'</w:rPr><w:t xml:space="preserve">'+xml(t)+'</w:t></w:r>');
 }
 function flush(force=false){if(!runs.length&&!force)return;const a=({justify:'both',center:'center',right:'right',end:'right'})[alignment]||'left';paragraphs.push('<w:p><w:pPr><w:spacing w:after="'+after+'" w:line="384" w:lineRule="auto"/><w:jc w:val="'+a+'"/></w:pPr>'+runs.join('')+'</w:p>');runs=[];}
 function walk(n){
  if(n.nodeType===3){const t=n.textContent.replace(/\s+/g,' ');if(t.trim()||runs.length)addText(t,n);return;}
  if(n.nodeType!==1)return;const tag=n.tagName;
  if(tag==='BR'){runs.push('<w:r><w:br/></w:r>');return;}
  const block=blocks.has(tag);if(block){flush();const c=style(n);alignment=c.textAlign;after=Math.round((parseFloat(c.marginBottom)||0)*15);if(tag==='LI'){const p=n.parentElement;addText(p.tagName==='OL'?(Array.from(p.children).indexOf(n)+1)+'. ':'• ',n);}}
  for(const child of n.childNodes)walk(child);if(block)flush(tag==='P'||tag==='LI');
 }
 for(const child of paper.childNodes)walk(child);flush();
 return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>'+paragraphs.join('')+'<w:sectPr><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1247" w:right="1247" w:bottom="1247" w:left="1247" w:header="708" w:footer="708" w:gutter="0"/></w:sectPr></w:body></w:document>';
}
function zip(files){
 const enc=new TextEncoder(),parts=[],central=[];let offset=0,total=0;
 function crc(b){let c=0xffffffff;for(const v of b){c^=v;for(let k=0;k<8;k++)c=(c>>>1)^((c&1)?0xedb88320:0);}return(c^0xffffffff)>>>0;}
 function header(n){const b=new Uint8Array(n),v=new DataView(b.buffer);return {b,u16:(i,x)=>v.setUint16(i,x,true),u32:(i,x)=>v.setUint32(i,x,true)};}
 for(const [name,txt] of Object.entries(files)){
  const n=enc.encode(name),b=enc.encode(txt),c=crc(b),h=header(30),z=header(46);
  h.u32(0,0x04034b50);h.u16(4,20);h.u16(6,0x800);h.u16(12,33);h.u32(14,c);h.u32(18,b.length);h.u32(22,b.length);h.u16(26,n.length);
  z.u32(0,0x02014b50);z.u16(4,20);z.u16(6,20);z.u16(8,0x800);z.u16(14,33);z.u32(16,c);z.u32(20,b.length);z.u32(24,b.length);z.u16(28,n.length);z.u32(42,offset);
  parts.push(h.b,n,b);central.push(z.b,n);offset+=30+n.length+b.length;total+=46+n.length;
 }
 const end=header(22),count=Object.keys(files).length;end.u32(0,0x06054b50);end.u16(8,count);end.u16(10,count);end.u32(12,total);end.u32(16,offset);
 return new Blob([...parts,...central,end.b],{type:'application/vnd.openxmlformats-officedocument.wordprocessingml.document'});
}
function word(){
 const blob=zip({'[Content_Types].xml':'<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/></Types>','_rels/.rels':'<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>','word/document.xml':wordDocument()});
 const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=filename()+'.docx';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);
}
function exportManual(format){
 if(!manual)return;
 if(stale&&!confirm('Formulář se od zahájení ruční editace změnil. Exportovat aktuální ruční text bez automatického přepsání?'))return;
 if(!paper.innerText.trim()){alert('Dokument je prázdný.');return;}
 try{if(format==='doc')word();else printPdf();}catch(err){console.error(err);alert('Ruční export se nepodařil. Text zůstává zachován.');}
}
panel.querySelector('#dn-pdf').addEventListener('click',()=>exportManual('pdf'));
panel.querySelector('#dn-docx').addEventListener('click',()=>exportManual('doc'));
form.addEventListener('submit',e=>{if(!manual)return;e.preventDefault();e.stopImmediatePropagation();exportManual(document.getElementById('formatSouboru').value);},true);
})();
