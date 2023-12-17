let page = document.querySelector("body");

//objet nessessaire au fonctionnement du menu
let boutonBurger = document.getElementById("barre-logo");
let menu = document.getElementById("principale");
let boutonXMenu = document.querySelector("#principale div a");

//objet nessessaire au fonctionnement du bouton langue
let boutonLangue = document.querySelector("#icones-menu img:first-of-type");
let choixDeLangue = document.querySelector("#icones-menu div");

let bureau = false;
//style temporaire
boutonBurger.style.cursor = "pointer";
boutonLangue.style.cursor = "pointer";
choixDeLangue.style.display = "none";

//evenement des interraction pour le menu
boutonBurger.addEventListener("click", ouvrirLeMenu);
boutonXMenu.addEventListener("click", fermerLeMenu);

//evenement des interraction pour menu langue
boutonLangue.addEventListener("click", ouvrirLeMenuLangue);
choixDeLangue.addEventListener("click", fermerLeMenuLangue);

//fonction pour faire apparaitre le menu
function ouvrirLeMenu() {
    menu.style.transform = "translateX(0%)";
    page.style.overflowY = "hidden";
    // console.log("d")
}
//fonction pour faire disparaitre le menu
function fermerLeMenu() {
    menu.style.transform = "translateX(100%)";
    boutonBurger.style.pointerEvents = "auto";
    page.style.overflowY = "auto";
}

//fonction pour faire apparaitre le menu langue
function ouvrirLeMenuLangue() {
    choixDeLangue.style.display = "flex";
}

//fonction pour faire disparaitre le menu langue
function fermerLeMenuLangue() {
    choixDeLangue.style.display = "none";
}

/*Détection du scoll pour l'aparition et la disparition du menu*/
let oldScrollY = window.scrollY;

let scrollID = window.addEventListener("scroll", apparitionDisparitionDuMenu);

/*gestion du menu entre mobile et deskstop*/
let requeteMedia = window.matchMedia("(max-width: 768px)");
requeteMedia.addEventListener("change", gestionDuMenu);

let banniereHalloween = document.querySelector("#banniereHalloween img");
// On déclare la variable qui contiendra le pop-up tout de suite pour l'adapter au media query
let popUp = document.querySelector("#infoLivre");

// On appel la fonction une première fois pour initialiser le menu
gestionDuMenu(window.matchMedia("(max-width: 768px)"));

// On défini la fonction qui sera appelée par le media query
function gestionDuMenu(x) {
    if (x.matches) {
        removeEventListener("scroll", apparitionDisparitionDuMenu);
        menu.style.transform = "translateY(0%) translateX(100%)";
        bureau = false;
        if (banniereHalloween != null) {
            banniereHalloween.src = "images/bannieres/BanniereHalloweenTelephone.png";
        }
        popUp.style.transform = "translateY(100%) translateX(0%)";
    } else {
        window.addEventListener("scroll", apparitionDisparitionDuMenu);
        page.style.overflowY = "auto";
        bureau = true;
        if (banniereHalloween != null) {
            banniereHalloween.src = "images/bannieres/BanniereHalloweenOrdi.png";
        }
        popUp.style.transform = "translateX(-100%) translateY(0%)";
    }
    console.log(bureau);
}

//fonction pour faire apparaitre le menu si sur ordinateur
function apparitionDisparitionDuMenu() {
    if (bureau) {
        if (oldScrollY < window.scrollY) {
            menu.style.transform = "translateY(0%)";
        } else {
            console.log("monte");
            menu.style.transform = "translateY(10vw)";
        }
        oldScrollY = window.scrollY;
    }
}

/********************************************** Événement d'ajout au panier *************************************************/

// Gestion de l'événement d'ajout au panier
let ajouter = document.querySelectorAll(".btnAjouter");
for (let btnAjout of ajouter) {
    btnAjout.addEventListener("click", function () {
        // Basculement de la classe "ajouter" pour changer l'apparence du bouton
        btnAjout.classList.toggle("ajouter");

        // Modification du texte et de l'image en fonction de la classe "ajouter"
        if (btnAjout.classList.contains("ajouter")) {
            btnAjout.querySelector("span").innerHTML = "retirer";
            btnAjout.querySelector("img").src = "images/icones/IconePanier.png";
        } else {
            btnAjout.querySelector("span").innerHTML = "ajouter";
            btnAjout.querySelector("img").src = "images/icones/IconePanierAjout.svg";
        }
    });
}

// Gestion de l'événement de favoris
let favoris = document.querySelectorAll(".favoris");
for (let btnFav of favoris) {
    btnFav.addEventListener("click", function () {
        // Basculement de la classe "ajouter" pour changer l'apparence du bouton de favoris
        btnFav.classList.toggle("ajouter");

        // Modification de l'image en fonction de la classe "ajouter"
        if (btnFav.classList.contains("ajouter")) {
            btnFav.querySelector("img").src = "images/icones/favoriCoche.svg";
        } else {
            btnFav.querySelector("img").src = "images/icones/favoriPlus.svg";
        }
    });
}

/**----------------------------------- Pop up -------------------------------- */

// Gestion du pop-up pour afficher des informations détaillées
let imagesCouverture = document.querySelectorAll(".gabaritLivre>img:last-of-type");
let fondNoir = document.querySelector("#fond-noir");
let imagePopUp = document.querySelector("#infoLivre > div > div:first-of-type img");
let titrePopUp = document.querySelector("#infoLivre h1");
let moins = document.querySelector("#infoLivre > div:nth-of-type(3) div button:first-of-type");
let plus = document.querySelector("#infoLivre > div:nth-of-type(3) div button:last-of-type");
let qte = document.querySelector("#infoLivre > div:nth-of-type(3) div span");

let qteLivre = parseInt(qte.textContent);

// Affichage du pop-up lors du clic sur une image de couverture
for (uneImage of imagesCouverture) {
    uneImage.addEventListener("click", ouvrirPopUp);
    uneImage.style.cursor = "pointer";
}

// Fermeture du pop-up lors du clic sur le fond noir
fondNoir.addEventListener("click", function () {
    fondNoir.style.display = "none";
    if (bureau) {
        popUp.style.transform = "translateX(-100%)";
    } else {
        popUp.style.transform = "translateY(100%)";
    }
});

// Fonction pour ouvrir le pop-up avec les informations détaillées
function ouvrirPopUp() {
    fondNoir.style.display = "block";
    if (bureau) {
        popUp.style.transform = "translateX(0%)";
    } else {
        popUp.style.transform = "translateY(0%)";
    }
    imagePopUp.src = this.src;
    titrePopUp.innerHTML = this.alt;
}

// Gestion des boutons pour réduire et augmenter la quantité dans le pop-up
moins.addEventListener("click", reduireQte);
plus.addEventListener("click", augmenterQte);

// Fonctions pour réduire et augmenter la quantité
function reduireQte() {
    if (qteLivre > 0) {
        qteLivre--;
        qte.innerHTML = qteLivre;
    }
}

function augmenterQte() {
    qteLivre++;
    qte.innerHTML = qteLivre;
}
