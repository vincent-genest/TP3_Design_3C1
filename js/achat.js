/**----------------------------------- range slider (Aide d'internet et beaucoup d'essaie érreur)-------------------------------- */

// Exécute le code lorsque la page est entièrement chargée
window.onload = function () {
    valeurMaximal.click();
    valeurMinimal.click();
    valeurMaximalP.click();
    valeurMinimalP.click();
};

// Variables pour le slider des années
let valeurMinimal = document.querySelector("#annee .valeurMin");
let valeurMaximal = document.querySelector("#annee .valeurMax");
let barre = document.querySelector("#annee .sliderBarre");
let affichageMin = document.querySelector("#annee .affichage-min");
let affichageMax = document.querySelector("#annee .affichage-max");
let valeurMinAccepter = parseInt(valeurMinimal.min);
let valeurMaxAccepter = parseInt(valeurMaximal.max);
const margeMin = 25; // Marge minimale entre les valeurs minimale et maximale

// Variables pour le slider des prix
let valeurMinimalP = document.querySelector("#prix .valeurMin");
let valeurMaximalP = document.querySelector("#prix .valeurMax");
let barreP = document.querySelector("#prix .sliderBarre");
let affichageMinP = document.querySelector("#prix .affichage-min");
let affichageMaxP = document.querySelector("#prix .affichage-max");
let valeurMinAccepterP = parseInt(valeurMinimalP.min);
let valeurMaxAccepterP = parseInt(valeurMaximalP.max);

// Fonction pour déplacer la valeur minimale
function deplacementMin(evt) {
    if (evt.target.name == "annee") {
        // Gère la marge minimale entre les valeurs minimale et maximale
        let marge = parseInt(valeurMaximal.value) - parseInt(valeurMinimal.value);
        if (marge <= margeMin) {
            valeurMinimal.value = parseInt(valeurMaximal.value) - margeMin;
        }
        affichageMin.innerHTML = valeurMinimal.value;
    }
    if (evt.target.name == "prix") {
        let marge = parseInt(valeurMaximalP.value) - parseInt(valeurMinimalP.value);
        if (marge <= margeMin) {
            valeurMinimalP.value = parseInt(valeurMaximalP.value) - margeMin;
        }
        affichageMinP.innerHTML = valeurMinimalP.value;
    }
    positionnerLesValeurs(evt.target.name);
}

// Fonction pour déplacer la valeur maximale
function deplacementMax(evt) {
    if (evt.target.name == "annee") {
        let marge = parseInt(valeurMaximal.value) - parseInt(valeurMinimal.value);
        if (marge <= margeMin) {
            valeurMaximal.value = parseInt(valeurMinimal.value) + margeMin;
        }
        affichageMax.innerHTML = valeurMaximal.value;
    }
    if (evt.target.name == "prix") {
        let marge = parseInt(valeurMaximalP.value) - parseInt(valeurMinimalP.value);
        if (marge <= margeMin) {
            valeurMaximalP.value = parseInt(valeurMinimalP.value) + margeMin;
        }
        affichageMaxP.innerHTML = valeurMaximalP.value;
    }
    positionnerLesValeurs(evt.target.name);
}

// Fonction pour positionner les valeurs sur la barre du slider
function positionnerLesValeurs(nom) {
    if (nom == "annee") {
        barre.style.left = (valeurMinimal.value / valeurMaxAccepter) * 100 + "%";
        affichageMin.style.left = (valeurMinimal.value / valeurMaxAccepter) * 100 + "%";
        barre.style.right = 100 - (valeurMaximal.value / valeurMaxAccepter) * 100 + "%";
        affichageMax.style.right = 100 - (valeurMaximal.value / valeurMaxAccepter) * 100 + "%";
    }
    if (nom == "prix") {
        barreP.style.left = (valeurMinimalP.value / valeurMaxAccepterP) * 100 + "%";
        affichageMinP.style.left = (valeurMinimalP.value / valeurMaxAccepterP) * 100 + "%";
        barreP.style.right = 100 - (valeurMaximalP.value / valeurMaxAccepterP) * 100 + "%";
        affichageMaxP.style.right = 100 - (valeurMaximalP.value / valeurMaxAccepterP) * 100 + "%";
    }
}

/**----------------------------------- tri et filtre -------------------------------- */

// Sélection des éléments de tri et filtre
let tri = document.querySelector("#filtre-tri>span:last-of-type");
let divTri = document.querySelector("#filtre-tri>span:last-of-type+div");

// Ajout de la gestion des clics pour afficher ou masquer les options de tri
tri.style.cursor = "pointer";
divTri.style.cursor = "pointer";
tri.addEventListener("click", afficherOuEffacer);
divTri.addEventListener("click", afficherOuEffacer);

// Fonction pour afficher ou masquer les options de tri
function afficherOuEffacer() {
    divTri.classList.toggle("visible");
}


