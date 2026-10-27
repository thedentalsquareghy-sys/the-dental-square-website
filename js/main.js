// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('main-nav');
hamburger.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});

// FAQ accordion
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  q.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(openItem => {
      if (openItem !== item) openItem.classList.remove('open');
    });
    item.classList.toggle('open', !isOpen);
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
