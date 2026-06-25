/* ===================== CERTIFICADOS ===================== */
function showCert(id) {
    // Ocultar todos los certificados
    const cards = document.querySelectorAll('.cert-card');
    cards.forEach(card => {
        card.classList.remove('active');

        if (card.getAttribute('data-id') == id) {
            card.classList.add('active');
        }
    });

    // Actualizar los puntos de la línea de tiempo
    const dots = document.querySelectorAll('.timeline-dot');
    dots.forEach(dot => dot.classList.remove('active'));

    if (dots[id - 1]) {
        dots[id - 1].classList.add('active');
    }
}

/* ===================== MENU MOBILE ===================== */
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menuButton");
    const nav = document.getElementById("nav");
    const portfolioSection = document.getElementById("portfolio");
    const portfolioToggle = document.getElementById("portfolioToggle");
    const portfolioCards = portfolioSection
        ? Array.from(portfolioSection.querySelectorAll(".portfolio-card"))
        : [];

    if (menuButton && nav) {
        menuButton.addEventListener("click", () => {
            nav.classList.toggle("open");
        });
    }

    if (portfolioSection && portfolioToggle && portfolioCards.length > 3) {
        portfolioCards.slice(3).forEach((card) => card.classList.add("is-hidden"));

        portfolioToggle.addEventListener("click", () => {
            const expanded = portfolioSection.classList.toggle("expanded");
            portfolioToggle.setAttribute("aria-expanded", String(expanded));
            portfolioToggle.textContent = expanded ? "Ver menos proyectos" : "Ver más proyectos";
        });
    } else if (portfolioToggle) {
        portfolioToggle.style.display = "none";
    }
});
