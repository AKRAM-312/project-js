// ===================================================
//  Pierre - Papier - Ciseaux  (logique pure, test avec Node)
// ===================================================
//
// Écris une fonction  jouer(choixJoueur)  qui :
//   1. reçoit le choix du joueur : "pierre", "papier" ou "ciseaux"
//   2. fait choisir l'ordinateur AU HASARD parmi les trois
//   3. compare les deux et RENVOIE le résultat sous forme de texte, ex :
//        "Joueur: pierre | Ordi: ciseaux -> Gagné !"
//        "Joueur: papier | Ordi: ciseaux -> Perdu !"
//        "Joueur: pierre | Ordi: pierre  -> Égalité !"
//
// Règles : pierre bat ciseaux, ciseaux bat papier, papier bat pierre.
//
// Teste avec plusieurs appels console.log(jouer("pierre")); etc.


let choixOrdi=["Pierre" ,"Papier" ,"Ciseaux"];

function jouer(choixJoueur){
    let randomNumb=Math.floor(Math.random()*3);
    if(choixJoueur===choixOrdi[randomNumb]){
        return "Joueur: " + choixJoueur + " | Ordi: "+ choixOrdi[randomNumb] +" -> Egalité!!";
    }else if ((choixJoueur==="Pierre" && choixOrdi[randomNumb] ==="Papier")){
        return "Joueur: " + choixJoueur + " | Ordi: "+ choixOrdi[randomNumb] +" -> Perdu!!";
    } else if (choixJoueur === "Papier" && choixOrdi[randomNumb]==="Ciseaux" ){
        return "Joueur: " + choixJoueur + " | Ordi: "+ choixOrdi[randomNumb] +" -> Perdu!!";
    }else if(choixJoueur==="Ciseaux" && choixOrdi[randomNumb] ==="Pierre"){
        return "Joueur: " + choixJoueur + " | Ordi: "+ choixOrdi[randomNumb] +" -> Perdu!!";
    }else {
        return "Joueur: " + choixJoueur + " | Ordi: "+ choixOrdi[randomNumb] +" -> Gagné!!";
    }
}   
console.log(jouer("Pierre"));


