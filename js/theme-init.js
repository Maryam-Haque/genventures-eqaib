/* Loaded synchronously in <head> to set the theme before first paint (prevents flash). */
(function(){var t="dark";try{var s=localStorage.getItem("gv-theme");if(s==="light"||s==="dark")t=s;}catch(e){}
/* FOLLOW_SYSTEM: set true to use the OS preference when nothing is saved. Dark stays the signature default. */
var FOLLOW_SYSTEM=false;try{if(FOLLOW_SYSTEM&&!localStorage.getItem("gv-theme")&&matchMedia("(prefers-color-scheme: light)").matches)t="light";}catch(e){}
document.documentElement.setAttribute("data-theme",t);})();
