/* ============================================================
   shared.js — header scroll shadow + mobile nav toggle.
   Loaded by panels.html and all /products/*.html pages.
   ============================================================ */
(function(){
  var header=document.getElementById('header');
  if(header){
    window.addEventListener('scroll',function(){
      header.classList.toggle('scrolled',window.scrollY>10);
    });
  }
  var menuBtn=document.getElementById('mobileMenuBtn');
  var mobileNav=document.getElementById('mobileNav');
  if(menuBtn&&mobileNav){
    menuBtn.addEventListener('click',function(){
      mobileNav.classList.toggle('open');
    });
  }
  // Expose for inline onclick handlers in mobile nav
  window.closeMobile=function(){
    if(mobileNav)mobileNav.classList.remove('open');
  };
})();
