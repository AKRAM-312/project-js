const inputEl= document.getElementById("input-el");
const deleteBtn= document.getElementById("delete-btn");
const addBtn = document.getElementById("add-btn");
const listEl = document.getElementById("list-el");

let taches=[];




function render(){
    let string="";
    for (let i=0 ; i < taches.length ; i++){
        string += `<li>${taches[i]} <button onclick="supprimerUne(${i})">❌</button></li>`;
    }
    listEl.innerHTML=string;
}


function supprimerUne(index){
    taches.splice(index , 1);
    render();
}
function ajout(){
    taches.push(inputEl.value);
    inputEl.value="";
    render();
}   

function supprime(){
    taches=[];
    render();
}

addBtn.addEventListener("click" , ajout);
deleteBtn.addEventListener("click",supprime);