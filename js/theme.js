/* Central theme toggle logic (button is injected by components.js). */
(function(){
const root=document.documentElement;
function sync(){const light=root.getAttribute("data-theme")==="light";
 document.querySelectorAll(".theme-toggle").forEach(b=>{b.setAttribute("aria-pressed",light);b.setAttribute("aria-label",light?"Switch to dark mode":"Switch to light mode");});}
document.addEventListener("click",e=>{if(!e.target.closest(".theme-toggle"))return;
 const next=root.getAttribute("data-theme")==="light"?"dark":"light";root.setAttribute("data-theme",next);
 try{localStorage.setItem("gv-theme",next);}catch(err){}sync();});
sync();
})();
