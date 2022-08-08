const iconMenu = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav');
const navLink = document.querySelector('.nav-list');
const bodyOverlay = document.querySelector('.overlayDiv');

if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    iconMenu.classList.toggle('is-active');
    navMenu.classList.toggle('open');
    bodyOverlay.classList.toggle('overlay');
    document.body.classList.toggle('hidden');
  });
}
if (navLink) {
  navLink.addEventListener('click', function (e) {
    iconMenu.classList.remove('is-active');
    navMenu.classList.remove('open');
    bodyOverlay.classList.remove('overlay');
    document.body.classList.remove('hidden');
  });
}
