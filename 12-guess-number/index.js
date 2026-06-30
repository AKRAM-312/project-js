const guessEl=document.getElementById("guess-el");
const guessBtn=document.getElementById("guess-btn");
const resetBtn=document.getElementById("reset-btn");
const messageEl=document.getElementById("message-el");
const triesEl=document.getElementById("tries-el");

let count=0;

function numberAlea(){
   return Math.floor(Math.random()*100)+1 ;
}


let aleanum=numberAlea();
console.log(aleanum);

function devine(){
    let guess=Number(guessEl.value);
    if(aleanum > guess ){
        messageEl.textContent="C'est plus haut ! ⬆️";
    }else if(aleanum < guess){
        messageEl.textContent= "C'est plus bas ! ⬇️";
    }else{
        messageEl.textContent="Bravo, trouvé ! 🎉";
    }
}

function increment(){
    count+=1;
    triesEl.textContent=`essai : ${count}`;
}
guessBtn.addEventListener("click", function(){
    devine();
    increment();
    

});
resetBtn.addEventListener("click" , function(){
    aleanum=numberAlea();
    messageEl.textContent="";
    guessEl.value="";
    count=0;
    triesEl.textContent = "";

});