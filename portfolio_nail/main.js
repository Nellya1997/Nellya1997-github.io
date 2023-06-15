const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 50,
    centeredSlides:true,
    spaceBetween: 50,
    controller: {
      inverse: true,
    },
      pagination: {
          el: ".swiper-pagination"
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
      }
  });

  const swiperPlay = new Swiper(".swiper--play", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 50,
      centeredSlides:true,
    controller: {
      inverse: true,
    },
    spaceBetween: 50,
    autoplay: {
      delay: 5000,
    },
      pagination: {
          el: ".swiper-pagination"
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
      }
  });


  const linkOffer = document.getElementById('link')

  linkOffer.addEventListener('click', (event) => {
    event.preventDefault();
    alert('Здесь будет форма для оплаты картой')
  })

  // карта

  ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.814781, 49.098751],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 15
        });

        var myGeoObject = new ymaps.Placemark([55.814781, 49.098751], {}, {
            iconLayout: 'default#image',
            iconImageHref: './img/yandex.svg',
            // iconImageSize: [28, 40],
            // iconImageOffset: [0, 0],
            fill: '#CCB26E',
        });

        // Размещение геообъекта на карте.
        myMap.geoObjects.add(myGeoObject);
    }

let map = document.querySelector('.Map');
map.style.width = '100%';

