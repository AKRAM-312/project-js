    // ===== Les variables qui stockent les scores =====
let homeScore = 0;
let guestScore = 0;

// ===== On attrape les zones d'affichage des scores =====
const homeScoreEl = document.getElementById("home-score");
const guestScoreEl = document.getElementById("guest-score");

// =========================================================
//  ÉQUIPE DOMICILE — MODÈLE (déjà fait, étudie-le bien)
// =========================================================
// Une SEULE fonction, avec un paramètre "points", réutilisée par les 3 boutons.
function addHome(points) {
    homeScore += points;              // on ajoute le nombre de points reçu
    homeScoreEl.textContent = homeScore;
}

// Les 3 boutons appellent la MÊME fonction, mais avec une valeur différente.
// Note la syntaxe "() => addHome(1)" : on en reparle juste après.
document.getElementById("home-1").addEventListener("click", () => addHome(1));
document.getElementById("home-2").addEventListener("click", () => addHome(2));
document.getElementById("home-3").addEventListener("click", () => addHome(3));


// =========================================================
//  ÉQUIPE VISITEUR — À TOI DE JOUER
// =========================================================
// 1) Écris une fonction addGuest(points) sur le même modèle que addHome
// TODO
function addGuest(points){
    guestScore += points;
    guestScoreEl.textContent = guestScore;
}

// 2) Branche les 3 boutons guest-1, guest-2, guest-3 (même modèle qu'au-dessus)
// TODO
document.getElementById("guest-1").addEventListener("click", () => addGuest(1));
document.getElementById("guest-2").addEventListener("click", () => addGuest(2));
document.getElementById("guest-3").addEventListener("click", () => addGuest(3));


// =========================================================
//  BOUTON RESET — À TOI DE JOUER
// =========================================================
// Écris une fonction reset() qui remet les DEUX scores à 0
// (les variables ET l'affichage des deux équipes), puis branche le bouton "reset-btn".
// TODO
const restbtn=document.getElementById("reset-btn");
function reset(){
    homeScore=0;
    guestScore=0;
    homeScoreEl.textContent=homeScore;
    guestScoreEl.textContent=guestScore;
}

restbtn.addEventListener("click",reset);