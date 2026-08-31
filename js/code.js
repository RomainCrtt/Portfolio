document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.grille_competences .carte').forEach(carte => {
        carte.addEventListener('mouseenter', () => {
            carte.classList.toggle('retournee');
        });
    });
});

function ouvrirPlus(id) {
    document.getElementById(id).style.display = "flex";
}

function fermerPlus(id) {
    document.getElementById(id).style.display = "none";
}

window.onclick = function(event) {
    let modales = document.querySelectorAll('.modale');
    modales.forEach(modale => {
        if (event.target === modale) {
            modale.style.display = "none";
        }
    });
};

function envoyerFormulaire(event) {
    event.preventDefault();

    const formulaire = document.getElementById("formulaire-contact");
    const statut = document.getElementById("statut-formulaire");
    const donneesFormulaire = new FormData(formulaire);

    fetch("https://formsubmit.co/ajax/romain.carette62400@gmail.com", {
        method: "POST",
        headers: {
            "Accept": "application/json"
        },
        body: donneesFormulaire
    })
    .then(reponse => reponse.json())
    .then(() => {
        statut.textContent = "Message envoyé, je vous recontacterai au plus vite !";
        statut.style.color = "#6C5CE7";
        formulaire.reset();
    })
    .catch(() => {
        statut.textContent = "Une erreur est survenue, réessaie plus tard.";
        statut.style.color = "red";
    });
}

let indexProjetActuel = 0;

function afficherProjet(index) {
    const projets = document.querySelectorAll('.fenetre-carrousel .carte-projet');
    if (projets.length === 0) return;

    projets.forEach(projet => projet.classList.remove('active'));

    if (index >= projets.length) {
        indexProjetActuel = 0;
    } else if (index < 0) {
        indexProjetActuel = projets.length - 1;
    } else {
        indexProjetActuel = index;
    }

    projets[indexProjetActuel].classList.add('active');
}

function projetSuivant() {
    afficherProjet(indexProjetActuel + 1);
}

function projetPrecedent() {
    afficherProjet(indexProjetActuel - 1);
}