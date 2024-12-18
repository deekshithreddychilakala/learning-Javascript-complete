'use strict';

const modalEle = document.querySelector('.modal');
const overlayEle = document.querySelector('.overlay');
const btnCloseModalEle = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
    modalEle.classList.remove('hidden');
    overlayEle.classList.remove('hidden');
}
const closeModal = function () {
    modalEle.classList.add('hidden');
    overlayEle.classList.add('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModalEle.addEventListener('click', closeModal);

overlayEle.addEventListener('click', closeModal);

document.addEventListener('keydown', function ($event) {
    if ($event.key.toLowerCase() === 'escape' && !modalEle.classList.contains('hidden')) {
        closeModal();
    }
});
