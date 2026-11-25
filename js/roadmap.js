/* Reusable scroll-active roadmap. Markup: [data-roadmap] > .roadmap__step[data-step] + .roadmap__panel[data-panel]. No scroll-jacking. */
(function(){
document.querySelectorAll("[data-roadmap]").forEach(rm=>{
 const steps=[...rm.querySelectorAll(".roadmap__step")],panels=[...rm.querySelectorAll(".roadmap__panel")];
 if(!steps.length||!("IntersectionObserver" in window))return;
 rm.classList.add("is-enhanced");
 const set=n=>{steps.forEach(s=>s.classList.toggle("is-active",s.dataset.step===n));panels.forEach(p=>p.classList.toggle("is-active",p.dataset.panel===n));};
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)set(e.target.dataset.step);}),{rootMargin:"-40% 0px -50% 0px"});
 steps.forEach(s=>{io.observe(s);s.addEventListener("focus",()=>set(s.dataset.step));});
 set(steps[0].dataset.step);
});
})();
