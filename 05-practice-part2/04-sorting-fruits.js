// ===================================================
//  Sorting fruits  (logique pure, test avec Node)
// ===================================================
// Un tapis roulant t'envoie des fruits en vrac. Trie-les dans des paniers.
let arrivage = ["🍎", "🍌", "🍎", "🍌", "🍌", "🍎", "🍌"];

// Écris une fonction  trier(fruits)  qui parcourt le tableau et RENVOIE un objet
// avec le compte de chaque fruit, ex :  { pommes: 3, bananes: 4 }
// TODO

function trier(fruits){
    let objectFruit={pommes:0 ,bananes:0 };
    for (let i=0 ; i < fruits.length ; i++){
        if (fruits[i]==="🍎"){
            objectFruit.pommes+=1;
        }else{
            objectFruit.bananes+=1;
        }
    }
    return objectFruit;
}

// Test :
console.log(trier(arrivage));
