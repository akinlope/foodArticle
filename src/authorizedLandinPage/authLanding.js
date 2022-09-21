import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import {
  getDocs,
  getFirestore,
  collection,
  doc,
  getDoc,
  query, where, orderBy
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

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
const signout = document.querySelector("#logout");
const container = document.querySelector("#grid");
const closeBody = document.querySelector("#closeBody");

/* GETTING FIREBASE SERVICES*/
const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

/* INITIALIZING FIREBASE COLLECTIONS */
const colRef = collection(db, "articles");

burger.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

const q = query(colRef, orderBy("title", "asc"));
getDocs(q).then( async (s) => {
  let article = [];
  console.log(s);
  // console.log(article);

  await Promise.all(s.forEach( async (doc) => {
    article.push({ ...doc.data(), id: doc.id });
    console.log(article);
    let title = doc.data().title;
    let author = doc.data().author;
    let body = doc.data().body;
    let img = doc.data().img;
    const sparkyRef = ref(storage, `images/${img}`);
    

    getDownloadURL(sparkyRef)
      .then((url) => {
        // console.log(url + img);
        container.innerHTML += `<div class="card hover:shadow-lg cards cursor-pointer"> 
            <img src="${url}.${img}" alt="stew" class="h-32 sm:h-48 w-full object-cover">
            <div class="m-4">
              <span class="font-bold">${title}</span>
              <span class="block text-gray-500 text-sm">${author}</span>
            </div>
            <div class="badge">
              <svg class="inline-block w-5 p-0" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span>25 mins</span>
            </div>
          </div>`;

        const card = document.querySelectorAll(".cards");
        for (let i = 0; i < card.length; i++) {
          card[i].addEventListener("click", () => {
            console.log(article[i].title);
            /*
            container.innerHTML = `<div class="font-body bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
              </svg>

                <div class="">
                  <span class="font-extrabold mb-4">${article[i].title}</span>
                  <br />
                  <span class="font-extrabold mb-4">${article[i].author}</span>
                  <p>${article[i].body}</p>
                </div>
              </div>`;
              */
          });
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  })
  );
});




//signout fuction
signout.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      console.log("user signed out");
      window.location.href = "../index.html";
    })
    .catch((error) => {
      console.log(error);
    });
});
