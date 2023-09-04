(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-chocoloved-open]'),
    closeModalBtn: document.querySelector('[data-chocoloved-close]'),
    modal: document.querySelector('[data-chocoloved]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('chocoloved-is-hidden');
  }
})();
