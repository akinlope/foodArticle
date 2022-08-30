import { initializeApp } from "firebase/app";
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
// console.log(image.value);

const db = getFirestore();
const colRef = collection(db, "articles");

const storage = getStorage();
const srorageRef  = ref(storage);

const imageRef = ref(storage, "images");






burger.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

addArticle.addEventListener("submit", (e) => {
  e.preventDefault();

  const sparkyRef = ref(storage, `images/${image.value}`);

  addDoc(colRef, {
    title: addArticle.title.value,
    author: addArticle.author.value,
    body: addArticle.body.value,
  })
    .then(() => {
      addArticle.reset();
      console.log("articles has been added ");


      uploadBytes(sparkyRef,File).then((s)=>{
        console.log("uploaded to blob or file")
      }).catch((err)=> {err.message})
    })
    .catch((err) => {
      console.log(err.message);
    }); 
    uploadBytes();
});


