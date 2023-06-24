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
