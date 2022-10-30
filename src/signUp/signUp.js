import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, auth } from "firebase/auth";
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
const signUpForm = document.querySelector("#sign-upForm");
const login = document.querySelector("#login");
const spinner = document.getElementById("spinner");


const auth = getAuth();

burger.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

// Signup form
 signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log("clicked");
    // get user info
    let username = signUpForm["uname"].value;
    let email = signUpForm["email"].value;
    let password = signUpForm["pwd"].value;

    spinner.classList.remove("hidden");

    console.log(password);
  
    createUserWithEmailAndPassword(auth, email, username, password)
      .then((userCredential) => {
        userCredential.user.displayName = username;
        console.log(userCredential.user);
        
        signUpForm.reset();
        window.location.href = "../login/login.html";
        alert("Registration successful");
      })
      .catch((error) => {
        spinner.classList.add("hidden");
        alert(error.message);
        signUpForm.reset();
      });
  // }
});


// login button
login.addEventListener("click", ()=> {
  window.location.assign("/src/login/login.html")
})