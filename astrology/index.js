// перемещение блоков в первой секции

const widthMax = window.matchMedia('(min-width: 1024px)');
//   const widthMin = window.matchMedia('(max-width: 768px)');
const firstWrapper = document.querySelector('.first__about');
const firstAdvantagesWrapper = document.querySelector('.first__advantages-moving');
const link = document.querySelector('.js-link');
// js-link

if (window.screen.width > 1024) {
  firstWrapper.append(firstAdvantagesWrapper);
  firstWrapper.append(link);
}

// Swiper Slider
const swiper = new Swiper('.swiper', {
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// // Услуги
// document.querySelectorAll('.services__item').forEach(function (itemWrapper) {
//   const more = itemWrapper.querySelector('.desc__more');
//   const btn = itemWrapper.querySelector('.services__item-link');
//   const desc = itemWrapper.querySelector('.services__item-desc');

//   btn.addEventListener('click', function () {
//     // more.classList.toggle('none');
//     btn.classList.toggle('active');
//     more.classList.toggle('active');
//     desc.classList.toggle('desc-open');
//     btn.classList.toggle('close');

//     if (more.classList.contains('active')) {
//       btn.textContent = 'Подробнее';
//       more.style.maxHeight = more.scrollHeight + 'px';
//     } else {
//       btn.textContent = 'Свернуть';
//       more.style.maxHeight = 0;
//     }
//   });
// });

// подключение аккордионов в блоке услуги

// document.addEventListener('DOMContentLoaded', () => {
//   let accordions = document.querySelectorAll('.js-accordion');
//   accordions.forEach((element) => {
//     let control = element.querySelector('.js-button-accordion');
//     control.addEventListener('click', function () {
//       this.closest('.js-accordion').classList.toggle('open');
//     });

document.addEventListener('DOMContentLoaded', () => {
  let accordions = document.querySelectorAll('.js-accordion');
  accordions.forEach((element) => {
    let control = element.querySelector('.js-button-accordion');
    control.addEventListener('click', function () {
      this.closest('.js-accordion').classList.toggle('open');
    });
  });
});

// аккордион в консультации

//FAQ - accorderon
let faq = document.querySelectorAll('.js-faq');
faq.forEach((element) => {
  let control1 = element.querySelector('.js-button-faq');
  control1.addEventListener('click', function () {
    this.closest('.js-faq').classList.toggle('open');
  });
});

// Навигация
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav__menu');
const body = document.body;

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navMenu.classList.toggle('active');
  body.classList.toggle('noscroll');
});
