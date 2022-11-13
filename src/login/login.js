import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAZtrim4yk9HgaT1IoDp8S60OcuHWNe1Og",
    authDomain: "food-article.firebaseapp.com",
    projectId: "food-article",
    storageBucket: "food-article.appspot.com",
    messagingSenderId: "139394569028",
    appId: "1:139394569028:web:5995898a5d9ec3021d7d11",
  };
  
initializeApp(firebaseConfig);


const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
const loginForm = document.querySelector("#loginForm");
const spinner = document.getElementById("spinner");

// console.log(spinner);


const auth = getAuth();


burger.addEventListener("click", ()=> {
    if(menu.classList.contains("hidden")){
        menu.classList.remove("hidden");
    }else{
        menu.classList.add("hidden");
    }
});

loginForm.addEventListener("submit", (e)=> {
    e.preventDefault()
    spinner.classList.remove("hidden");
    let email = loginForm["email"].value;
    let password = loginForm["pwd"].value;
    
    let loginBtn = document.getElementById("loginBtn");
    loginBtn.classList.add("disableBtn");

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        
        
        window.location.replace("../authorizedLandinPage/authLanding.html");
        alert("Login Successful");
    })
    .catch((error) => {
        spinner.classList.add("hidden");
        alert(error.message);
        loginBtn.classList.remove("disableBtn");
    })
})

// FOR FORGET PASSWORD
const forgetPassword = document.getElementById("forgetPassword");
const main =  document.getElementById("main");
const forget = document.getElementById("forget");
const forgetPasswordBtn = document.getElementById("forgetPasswordBtn");

forgetPassword.addEventListener("click", ()=> {
    main.classList.add("hidden");
    forget.classList.remove("hidden");
});

forgetPasswordBtn.addEventListener("click", ()=> {
    
})
