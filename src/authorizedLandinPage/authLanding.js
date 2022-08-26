import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
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
const sign = document.querySelector("#logout");

const auth = getAuth();

burger.addEventListener("click", ()=> {
    if(menu.classList.contains("hidden")){
        menu.classList.remove("hidden");
    }else{
        menu.classList.add("hidden");
    }
});

sign.addEventListener("click", ()=> {
    auth.signOut().then(()=> {
        window.location.replace("../index.html")
        console.log("user signed out");
    })
    .catch((error)=> {
        console.log(error);
    })
})