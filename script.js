document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
      var navbar = document.querySelector('.navbar');
      if (window.scrollY > 5) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  });
  