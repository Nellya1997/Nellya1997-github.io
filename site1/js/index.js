// инпут поиска

let search = document.querySelector('.js-search');
let input = document.querySelector('.js-input');
let close = document.querySelector('.js-close-input');


search.addEventListener('click',
function() {
    search.classList.add('active');
    input.classList.add('active');
    close.classList.add('active');
  }
)

// let close = document.querySelector('.js-close-input');

close.addEventListener('click',
function() {
    search.classList.remove('active');
    input.classList.remove('active');
    close.classList.remove('active');
  }
)





// бургер меню

let burger = document.querySelector('.burger');

let header = document.querySelector('.header');

burger.addEventListener('click',
function() {
    header.classList.toggle('active');
    burger.classList.toggle('active');
    document.body.classList.toggle('stop-scroll');
    // document.html.classList.toggle('stop-scroll');
  }
)



let swiper = new Swiper('.js-swiper-superskid', {
    // modules: [ Navigation, Pagination ],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      // slidesPerView: auto,
      // loop: true,
});

// подключение свайпера в секции товара SALE

let swiperSaleProduct = document.querySelectorAll('.js-sale-product');

swiperSaleProduct.forEach(function (product){
    let swipers = new Swiper(product, {
      effect: 'fade',

      fadeEffect: {
        crossFade: true
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
});


// подключение свайпера коллекции товара в секции SALE

let swiperSaleCollection = document.querySelectorAll('.js-sale-collection');

swiperSaleCollection.forEach(function (collection){
    let swipers = new Swiper(collection, {
      navigation: {
              nextEl: '.swiper-button-next--sale',
              prevEl: '.swiper-button-prev--sale',
            },
            speed: 1000,
    })
    });

// табы в секции SALE

document.addEventListener('DOMContentLoaded', () => {
  let tabs = document.querySelector('.js-wrapper-tabs');
  let tabsBtn = document.querySelectorAll('.js-tabs');
  let tabsContent = document.querySelectorAll('.js-tabs-content');

  if (tabs) {
      tabs.addEventListener('click', (e) => {
          if (e.target.classList.contains('js-tabs')) {
              let tabsPath = e.target.dataset.tabsPath;
              tabsHandler(tabsPath);
          }
      });
  }

  let tabsHandler = (path) => {
      tabsBtn.forEach(el => {el.classList.remove('active')});
      document.querySelector(`[data-tabs-path="${path}"]`).classList.add('active');


      tabsContent.forEach(el => {el.classList.remove('active')});
      document.querySelector(`[data-tabs-target="${path}"]`).classList.add('active');
  };
});






// подключение селектов в секции product-day

let elements = document.querySelectorAll('.js-choice');

elements.forEach(function (select) {
    let choices = new Choices(select, {
      searchEnabled: false,
      itemSelectText: '',
    });
});




//
// подключение свайпера коллекции товара в секции advertisement

let swiperadvertisement = new Swiper('.js-advertisement-swiper', {
  slidesPerView: 3,
});



// подключение свайпера в секции product-day

let swiperProductDay = new Swiper('.js-swiper-product-day', {
  // slidesPerView: 3,
    navigation: {
      nextEl: '.swiper-button-next-product-day',
      prevEl: '.swiper-button-prev--product-day',
    },
});

// подключение свайпера в карточке товаров

let swiperddd = new Swiper('.js-fff', {
    navigation: {
      nextEl: '.swiper-button-next--product',
      prevEl: '.swiper-button-prev--product',
    },
    // autoplay: {
    //   delay: 2500,
    // }
});

// таймер

const deadline = '2023-06-20';

function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
        hours = Math.floor((t / (1000 * 60 * 60) % 24)),
        minutes = Math.floor((t / 1000 / 60) % 60),
        seconds = Math.floor((t / 1000) % 60);

    return {
        'total': t,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
    };
}

function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            const t = getTimeRemaining(endtime);

            // days.innerHTML = t.days;
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
}
setClock('.js-timer', deadline);


const marker = document.querySelector('.js-marker');
const markerContent = document.querySelector('.js-marker-content');

marker.addEventListener('mouseenter', ()=> {
  markerContent.classList.add('open');
})

marker.addEventListener('mouseout', ()=> {
  markerContent.classList.remove('open');
})

// mouseout
