const burger = document.querySelector('#burger');
const close = document.querySelector('#close');
const menu = document.querySelector('#menu');
const dropdownMenu = document.querySelector('#dropdownMenu');
const overlay = document.querySelector('.overlay');
const dropBtn = document.querySelector('.dropbtn');
const dropdown = document.querySelector('.dropdown');
const chevron = document.querySelector('.chevron');
// let tabContent = document.querySelector('.tabcontent');
// let tabLink = document.querySelector('.tablink');
const body = document.body;

burger.addEventListener('click', () => {
  if (!menu.classList.contains('show')) {
    menu.classList.add('show');
    overlay.style.display = 'block';
  }
});

close.addEventListener('click', () => {
  if (menu.classList.contains('show')) {
    menu.classList.remove('show');
    overlay.style.display = 'none';
    dropdownMenu.classList.remove('show');
  }
});

dropBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
});

const openArticle = (e, articleName) => {
  let i, tabContent, tabLink, tabHeader;

  tabContent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
  }

  tabLink = document.getElementsByClassName('tablink');
  for (i = 0; i < tabLink.length; i++) {
    tabLink[i].className = tabLink[i].className.replace(' active', '');
  }
  document.getElementById(articleName).style.display = 'grid';
  e.currentTarget.className += ' active';
};
