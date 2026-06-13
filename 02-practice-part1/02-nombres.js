// ===================================================
//  EXERCICE 3 — Incrementing and decrementing
// ===================================================
let score = 10;

// 1) Augmente score de 1, puis affiche-le  (résultat attendu : 11)
// TODO
score+=1;
console.log(score);

// 2) Diminue score de 3, puis affiche-le  (résultat attendu : 8)
//    Indice : -= 3
score-=3;
console.log(score);
// TODO



// ===================================================
//  EXERCICE 4 — Strings and numbers (LE PIÈGE CLASSIQUE)
// ===================================================
// Observe et essaie de PRÉDIRE le résultat AVANT de lancer le fichier.

console.log(5 + 3);        // ton pari : 8?
console.log("5" + 3);      // ton pari : ?   (attention, "5" est du TEXTE)
console.log("5" + "3");    // ton pari : "53"?

// 3) Tu as deux variables ci-dessous. L'une est un nombre, l'autre du texte.
let nombre = 7;
let texte = "7";
// Affiche le TYPE de chacune avec typeof (ex: console.log(typeof nombre))
// TODO
console.log(typeof nombre);
console.log(typeof texte);



// ===================================================
//  EXERCICE 5 — Rendering an error message
// ===================================================
// Écris une fonction verifierAge(age) qui :
//   - renvoie "Accès autorisé" si age >= 18
//   - renvoie "Erreur : trop jeune" sinon
// Indice : utilise un if / else

function verifierAge(age) {
    // TODO
    if (age>=18){
        return "Accès autorisé";
    }else{
        return "Erreur : trop jeune";
    }
}

console.log(verifierAge(20));   // → Accès autorisé
console.log(verifierAge(15));   // → Erreur : trop jeune



// ===================================================
//  EXERCICE 6 — Calculator challenge
// ===================================================
// Écris 4 fonctions : addition, soustraction, multiplication, division.
// Chacune prend 2 nombres (a, b) et RENVOIE le résultat.

function addition(a, b) {
    // TODO
    return a+b;
}
// fais les 3 autres toi-même :
// TODO  soustraction
function soustraction(a,b){
    return a-b;
}
// TODO  multiplication
function multiplication(a,b){
    return a*b;
}
// TODO  division
function division(a,b){
   return a/b;    
}
// Tests (décommente quand tes fonctions sont prêtes) :
console.log(addition(4, 5));        // 9
console.log(soustraction(10, 3));   // 7
console.log(multiplication(6, 2));  // 12
console.log(division(20, 4));       // 5
