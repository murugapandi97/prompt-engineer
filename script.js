// Highlight active nav link on scroll
window.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section, header');
  const navLinks = document.querySelectorAll('.nav-links a');

  function onScroll() {
    let scrollPos = window.scrollY + 100;
    sections.forEach((section) => {
      if (section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href').replace('#', '') === section.id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', onScroll);
});
