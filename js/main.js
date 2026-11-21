/* Global init + data-driven rendering for home, detail pages, portfolio and hub. */
(function(){
const D=window.GV_DATA,$=s=>document.querySelector(s),E=GV.esc;
const fill=(sel,html)=>{const el=$(sel);if(el)el.innerHTML=html;};
fill("#featured-courses",D.courses.slice(0,3).map(GV.courseCard).join(""));
fill("#featured-guides",D.guides.slice(0,3).map(GV.guideCard).join(""));
fill("#project-grid",D.projects.map(p=>`<article class="card" data-pillar="${p.pillar}"><div class="img-ph">[IMAGE PLACEHOLDER]</div><span class="badge badge--pillar">${E(D.pillars[p.pillar])}</span><h3>${E(p.name)}</h3><p>${E(p.desc)}</p><p class="meta"><span class="badge">[TECHNOLOGIES PLACEHOLDER]</span></p><a class="card__link" href="#">View Project</a></article>`).join(""));
fill("#cert-grid",D.certs.map(c=>`<article class="card"><h3>${E(c.title)}</h3><p>${E(c.org)}</p><span class="badge">${E(c.year)}</span></article>`).join(""));
fill("#blog-grid",D.posts.map(p=>`<article class="card card--hover"><div class="img-ph">[IMAGE PLACEHOLDER]</div><span class="badge">${E(p.category)}</span><h3>${E(p.title)}</h3><p>${E(p.date)}</p><a class="card__link" href="#">Read Article</a></article>`).join(""));
const id=new URLSearchParams(location.search).get("id");
const cd=$("#course-detail");if(cd){const c=D.courses.find(x=>x.id===id)||D.courses[0];cd.dataset.pillar=c.pillar;
 $("#cd-title").textContent=c.title;$("#cd-pillar").textContent=D.pillars[c.pillar];$("#cd-duration").textContent=c.duration;$("#cd-level").textContent=c.level;$("#cd-price").textContent=c.price;document.title=c.title+" | GenVentures for EQAIB";
 fill("#related-courses",D.courses.filter(x=>x.id!==c.id).slice(0,3).map(GV.courseCard).join(""));}
const gd=$("#guide-detail");if(gd){const g=D.guides.find(x=>x.id===id)||D.guides[0];gd.dataset.pillar=g.pillar;
 $("#gd-title").textContent=g.title;$("#gd-category").textContent=g.category;$("#gd-level").textContent=g.level;$("#gd-time").textContent=g.time;document.title=g.title+" | GenVentures for EQAIB";
 fill("#related-guides",D.guides.filter(x=>x.id!==g.id).slice(0,3).map(GV.guideCard).join(""));}
})();
