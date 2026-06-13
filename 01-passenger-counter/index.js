// ===== Étape 1 : une variable pour stocker le nombre de passagers =====
let count = 0;
let busNumber=1;
// On attrape les éléments HTML dont on a besoin (grâce à leur id)
const countEl = document.getElementById("count-el");
const incrementBtn = document.getElementById("increment-btn");

// ===== Étape 2 : une fonction qui ajoute 1 et met à jour l'affichage =====
function increment() {
    count = count + 1;            // on ajoute 1 au compteur
    countEl.textContent = count;  // on écrit la nouvelle valeur dans la page (DOM)
}

// ===== Étape 3 : on relie le bouton à la fonction (événement "click") =====
incrementBtn.addEventListener("click", increment);
const saveBtn=document.getElementById("save-btn");
const saveEl=document.getElementById("save-el");
function save(){
    saveEl.innerHTML += "Bus " + busNumber + " → passagers : " + count + "<br>";
    busNumber = busNumber + 1;
    count=0;
    countEl.textContent = count;
}

saveBtn.addEventListener("click",save);
