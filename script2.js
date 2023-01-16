// Code pour l'integration d'une horloge
let heure = document.getElementById('heure');
let tempsreel = setInterval(horloge, 1000);

function horloge(){
    let d = new Date();
    heure.innerHTML = d.toLocaleString();
}

let validation = document.querySelector("#envoyer");
let prenom = document.querySelector("#prenom");
let prenom_m = document.querySelector("#prenom_manquant");
let prenom_v = /^[a-zA-ZéèÏÈÉÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèÏÈÉÏ][a-zéèêàçîï])?/;
let nom = document.querySelector("#nom");
let nom_m = document.querySelector("#nom_manquant");
let nom_v = /^[a-zA-ZéèÏÈÉÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèÏÈÉÏ][a-zéèêàçîï])?/;


validation.addEventListener("click", e_valid,);
validation.addEventListener("click", f_valid,);
validation.addEventListener("click", valid);


function e_valid(e){
    if (prenom.validity.valueMissing) {
        e.preventDefault();
        prenom_m.textContent = "Prenom manquant";
        prenom_m.style.color = "red";
    }else if (prenom_v.test(prenom.value) == false) {
        e.preventDefault();
        prenom_m.textContent = 'Format incorrect';
        prenom_m.style.color = 'orange';
    }else if (prenom_v.test(prenom.value) == true) {
        prenom_m.textContent = '';
        prenom_m.style.color = 'white';
    }else{

    }
}

function f_valid(f){
    if (nom.validity.valueMissing) {
        f.preventDefault();
        nom_m.textContent = "Nom manquant";
        nom_m.style.color = "red";
    }else if (nom_v.test(nom.value) == false) {
        f.preventDefault();
        nom_m.textContent = 'Format incorrect';
        nom_m.style.color = 'orange';
    }else if (nom_v.test(nom.value) == true) {
        nom_m.textContent = '';
        nom_m.style.color = 'white';
    }else{

    }
}

// La fonction pour le pop-up après validation du formulaire
function valid(z){
    if (nom.validity.valueMissing) {
        z.preventDefault();
    }else if (nom_v.test(nom.value) == false) {
        z.preventDefault();
    }else {
        alert("merci à vous pour votre cooperation");
    }
}

function rtn(){
    window.history.back();
}
