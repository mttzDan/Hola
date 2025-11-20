const introContainer = document.getElementById("introContainer");
const questionContainer = document.getElementById("questionContainer");
const resultContainer = document.getElementById("resultContainer");

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// Tamaño inicial del botón "No"
let noSize = 22;

// Botón "No" que se escapa y se hace más pequeño
noBtn.addEventListener("mouseover", () => {
    // Reducir tamaño progresivamente (mínimo 10px)
    if (noSize > 10) {
        noSize -= 1;
        noBtn.style.fontSize = noSize + "px";
        noBtn.style.padding = "8px 15px";
    }

    const padding = 40;

    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const newX = Math.floor(Math.random() * maxX) + padding;
    const newY = Math.floor(Math.random() * maxY) + padding;

    noBtn.style.position = "fixed";
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
});

// Botón "Sí"
yesBtn.addEventListener("click", () => {
    introContainer.style.display = "none";     // Quitar GIF inicial
    questionContainer.style.display = "none";  // Quitar pregunta
    resultContainer.style.display = "block";   // Mostrar resultado final
});
