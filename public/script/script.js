const burger = document.querySelector('#burger');
const close = document.querySelector('#close');
const menu = document.querySelector('#menu');
const body = document.querySelector('body');
let opacity = 0;
let intervalID = 0;

burger.addEventListener('click', () => {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    body.classList.replace('overflow-y-scroll', 'overflow-y-hidden');
  }
});

close.addEventListener('click', () => {
  menu.classList.add('hidden');
  body.classList.replace('overflow-y-hidden', 'overflow-y-scroll');
});
