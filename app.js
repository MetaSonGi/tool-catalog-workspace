'use strict';
const KEY='hyoki-toolkit-workspace-v1';
const projects=['콘텐츠 제작','AI 에이전트','로봇·디지털트윈','포트폴리오','교육·RAG','업무·마케팅','금융 연구','PC 작업'];
const columns={todo:'할 일',doing:'진행 중',review:'검토',done:'완료'};
let state={selected:[],notes:{},tasks:[]};
const $=id=>document.getElementById(id);
const el=(tag,text,cls)=>{const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(cls)e.className=cls;return e;};
function validate(s){
 if(!s||!Array.isArray(s.selected)||!s.selected.every(x=>typeof x==='string')||!s.notes||Array.isArray(s.notes)||typeof s.notes!=='object'||!Object.values(s.notes).every(x=>typeof x==='string')||!Array.isArray(s.tasks)||!s.tasks.every(t=>t&&typeof t.id==='string'&&typeof t.title==='string'&&projects.includes(t.project)&&Object.hasOwn(columns,t.status)))throw Error('기록 형식이 올바르지 않습니다.');
 if(s.tasks.length>5000||s.selected.length>1000||Object.keys(s.notes).length>1000)throw Error('기록이 너무 큽니다.');
 return s;
}
try{const saved=localStorage.getItem(KEY);if(saved)state=validate(JSON.parse(saved));}catch(e){
 // 손상된 기록은 다음 저장 때 덮어써지므로, 그 전에 별도 키로 원본을 보관한다.
 try{const raw=localStorage.getItem(KEY);if(raw!=null&&localStorage.getItem(KEY+'-corrupt-backup')==null)localStorage.setItem(KEY+'-corrupt-backup',raw);}catch(_){}
 $('message').textContent='기록 읽기 실패. 원본은 '+KEY+'-corrupt-backup 키에 보관했습니다.';
}
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));$('message').textContent='이 브라우저에 저장했습니다.';}catch(e){$('message').textContent='저장 실패: JSON으로 내보내 백업하세요.';}}
function options(id,values){for(const v of values){const o=el('option',v);o.value=v;$(id).append(o);}}
options('category',[...new Set(CATALOG.map(t=>t.category))]);options('project',projects);options('task-project',projects);
function renderCatalog(){
 const q=$('query').value.toLowerCase(),category=$('category').value,project=$('project').value;
 const items=CATALOG.filter(t=>(!q||[t.name,t.feature,t.apply,...t.projects].join(' ').toLowerCase().includes(q))&&(!category||t.category===category)&&(!project||t.projects.includes(project))&&(!$('selected').checked||state.selected.includes(t.id)));
 $('catalog').replaceChildren();$('count').textContent=items.length+' / '+CATALOG.length;
 for(const t of items){
  const card=el('article',undefined,'card');card.append(el('span',t.category,'chip'),el('h3',t.name),el('p',t.feature),el('small','적용: '+t.apply),el('p',t.cost,'muted'));
  if(t.url){const a=el('a','원본 보기 ↗');a.href=t.url;a.target='_blank';a.rel='noopener noreferrer';card.append(a);}
  const actions=el('div',undefined,'actions'),pick=el('button',state.selected.includes(t.id)?'선택 해제':'적용 후보로 선택');
  pick.onclick=()=>{state.selected=state.selected.includes(t.id)?state.selected.filter(x=>x!==t.id):[...state.selected,t.id];save();renderCatalog();};actions.append(pick);card.append(actions);
  const label=el('label','적용 메모');const note=el('textarea');note.rows=2;note.maxLength=2000;note.value=state.notes[t.id]||'';note.onchange=()=>{state.notes[t.id]=note.value;save();};label.append(note);card.append(label);$('catalog').append(card);
 }
}
function renderBoard(){
 $('board').replaceChildren();
 for(const [status,name] of Object.entries(columns)){
  const col=el('div',undefined,'card');col.append(el('h3',name));
  for(const task of state.tasks.filter(t=>t.status===status)){
   const box=el('div',undefined,'task');box.append(el('strong',task.title),el('small',task.project));
   const move=el('select');move.setAttribute('aria-label',task.title+' 상태');
   for(const [value,label] of Object.entries(columns)){const op=el('option',label);op.value=value;move.append(op);}move.value=status;
   move.onchange=()=>{task.status=move.value;save();renderBoard();};
   const del=el('button','삭제');del.setAttribute('aria-label',task.title+' 삭제');
   del.onclick=()=>{if(!confirm('이 작업을 삭제할까요?'))return;state.tasks=state.tasks.filter(t=>t.id!==task.id);save();renderBoard();};
   box.append(move,del);col.append(box);
  }$('board').append(col);
 }
}
for(const id of ['query','category','project','selected'])$(id).addEventListener('input',renderCatalog);
$('task-form').onsubmit=e=>{e.preventDefault();const title=$('title').value.trim();if(!title)return;state.tasks.push({id:crypto.randomUUID(),title,project:$('task-project').value,status:'todo'});$('title').value='';save();renderBoard();};
$('export').onclick=()=>{const url=URL.createObjectURL(new Blob([JSON.stringify(state,null,2)],{type:'application/json'}));const a=el('a');a.href=url;a.download='hyoki-workspace.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
$('import').onchange=async()=>{try{const file=$('import').files[0];if(!file)return;if(file.size>5_000_000)throw Error('5MB 이하 파일만 지원합니다.');const incoming=validate(JSON.parse(await file.text()));if(!confirm('현재 기록을 가져온 기록으로 교체할까요? 먼저 내보내기로 백업할 수 있습니다.'))return;state=incoming;save();renderCatalog();renderBoard();}catch(e){$('message').textContent=e.message;}finally{$('import').value='';}};
renderCatalog();renderBoard();
