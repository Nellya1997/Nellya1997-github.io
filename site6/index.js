document.addEventListener('DOMContentLoaded', function() {
    const range = document.querySelector('.js-range');
    const rangeNumbers = document.querySelector('.decoration__number');
    const rangeNumbersB = document.querySelector('.decoration__number b');

    range.addEventListener('input', function () {
        rangeNumbersB.textContent = range.value + '%';
    });

    let burger = document.querySelector('.burger');
    let navigation = document.querySelector('.navigation');
    burger.addEventListener('click', function() {
        navigation.classList.toggle('active');
        burger.classList.toggle('active');
    });
});

const element = document.querySelector('.js-choice');
const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
});
