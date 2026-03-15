const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.lesson-card');
const searchInput = document.querySelector('.search-wrap input');

let activeFilter = 'todos';

function applyFilters() {
    const query = searchInput.value.toLowerCase().trim();

    cards.forEach(card => {
        const category = card.dataset.category;
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const desc = card.querySelector('.card-desc').textContent.toLowerCase();

        const matchesFilter = activeFilter === 'todos' || category === activeFilter;
        const matchesSearch = query === '' || title.includes(query) || desc.includes(query);

        card.style.display = (matchesFilter && matchesSearch) ? '' : 'none';
    });
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeFilter = btn.dataset.filter;
        applyFilters();
    });
});

searchInput.addEventListener('input', applyFilters);