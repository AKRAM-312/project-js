// ===== Les variables du jeu (données pour toi) =====
let cards = [];
let sum = 0;

let hasBlackJack = false;
let isAlive = false;
let message = "";

let player = {
    name : "Akram",
    chips : 200 ,
    afficher : function(){
        playerEl.textContent= this.name + " : 💰" + this.chips;
    }
};


const messageEl=document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.getElementById("cards-el");
const playerEl = document.getElementById("player-el");
// =========================================================
//  À TOI D'ÉCRIRE : la logique if / else if / else
// =========================================================
// Règles :
//   - si sum est INFÉRIEUR à 21  -> message = "Veux-tu tirer une nouvelle carte ?"
//   - SINON si sum est ÉGAL à 21 -> message = "Blackjack ! 🎉"  ET  hasBlackJack = true
//   - SINON (donc plus de 21)    -> message = "Perdu ! 💀"      ET  isAlive = false
//
// Rappels de syntaxe :
//   if (condition) {
//       ...
//   } else if (autreCondition) {
//       ...
//   } else {
//       ...
//   }
//   Comparaisons : <   >   <=   >=   ===   !==

// TODO : écris ton if / else if / else ici
function renderGame(){
    if (sum < 21){
        message="Veux-tu tirer une nouvelle carte ?";
    }else if(sum === 21 ){
        message="Blackjack ! 🎉";
        hasBlackJack = true;
    }else{
        message="Perdu ! 💀";
        isAlive = false;
    }
    // Quand ta logique est écrite, on affiche le message :
    sumEl.textContent="Somme : "+sum;
    messageEl.textContent=message;

    let cartes_text="cartes : ";
    for (let i=0 ; i < cards.length ; i++){
        cartes_text+=cards[i]+" ";
    }
    cardsEl.textContent= cartes_text;
}
function startGame(){ 
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard; 
    isAlive = true;
    renderGame();
}
function newCard(){
    if (isAlive === true && hasBlackJack === false){ 
        let nouvelleCarte = getRandomCard();
        sum +=nouvelleCarte;
        cards.push(nouvelleCarte);

        renderGame();
    }
}

function getRandomCard(){
    return Math.floor(Math.random()*13)+1;
    
}


document.getElementById("new-card-btn").addEventListener("click",newCard)


document.getElementById("start-btn").addEventListener("click",startGame);

player.afficher();