const burger = document.querySelector('#burger');
const close = document.querySelector('#close');
const menu = document.querySelector('#menu');
const overlay = document.querySelector('.overlay');
const body = document.body;

burger.addEventListener('click', () => {
  if (!menu.classList.contains('show')) {
    menu.classList.add('show');
    overlay.style.left = '0';
  }
});

close.addEventListener('click', () => {
  if (menu.classList.contains('show')) {
    menu.classList.remove('show');
    overlay.style.left = '-100vw';
  }
});
