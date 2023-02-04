let navIcon = document.querySelector('.nav-icon');
let navbar = document.querySelector('.navbar');

navIcon.addEventListener('click', function() {
  navIcon.classList.toggle('open');
  navbar.classList.toggle('show');
});
