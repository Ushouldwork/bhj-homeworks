const reveals = Array.from(document.querySelectorAll('.reveal'));

function revealOnScroll() {
  reveals.forEach(reveal => {
    const { top, bottom } = reveal.getBoundingClientRect();

    if (top < window.innerHeight && bottom > 0) {
      reveal.classList.add('reveal_active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();