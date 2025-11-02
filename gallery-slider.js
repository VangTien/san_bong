document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.gallery-images img');
  const dots = document.querySelectorAll('.gallery-dots span');
  if (slides.length === 0 || dots.length === 0) return;

  let current = 0;

  function showSlide(index) {
    slides.forEach((img, i) => {
      img.classList.toggle('active', i === index);
      if (dots[i]) dots[i].classList.toggle('active', i === index);
    });
    current = index;
  }

  function nextSlide() {
    const next = (current + 1) % slides.length;
    showSlide(next);
  }

  let slideInterval = setInterval(nextSlide, 5000);

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      clearInterval(slideInterval);
      showSlide(i);
      slideInterval = setInterval(nextSlide, 5000);
    });
  });
});
