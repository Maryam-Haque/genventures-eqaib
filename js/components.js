/* Shared navbar + footer injected into #navbar-mount / #footer-mount. No fetch needed, so it also works over file://. */
(function(){
const PAGES=[["index.html","Home"],["courses.html","Courses"],["guides.html","Guides"],["portfolio.html","Portfolio"],["about.html","About"],["hub.html","Hub"],["contact.html","Contact"]];
const SOCIALS=["LinkedIn","GitHub","Instagram","YouTube"];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const current=()=>{let p=location.pathname.split("/").pop()||"index.html";
 if(p==="course-detail.html")p="courses.html";if(p==="guide-detail.html")p="guides.html";return p;};
function navbar(){const cur=current();
return `<header class="navbar"><div class="container navbar__inner">
<a class="brand" href="index.html">GenVentures <span>for EQAIB</span></a>
<nav aria-label="Main"><ul class="nav-links" id="nav-links">${PAGES.map(([h,l])=>`<li><a href="${h}"${h===cur?' aria-current="page"':""}>${l}</a></li>`).join("")}</ul></nav>
<div class="navbar__actions"><button class="theme-toggle" type="button" aria-label="Switch to light mode" aria-pressed="false"><span class="theme-toggle__icon" aria-hidden="true"></span></button><button class="nav-toggle" aria-expanded="false" aria-controls="nav-links" aria-label="Toggle menu">&#9776;</button></div>
</div></header>`;}
function footer(){return `<footer class="footer"><div class="container"><div class="footer__grid">
<div><h3>GenVentures for EQAIB</h3><p>Creating Your Own Unique Ripple.</p><p>[SECTION DESCRIPTION PLACEHOLDER]</p></div>
<nav aria-label="Quick links"><h3>Quick Links</h3><ul>${PAGES.map(([h,l])=>`<li><a href="${h}">${l}</a></li>`).join("")}</ul></nav>
<div><h3>Collaborations</h3><ul><li><a href="contact.html#collaborations">Workshops</a></li><li><a href="contact.html#collaborations">Hackathons</a></li><li><a href="contact.html#collaborations">Mentorship</a></li><li><a href="contact.html#collaborations">Partnership inquiries</a></li></ul></div>
<div><h3>Newsletter &amp; Socials</h3>
<!-- Newsletter integration is a future phase: validation only, nothing is sent. -->
<form data-form="newsletter" novalidate><div class="field"><label for="nl-email">Email address</label><input class="input" id="nl-email" name="email" type="email" required autocomplete="email"><span class="field-error" aria-live="polite"></span></div>
<button class="btn btn--primary" type="submit">Subscribe</button><p class="form-status" role="status"></p></form>
<ul class="flex footer__socials">${SOCIALS.map(s=>`<li><a href="#" aria-label="${s} [SOCIAL LINK PLACEHOLDER]">${s}</a></li>`).join("")}</ul></div>
</div><div class="footer__bottom">&copy; <span id="year"></span> GenVentures for EQAIB. All rights reserved.</div></div></footer>`;}
/* Reusable cards used by home, courses, guides and detail pages */
const pill=k=>esc(window.GV_DATA.pillars[k]);
window.GV={esc,
courseCard:c=>`<a class="card" data-pillar="${c.pillar}" href="course-detail.html?id=${c.id}"><span class="badge badge--pillar">${pill(c.pillar)}</span><h3>${esc(c.title)}</h3><p>${esc(c.desc)}</p><div class="meta"><span class="badge">${esc(c.duration)}</span><span class="badge">${esc(c.level)}</span><span class="badge">${esc(c.price)}</span></div><span class="card__link">View Course</span></a>`,
guideCard:g=>`<a class="card" data-pillar="${g.pillar}" href="guide-detail.html?id=${g.id}"><span class="badge badge--pillar">${pill(g.pillar)}</span><h3>${esc(g.title)}</h3><p>${esc(g.desc)}</p><div class="meta"><span class="badge">${esc(g.category)}</span><span class="badge">${esc(g.level)}</span><span class="badge">${esc(g.time)}</span></div><span class="card__link">View Guide</span></a>`};
GV.cohortCard=function(c){const k=window.GV_DATA.cohort;const fee=(c&&k.courseFees[c.id])||"[COURSE FEE TO BE CONFIRMED]";
let cnt="";if(k.countdown.enabled&&k.countdown.startISO){const d=Math.ceil((new Date(k.countdown.startISO)-Date.now())/864e5);if(d>0)cnt=`<p class="cohort__count">Starts in ${d} days</p>`;}
return `<section class="cohort"${c?` data-pillar="${c.pillar}"`:""} aria-label="Course batch and enrollment"><div class="cohort__head"><h3>${c?esc(c.title):"[BATCH TITLE PLACEHOLDER]"}</h3><span class="badge badge--pillar">Batch details</span></div>
<dl class="cohort__grid"><div><dt>Start date</dt><dd>${esc(k.placeholderStart)}<small>Placeholder date, not a confirmed batch</small></dd></div><div><dt>Fees</dt><dd>Starting from ${esc(k.startingFee)}<small>Course fee: ${esc(fee)}</small></dd></div><div><dt>Duration</dt><dd>${c?esc(c.duration):"[DURATION]"}</dd></div><div><dt>Batch schedule</dt><dd>[BATCH SCHEDULE PLACEHOLDER]</dd></div></dl>
<p class="cohort__status"><strong>Seat confirmation:</strong> [SEAT AVAILABILITY TO BE CONFIRMED]</p>${cnt}
<p class="cohort__note">Fees vary by course. Confirm final pricing on each course&rsquo;s detail page. Payment integration will be added later.</p>
<!-- FUTURE: enrollment + payment integration -->
<a class="btn btn--primary btn--block" href="contact.html">Enrollment details coming soon</a></section>`;};
const n=document.getElementById("navbar-mount"),f=document.getElementById("footer-mount");
if(n)n.innerHTML=navbar();if(f){f.innerHTML=footer();const y=document.getElementById("year");if(y)y.textContent=new Date().getFullYear();}
})();
