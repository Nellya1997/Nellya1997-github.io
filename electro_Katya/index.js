// burger

let burger = document.querySelector('.burger');
let navigation = document.querySelector('.navigation');
let body = document.querySelector('body');

burger.addEventListener('click', () => {
  navigation.classList.toggle('open');
  burger.classList.toggle('open');
  body.classList.toggle('stop-scroll');
});

// при нажатии на бургер body получает stop-scroll: при нажатии на ссылку
// будем убирать .scroll-stop у body и также убирать менюшку
let anchors = Array.from(document.querySelectorAll('.navigation__item'));

(function() {
    anchors.forEach((el) => {
        el.addEventListener('click', function() {
            console.log('body class removed');
            body.classList.remove('stop-scroll');
            navigation.classList.toggle('open');
            burger.classList.toggle('open');
        })
    })
})();

//FAQ - accorderon
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
      panel.style.paddingTop = '0' + 'px';
      panel.style.paddingBottom = '0' + 'px';
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.paddingTop = '10' + 'px';
      panel.style.paddingBottom = '10' + 'px';
    }
  });
}


//swiper

// пока напишу как ублюдоид: в будущем надо создавать один класс 
//свайпер - на него одинаковая навигация, далее swiper-standard 
//для обчного свайпера и swiper-coverflow - для создания этого 
//чудесного эффекта


const swiper1 = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 50,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


const aboutMeSlider = new Swiper ('.about__swiper', {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 20000
  },
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 40,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

