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
