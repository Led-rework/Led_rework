const searchInput = document.getElementById('searchInput');
const cards = [...document.querySelectorAll('.folder-card')];
const emptyState = document.getElementById('emptyState');

if (searchInput) {
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    let visible = 0;

    cards.forEach(card => {
      const name = (card.dataset.name || '').toLowerCase();
      const show = name.includes(q);
      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });

    if (emptyState) emptyState.hidden = visible !== 0;
  });
}
