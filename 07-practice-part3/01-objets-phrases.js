// ===================================================
//  EXERCICE 1 — Tableau d'objets + Generate sentence
// ===================================================
// Un tableau peut contenir des OBJETS. Ici, une liste de personnes :
let personnes = [
    { prenom: "Sara",  age: 25, ville: "Alger" },
    { prenom: "Karim", age: 30, ville: "Oran"  },
    { prenom: "Lina",  age: 22, ville: "Annaba" }
];

// Accès : personnes[0].prenom  ->  "Sara"

// Écris une boucle qui affiche, pour chaque personne, une phrase du type :
//   "Sara a 25 ans et vit à Alger."
// (utilise une template string)
// TODO
for (let i=0 ; i < personnes.length ; i++){
    console.log(`${personnes[i].prenom} a ${personnes[i].age} et vit a ${personnes[i].ville} `);
}


// ===================================================
//  EXERCICE 2 — Rounding numbers
// ===================================================
// NOUVEAU :
//   Math.round(4.5)   -> 5   (arrondi au plus proche)
//   Math.ceil(4.1)    -> 5   (arrondi vers le HAUT)
//   Math.floor(4.9)   -> 4   (arrondi vers le BAS, tu connais)
//   (4.5678).toFixed(2) -> "4.57"  (garde 2 décimales -> renvoie un TEXTE !)

let prix = 19.9876;
// 1) Affiche prix arrondi à l'entier le plus proche
// TODO
console.log(Math.round(prix));
// 2) Affiche prix avec 2 décimales
// TODO
console.log((prix).toFixed(2));



// ===================================================
//  EXERCICE 3 — Convert string to number
// ===================================================
// NOUVEAU : un input renvoie toujours du TEXTE. Pour calculer, on convertit :
//   Number("42")     -> 42
//   parseInt("42px") -> 42      (s'arrête au premier non-chiffre)
//   parseFloat("3.14 euros") -> 3.14
let a = "10";
let b = "5";
// Affiche la VRAIE somme (15, pas "105") en convertissant avant d'additionner.
// TODO
console.log(Number(a)+Number(b));