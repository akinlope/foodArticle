import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
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
const addArticle = document.querySelector("form");
const image = document.querySelector("#img");
let img = "";
// console.log(image.value);

// getting firebase services
const db = getFirestore();
const colRef = collection(db, "articles");
const storage = getStorage();
const auth = getAuth();


burger.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

addArticle.addEventListener("submit", (e) => {
  e.preventDefault();

  const sparkyRef = ref(storage, `images/${img.name}`);
  addDoc(colRef, {
    title: addArticle.title.value,
    author: addArticle.author.value,
    body: addArticle.body.value,
    img: img.name
  })
    .then(() => {
     
      alert("Article has been succefully added :)")


      uploadBytes(sparkyRef,img).then((s)=>{
        console.log("uploaded to blob or file")
        addArticle.reset();
        
      }).catch((err)=> {err.message})
    })
    .catch((err) => {
      console.log(err.message);
    }); 
    uploadBytes();
});

image.addEventListener("change", (event)=>{
  console.log(event.target.files[0]);
  img = event.target.files[0];
  console.log();
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