// Khi tải xong thì fade-in trang
window.addEventListener("load", () => {
  document.body.classList.add("page-loaded");
});

// Hiệu ứng xuất hiện từng phần khi cuộn
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
