// Esperar a que cargue todo el contenido
document.addEventListener("DOMContentLoaded", () => {
  // Animación del banner
  const bannerText = document.querySelector(".banner h2");
  bannerText.style.opacity = "0";
  bannerText.style.transform = "translateY(-30px)";
  setTimeout(() => {
    bannerText.style.transition = "all 1s ease";
    bannerText.style.opacity = "1";
    bannerText.style.transform = "translateY(0)";
  }, 300);

  // Validación básica del formulario de contacto
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.querySelector("input[type=text]").value.trim();
      const email = form.querySelector("input[type=email]").value.trim();
      const message = form.querySelector("textarea").value.trim();

      if (!name || !email || !message) {
        alert("Por favor, completa todos los campos antes de enviar.");
        return;
      }

      alert("¡Gracias por tu mensaje, " + name + "! Te responderemos pronto 😊");
      form.reset();
    });
  }

  // Efecto hover dinámico en las cards de productos
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      card.style.transform = "scale(1.05)";
      card.style.transition = "transform 0.3s ease";
    });
    card.addEventListener("mouseout", () => {
      card.style.transform = "scale(1)";
    });
  });
});
