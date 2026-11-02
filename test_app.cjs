const test=require('node:test'),assert=require('node:assert/strict'),vm=require('node:vm'),fs=require('node:fs');
function boot(saved){
 const nodes={},storage=new Map(saved?[['hyoki-toolkit-workspace-v1',saved]]:[]);
 function node(){return {value:'',checked:false,children:[],append(...x){this.children.push(...x);},replaceChildren(...x){this.children=x;},setAttribute(){},addEventListener(){},click(){}};}
 const doc={createElement:node,getElementById(id){return nodes[id]??=(node());}};
 doc.getElementById('title');
 const ctx=vm.createContext({document:doc,localStorage:{getItem:k=>storage.get(k),setItem:(k,v)=>storage.set(k,v)},crypto:{randomUUID:()=>String(Math.random())},console,setTimeout,Blob,URL,confirm:()=>true});
 vm.runInContext(fs.readFileSync('catalog.js','utf8'),ctx);vm.runInContext(fs.readFileSync('app.js','utf8'),ctx);
 return {ctx,nodes,storage};
}
test('62-item catalog filters and task persistence across reload',()=>{
 const {ctx,nodes,storage}=boot();assert.equal(nodes.catalog.children.length,62);
 nodes.query.value='Whisper';vm.runInContext('renderCatalog()',ctx);assert.ok(nodes.catalog.children.length>0);assert.ok(nodes.catalog.children.length<62);
 nodes.title.value='실음성 인식 확인';nodes['task-project'].value='콘텐츠 제작';nodes['task-form'].onsubmit({preventDefault(){}});
 const saved=storage.get('hyoki-toolkit-workspace-v1');assert.equal(JSON.parse(saved).tasks[0].title,'실음성 인식 확인');
 const reloaded=boot(saved);assert.equal(vm.runInContext('state.tasks.length',reloaded.ctx),1);
});
test('invalid imported task schema is rejected',()=>{
 const {ctx}=boot();assert.throws(()=>vm.runInContext('validate({selected:[],notes:{},tasks:[{id:"x",title:"bad",project:"콘텐츠 제작",status:"execute"}]})',ctx));
});
test('task can be deleted from the board',()=>{
 const {ctx,nodes,storage}=boot();
 nodes.title.value='지울 작업';nodes['task-project'].value='PC 작업';nodes['task-form'].onsubmit({preventDefault(){}});
 const todo=nodes.board.children[0],box=todo.children[1],del=box.children.find(c=>c.textContent==='삭제');
 assert.ok(del);del.onclick();
 assert.equal(JSON.parse(storage.get('hyoki-toolkit-workspace-v1')).tasks.length,0);
});
test('corrupt saved data is backed up before it can be overwritten',()=>{
 const {nodes,storage}=boot('{broken');
 assert.equal(storage.get('hyoki-toolkit-workspace-v1-corrupt-backup'),'{broken');
 nodes.title.value='새 작업';nodes['task-project'].value='PC 작업';nodes['task-form'].onsubmit({preventDefault(){}});
 assert.equal(storage.get('hyoki-toolkit-workspace-v1-corrupt-backup'),'{broken');
});
test('import input is reset so the same file can be imported again',async()=>{
 const {nodes}=boot();
 const data=JSON.stringify({selected:[],notes:{},tasks:[]});
 nodes.import.files=[{size:data.length,text:async()=>data}];nodes.import.value='C:/fakepath/a.json';
 await nodes.import.onchange();
 assert.equal(nodes.import.value,'');
});
