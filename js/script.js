// Menu Mobile
const btnMobile = document.getElementById('btn-mobile');
const nav = document.getElementById('nav');

function toggleMenu() {
  nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
      // Fecha o menu mobile após clicar
      nav.classList.remove('active');
    }
  });
});

// Animação ao rolar a página
window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  const header = document.querySelector('header');
  if (scrollPosition > 100) {
    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.boxShadow = 'none';
  }
});