// ========================================
// original js code (vanilla js♪)
// ========================================


// page-fadeup
// page-fadeup
// page-fadeup
const fadeElements = document.querySelectorAll(".fade-up");

// responsive用の変数
const isMobile = window.innerWidth <= 769;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: isMobile ? 0.15 : 0.7
  }
);

fadeElements.forEach((element) => {
  observer.observe(element);
});



// select-color-theme
// select-color-theme
// select-color-theme
const themeBtn = document.querySelectorAll('[data-theme-value]');

themeBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedTheme = button.dataset.themeValue;
    document.documentElement.dataset.theme = selectedTheme;
  });
});
