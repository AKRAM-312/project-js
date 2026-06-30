// ===== Connexion à Firebase (config fournie) =====
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js"

const appSettings = {
    databaseURL: "https://first-app-f0a83-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const leadsInDB = ref(database, "leads")   // "leads" = le tiroir où on range les données

// ===== Éléments de la page =====
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")


// =========================================================
//  À TOI : la logique
// =========================================================
// Les 3 fonctions Firebase à utiliser :
//   push(leadsInDB, valeur)      -> ajoute une valeur dans la base
//   remove(leadsInDB)            -> vide la base
//   onValue(leadsInDB, function(snapshot) {   ...   })
//        -> s'exécute À CHAQUE changement de la base.
//           snapshot.val()    = les données actuelles (un OBJET, ou null si vide)
//           Object.values(x)  = transforme cet objet en TABLEAU pour pouvoir boucler

// 1) Au clic sur SAVE : push la valeur de l'input dans la base, puis vide l'input.
// TODO
inputBtn.addEventListener("click", function() {
    push(leadsInDB, inputEl.value);
    inputEl.value = "";
})

// 2) onValue : à chaque changement, lis les données et affiche-les dans ulEl.
//    (pense à gérer le cas "base vide")
// TODO
onValue(leadsInDB, function(snapshot){
    let donnees=snapshot.val();
    let string="";
    if (donnees != null){ 
    let tab=Object.values(donnees);
    for(let i=0;i<tab.length;i++){
        string+=`<li><a href="${tab[i]}">${tab[i]}</a></li>`;
    }
    }
    ulEl.innerHTML=string;
})

// 3) Au clic sur DELETE ALL : remove la base.
// TODO
deleteBtn.addEventListener("click",function(){
    remove(leadsInDB);
})