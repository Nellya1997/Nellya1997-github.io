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

const swiper = new Swiper(".swiper--work", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    // centeredSlides:true,
    spaceBetween: 50,
    // controller: {
    //   inverse: true,
    // },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2"
    }
});

const swiper1 = new Swiper(".swiper--masters", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    // centeredSlides:true,
    spaceBetween: 50,
    // controller: {
    //   inverse: true,
    // },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1"
    }
});
