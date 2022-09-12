import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

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

burger.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

const db = getFirestore();
const colRef = collection(db, "articles");

getDocs(colRef)
  .then((s) => {
    let articles = [];
    s.forEach((doc) => {
      articles.push({ ...doc.data(), id: doc.id });
      let title = doc.data().title
      let author = doc.data().author
      console.log();
      document.querySelector("#title").innerHTML += title;
      document.querySelector("#author").innerHTML += author
    });
    // console.log(articles);
  })
  .catch((err) => {
    console.log(err.message);
  });
