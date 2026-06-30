const textEl=document.getElementById("text-el");
const countEl=document.getElementById("count-el");



function count(){
    let input=textEl.value;
    if (input.length > 280 ){
    countEl.style.color = "red";
   }else {
    countEl.style.color = "white";
    }
    countEl.textContent=`${input.length} / 280`;
   
}

textEl.addEventListener("input",count);                             

