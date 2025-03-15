// scripts.js
document.addEventListener('DOMContentLoaded', () => {
  // Burger Menu Toggle
  const burgerBtn = document.querySelector('.burger-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  // Scroll Behavior
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.sticky-header');
    const footerMenu = document.querySelector('.footer-menu');
    const currentScroll = window.scrollY;
    if (currentScroll > lastScroll && currentScroll > 50) {
      header.classList.add('hidden');
      footerMenu?.classList.add('hidden');
    } else if (currentScroll < lastScroll) {
      header.classList.remove('hidden');
      footerMenu?.classList.remove('hidden');
      header.classList.toggle('scrolled', currentScroll > 50);
    }
    lastScroll = currentScroll;
  });

  // Search Functionality
  const searchInput = document.querySelector('.search-input');
  const searchResults = document.querySelector('.search-results');
  if (searchInput && searchResults) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      searchResults.innerHTML = '';
      searchResults.classList.remove('active');
      if (query.length > 2) {
        const results = ['Post', 'Profile', 'Marketplace', 'Wallet'].filter(item => item.toLowerCase().includes(query));
        results.forEach(result => {
          const div = document.createElement('div');
          div.classList.add('search-result-item');
          div.textContent = result;
          div.addEventListener('click', () => window.location.href = `${result.toLowerCase()}.html`);
          searchResults.appendChild(div);
        });
        searchResults.classList.add('active');
      }
    });
  }
});
