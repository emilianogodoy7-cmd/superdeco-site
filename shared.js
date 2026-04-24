/* ============================================================
   shared.js — header scroll shadow + mobile nav toggle.
   Loaded by panels.html and all /products/*.html pages.
   ============================================================ */
(function(){
  var header=document.getElementById('header');
  var hero=document.querySelector('.hero');

  if(header){
    if(hero){
      var logoImg=header.querySelector('.logo-img');
      var defaultSrc=logoImg?logoImg.getAttribute('src'):'';
      var whiteSrc=defaultSrc.replace('logo.svg','logo-white.svg');
      function syncHeader(){
        var atTop=window.scrollY<10;
        header.classList.toggle('header-transparent',atTop);
        header.classList.toggle('scrolled',window.scrollY>10);
        if(logoImg)logoImg.src=atTop?whiteSrc:defaultSrc;
      }
      syncHeader();
      window.addEventListener('scroll',syncHeader,{passive:true});
    } else {
      window.addEventListener('scroll',function(){
        header.classList.toggle('scrolled',window.scrollY>10);
      });
    }
  }

  var menuBtn=document.getElementById('mobileMenuBtn');
  var mobileNav=document.getElementById('mobileNav');
  if(menuBtn&&mobileNav){
    menuBtn.addEventListener('click',function(){
      mobileNav.classList.toggle('open');
    });
  }
  window.closeMobile=function(){
    if(mobileNav)mobileNav.classList.remove('open');
  };
})();
