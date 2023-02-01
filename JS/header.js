const header = document.querySelector('#header');
const headerHeight = header.getBoundingClientRect().height;
const navMenu = document.querySelector('i');
const changeA = document.querySelectorAll('nav > ul > li > a');
const changeImg = document.querySelector('.changeImg');

window.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    changeImg.src = 'img/logoBlue.png';
    header.setAttribute('style', 'background: white;');
    navMenu.style.color = 'black';
    changeA.forEach((item) => {
      item.style.color = 'black';
    });
  } else {
    changeImg.src = 'img/logoWhite.png';
    header.setAttribute('style', 'background: transparent;');
    navMenu.style.color = 'white';
    changeA.forEach((item) => {
      item.style.color = 'white';
    });
  }
});

function openNav() {
  document.getElementById('mySidenav').style.width = '100%';
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
}
