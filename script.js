const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile');

menu_btn.addEventListener('click', function() {
  document.body.style.overflow = menu_btn.className.includes("active") ? "scroll" : "hidden";
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
});

window.addEventListener("scroll", function() {
  var navbar = document.getElementById('desktop');
  navbar.classList.toggle("sticky", window.scrollY > 0);
});
