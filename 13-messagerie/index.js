// ===== Connexion à Firebase (fourni) =====
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js"

const appSettings = {
    apiKey: "AIzaSyB2cYHUXy0yd6mN50qzmq-8npECi6fG7RY",
    authDomain: "first-app-f0a83.firebaseapp.com",
    databaseURL: "https://first-app-f0a83-default-rtdb.firebaseio.com",
    projectId: "first-app-f0a83",
    storageBucket: "first-app-f0a83.firebasestorage.app",
    messagingSenderId: "946821166517",
    appId: "1:946821166517:web:6a7959be3272d91d54d5fc"
}

const app = initializeApp(appSettings)
const auth = getAuth(app)
const database = getDatabase(app)

// ===== Éléments de la page (à toi de les récupérer) =====
// ids dispo : email-el, password-el, signup-btn, login-btn, error-el,
//             auth-view, chat-view, message-el, send-btn, messages-el, logout-btn
// TODO
const emailEl= document.getElementById("email-el");
const passwordEl= document.getElementById("password-el");
const signupBtn = document.getElementById("signup-btn");
const loginBtn = document.getElementById("login-btn");
const errorEl = document.getElementById("error-el");
const authView= document.getElementById("auth-view");
const chatView = document.getElementById("chat-view");
const logoutBtn = document.getElementById("logout-btn");
const messageEl = document.getElementById("message-el");
const sendBtn = document.getElementById("send-btn");
const messagesEl = document.getElementById("messages-el");
const pseudoEl = document.getElementById("pseudo-el");

// sign up block 
function accountCreate(){ 
    let mail = emailEl.value;
    let pass = passwordEl.value;
createUserWithEmailAndPassword(auth , mail , pass).then( function(){
    console.log("Compte crée avec succés");
    updateProfile(auth.currentUser, { displayName: pseudoEl.value })
})
.catch(function(error){
    errorEl.textContent=error.message;  
})
}
signupBtn.addEventListener("click" , accountCreate);

// login block 

function login(){
    let mail = emailEl.value;
    let pass = passwordEl.value;
    
    signInWithEmailAndPassword(auth , mail , pass).then(
        function(){
            console.log("Connexion avec succés");
        }
    ).catch(function(error){ 
        errorEl.textContent=error.message;
    })
}

loginBtn.addEventListener("click" , login);


// state change block 
let ecouteLancee=false;

    onAuthStateChanged(auth , function(user){
        if(user){
            authView.style.display = "none";    // cacher
            chatView.style.display = "block";  // montrer
            if(!ecouteLancee){         
                ecouteLancee = true;
                ecouterMessages();
             }   
        }else{
        authView.style.display = "block";    
        chatView.style.display = "none";   
         }   
    })  



// log out block

logoutBtn.addEventListener("click" , function(){
    signOut(auth);
})


// chat Block 

const messagesInDB = ref(database, "messages");


// envoie des messages
function send(){
    if(messageEl.value.trim()){ 
    push(messagesInDB, {
    auteur: auth.currentUser.displayName || auth.currentUser.email,
    texte: messageEl.value,
    heure: new Date().toLocaleTimeString().slice(0,5)
    })  
    messageEl.value="";
    }
}

sendBtn.addEventListener("click" , send);
messageEl.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        send();
    }
});


//affiche les messages

// en cas t'as une co de merde
messagesEl.innerHTML = `<div class="empty-state"><span class="emoji">⏳</span><div class="sub">Chargement des messages...</div></div>`;
function ecouterMessages(){ 
    onValue(messagesInDB , function(snapshot){
        let data = snapshot.val();
        if(data){ 
            let messages = Object.values(data);
            let string ="";
            for(let i=0 ; i<messages.length ; i++){
                let classe="msg";
                if(messages[i].auteur === (auth.currentUser.displayName || auth.currentUser.email) ){
                    classe="msg mine";
                }
            string+=`<div class="${classe}"><span class="author">${messages[i].auteur}   ${messages[i].heure}</span>${messages[i].texte}</div>`
            }
            messagesEl.innerHTML=string;
        }else{
        messagesEl.innerHTML=`<div class="empty-state"><span class="emoji">👋</span><div class="title">C'est tout calme ici...</div><div class="sub">Sois le premier à lancer la conversation !</div></div>`;
        }
    })
}