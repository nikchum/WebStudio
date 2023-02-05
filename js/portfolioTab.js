(() => {
  const filterRef = document.querySelector('.filter');
  const cardsRef = document.querySelectorAll('.card__item');

  filterRef.addEventListener('click', filterCard);

  function filterCard(e) {
    const category = e.target.dataset.name;

    if (!category) {
      return;
    }

    if (category === 'all') {
      cardsRef.forEach(el => {
        el.classList.remove('hidden-card');
      });
      return;
    }

    cardsRef.forEach(el => {
      if (category === el.dataset.name) {
        el.classList.remove('hidden-card');
        return;
      }

      el.classList.add('hidden-card');
    });
  }
})();
