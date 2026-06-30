// Unit Converter
//
// Quand on clique "Convertir", lis le nombre tapé et affiche les conversions
// dans les 3 cartes (length-el, volume-el, mass-el).
//
// Taux de conversion :
//   1 mètre  = 3.281 pieds
//   1 litre  = 0.264 gallon
//   1 kilo   = 2.204 livres
//
// Affiche dans chaque carte les DEUX sens, ex pour 20 (longueur) :
//   "20 mètres = 65.62 pieds | 20 pieds = 6.1 mètres"
// (arrondis à 2 ou 3 décimales avec .toFixed)
//
// ids : input-el, convert-btn, length-el, volume-el, mass-el
// Rappel : la valeur d'un input est du TEXTE -> Number(inputEl.value) pour calculer.
const inputEl=document.getElementById("input-el");
const lengthEl=document.getElementById("length-el");
const volumeEl=document.getElementById("volume-el");
const masseEl=document.getElementById("mass-el");
const convertBtn =document.getElementById("convert-btn");

function convert(){ 
    lengthEl.textContent = `${Number(inputEl.value)} metres = ${Number(inputEl.value) * 3.281} pieds | ${Number(inputEl.value)} pieds = ${(Number(inputEl.value) / 3.281).toFixed(3)} metres`;
    volumeEl.textContent = `${Number(inputEl.value)} litre = ${Number(inputEl.value) * 0.264} gallon | ${Number(inputEl.value)} gallon = ${(Number(inputEl.value) / 0.264 ).toFixed(3)} litres`;
    masseEl.textContent = `${Number(inputEl.value)} kilo = ${Number(inputEl.value) * 2.204} livres | ${Number(inputEl.value)} livres = ${(Number(inputEl.value) / 2.204).toFixed(3)} kilo`;
}

convertBtn.addEventListener("click" , convert);