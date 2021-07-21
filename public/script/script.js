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
const modal = document.querySelector('.modal');
const btnModal = document.getElementById('btnModal');
const registerModal = document.getElementById('registerModal');
const body = document.body;

if (modal) {
  const closeModal = document.querySelector('.closeModal');
  btnModal.onclick = function () {
    modal.classList.add('show');
    body.style.overflowY = 'hidden';
  };
  closeModal.onclick = function () {
    modal.classList.remove('show');
    body.style.overflowY = 'scroll';
  };

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

function openForm(e, formName) {
  // Declare all variable
  let i, formContent, modalBtn;

  // Get all elements with class="form" and hide by default
  formContent = document.getElementsByClassName('form');
  for (i = 0; i < formContent.length; i++) {
    formContent[i].style.display = 'none';
  }

  // Get all elements with class="modal-btn" and remove the class "active"
  modalBtn = document.getElementsByClassName('modal-btn');
  for (i = 0; i < modalBtn.length; i++) {
    modalBtn[i].className = modalBtn[i].className.replace(' active', '');
  }

  // Show the current tab, and add an "active" class to the button that open the tab
  document.getElementById(formName).style.display = 'block';
  e.currentTarget.className += ' active';
}
if (document.getElementById('defaultOpen')) {
  document.getElementById('defaultOpen').click();
}
