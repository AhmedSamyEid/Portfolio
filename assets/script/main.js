
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');


  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.dataset.filter;

      projectCards.forEach(card => {
        if (filter === 'all') {
          card.classList.remove('hidden');
        } else {
          card.classList.toggle('hidden', !card.classList.contains(filter));
        }
      });
    });
  });

  
  showMoreBtn.addEventListener('click', () => {
    extraCards.forEach(card => card.classList.remove('hidden'));
    showMoreBtn.style.display = 'none';
  });

