// ===================================================
//  EmojiFighter  (logique pure, test avec Node)
// ===================================================
let emojis = ["👻", "🤖", "🐉", "🦖", "👽", "🦂", "🐺", "🦈"];

// 1) Écris une fonction  combattantAleatoire()  qui RENVOIE un emoji au hasard du tableau.
// TODO
function combattantAleatoire(){
    return emojis[Math.floor(Math.random()*emojis.length)];
}

// 2) Écris une fonction  equipe(n)  qui RENVOIE un tableau de n combattants au hasard.
//    Exemple : equipe(3)  ->  ["🐉", "👽", "🐉"]
//    (les répétitions sont autorisées)
// TODO

function equipe(n){
    let ekip=[];
    for (let i=0 ; i < n ; i++ ){
        ekip.push(combattantAleatoire());
    }
    return ekip;
}

// Tests :
console.log(combattantAleatoire());
console.log(equipe(3));
