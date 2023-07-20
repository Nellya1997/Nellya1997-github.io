// перемещение блоков в первой секции

const widthMax = window.matchMedia('(min-width: 1024px)');
//   const widthMin = window.matchMedia('(max-width: 768px)');
const firstWrapper = document.querySelector('.first__about');
const firstAdvantagesWrapper = document.querySelector(
  '.first__advantages-moving'
);
const link = document.querySelector('.js-link');
// js-link

if (window.screen.width > 1023) {
  firstWrapper.append(firstAdvantagesWrapper);
  firstWrapper.append(link);
}

// Swiper client
const swiper = new Swiper('.swiper', {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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
      let accordion = this.closest('.js-accordion');
      accordion.classList.toggle('open');

      let button = this.querySelector('span');
      button.classList.toggle('rotate');
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

const app = () => {
  const form = document.querySelector('.submit__form');
  const checkBox = form.querySelector('input[type=checkbox]');
  const submitButton = form.querySelector('input[type=submit]');

  const isCheck = checkBox.checked;
  submitButton.disabled = !isCheck;
  submitButton.style.opacity = isCheck ? '1' : '0.3';

  checkBox.addEventListener('input', () => {
    const isCheck = checkBox.checked;
    submitButton.disabled = !isCheck;
    submitButton.style.opacity = isCheck ? '1' : '0.3';
    if (form.classList.contains('was-validated') && !isCheck) {
      if (!checkBox.classList.contains('no-valid-check')) {
        checkBox.classList.add('no-valid-check', 'is-invalid');
        checkBox.nextElementSibling.classList.add('no-valid-rules');
      }
    } else {
      if (checkBox.classList.contains('no-valid-check')) {
        checkBox.classList.remove('no-valid-check', 'is-invalid');
        checkBox.nextElementSibling.classList.remove('no-valid-rules');
      }
    }
});

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formElements = [...form.querySelectorAll('.form-control')];
    const formValues = formElements.reduce((acc, element) => {
      const { id, value } = element;
      acc[id] = value;
      return acc;
    }, {});

    form.classList.add('was-validated');

    try {
      await axios.post(routes.sendEmail, formValues);
      form.reset();
      form.textContent = 'Форма успешно отправлена!';
    } catch (e) {
      const isAlertErrorEnabled = form.querySelector('div[role=alert]');
      if (!isAlertErrorEnabled) {
        const alertError = document.createElement('div');
        alertError.classList.add('alert', 'alert-danger', 'mt-3');
        alertError.setAttribute('role', 'alert');
        alertError.textContent = 'Произошла ошибка при отправке формы';
        checkBox.parentElement.append(alertError);
      }
    }
  });
}

app();
