const billEl=document.getElementById("bill-el");
const tip10=document.getElementById("tip-10");
const tip20=document.getElementById("tip-20");
const tip15=document.getElementById("tip-15");
const resultEl=document.getElementById("result-el");


function calculP(bill , tip){
    return bill*tip / 100 ;
}

function afficher(taux){
    let bill=Number(billEl.value);
    let tip=calculP(bill , taux);
    resultEl.innerHTML=`pourboire:${tip}$ <br> Total : ${bill + tip}$`;
}

tip10.addEventListener("click" , function(){
    afficher(10);
});


tip15.addEventListener("click" , function(){
    afficher(15);
});


tip20.addEventListener("click" , function(){
    afficher(20);
});