const navMenu = document.querySelector('.nav__menu');
const navBlock = document.querySelector('.nav__block');
const body = document.querySelector('body');

navMenu.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    navBlock.classList.toggle('none');
    body.classList.toggle('block');
})

window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
}