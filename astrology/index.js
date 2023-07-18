// Swiper Slider
const swiper = new Swiper('.swiper', {
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Услуги
document.querySelectorAll('.services__item').forEach(function (itemWrapper) {
  const more = itemWrapper.querySelector('.desc__more');
  const btn = itemWrapper.querySelector('.services__item-link');
  const desc = itemWrapper.querySelector('.services__item-desc');

  btn.addEventListener('click', function () {
    // more.classList.toggle('none');
    btn.classList.toggle('active');
    more.classList.toggle('active');
    desc.classList.toggle('desc-open');
    btn.classList.toggle('close');

    if (more.classList.contains('active')) {
      btn.textContent = 'Подробнее';
      more.style.maxHeight = more.scrollHeight + 'px';
    } else {
      btn.textContent = 'Свернуть';
      more.style.maxHeight = 0;
    }
  });
});
