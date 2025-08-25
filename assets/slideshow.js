document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slideshow__slide");
  let currentIndex = 0;

  function updateSlides(newIndex) {
    slides[currentIndex].classList.remove("is-active");
    slides[currentIndex].setAttribute("tabindex", "-1");

    currentIndex = newIndex;

    slides[currentIndex].classList.add("is-active");
    slides[currentIndex].setAttribute("tabindex", "0");
    slides[currentIndex].focus();
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      let next = (currentIndex + 1) % slides.length;
      updateSlides(next);
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      let prev = (currentIndex - 1 + slides.length) % slides.length;
      updateSlides(prev);
    }
  });
});
