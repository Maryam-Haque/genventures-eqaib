/* Client-side validation ONLY. Nothing is sent.
   TODO (later phase): connect to a backend/email service and show a success state only after a confirmed response. */
(function(){
document.querySelectorAll("form[data-form]").forEach(form=>{
 form.addEventListener("submit",e=>{e.preventDefault();let ok=true;
  form.querySelectorAll("input,select,textarea").forEach(el=>{
   const err=el.closest(".field").querySelector(".field-error");const valid=el.checkValidity();
   el.setAttribute("aria-invalid",!valid);if(err)err.textContent=valid?"":(el.validationMessage||"This field is required.");if(!valid)ok=false;});
  const s=form.querySelector(".form-status");
  if(s)s.textContent=ok?"Form looks valid, but sending is not set up yet. Backend integration is coming in a later phase.":"Please fix the highlighted fields.";
  if(!ok){const bad=form.querySelector('[aria-invalid="true"]');if(bad)bad.focus();}
 });});
})();
