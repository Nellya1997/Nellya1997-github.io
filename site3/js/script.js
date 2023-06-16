
const swiper = new Swiper('.swiper__decisions', {
    autoplay: {
        delay: 3000,
    },
    speed: 400,
    spaceBetween: 100,
    direction: 'horizontal',
    grabCursor: true,
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
  });


document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.questions__item');
    accordions.forEach(element => {
        element.addEventListener('click', (e) => {
            const self = e.currentTarget;
            const control = self.querySelector('.questions__info-button');
            const content = self.querySelector('.questions__accordion-content');

            self.classList.toggle('open');

            if (self.classList.contains('open')) {
                control.setAttribute('aria-expanded', true);
                control.setAttribute('aria-hidden', false);
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                control.setAttribute('aria-expanded', false);
                control.setAttribute('aria-hidden', true);
                content .style.maxHeight = null;
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelector('.work__big-wrappet-tabs');
    const tabsBtn = document.querySelectorAll('.work__tubs');
    const tabsContent = document.querySelectorAll('.work__tabs-content');

    if (tabs) {
        tabs.addEventListener('click', (e) => {
            if (e.target.classList.contains('work__tubs')) {
                const tabsPath = e.target.dataset.tabsPath;
                tabsHandler(tabsPath);
            }
        });
    }

    const tabsHandler = (path) => {
        tabsBtn.forEach(el => {el.classList.remove('work__tabs-content--active')});
        document.querySelector(`[data-tabs-path="${path}"]`).classList.add('work__tabs-content--active');


        tabsContent.forEach(el => {el.classList.remove('work__tabs-content--active')});
        document.querySelector(`[data-tabs-target="${path}"]`).classList.add('work__tabs-content--active');
    };
});



    let burger = document.querySelector('.burger');
    let menu = document.querySelector('.header__nav');
    let menuLinks = document.querySelectorAll('.header__link');
    let container = document.querySelectorAll('.container');

    burger.addEventListener('click',
    function() {
        burger.classList.toggle('burger--active');

        menu.classList.toggle('header__nav--active');

        // container.classList.toggle('stop-scroll');

        document.body.classList.toggle('stop-scroll');
    })

    menuLinks.forEach(function(el){
        el.addEventListener('click', function() {
            burger.classList.remove('burger--active');

            menu.classList.remove('header__nav--active');

            document.body.classList.remove('stop-scroll');
        })
    })


    let btnForm = document.querySelector('.header__button-search');
    let form = document.querySelector('.header__form');
    let formClose = document.querySelector('.header__form-close');
    let input = document.querySelector('.header__input');

    btnForm.addEventListener('click',
    function() {
        form.classList.add('header__form--active');
        btnForm.classList.add('header__button-search--active');
    })

    formClose.addEventListener('click',
    function() {
            form.classList.remove('header__form--active');
            btnForm.classList.remove('header__button-search--active');
        })

    document.body.addEventListener('click',
    function(event) {
        if((event.target !== input) && (event.target !== btnForm)) {
            form.classList.remove('header__form--active');
            btnForm.classList.remove('header__button-search--active');
        }
    })



let check = document.querySelector('.js-label');
let span = document.querySelector('.js-span');

check.addEventListener('click',
function() {
    span.classList.toggle('open');
})