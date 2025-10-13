// Inicializa a biblioteca AOS para as animações de rolagem
AOS.init({
  once: true, // Animações só acontecem na primeira vez que o elemento é visto
  duration: 1000, // Duração da animação em milissegundos
});

// Ano no footer
document.getElementById("current-year").textContent = new Date().getFullYear();

// Menu mobile
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Fechar menu mobile ao clicar em um link
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});
