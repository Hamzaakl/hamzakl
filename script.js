// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "rgba(5, 5, 5, 0.95)";
  } else {
    navbar.style.backgroundColor = "var(--darker-bg)";
  }
});

// Form submission handling
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    // Here you would typically send the data to a server
    console.log("Form submitted:", data);

    // Show success message
    alert("Mesajınız başarıyla gönderildi!");
    this.reset();
  });
}

// Add typing effect to hero section
const heroText = document.querySelector(".hero h1");
if (heroText) {
  const text = heroText.textContent;
  heroText.textContent = "";

  let i = 0;
  const typeWriter = () => {
    if (i < text.length) {
      heroText.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  };

  typeWriter();
}

// Add animation to project cards
const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});
