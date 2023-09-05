// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-chocoloved-open]'),
//     closeModalBtn: document.querySelector('[data-chocoloved-close]'),
//     modal: document.querySelector('[data-chocoloved]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('chocoloved-is-hidden');
//   }
// })();

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-chocoloved-open]'),
//     closeModalBtn: document.querySelector('[data-chocoloved-close]'),
//     modal: document.querySelector('[data-chocoloved]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('chocoloved-backdrop'); // Use refs.modal, not refs.chocoloved
//   }
// })();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-chocoloved-open]'),
    closeModalBtn: document.querySelector('[data-chocoloved-close]'),
    modal: document.querySelector('[data-chocoloved]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('chocoloved-is-hidden'); // Use refs.modal and the correct class name
  }
})();
