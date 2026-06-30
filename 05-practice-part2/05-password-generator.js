// ===================================================
//  Password Generator  (logique pure, test avec Node)
// ===================================================
// Génère un mot de passe aléatoire.
//
// On te donne tous les caractères possibles :
let caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
// Astuce : une string s'indexe comme un tableau ->  caracteres[0] === "a"
//          et  caracteres.length  donne sa longueur.
//
// Écris une fonction  genererMotDePasse(longueur)  qui RENVOIE un mot de passe
// (texte) de la longueur demandée, fait de caractères pris au hasard dans "caracteres".
//   Exemple : genererMotDePasse(12)  ->  "aZ3$kP9!mQ1x"
// TODO

function genererMotDePasse(longueur){
    let mdp="";
    for (let i=0 ; i < longueur ; i++){
        mdp+=caracteres[Math.floor(Math.random()*caracteres.length)];
    }
    return mdp;
}

// Test :
console.log(genererMotDePasse(12));
