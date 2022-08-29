console.log("this is what im working on ");

import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
// import { collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZtrim4yk9HgaT1IoDp8S60OcuHWNe1Og",
  authDomain: "food-article.firebaseapp.com",
  projectId: "food-article",
  storageBucket: "food-article.appspot.com",
  messagingSenderId: "139394569028",
  appId: "1:139394569028:web:5995898a5d9ec3021d7d11",
};
initializeApp(firebaseConfig);

const storage = getStorage();

const pathRef = ref(storage, "images/aboutme.png");

// const gsRef =  
