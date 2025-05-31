
  function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    for (const el of reveals) {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 100; // quanto antes do elemento aparecer

      if (elementTop < windowHeight - elementVisible) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    }
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('DOMContentLoaded', revealOnScroll);