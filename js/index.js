let h_wrap = document.getElementById('h_wrap');
let hover = document.querySelectorAll('.hover');

for (let i = 0; i < hover.length; i++) {
  hover[i].addEventListener('mouseenter', () => {
    hover[i].classList.add('active');
  });
  hover[i].addEventListener('mouseleave', () => {
    hover[i].classList.remove('active');
  });
}

window.onscroll = function () {
  scrollBtn();
};
function scrollBtn() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    h_wrap.classList.add('focus');
  } else {
    h_wrap.classList.remove('focus');
  }
}
