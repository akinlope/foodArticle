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



burger.addEventListener("click", () => {
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  });


//taking the user back to the auth landing page
const HOMES = document.querySelectorAll("#HOME");

for(let i = 0; i < HOMES.length; i++){

  onAuthStateChanged(auth, (user) => {
    if(user){
      HOMES[i].addEventListener("click", ()=> {
        // console.log(HOMES[i]);
        // console.log(user);
        // console.log("user is signed in");
        window.location.assign("/src/authorizedLandinPage/authLanding.html");
      });
    }else{
        // console.log("No user signed in");
      HOMES[i].addEventListener("click", ()=> {
        window.location.assign("/src/index.html");
      });
    }
  })
}
