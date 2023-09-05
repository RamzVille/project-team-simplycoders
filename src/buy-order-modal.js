(() => {
  const refs = {
    openBuyBtn: document.querySelector("[data-buy-open]"),
    closeBuyBtn: document.querySelector("[data-buy-close]"),
    buy: document.querySelector("[data-buy]"),
  };

  refs.openBuyBtn.addEventListener("click", toggleModal);
  refs.closeBuyBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.buy.classList.toggle("is-hidden");
  }

  
})();
