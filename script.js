// Image Slider
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);
setInterval(nextSlide, 4000); // Auto-advance every 4 seconds

// WhatsApp Contact Button
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const url = "https://wa.me/254741259239?text=Hello%20Em%20Kioi%20Robots%2C%20I%20need%20assistance.";
  window.open(url, "_blank");
});