// script.js
document.addEventListener("DOMContentLoaded", () => {
  // Preloader
  window.addEventListener("load", () => {
    document.getElementById("preloader").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("preloader").style.display = "none";
    }, 500);
  });

  // Mobile Menu
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
      if (nav.classList.contains("active")) {
        nav.classList.remove("active");
      }
    });
  });

  // Testimonial Slider
  let slideIndex = 0;
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  function showSlide(n) {
    slides.forEach((s, i) => {
      s.classList.toggle("active", i === n);
      dots[i].classList.toggle("active", i === n);
    });
  }

  window.currentSlide = (n) => {
    slideIndex = n;
    showSlide(slideIndex);
  };

  setInterval(() => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }, 5000);

  // Initial show
  showSlide(0);

  // Tilt Effect (Vanilla Tilt)
  document.querySelectorAll(".tilt").forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale(1)`;
    });
  });
});