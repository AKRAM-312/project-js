// ===================================================
//  EXERCICE 1 — Variables practice
// ===================================================
// But : créer des variables et les afficher avec console.log

// 1) Crée une variable "prenom" qui contient ton prénom (du texte → entre guillemets)
// TODO
let prenom="Akram"

// 2) Crée une variable "age" qui contient ton âge (un nombre → sans guillemets)
// TODO
let age=25

// 3) Affiche les deux dans le terminal
// TODO  (ex: console.log(prenom);)
console.log(prenom,age)


// ===================================================
//  EXERCICE 2 — Concatenate two strings in a function
// ===================================================
// But : une fonction qui reçoit 2 textes et renvoie les deux collés avec un espace au milieu.
// Exemple : concat("Bonjour", "Akram")  →  "Bonjour Akram"

function concat(a, b) {
    // TODO : return  a + ... + b   (n'oublie pas l'espace " " au milieu)
    return a+" "+b;
}

// Test (décommente la ligne ci-dessous quand ta fonction est prête, en enlevant les //)
 console.log(concat("Bonjour", "Akram"));
