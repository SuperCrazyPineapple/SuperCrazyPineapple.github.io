// Références aux éléments
const startNowButton = document.getElementById("start-now-button");
const popupForm = document.getElementById("popup-form");
const closeFormButton = document.getElementById("close-form");

// Afficher le formulaire lorsque le bouton est cliqué
startNowButton.addEventListener("click", () => {
  popupForm.style.display = "block";
});

// Fermer le formulaire lorsque le bouton "Fermer" est cliqué
closeFormButton.addEventListener("click", () => {
  popupForm.style.display = "none";
});

// (Facultatif) Fermer le formulaire en cliquant à l'extérieur
window.addEventListener("click", (event) => {
  if (event.target === popupForm) {
    popupForm.style.display = "none";
  }
});
// ----------------------
document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".step");

  // Démarrage après 5 secondes
  setTimeout(() => {
    steps.forEach((step, index) => {
      setTimeout(() => {
        step.style.opacity = "1";
        step.style.transform = "translateY(0)";
      }, index * 2000); // Intervalle de 2 secondes entre chaque étape
    });
  }, 5000); // Délai initial de 5 secondes
});

// Observer appliqué à la section des étapes
const stepsSection = document.querySelector("#steps");
observer.observe(stepsSection);

document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll(".step");
  const mainTitle = document.getElementById("main-title");
  let currentStep = 0;

  // Afficher le titre principal après un délai
  setTimeout(() => {
    mainTitle.style.opacity = "1";
  }, 1000); // 1 seconde après le chargement

  // Fonction pour afficher une étape
  function showStep(stepIndex) {
    if (stepIndex < steps.length) {
      steps[stepIndex].classList.remove("hidden"); // Affiche l'étape
      setTimeout(() => {
        steps[stepIndex].style.opacity = "1"; // Transition d'opacité pour l'animation
      }, 500); // Légère attente avant d'ajouter l'opacité
    }
  }

  // Fonction pour gérer le processus d'animation de toutes les étapes
  function startAnimation() {
    showStep(currentStep);
    currentStep++;

    // Si nous avons parcouru toutes les étapes, recommence à l'étape 1
    if (currentStep >= steps.length) {
      currentStep = 0;
      setTimeout(startAnimation, 2000); // Redémarre l'animation après 2 secondes
    } else {
      setTimeout(startAnimation, 3000); // Attendre 3 secondes avant de passer à l'étape suivante
    }
  }

  // Initialiser l'animation
  startAnimation();
});
