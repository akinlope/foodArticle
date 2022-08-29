import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAZtrim4yk9HgaT1IoDp8S60OcuHWNe1Og",
  authDomain: "food-article.firebaseapp.com",
  projectId: "food-article",
  storageBucket: "food-article.appspot.com",
  messagingSenderId: "139394569028",
  appId: "1:139394569028:web:5995898a5d9ec3021d7d11",
};
initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();

const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
const addArticle = document.querySelector("form");
const image = document.querySelector("#img");

const colRef = collection(db, "articles");

burger.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

addArticle.addEventListener("submit", (e) => {
  e.preventDefault();

  addDoc(colRef, {
    title: addArticle.title.value,
    author: addArticle.author.value,
    body: addArticle.body.value,
  })
    .then(() => {
      addArticle.reset();
      console.log("articles has been added ");
    })
    .catch((err) => {
      console.log(err.message);
    }); 
});

// //get data
// getDocs(colRef)
// .then((s)=> {
//     let article = [];
//     s.docs.forEach((art)=> {
//         article.push({...art.data(), id: art.id})
//         console.log(article );
//     })
// }).catch((err)=> {
//     console.log(err.message);
// })
