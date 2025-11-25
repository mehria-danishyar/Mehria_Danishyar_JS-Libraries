// ===== Initialize AOS =====
AOS.init({ duration: 1000, once: true });

// ===== Typed.js Hero Text =====
new Typed(".typed-text", {
  strings: ["Explore the World with Us"],
  typeSpeed: 80,
  showCursor: false,
});

// ===== Animated Billboard Effect (alive motion) =====
function animateCards() {
  const cards = document.querySelectorAll(".destination-card");
  cards.forEach((card, i) => {
    const delay = i * 200; // small stagger for each card
    setTimeout(() => {
      card.animate(
        [
          { transform: "translateY(0px) scale(1)", opacity: 1 },
          { transform: "translateY(-10px) scale(1.05)", opacity: 0.95 },
          { transform: "translateY(0px) scale(1)", opacity: 1 }
        ],
        {
          duration: 4000,
          iterations: Infinity,
          easing: "ease-in-out",
          delay: delay
        }
      );
    }, delay);
  });
}

animateCards();

// ===== Gallery Reveal =====
ScrollReveal().reveal(".gallery-item", {
  origin: "bottom",
  distance: "60px",
  duration: 1000,
  interval: 150,
  easing: "ease-in-out",
});

