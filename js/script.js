// scripts.js mejorado
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarNav = document.querySelector("#navbarNav");

  navbarToggler.addEventListener("click", function () {
    navbarNav.classList.toggle("show");
  });

  // Close mobile menu when clicking on a nav link
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarNav.classList.contains("show")) {
        navbarNav.classList.remove("show");
      }
    });
  });

  // Header scroll effect
  const header = document.querySelector("header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
      header.style.backdropFilter = "blur(10px)";
      header.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
    } else {
      header.classList.remove("scrolled");
      header.style.backdropFilter = "none";
      header.style.backgroundColor = "rgba(255, 255, 255, 1)";
    }
  });

  // Initialize carousel with interval and pause on hover
  const myCarousel = new bootstrap.Carousel(
    document.getElementById("mainCarousel"),
    {
      interval: 5000,
      pause: "hover",
      wrap: true,
    }
  );

  // Scroll to section when clicking down arrow
  const scrollDown = document.querySelector(".scroll-down");
  if (scrollDown) {
    scrollDown.addEventListener("click", function () {
      window.scrollTo({
        top: document.querySelector(".featured-fruits").offsetTop - 80,
        behavior: "smooth",
      });
    });
  }

  // Animate elements on scroll with Intersection Observer
  const animateElements = document.querySelectorAll(".animate-on-scroll");

  // Configuración global de ScrollReveal
  ScrollReveal({ reset: false });

  // Animaciones para cada sección
  ScrollReveal().reveal(".seccion-imagen-fondo h1", {
    delay: 300,
    duration: 1000,
    distance: "50px",
    origin: "top",
    easing: "ease-out",
  });

  ScrollReveal().reveal(".contenedor-video", {
    delay: 500,
    duration: 1200,
    scale: 0.85,
    opacity: 0,
    easing: "cubic-bezier(0.6, 0.2, 0.1, 1)",
  });

  ScrollReveal().reveal(".seccion-blanca", {
    delay: 200,
    duration: 800,
    distance: "40px",
    origin: "bottom",
    easing: "ease-out",
  });

  ScrollReveal().reveal(".featured-fruits h2", {
    delay: 200,
    duration: 800,
    distance: "30px",
    origin: "top",
  });

  ScrollReveal().reveal(".fruit-card", {
    delay: 300,
    duration: 1000,
    distance: "50px",
    origin: "bottom",
    interval: 200,
  });

  ScrollReveal().reveal(".image-carousel", {
    delay: 200,
    duration: 1000,
    distance: "50px",
    origin: "bottom",
  });

  ScrollReveal().reveal(".photo-gallery h2", {
    delay: 200,
    duration: 800,
    distance: "30px",
    origin: "top",
  });

  ScrollReveal().reveal(".gallery-item", {
    delay: 300,
    duration: 800,
    distance: "40px",
    origin: "bottom",
    interval: 100,
  });

  ScrollReveal().reveal(".benefits h2", {
    delay: 200,
    duration: 800,
    distance: "30px",
    origin: "top",
  });

  ScrollReveal().reveal(".benefit-card", {
    delay: 300,
    duration: 800,
    distance: "40px",
    origin: "bottom",
    interval: 150,
  });

  ScrollReveal().reveal(".destinations h2", {
    delay: 200,
    duration: 800,
    distance: "30px",
    origin: "top",
  });

  ScrollReveal().reveal(".destination-list, .map-container", {
    delay: 300,
    duration: 1000,
    distance: "50px",
    origin: "bottom",
    interval: 200,
  });

  ScrollReveal().reveal(".cta-contact", {
    delay: 200,
    duration: 1000,
    distance: "50px",
    origin: "bottom",
    beforeReveal: function (el) {
      el.style.opacity = 1;
    },
  });
  animateElements.forEach((element) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate__animated", "animate__fadeIn");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const titulos = document.querySelectorAll(".titulo-fruta");

  titulos.forEach((titulo) => {
    titulo.addEventListener("mouseenter", (e) => {
      const texto = e.target.getAttribute("data-detalles");

      const tooltip = document.createElement("div");
      tooltip.className = "tooltip-detalles";
      tooltip.textContent = texto;

      document.body.appendChild(tooltip);

      const rect = e.target.getBoundingClientRect();
      tooltip.style.top = `${rect.top + window.scrollY - 50}px`;
      tooltip.style.left = `${
        rect.left + rect.width / 2 - tooltip.offsetWidth / 2
      }px`;
      tooltip.style.display = "block";
    });

    titulo.addEventListener("mouseleave", () => {
      const tooltip = document.querySelector(".tooltip-detalles");
      if (tooltip) tooltip.remove();
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const imagenesFruta = document.querySelectorAll(".img-fruta");

  // Añadir animación aleatoria a cada imagen
  imagenesFruta.forEach((img, index) => {
    // Configuración única para cada imagen
    const duration = 3 + Math.random() * 2; // Entre 3 y 5 segundos
    const delay = index * 0.3; // Pequeño desfase entre imágenes
    const floatHeight = 10 + Math.random() * 10; // Entre 10 y 20px

    img.style.animation = `flotar ${duration}s ease-in-out ${delay}s infinite`;

    // Insertamos la keyframe dinámicamente
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes flotar {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-${floatHeight}px) rotate(${
      index % 2 ? 2 : -2
    }deg); }
      }
    `;
    document.head.appendChild(style);

    // Efecto hover
    img.addEventListener("mouseenter", function () {
      this.style.animation = "none";
      this.style.transform = "scale(1.1)";
    });

    img.addEventListener("mouseleave", function () {
      this.style.animation = `flotar ${duration}s ease-in-out ${delay}s infinite`;
      this.style.transform = "";
    });
  });
});
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    document.querySelector(".navbar").classList.add("navbar-scrolled");
    // Elimina cualquier clase que añada transparencia
  } else {
    document.querySelector(".navbar").classList.remove("navbar-scrolled");
  }
});

/*botones es y en */
document.querySelectorAll(".dropdown-item").forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    const lang = this.getAttribute("data-lang");
    const dropdownBtn = document.querySelector(".language-dropdown");

    if (lang === "es") {
      dropdownBtn.innerHTML = `<img src="img/colombia.png" class="flag-icon"> ES`;
    } else if (lang === "en") {
      dropdownBtn.innerHTML = `<img src="img/euu.png" class="flag-icon"> EN`;
    }

    // Aquí puedes añadir lógica para cambiar el idioma
    console.log("Idioma cambiado a:", lang);
  });
});

/* nosotros.html*/
/*carrusel*/

document.addEventListener("DOMContentLoaded", function () {
  var myCarousel = new bootstrap.Carousel(
    document.getElementById("historiaCarousel"),
    {
      interval: 5000, // Cambia cada 5 segundos
      pause: "hover", // Pausa al pasar el mouse
    }
  );
});
/*numeros*/
document.addEventListener("DOMContentLoaded", function () {
  const animateValue = (element, start, end, duration, suffix = "") => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);

      if (suffix === "+" && value === end) {
        element.textContent = value + "+";
      } else if (suffix === "+" && value < end) {
        element.textContent = value + "+";
      } else if (element.textContent.startsWith("+")) {
        element.textContent = "+" + value;
      } else {
        element.textContent = value;
      }

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  const startCounting = () => {
    document.querySelectorAll(".stat-number").forEach((el) => {
      const target = parseInt(el.getAttribute("data-target"));
      const hasPlus = el.textContent.includes("+");
      const isPrefixedPlus = el.textContent.startsWith("+");

      if (hasPlus || isPrefixedPlus) {
        animateValue(el, 0, target, 2000, "+");
      } else {
        animateValue(el, 0, target, 2000);
      }
    });
  };

  // Activar la animación cuando el elemento sea visible
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounting();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  const statsSection =
    document.querySelector(".stats-container") ||
    document.querySelector(".d-flex.align-items-center.mt-4");
  if (statsSection) {
    observer.observe(statsSection);
  }
});
