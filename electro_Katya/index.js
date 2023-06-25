// let swiperWork = document.querySelectorAll('.swiper');

// swiperWork.forEach(function (work){
//     let swipers = new Swiper(work, {
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         },
//         spaceBetween: 30,
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//     })
//     });

const swiper1 = new Swiper(".swiper", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    spaceBetween: 50,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

// burger

let burger = document.querySelector('.burger');
let navigation = document.querySelector('.navigation');
let body = document.querySelector('body');

burger.addEventListener('click', ()=> {
    navigation.classList.toggle('open');
    burger.classList.toggle('open');
    body.classList.toggle('stop-scroll');
})

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
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
