/* PDF Studio – bezpečné čištění podbarvení PDF v prohlížeči. */
(() => {
  'use strict';
  const el = id => document.getElementById(id);
  const U = { input: el('fileInput'), drop: el('drop'), list: el('fileList'),
    start: el('processBtn'), reset: el('resetBtn'), bars: el('removeBars'),
    flatten: el('flatten'), level: el('sensitivity'), levelText: el('sensitivityValue'),
    status: el('status'), zip: el('downloadAll'), title: el('previewName'),
    prev: el('prevPage'), next: el('nextPage'), page: el('pageNum'),
    before: el('originalHolder'), after: el('cleanHolder'), metrics: el('metrics') };
  let files=[], selected=-1, pageNo=1, busy=false, originalDoc=null, cleanedDoc=null, serial=0;
  const levels=['Šetrná','Standardní','Rozšířená'];
  const SIZE=n=>n<1048576 ? Math.round(n/1024)+' kB' : (n/1048576).toFixed(1)+' MB';
  const outName=name=>name.replace(/\.pdf$/i,'')+' - bez podbarveni.pdf';
  function note(s,bad=false) { U.status.hidden=false;U.status.textContent=s;U.status.classList.toggle('error',bad); }
  function clearNote(){U.status.hidden=true;U.status.textContent='';}
  function bytesText(buf){let s='';for(let i=0;i<buf.length;i+=12000)s+=String.fromCharCode(...buf.subarray(i,i+12000));return s;}
  function textBytes(s){return Uint8Array.from(s,c=>c.charCodeAt(0)&255);}
  function supported(f){return f && (/\.pdf$/i.test(f.name)||f.type==='application/pdf');}
  function download(data,name,type) {
    const url=URL.createObjectURL(new Blob([data],{type})),a=document.createElement('a');
    a.href=url;a.download=name;document.body.append(a);a.click();a.remove();
    setTimeout(()=>URL.revokeObjectURL(url),30000);
  }
  function choose(arr) {
    if(busy)return;
    let list=Array.from(arr).filter(supported);
    if(!list.length){note('Vyberte alespoň jeden soubor PDF.',true);return;}
    list.forEach(f=>files.push({file:f,original:null,output:null,stats:null,error:null}));
    if(selected<0)selected=0;
    pageNo=1;U.input.value='';clearNote();fileList();preview();
  }
  function fileList(){
    U.list.replaceChildren();
    if(!files.length){let e=document.createElement('div');e.className='miniempty';e.textContent='Zatím není vybraný žádný soubor.';U.list.append(e);}
    files.forEach((entry,i)=>{
      const card=document.createElement('div');card.className='file';card.style.cursor='pointer';
      if(i===selected)card.style.borderColor='#96b664';
      const badge=document.createElement('span');badge.className='fileicon';badge.textContent='PDF';
      const center=document.createElement('div');center.className='filemain';
      const name=document.createElement('div');name.className='filename';name.textContent=entry.file.name;name.title=entry.file.name;
      const sub=document.createElement('div');sub.className='filemeta';sub.textContent=entry.error?'Chyba: '+entry.error:entry.output?'Hotovo · '+SIZE(entry.output.length):SIZE(entry.file.size);
      center.append(name,sub);
      const btn=document.createElement('button');btn.className='file-action';btn.type='button';btn.textContent=entry.output?'Stáhnout':'Zobrazit';
      btn.onclick=event=>{event.stopPropagation();if(entry.output)download(entry.output,outName(entry.file.name),'application/pdf');else{selected=i;pageNo=1;fileList();preview();}};
      card.onclick=()=>{selected=i;pageNo=1;fileList();preview();};
      card.append(badge,center,btn);U.list.append(card);
    });
    U.start.disabled=busy||!files.length;
    U.zip.hidden=files.filter(x=>x.output).length<2;
  }
  // Podbarvení musí být světlé, nízce syté a tvořené úzkými obdélníky.
  function colorOK(rgb,sensitivity){
    const mn=Math.min(...rgb),mx=Math.max(...rgb);
    return mn>=[.88,.78,.70][sensitivity]&&mx<=.996&&(mx-mn)<=[.025,.045,.10][sensitivity];
  }
  function rectangles(commands){
    const shapes=[];let pts=[];
    const num='[-+]?(?:\\d+\\.?\\d*|\\.\\d+)';
    const line=new RegExp('^\\s*('+num+')\\s+('+num+')\\s+([ml])\\s*$');
    const rect=new RegExp('^\\s*('+num+')\\s+('+num+')\\s+('+num+')\\s+('+num+')\\s+re\\s*$');
    function close(){
      if(pts.length>=4){const xx=pts.map(p=>p[0]), yy=pts.map(p=>p[1]);shapes.push([Math.max(...xx)-Math.min(...xx),Math.max(...yy)-Math.min(...yy)]);}
      pts=[];
    }
    for(const s of commands){
      const t=s.trim();
      if(t==='h'){close();continue;}
      let m=t.match(rect);
      if(m){shapes.push([Math.abs(+m[3]),Math.abs(+m[4])]);continue;}
      m=t.match(line);
      if(!m)return [];
      if(m[3]==='m')pts=[];
      pts.push([+m[1],+m[2]]);
    }
    if(pts.length)close();
    return shapes;
  }
  function cleanContent(content,sensitivity){
    const lines=content.split(/(?<=\n)/);
    const rgb=/^\s*([-+]?(?:\d+\.?\d*|\.\d+))\s+([-+]?(?:\d+\.?\d*|\.\d+))\s+([-+]?(?:\d+\.?\d*|\.\d+))\s+rg\s*$/;
    const gray=/^\s*([-+]?(?:\d+\.?\d*|\.\d+))\s+g\s*$/;
    const n='[-+]?(?:\\d+\\.?\\d*|\\.\\d+)';
    const op=new RegExp('^(?:\\s*'+n+'\\s+'+n+'\\s+(?:m|l)|\\s*'+n+'\\s+'+n+'\\s+'+n+'\\s+'+n+'\\s+re|\\s*h)\\s*$');
    let groups=0,shapes=0;
    for(let i=0;i<lines.length;i++){
      const t=lines[i].trim();let m=t.match(rgb),c=m?[+m[1],+m[2],+m[3]]:null;
      if(!c){m=t.match(gray);if(m)c=[+m[1],+m[1],+m[1]];}
      if(!c||!colorOK(c,sensitivity))continue;
      const cmds=[];let painted=false;
      for(let j=i+1;j<Math.min(lines.length,i+155);j++){
        const s=lines[j].trim();
        if(s==='f'||s==='f*'){painted=true;break;}
        if(!op.test(s))break;
        cmds.push(s);
      }
      if(!painted||!cmds.length)continue;
      const arr=rectangles(cmds), matched=arr.filter(x=>x[0]>=38&&x[1]>=2.2&&x[1]<=[20,27,32][sensitivity]&&x[0]/Math.max(1,x[1])>=3.4);
      if(!arr.length||matched.length!==arr.length)continue;
      const newline=lines[i].endsWith('\r\n')?'\r\n':lines[i].endsWith('\n')?'\n':'';
      lines[i]=(t.endsWith(' g')?'1 g':'1 1 1 rg')+newline;
      groups++;shapes+=matched.length;
    }
    return {text:lines.join(''),groups,shapes};
  }
  function filterName(obj){
    const V=window.PDFLib, f=obj.dict.lookup(V.PDFName.of('Filter'));
    if(!f)return 'none';
    const name=x=>x.toString().replace(/^\//,'');
    if(f instanceof V.PDFArray){const a=f.asArray().map(name);return a.length===1&&a[0]==='FlateDecode'?'flate':'unsupported';}
    return name(f)==='FlateDecode'?'flate':'unsupported';
  }
  async function removeBars(pdf,level){
    let groups=0,shapes=0,skipped=0;
    const context=pdf.context,V=window.PDFLib;
    for(const [ref,obj] of context.enumerateIndirectObjects()){
      if(!obj?.dict||typeof obj.getContents!=='function')continue;
      if(obj.dict.lookup(V.PDFName.of('Subtype'))?.toString()==='/Image')continue;
      let f=filterName(obj);
      if(f==='unsupported'){skipped++;continue;}
      try{
        const raw=obj.getContents();
        if(raw.length>15*1048576){skipped++;continue;}
        const data=f==='flate'?window.pako.inflate(raw):raw;
        if(data.length>40*1048576){skipped++;continue;}
        const s=bytesText(data);
        if(!s.includes(' rg')&&!s.includes(' g\n'))continue;
        const result=cleanContent(s,level);
        if(!result.groups)continue;
        context.assign(ref,context.flateStream(textBytes(result.text)));
        groups+=result.groups;shapes+=result.shapes;
      }catch(_){skipped++;}
    }
    return {groups,shapes,skipped};
  }
  async function clean(entry,opts){
    const input=await entry.file.arrayBuffer();entry.original=input;
    const pdf=await window.PDFLib.PDFDocument.load(input,{updateMetadata:false});
    let fields=0;
    if(opts.flatten){
      const form=pdf.getForm();fields=form.getFields().length;
      if(fields)form.flatten({updateFieldAppearances:false});
    }
    const info=opts.bars?await removeBars(pdf,opts.level):{groups:0,shapes:0,skipped:0};
    entry.output=await pdf.save({useObjectStreams:false,updateFieldAppearances:false});
    entry.stats={pages:pdf.getPageCount(),fields,shapes:info.shapes,groups:info.groups,skipped:info.skipped};
    entry.error=null;
  }
  function metric(title,n){
    const box=document.createElement('div');box.className='metric';
    const strong=document.createElement('strong');strong.textContent=String(n);
    box.append(strong,document.createTextNode(title));return box;
  }
  function showMetrics(entry){
    U.metrics.replaceChildren();U.metrics.hidden=!entry?.stats;
    if(!entry?.stats)return;
    U.metrics.append(metric('Stran',entry.stats.pages),metric('Odstraněných podbarvení',entry.stats.shapes),metric('Zafixovaných polí',entry.stats.fields));
    if(entry.stats.skipped)U.metrics.append(metric('Nepodporovaných proudů',entry.stats.skipped));
  }
  async function getPdf(buffer){return window.pdfjsLib.getDocument({data:new Uint8Array(buffer.slice(0))}).promise;}
  async function draw(pdf,holder,num,stamp){
    holder.replaceChildren();
    if(!pdf){const a=document.createElement('div');a.className='emptycanvas';a.textContent='Náhled bude dostupný po úpravě.';holder.append(a);return;}
    const pg=await pdf.getPage(num);if(stamp!==serial)return;
    const native=pg.getViewport({scale:1}),space=Math.max(260,holder.clientWidth-28),scale=Math.min(1.6,space/native.width);
    const view=pg.getViewport({scale}),ratio=Math.min(devicePixelRatio||1,2);
    const canvas=document.createElement('canvas');canvas.width=Math.ceil(view.width*ratio);canvas.height=Math.ceil(view.height*ratio);
    canvas.style.width=Math.floor(view.width)+'px';canvas.style.height=Math.floor(view.height)+'px';
    holder.append(canvas);
    await pg.render({canvasContext:canvas.getContext('2d'),viewport:view,transform:ratio===1?undefined:[ratio,0,0,ratio,0,0]}).promise;
  }
  async function preview(){
    const stamp=++serial,entry=files[selected];
    if(!entry){
      U.title.textContent='Náhled není dostupný, dokud nevyberete PDF.';U.page.textContent='– / –';U.prev.disabled=U.next.disabled=true;
      U.before.innerHTML='<div class="emptycanvas">Původní dokument</div>';U.after.innerHTML='<div class="emptycanvas">Vyčištěný dokument</div>';showMetrics(null);return;
    }
    U.title.textContent=entry.file.name;
    if(!window.pdfjsLib){note('Knihovna náhledu PDF se nenačetla. Zkontrolujte připojení.',true);return;}
    try{
      const original=entry.original||await entry.file.arrayBuffer();
      if(stamp!==serial)return;
      const [a,b]=await Promise.all([getPdf(original),entry.output?getPdf(entry.output):Promise.resolve(null)]);
      if(stamp!==serial){a.destroy();b?.destroy();return;}
      originalDoc?.destroy();cleanedDoc?.destroy();originalDoc=a;cleanedDoc=b;
      pageNo=Math.max(1,Math.min(pageNo,a.numPages));U.page.textContent=pageNo+' / '+a.numPages;
      U.prev.disabled=pageNo<=1;U.next.disabled=pageNo>=a.numPages;showMetrics(entry);
      await Promise.all([draw(a,U.before,pageNo,stamp),draw(b,U.after,pageNo,stamp)]);
    }catch(e){if(stamp===serial)note('Náhled se nezdařil: '+e.message,true);}
  }
  async function process(){
    if(busy||!files.length)return;
    if(!window.PDFLib||!window.pako||!window.pdfjsLib){note('Nepodařilo se načíst knihovny. Zkontrolujte připojení k internetu.',true);return;}
    busy=true;U.start.disabled=U.reset.disabled=true;
    const opts={bars:U.bars.checked,flatten:U.flatten.checked,level:+U.level.value};
    let ok=0,bad=0;
    for(let i=0;i<files.length;i++){
      note('Zpracovávám '+(i+1)+' z '+files.length+': '+files[i].file.name);
      try{await clean(files[i],opts);ok++;}catch(e){files[i].error=e?.message||String(e);files[i].output=null;bad++;}
      fileList();await new Promise(r=>setTimeout(r,0));
    }
    busy=false;U.reset.disabled=false;fileList();await preview();
    const shapes=files.reduce((x,f)=>x+(f.stats?.shapes||0),0),fields=files.reduce((x,f)=>x+(f.stats?.fields||0),0);
    note('Hotovo: '+ok+' PDF. Podbarvení: '+shapes+'. Zafixovaná pole: '+fields+'. '+(bad?bad+' souborů se nezpracovalo.':'Porovnejte náhled před stažením.'),bad>0);
  }
  async function zipFiles(){
    if(!window.JSZip){note('ZIP knihovna není dostupná. Soubory stáhněte jednotlivě.',true);return;}
    const zip=new JSZip(),used=new Set();
    files.forEach(x=>{if(!x.output)return;let name=outName(x.file.name),i=2;while(used.has(name))name=outName(x.file.name).replace(/\.pdf$/i,' ('+(i++)+').pdf');used.add(name);zip.file(name,x.output);});
    const blob=await zip.generateAsync({type:'blob',compression:'DEFLATE'});download(blob,'PDF Studio - vycistene dokumenty.zip','application/zip');
  }
  U.drop.onclick=()=>U.input.click();
  U.drop.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();U.input.click();}};
  U.drop.ondragover=e=>{e.preventDefault();U.drop.classList.add('dragover');};
  U.drop.ondragleave=()=>U.drop.classList.remove('dragover');
  U.drop.ondrop=e=>{e.preventDefault();U.drop.classList.remove('dragover');choose(e.dataTransfer.files);};
  U.input.onchange=e=>choose(e.target.files);
  U.level.oninput=()=>U.levelText.textContent=levels[+U.level.value];
  U.start.onclick=process;U.zip.onclick=zipFiles;
  U.reset.onclick=()=>{files=[];selected=-1;pageNo=1;originalDoc?.destroy();cleanedDoc?.destroy();originalDoc=cleanedDoc=null;clearNote();fileList();preview();};
  U.prev.onclick=()=>{if(pageNo>1){pageNo--;preview();}};
  U.next.onclick=()=>{if(originalDoc&&pageNo<originalDoc.numPages){pageNo++;preview();}};
  if(window.pdfjsLib)window.pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
  fileList();
})();