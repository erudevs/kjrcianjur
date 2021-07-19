const burger = document.querySelector('#burger');
const close = document.querySelector('#close');
const menu = document.querySelector('#menu');
const navItem = document.querySelectorAll('.nav-item a');
const dropdownMenu = document.querySelector('#dropdownMenu');
const overlay = document.querySelector('.overlay');
const dropBtn = document.querySelector('.dropbtn');
const dropdown = document.querySelector('.dropdown');
const chevron = document.querySelector('.chevron');
const navLink = document.querySelectorAll('.nav-link');
const modal = document.getElementById('modal');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
if (modal) {
  if (loginModal) {
    const closeModal = document.querySelector('.closeModal');
    loginModal.onclick = function () {
      modal.classList.add('show');
    };
    closeModal.onclick = function () {
      modal.classList.remove('show');
    };
  }

  window.onclick = function (e) {
    if (e.target == modal) {
      modal.classList.remove('show');
    }
  };
}

burger.addEventListener('click', () => {
  if (!menu.classList.contains('show')) {
    menu.classList.add('show');
    overlay.style.display = 'block';
  }
});

close.onclick = function () {
  if (menu.classList.contains('show')) {
    menu.classList.remove('show');
    overlay.style.display = 'none';
    if (dropdown) {
      dropdownMenu.classList.remove('show');
    }
  }
};

navLink.forEach((n) =>
  n.addEventListener('click', () => {
    if (menu.classList.contains('show')) {
      menu.classList.remove('show');
      overlay.style.display = 'none';
      if (dropdown) {
        dropdownMenu.classList.remove('show');
      }
    }
  })
);

if (dropBtn) {
  dropBtn.onclick = function () {
    dropdownMenu.classList.toggle('show');
  };
}

const openArticle = (e, articleName) => {
  let i, tabContent, tabLink;

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
