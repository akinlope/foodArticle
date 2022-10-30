import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZtrim4yk9HgaT1IoDp8S60OcuHWNe1Og",
  authDomain: "food-article.firebaseapp.com",
  projectId: "food-article",
  storageBucket: "food-article.appspot.com",
  messagingSenderId: "139394569028",
  appId: "1:139394569028:web:5995898a5d9ec3021d7d11",
};
initializeApp(firebaseConfig);

const auth = getAuth();

const HOME = document.querySelectorAll("#HOME");
const ABOUT = document.querySelectorAll("#ABOUT");
const BIGHOME = document.querySelectorAll("#HOMES");

for (let i = 0; i < ABOUT.length; i++) {
  ABOUT[i].addEventListener("click", () => {
    if (!ABOUT[i].classList.contains("navFull")) {
      ABOUT[i].classList.add("navFull");
      HOME[i].classList.remove("navFull");
      window.location.assign("/src/aboutPage/aboutPage.html");
      console.log("About is clicked...");
    }
  });
}

for (let i = 0; i < HOME.length; i++) {
  HOME[i].addEventListener("click", () => {
    if (!HOME[i].classList.contains("navFull")) {
      HOME[i].classList.add("navFull");
      ABOUT[i].classList.remove("navFull");
      console.log("Home is clicked...");
      // HOME[i].style.color = "red";
    }
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("A user is signed in");
        window.location.assign("/src/authorizedLandinPage/authLanding.html");
      } else {
        window.location.assign("/src/index.html");
      }
    });
  });
}

for (let i = 0; i < BIGHOME.length; i++) {
  BIGHOME[i].addEventListener("click", ()=> {
   onAuthStateChanged(auth, (user)=> {
    if(user){
      window.location.assign("/src/authorizedLandinPage/authLanding.html");
    }else{
      window.location.assign("/src/index.html");
    }
   })
      })
}
