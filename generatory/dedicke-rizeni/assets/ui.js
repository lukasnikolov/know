/* Profesionální rozhraní DINHE: pouze UX vrstva, původní výpočty a endpointy zůstávají. */
(function(){
 'use strict';
 const $=id=>document.getElementById(id);
 function start(){
  const form=document.querySelector('form');if(!form)return;
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
   const bar=copyBtns[0].parentNode;
   const feedback=document.createElement('div');feedback.className='dn-copy-feedback';feedback.id='dn-copy-feedback';feedback.setAttribute('role','status');feedback.setAttribute('aria-live','polite');
   bar.insertAdjacentElement('afterend',feedback);
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
