// ===================================================
//  EXERCICE 1 — Objects and functions
// ===================================================
// Crée un objet "voiture" avec 3 clés : marque (texte), annee (nombre),
// estElectrique (booléen true/false).
// TODO
let voiture={
    marque : "BMW",
    annee : 2002 ,
    estElectrique : false
};

// Affiche la marque de la voiture avec console.log (utilise le point .)
// TODO
console.log(voiture.marque);


// ===================================================
//  EXERCICE 2 — Loops and arrays
// ===================================================
let nombres = [4, 8, 15, 16, 23, 42];

// Avec une boucle for, affiche CHAQUE nombre du tableau (un par ligne).
// TODO
for (let i=0 ; i< nombres.length ; i++){
    console.log(nombres[i]);
}

// Bonus : calcule la SOMME de tous les nombres et affiche-la.
// Indice : une variable total = 0 avant la boucle, puis total += nombres[i]
// TODO
let sum=0;
for ( let i=0 ; i< nombres.length ; i++){
    sum+=nombres[i];
}
console.log(sum);

// ===================================================
//  EXERCICE 3 — push, pop, unshift, shift
// ===================================================
// NOUVEAUTÉ : tu connais push (ajoute à la FIN) et pop (enlève à la FIN).
// Voici les deux frères qui agissent au DÉBUT :
//    .unshift(x)  -> AJOUTE x au DÉBUT
//    .shift()     -> ENLÈVE le premier élément
let file = ["Sara", "Karim", "Lina"];

// 1) Ajoute "Yanis" à la FIN de la file
// TODO
file.push("Yanis");
// 2) Ajoute "Omar" au DÉBUT de la file
// TODO
file.unshift("Omar");
// 3) Enlève la première personne de la file
// TODO
file.shift();
// 4) Affiche le tableau final  -> attendu : ["Karim", "Lina", "Yanis"]
console.log(file);
