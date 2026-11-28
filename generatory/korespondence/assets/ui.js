/* All changes are scoped to display; no changes to FormData or endpoints. */
(() => {'use strict';
function start(){
 const form=document.getElementById('dopisForm'), paper=document.querySelector('.paper-sheet');if(!form||!paper||paper.closest('.ko-stage'))return;
 const previewCol=[...form.querySelectorAll(':scope > .row > div')].find(el=>el.contains(paper));
 const left=[...form.querySelectorAll(':scope > .row > div')].find(el=>el!==previewCol);
 previewCol?.classList.add('ko-preview-column');left?.classList.add('ko-form-column');
 const shell=form.closest('.modern-card,.generator-shell');if(shell){const back=document.createElement('a');back.href='../index.html';back.className='ko-back';back.innerHTML='<i class="bi bi-arrow-left" aria-hidden="true"></i> Přehled korespondence';const anchor=shell.querySelector('.top-accent');if(anchor)anchor.after(back);else shell.prepend(back);}
 const title=document.createElement('div');title.className='ko-preview-heading';title.innerHTML='<h2>Živý náhled dopisu</h2><span class="ko-live">Automaticky se aktualizuje</span>';
 // Original heading remains if it carries a meaningful control; hide only redundant plain headings.
 const prev=paper.previousElementSibling;if(prev&&/^H[2-6]$/.test(prev.tagName)&&/náhled/i.test(prev.textContent))prev.hidden=true;
 const zoom=document.createElement('div');zoom.className='ko-zoom';zoom.innerHTML='<span>Měřítko:</span><button type="button" data-zoom="50">50 %</button><button type="button" data-zoom="75" aria-pressed="true">75 %</button><button type="button" data-zoom="100">100 %</button><button type="button" data-zoom="fit">Celá stránka</button><span class="ko-actual" aria-live="polite"></span>';
 const viewport=document.createElement('div'),stage=document.createElement('div');viewport.className='ko-viewport';stage.className='ko-stage';paper.before(title,zoom,viewport);viewport.append(stage);stage.append(paper);
 if(document.body.dataset.koTemplate==='zmena-rezervovaneho-prikonu')paper.dataset.koArt='rp';
 function selected(){return form.querySelector('[name="spolecnost"]:checked')?.value==='de'?'de':'epet';}
 function brand(){const b=selected();document.body.dataset.koBrand=b;paper.dataset.koBrand=b;}
 const iconFor=(field,label)=>{const key=(label+' '+(field.name||'')+' '+(field.id||'')).toLowerCase();if(/sipo/.test(key))return 'bi-credit-card';if(/variabil|\bvs\b|identifik|ean|eic|typ om|typ id/.test(key))return 'bi-upc-scan';if(/bankovn|účet|ucet|inkaso/.test(key))return 'bi-bank';if(/dluh|částk|pokut|přeplat|nedoplat|kč/.test(key))return 'bi-wallet2';if(/datum|splatnost|zahájen|konec|start|end/.test(key)||/date|time/.test(field.type))return 'bi-calendar3';if(/pohlav|osloven|typ adres/.test(key))return 'bi-person-badge';if(/příjmen|prijmen|jméno|jmeno|firma|název/.test(key))return 'bi-person';if(/ulice|adresa|bydlišt|místo/.test(key))return 'bi-house-door';if(/město|mesto|psč|psc/.test(key))return 'bi-geo-alt';if(/komodita/.test(key))return 'bi-lightning-charge';if(/smlouv/.test(key))return 'bi-file-earmark-text';if(/formát|format/.test(key))return 'bi-file-earmark-arrow-down';if(/předmět|predmet/.test(key))return 'bi-chat-left-text';if(/text dopisu/.test(key))return 'bi-pencil-square';return 'bi-input-cursor-text';};
 for(const field of (left||form).querySelectorAll('input:not([type=hidden]):not([type=radio]):not([type=checkbox]),select,textarea')){
   if(field.closest('.ck,.fallback-editor-toolbar')||field.id==='text_dopisu')continue;
   const label=field.labels?.[0]||field.closest('.mb-3,.col-12,.col-6,.col-4,.col-5,.col-7,.col-md-6,.col-md-4')?.querySelector('label');
   const wrapper=field.parentElement;const icon=wrapper.querySelector(':scope > .input-icon');
   if(icon){icon.setAttribute('aria-hidden','true');continue;}
   if(label&&!label.querySelector('.ko-label-icon')&&!label.querySelector('.bi')){const i=document.createElement('i');i.className='bi '+iconFor(field,label.textContent)+' ko-label-icon';i.setAttribute('aria-hidden','true');label.prepend(i);}
   if(wrapper.classList.contains('input-wrapper')){const i=document.createElement('i');i.className='bi '+iconFor(field,label?.textContent||'')+' input-icon';i.setAttribute('aria-hidden','true');wrapper.prepend(i);}
   if(label&&field.required&&!label.classList.contains('required-label')&&!label.querySelector('.ko-required')&&!label.textContent.includes('*')){const star=document.createElement('span');star.className='ko-required';star.setAttribute('aria-hidden','true');star.textContent='*';label.append(star);}
 }

 // DOCX preview corrections, isolated from form and export. Keep all dynamic IDs.
 if(document.body.dataset.koTemplate!=='aktualizace-kontaktnich-udaju'){
  const slug=document.body.dataset.koTemplate;
  const css=document.createElement('style');css.textContent='.ko-stage .paper-sheet[data-docx-preview] .letter-recipient{width:230px!important;margin-left:auto!important}.ko-stage .paper-sheet[data-docx-preview] .letter-footer{font-size:inherit!important}.ko-stage .paper-sheet[data-docx-preview] .letter-footer p{font-size:inherit!important;color:inherit!important;border:0!important;padding:0!important}.ko-stage .paper-sheet[data-docx-preview] .docx-accent{color:var(--ko-brand)!important;font-weight:700}.ko-stage .paper-sheet[data-docx-preview] .letter-body strong{font-weight:700}.ko-stage .paper-sheet[data-docx-preview] .letter-date{margin-right:42px!important}.ko-stage .paper-sheet[data-docx-preview] .letter-footer p:last-child{text-align:right}.ko-stage .paper-sheet[data-docx-preview] .letter-footer .docx-portal{text-align:justify}.ko-stage .paper-sheet[data-docx-preview] .letter-body li{margin-bottom:4px}';document.head.append(css);paper.dataset.docxPreview='true';
  const body=paper.querySelector('.letter-body'),footer=paper.querySelector('.letter-footer');
  const psc=paper.querySelector('#preview-psc'),city=paper.querySelector('#preview-mesto');
  if(psc&&city&&psc.parentNode===city.parentNode&&psc.compareDocumentPosition(city)&Node.DOCUMENT_POSITION_FOLLOWING){let n=psc.nextSibling;while(n&&n!==city){const next=n.nextSibling;if(n.nodeType===3&&!n.textContent.trim())n.remove();n=next;}psc.before(city,document.createElement('br'));}
  const date=paper.querySelector('.letter-date');if(date)for(const n of date.childNodes)if(n.nodeType===3)n.textContent=n.textContent.replace('V Praze dne','V Praze');
  function paragraphContaining(part){return [...(body?.querySelectorAll('p')||[])].find(p=>p.textContent.includes(part));}
  const warning='Upozorňujeme, že pro zastavení procesu přerušení dodávky energií nestačí zaslat potvrzení o úhradě. Platba musí být ve stanovené lhůtě fyzicky evidována v našem systému. Vzhledem k tomu, že bankovní převod trvá 2–3 pracovní dny, doporučujeme vám 2–3 dny po zadání platby zavolat na naši zákaznickou linku a ověřit si její přijetí. V případě, že platba nebude včas připsána na náš účet, negarantujeme u distributora zastavení procesu odpojení.';
  function setText(el,t){if(el&&el.textContent!==t)el.textContent=t;}
  function reconcile(){
   const de=selected()==='de',email=de?'info@dobra-energie.eu':'info@epet.cz',portal=de?'www.zakaznici.dobra-energie.eu':'www.zakaznici.epet.cz',company=de?'Dobrá Energie, s. r. o.':'epet energie, a.s.';
   if(slug==='neuhrazene-pohledavky')setText(paper.querySelector('#preview-email-text'),warning);
   if(slug==='vyzva-k-uhrade-smluvni-pokuty-predcasne-ukoncene-dodavky')setText(paragraphContaining('jsme nuceni přistoupit'), 'jsme nuceni přistoupit k uplatnění smluvní pokuty z důvodu porušení Vašich smluvních povinností. K porušení došlo předčasným ukončením smlouvy s naší společností před uplynutím sjednaného období dodávek.');
   if(slug==='zmena-mereni-z-b-na-c')setText(paragraphContaining('Pokud byste si přáli')||paragraphContaining('Pokud si přejete'), 'Pokud si přejete i nadále využívat měsíční fakturaci, je to možné při pravidelném zasílání samoodečtů. U elektřiny lze odečet nahlásit k libovolnému datu, vždy však nejpozději do 20 kalendářních dnů od provedení odečtu. U plynu je potřeba odečet provést vždy k poslednímu dni v měsíci a nahlásit jej do 5 kalendářních dnů. Samoodečty nám můžete zasílat:');
   if(slug==='planovana-odstavka-dodavek-energii')setText(paper.querySelector('.letter-subject'),de?'Věc: Plánovaná odstávka energií':'Věc: Plánovaná odstávka dodávek energií');
   for(const [key,needle,before,after] of [
    ['zmena-rezervovaneho-prikonu','Kopii těchto dokumentů','Doplněné údaje nám prosím zašlete emailem na adresu ', ', případně poštou na adresu '+company+(de?', Klimentská 1216/46 110 00 Praha 1.':', Klimentská 46, 110 00 Praha 1.')],
    ['zmena-trvale-adresy','Podepsaný sken','Podepsaný sken tohoto prohlášení nám prosím zašlete na e-mail ','. Nebo nám dané vyplněné čestné prohlášení můžete zaslat na naší korespondenční adresu – '+company+', Klimentská 46, 110 00 Praha 1.']
   ])if(slug===key){const field=paper.querySelector('#preview-email-body'),p=field?.closest('p');if(p&&field){const stamp=before+after;if(p.dataset.docxText!==stamp){p.replaceChildren(document.createTextNode(before),field,document.createTextNode(after));p.dataset.docxText=stamp;}field.classList.add('docx-accent');}}
   if(footer){
    const portalText='Rádi bychom Vás také informovali, že můžete využít náš Zákaznický portál '+portal+', kde naleznete informace o platbách, fakturách, zálohách. Portál Vám rovněž umožňuje zadat samoodečet, upravit výši záloh a využívat další užitečné služby.';
    const existing=[...paper.querySelectorAll('p')].find(p=>p.textContent.includes('Rádi bychom Vás také informovali')&&!p.classList.contains('docx-portal'));
    let pp=footer.querySelector('.docx-portal');if(!existing&&!pp){pp=document.createElement('p');pp.className='docx-portal';footer.prepend(pp);}if(pp)setText(pp,portalText);
    for(const p of footer.querySelectorAll('p')){if(p.textContent.includes('Pro komunikaci s námi')){for(const n of p.childNodes)if(n.nodeType===3){const t=n.textContent.replace(/8:30/g,'8:00');if(t!==n.textContent)n.textContent=t;}}}
   }
   // Highlight only literal contact details, never replace dynamic input nodes.
   const walker=document.createTreeWalker(paper,NodeFilter.SHOW_TEXT);const list=[];let n;while(n=walker.nextNode()){if(!n.parentElement.closest('.docx-accent,.highlight-var,.letter-recipient,.letter-date,script,style,[contenteditable]')&&!(slug==='prazdny-dopis'&&!n.parentElement.closest('.letter-footer,.fixed-copy,.return-paragraph')))list.push(n);}
   const re=/(www\.zakaznici\.(?:epet\.cz|dobra-energie\.eu)\/?|info@(?:epet\.cz|dobra-energie\.eu)|255\s70\s70\s99|226\s284\s283|9960227\/0100|3131444\/0100)/g;
   for(const node of list){const t=node.nodeValue;re.lastIndex=0;if(!re.test(t))continue;re.lastIndex=0;const frag=document.createDocumentFragment();let last=0;for(const m of t.matchAll(re)){frag.append(t.slice(last,m.index));const e=document.createElement('span');e.className='docx-accent';e.textContent=m[0];frag.append(e);last=m.index+m[0].length;}frag.append(t.slice(last));node.replaceWith(frag);}
  }
  // Run after existing updatePreview handlers; disconnect while modifying DOM.
  const docxObserver=new MutationObserver(syncDocx);
  function syncDocx(){docxObserver.disconnect();try{reconcile();}finally{docxObserver.observe(paper,{subtree:true,childList:true,characterData:true});}}
  form.addEventListener('change',syncDocx);form.addEventListener('input',syncDocx);window.addEventListener('load',syncDocx);syncDocx();
 }
 let mode='75';let raf=0;function fit(){const width=viewport.clientWidth;if(!width)return;const h=paper.offsetHeight||1123;const cap=width/794;const desired=mode==='fit'?Math.min(1,Math.max(280,window.innerHeight-150)/h):Number(mode)/100;const scale=Math.min(cap,desired);paper.style.transform='scale('+scale+')';const w=(794*scale)+'px',height=(h*scale)+'px';if(stage.style.width!==w)stage.style.width=w;if(stage.style.height!==height)stage.style.height=height;zoom.querySelector('.ko-actual').textContent='('+Math.round(scale*100)+' % skutečně)';}
 function queueFit(){if(raf)return;raf=requestAnimationFrame(()=>{raf=0;fit();});}
 zoom.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{mode=b.dataset.zoom;zoom.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));queueFit();}));
 form.addEventListener('change',()=>{brand();queueFit();});form.addEventListener('input',queueFit);
 // Keep the preview in sync without intercepting the original updatePreview or submit.
 const obs=new MutationObserver(queueFit);obs.observe(paper,{subtree:true,childList:true,characterData:true});
 if(typeof ResizeObserver==='function'){const ro=new ResizeObserver(queueFit);ro.observe(paper);ro.observe(viewport);}
 window.addEventListener('resize',queueFit);brand();queueFit();
}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
