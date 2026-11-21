/* Mobile drawer: toggle, Escape to close, close on link click / outside click. */
(function(){
const btn=document.querySelector(".nav-toggle"),menu=document.getElementById("nav-links");if(!btn||!menu)return;
const set=o=>{menu.classList.toggle("is-open",o);btn.setAttribute("aria-expanded",o);};
btn.addEventListener("click",()=>set(!menu.classList.contains("is-open")));
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&menu.classList.contains("is-open")){set(false);btn.focus();}});
menu.addEventListener("click",e=>{if(e.target.closest("a"))set(false);});
document.addEventListener("click",e=>{if(!e.target.closest(".navbar"))set(false);});
})();
