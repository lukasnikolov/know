/* Profesionální rozhraní DINHE: pouze UX vrstva, původní výpočty a endpointy zůstávají. */
(function(){
 'use strict';
 const $=id=>document.getElementById(id);
 function start(){
  const form=document.querySelector('form');if(!form)return;
  // Load the common preview layer for every generator. The original pilot already links it.
  if(document.querySelector('.preview-box')){
    const existingCss=document.querySelector('link[href*="letter-preview.css"]');
    if(!existingCss){const link=document.createElement('link');link.rel='stylesheet';link.href='../assets/letter-preview.css?v=3';document.head.append(link);}
    if(!document.querySelector('script[src*="letter-preview.js"]')){const script=document.createElement('script');script.src='../assets/letter-preview.js?v=3';document.head.append(script);}
  }

  document.body.dataset.dnBrand=$('spol_de')?.checked?'de':'epet';
  for(const id of ['spol_de','spol_epet'])$(id)?.addEventListener('change',()=>{document.body.dataset.dnBrand=$('spol_de')?.checked?'de':'epet';});
  const header=document.querySelector('body>header')||document.querySelector('header');
  if(header&&!header.querySelector('.dn-header-tools')){
    const wrap=header.querySelector('.container')||header;
    wrap.style.display='flex';wrap.style.alignItems='center';wrap.style.gap='10px';
    const nav=document.createElement('div');nav.className='dn-header-tools';
    const back=document.createElement('a');back.className='dn-return';back.href='../index.html';back.textContent='← Přehled generátorů';nav.append(back);wrap.append(nav);
  }
  const pdf=document.querySelector('.pdf-upload-card');
  if(pdf&&!pdf.closest('details')){
   const section=document.createElement('details');section.className='dn-pdf-disclosure';
   const summary=document.createElement('summary');
   summary.textContent='Načíst podklady z PDF (volitelné)';
   pdf.parentNode.insertBefore(section,pdf);section.append(summary,pdf);
   pdf.classList.remove('mb-3');
   const upload=$('pdf-file-upload');upload?.addEventListener('change',()=>{if(upload.files?.length)section.open=true;});
  }
  const first=document.querySelector('.progress-bar-custom');
  if(first&&!document.querySelector('.dn-step-caption')){
   const label=document.createElement('div');label.className='dn-step-caption';
   first.parentNode.insertBefore(label,first);
   const sections=[...document.querySelectorAll('.step-section')];
   function update(){let active=sections.findIndex(s=>s.classList.contains('active'))+1;active=active||1;label.textContent='Krok '+active+' z '+sections.length+' · '+(sections[active-1]?.querySelector('h2')?.textContent||'Údaje').replace(/^\s*\d+\s*/, '').trim();}
   update();for(const el of sections)new MutationObserver(update).observe(el,{attributes:true,attributeFilter:['class']});
  }
  const copyBtns=[...document.querySelectorAll('button[onclick*="copySubject"],button[onclick*="copyEmailText"]')];
  if(copyBtns.length){

   const subjectField=$('subject-output'), emailField=$('email-content'), dsInput=$('data-box-input'), fullName=$('fullname-input');
   const dispatch=subjectField?.closest('.card-custom,.dispatch-card');
   let dsCopy;
   if(dispatch&&emailField&&dispatch.contains(emailField)&&!dispatch.querySelector('.preview-box')){
    dispatch.classList.add('dn-dispatch','dn-databox');
    const paper=document.querySelector('.preview-box');
    const target=paper?.closest('.dn-letter-frame')||paper;
    if(target&&form.contains(target)&&form.contains(dispatch)&&!dispatch.contains(target))target.after(dispatch);
    const heading=dispatch.querySelector('.dispatch-heading')||dispatch.querySelector('h3');
    if(heading){const h=heading.querySelector('h3')||heading;h.textContent='Podklady k odeslání';}
    if(heading&&!dispatch.querySelector('.dn-dispatch-intro')){
      const intro=document.createElement('p');intro.className='dn-dispatch-intro';intro.textContent='Připravte předmět, datovou schránku a doprovodnou zprávu pro odeslání.';heading.after(intro);
    }
    function fieldIcon(input,icon){if(!input)return;const label=input.closest('.col-md-6')?.querySelector('label');if(label){label.htmlFor=input.id;if(!label.querySelector('.bi')){const i=document.createElement('i');i.className='bi '+icon+' dn-dispatch-label-icon';i.setAttribute('aria-hidden','true');label.prepend(i);}}}
    fieldIcon(fullName,'bi-person');fieldIcon(dsInput,'bi-mailbox');
    if(dsInput){
      dsInput.setAttribute('autocomplete','off');dsInput.setAttribute('spellcheck','false');dsInput.setAttribute('aria-describedby','dn-ds-hint');
      const group=dsInput.closest('.input-group');const insert=group?.querySelector('button[onclick*="addDataBoxCode"]');
      if(insert){
       const raw=insert.getAttribute('onclick');insert.removeAttribute('onclick');
       const apply=()=>{const id=dsInput.value.trim();if(!/^[a-z0-9]{7}$/i.test(id)){dsInput.classList.add('is-invalid');dsInput.setAttribute('aria-invalid','true');announce('ID datové schránky musí obsahovat 7 písmen nebo číslic.','warning');return false;}dsInput.classList.remove('is-invalid');dsInput.removeAttribute('aria-invalid');dsInput.value=id;try{if(typeof window.addDataBoxCode==='function')window.addDataBoxCode();else if(typeof addDataBoxCode==='function')addDataBoxCode();else return false;}catch(e){return false;}return true;};
       insert.addEventListener('click',apply);
       dsInput.addEventListener('input',()=>{dsInput.classList.remove('is-invalid');dsInput.removeAttribute('aria-invalid');});
       dsInput.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();apply();}});
      }
      const hint=document.createElement('div');hint.id='dn-ds-hint';hint.className='form-text';hint.textContent='7 znaků · vložte ID do textu zprávy.';
      group?.after(hint);
      dsCopy=document.createElement('button');dsCopy.type='button';dsCopy.className='btn dn-dispatch-copy';dsCopy.innerHTML='<i class="bi bi-copy" aria-hidden="true"></i> Kopírovat ID';group?.after(dsCopy);
      dsCopy.addEventListener('click',async()=>{const id=dsInput.value.trim();if(!/^[a-z0-9]{7}$/i.test(id)){announce('Zadejte platné sedmimístné ID datové schránky.','warning');return;}const ok=await safeCopy(id);announce(ok?'ID datové schránky bylo zkopírováno.':'Kopírování se nezdařilo.',''+(ok?'success':'error'));if(!ok)dsInput.select();});
    }
    const subjRow=subjectField.parentElement;subjRow.classList.add('dn-dispatch-subject');const emailRow=emailField.parentElement;emailRow.classList.add('dn-dispatch-email');
    const subjBtn=copyBtns.find(b=>b.getAttribute('onclick')?.includes('copySubject'));const mailBtn=copyBtns.find(b=>b.getAttribute('onclick')?.includes('copyEmailText'));
    if(subjBtn){subjBtn.classList.add('dn-dispatch-copy');subjRow.append(subjBtn);}
    if(mailBtn){mailBtn.classList.add('dn-dispatch-copy');emailRow.append(mailBtn);}
   }

   const bar=dispatch||copyBtns[0].parentNode;
   const feedback=document.createElement('div');feedback.className='dn-copy-feedback';feedback.id='dn-copy-feedback';feedback.setAttribute('role','status');feedback.setAttribute('aria-live','polite');
   if(dispatch)dispatch.append(feedback);else bar.insertAdjacentElement('afterend',feedback);
   const toast=document.createElement('div');toast.className='dn-toast';toast.setAttribute('role','status');toast.setAttribute('aria-live','polite');document.body.append(toast);
   let timer;
   function announce(message,kind='success'){
      feedback.textContent=message;feedback.dataset.kind=kind;
      toast.textContent=message;toast.dataset.kind=kind;toast.dataset.show='true';
      window.clearTimeout(timer);timer=window.setTimeout(()=>{toast.dataset.show='false';},2800);
   }
   async function safeCopy(text){
      if(!text)return false;
      try{if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(text);return true;}}catch(e){}
      const x=window.scrollX,y=window.scrollY,focus=document.activeElement;
      const tmp=document.createElement('textarea');tmp.value=text;tmp.readOnly=true;
      tmp.setAttribute('aria-hidden','true');tmp.style.cssText='position:fixed;top:0;left:-9999px;width:1px;height:1px;opacity:0;pointer-events:none';
      document.body.append(tmp);let copied=false;
      try{tmp.focus({preventScroll:true});tmp.select();copied=document.execCommand('copy')===true;}catch(e){}
      tmp.remove();try{focus?.focus?.({preventScroll:true});}catch(e){}
      window.scrollTo(x,y);return copied;
   }
   async function doCopy(kind){
      const subject=kind==='subject';
      const source=subject?$('subject-output'):$('email-content');
      const text=subject?(source?.textContent||'').trim():(source?.innerText||source?.textContent||'').trim();
      if(!text){announce('Text ke kopírování není vyplněný.','warning');return;}
      const btn=copyBtns.find(b=>b.getAttribute('onclick')?.includes(subject?'copySubject':'copyEmailText'));
      const old=btn?.innerHTML;if(btn)btn.disabled=true;
      const success=await safeCopy(text);
      if(btn){btn.disabled=false;if(success){btn.textContent='✓ Zkopírováno';window.setTimeout(()=>{if(btn.isConnected)btn.innerHTML=old;},1850);}}
      if(success)announce(subject?'Předmět byl zkopírován do schránky.':'Text e-mailu byl zkopírován do schránky.');
      else{announce('Kopírování je blokováno prohlížečem. Označte text a použijte Ctrl+C.','error');
         if(source){const sel=window.getSelection(),range=document.createRange();range.selectNodeContents(source);sel.removeAllRanges();sel.addRange(range);}}
   }
   window.copySubject=()=>doCopy('subject');
   window.copyEmailText=()=>doCopy('email');
   window.showMsg=(message)=>announce(String(message),/nezda|chyba|prosím/i.test(String(message))?'warning':'success');
  }
  const box=document.querySelector('.card-custom[style*="#f8fbff"],.card-custom[style*="f8fbff"]');
  if(box)box.classList.add('dn-databox');
  const info=document.createElement('p');info.className='dn-security-note';info.textContent='Údaje z formuláře se zpracovávají v prohlížeči. Vygenerování dokumentu následně používá původní navázanou službu.';
  const left=form.querySelector('.col-lg-5');if(left)left.append(info);
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
