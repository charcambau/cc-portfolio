// VARIABLES
var menuOpen = document.getElementById('menuOpen');
var mobileMenu = document.getElementById('mobileMenu');

// EVENT LISTENERS
menuOpen.addEventListener('click', toggleMobileMenu);

// FUNCTIONS
function toggleMobileMenu() {
  mobileMenu.classList.toggle('show-menu');
}