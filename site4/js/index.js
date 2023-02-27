// форма поиска

let form = document.querySelector('.form--search');
let search = document.querySelector('.js-search');

search.addEventListener('click',
function() {
    form.classList.toggle('open');
}
)

// вырывание 2 списка навигации в первый в хедере

let destination = document.querySelector('.navigation--wrapper-mobile');
let bottom = document.querySelector('.navigation--header-bottom');
let nazad = document.querySelector('.header__wrapper-bottom');

if (document.documentElement.clientWidth < 567) {
    destination.append(bottom);
} else {
    nazad.append(bottom);
}

// destination.append(bottom);

// БУРГЕР

let burger = document.querySelector('.js-burger');
let navigation = document.querySelector('.js-navigation');

burger.addEventListener('click',
function() {
    navigation.classList.toggle('active');
}
)


// ПОПАП

let popupButton = document.querySelector('.js-login');
let popup = document.querySelector('.js-popup');
let closePopup = document.querySelector('.js-close-popup');

popupButton.addEventListener('click',
function() {
    popup.classList.add('open');
})

closePopup.addEventListener('click',
function() {
    popup.classList.remove('open');
})






// открытие формы в эфире


let etherMenu = document.querySelector('.js-ether-menu');
let buttonEther = document.querySelectorAll('.button--ether');
let innerEther1 = document.querySelectorAll('.header__ether-wrapper');

etherMenu.addEventListener('click',
function() {
    etherMenu.classList.toggle('active');
    buttonEther.forEach(el=>{ el.classList.toggle('active'); })
    innerEther1.forEach(el=>{ el.classList.toggle('active'); })
})


// пауза в секции подкасты

let play = document.querySelectorAll('.js-play')
 play.forEach(item =>{
        item.addEventListener('click', (e) =>{

            play.forEach(el=>{ el.classList.remove('play'); });
            item.classList.add('play');

            let isMainPresent = item.classList.contains("play");

            if (isMainPresent){
                console.log("Found the class name");

                item.addEventListener('click', (el) =>{
                    item.classList.remove('play');
                })

            }else{
                console.log("Not found the class name");
                item.classList.add('play');
            }
    })
})


// добавить класс активности радиокнопкам

let label = document.querySelectorAll('.js-label');

label.forEach(item =>{
    item.addEventListener('click',(e) =>{

        label.forEach(el=>{ el.classList.remove('active'); })
        item.classList.add('active');
    })
})



// // свайпер для кнопок

// let swiper = Swiper;
// let initialization = false;

// function swiperslide() {
//     let mobile = window.matchMedia("(min-width: 0px) and (max-width: 767px)");

//     if (mobile.matches) {
//         if (!initialization) {
//             initialization = true,
//             swiper = new Swiper('.js-swiper'), {
//                 slidesPerView: 'auto',
//                 loop: true,

//             }
//         }
//         else if (initialization){
//             swiper.destroy;
//             initialization = false;
//         }
//     }
// }

// swiperslide();




let swiperAboutus = new Swiper('.js-about-us-swiper', {
    // pagination: {
    //     el: '.swiper-pagination',
    //     type: 'fraction',
    // },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // pagination: {
    //     el: '.swiper-pagination',
    //     type: 'fraction',
    // },
    breakpoints: {
        320: {
            slidesPerView: 2.5,
        },
        768: {
            slidesPerView: 2,
        },
        1440: {
            slidesPerView: 4,
            spaceBetween: 32,
        },
    }
  });



// СЕЛЕКТ

let element = document.querySelector('.js-choice');
let choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
});


// валидия в секции about

new JustValidate('.js-form-about', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 15,
        },
        mail: {
            required: true,
            email: true
        }
    },
    messages: {
        name: {
            required: 'Вы не ввели имя',
            minLength: 'Минимальное количество символов 2',
            maxLength: 'Максимальное количество символов 15'
        },
        mail: {
          required: 'Вы не ввели почту',
          email: 'Введите корректный email'
        }
    }
});


// валидация в попап

// js-form-popup

new JustValidate('.js-form-popup', {
    rules: {
        login: {
            required: true,
            minLength: 2,
            maxLength: 15,
        },
        password: {
            required: true,
            // email: true
        }
    },
    messages: {
        login: {
            required: 'Вы не ввели логин',
            minLength: 'Минимальное количество символов 2',
            // maxLength: 'Максимальное количество символов 15'
        },
        password: {
          required: 'Вы не ввели пароль',
        //   email: 'Введите корректный пароль'
        }
    }
});


// аккордионы в секции guests

document.addEventListener('DOMContentLoaded', () => {
    let accordions = document.querySelectorAll('.js-accordion');
    accordions.forEach(element => {
        let control = element.querySelector('.button--accordion');
        control.addEventListener('click', function () {
            this.closest('.js-accordion').classList.toggle('open');
        })
    });
});

// табы в секции quests


document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelector('.js-tabs-wrapper');
    const tabsBtn = document.querySelectorAll('.js-tabs');
    const tabsContent = document.querySelectorAll('.js-tabs-content');

    if (tabs) {
        tabs.addEventListener('click', (e) => {
            if (e.target.classList.contains('js-tabs')) {
                const tabsPath = e.target.dataset.tabsPath;
                tabsHandler(tabsPath);
            }
        });
    }

    const tabsHandler = (path) => {
        tabsBtn.forEach(el => {el.classList.remove('active')});
        document.querySelector(`[data-tabs-path="${path}"]`).classList.add('active');


        tabsContent.forEach(el => {el.classList.remove('active')});
        document.querySelector(`[data-tabs-target="${path}"]`).classList.add('active');
    };
});



// подключение свайпера в секции playlists

// js-swiper-playlists

let swiperPlaylists = new Swiper('.js-swiper-playlists', {

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
});