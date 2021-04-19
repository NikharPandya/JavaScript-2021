'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// btnsOpenModal.addEventListener('click', function () {
//   modal.style.display = 'block';
// });

for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(
    btnsOpenModal[i].addEventListener('click', function () {
      //   modal.style.display = 'block';
      modal.classList.remove('hidden');
      overlay.classList.remove('hidden');
    })
  );
}

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});
