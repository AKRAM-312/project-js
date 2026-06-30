// Leads Tracker
let myLeads=[];

const inputEl=document.getElementById("input-el");
const inputbtn=document.getElementById("input-btn");
const ulEl=document.getElementById("ul-el");
const deletebtn=document.getElementById("delete-btn");
const tabBtn=document.getElementById("tab-btn");


function render(){
    let string="";
    for (let i=0 ; i < myLeads.length ; i++){
        string+=`<li><a href="${myLeads[i]}">${myLeads[i]}</a></li>`;
    }
    ulEl.innerHTML = string ;
}

function save(){
    myLeads.push(inputEl.value);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    inputEl.value="";
    console.log(myLeads);
    render();
}
function vide(){
    myLeads=[];
    localStorage.clear()
    render();
}

inputbtn.addEventListener("click",save);
deletebtn.addEventListener("click",vide);

const leadsStockes = JSON.parse(localStorage.getItem("myLeads"));
if (leadsStockes) {        
    myLeads = leadsStockes;
    render();
}

function callback(tabs){
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render();
}

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({ active: true, currentWindow: true } , callback);
});