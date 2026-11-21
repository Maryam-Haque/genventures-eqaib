/* Reusable search + pillar filter. Markup: [data-filter-root data-source="courses|guides"] containing input[data-search], buttons[data-pillar-filter], and [data-grid]. */
(function(){
const root=document.querySelector("[data-filter-root]");if(!root)return;
const src=root.dataset.source,items=window.GV_DATA[src],card=src==="courses"?GV.courseCard:GV.guideCard;
const grid=root.querySelector("[data-grid]"),input=root.querySelector("[data-search]"),chips=[...root.querySelectorAll("[data-pillar-filter]")];
let pillar="all";
function render(){const q=input.value.trim().toLowerCase();
 const out=items.filter(i=>(pillar==="all"||i.pillar===pillar)&&(!q||(i.title+" "+i.desc+" "+(i.category||"")).toLowerCase().includes(q)));
 grid.innerHTML=out.length?out.map(card).join(""):'<p class="empty">No matches yet. Try another search or pillar.</p>';}
chips.forEach(c=>c.addEventListener("click",()=>{pillar=c.dataset.pillarFilter;chips.forEach(x=>x.setAttribute("aria-pressed",x===c));render();}));
input.addEventListener("input",render);render();
})();
