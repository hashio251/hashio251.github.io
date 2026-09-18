// ========================================
// original js code (vanilla js♪)
// ========================================
const fadeElements = document.querySelectorAll(".fade-up");

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
    threshold: .7
  }
);

fadeElements.forEach((element) => {
  observer.observe(element);
});
