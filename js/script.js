$(document).ready(function(){
   
   $('.btn-about-me').click(function(){
      $('#bio').slideToggle('slow');
   });
   
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
   
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
   });

   window.msr = ScrollReveal();
      msr.reveal('.navbar', {
      duration: 2000,
      origin: 'bottom',
      distance: '20px'
      });
      msr.reveal('.h-img', {
         duration: 2000,
         origin: 'top',
         distance: '200px'
      });
      msr.reveal('.h-content', {
         duration: 2000,
         origin: 'right',
         distance: '300px'
      });
      msr.reveal('.btn-about-me', {
         duration: 2000,
         origin: 'bottom',
         distance: '10px',
         delay: 900
      });
      msr.reveal('.wrap-ring-and-rebel', {
         duration: 2000,
         origin: 'left',
         distance: '300px',
         delay: 600
      });
      msr.reveal('.wrap-front', {
         duration: 2000,
         origin: 'right',
         distance: '300px',
         delay: 600
      });

});

