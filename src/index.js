import { initializeApp } from "firebase/app";
import {
  query,
  orderBy,
  collection,
  getDocs,
  getFirestore,
  limit,
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
const container = document.querySelector("#grid");
const openBody = document.querySelector("#openBody");
const mainBody = document.querySelector("#mainBody");

burger.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

let key = 0;

const db = getFirestore();
const colRef = collection(db, "articles");
const storage = getStorage();

let article = [];
let newArticle = [];

const q = query(colRef, orderBy("title", "asc"), limit(6));
getDocs(q)
  .then(async (s) => {
    let allUrl = [];
    // console.log(s);
    // console.log(article, "flog");
    const pro = new Promise((resolve, reject) => {
      s.forEach(async (doc) => {
        // console.log(article);
        let title = doc.data().title;
        let author = doc.data().author;
        let body = doc.data().body;
        let img = doc.data().img;
        let id = doc.id;

        newArticle.push({
          id: id,
          tit: title,
          bod: body,
          aut: author,
        });
        key++;

        const sparkyRef = ref(storage, `images/${img}`);
        const url = getDownloadURL(sparkyRef);
        allUrl.push(url);
        article.push({ ...doc.data(), id: doc.id, url });
        // console.log("article pushed")
        // .then((url) => {
        // console.log(url + img);
      });
      resolve(allUrl);
    });
    return pro;
  })
  .then(async (pro) => {
    let allUrlS = await Promise.all(pro);
    // console.log(allUrlS, "sna")
    // console.log(article, "snaA")

    // let i = 1;
    article.map((article, index) => {
      container.innerHTML += `<div class="card hover:shadow-lg cards cursor-pointer"> 
    <img src="${allUrlS[index]}.${article.img}" alt="stew" class="h-32 sm:h-48 w-full object-cover">
    <div class="m-4">
      <span class="font-bold">${article.title}</span>
      <span class="block text-gray-500 text-sm">${article.author}</span>
    </div>
    <div class="badge">
      <svg class="inline-block w-5 p-0" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      <span>25 mins</span>
    </div>
  </div>`;

      const card = document.querySelectorAll(".cards");
      for (let i = 0; i < card.length; i++) {
        card[i].addEventListener("click", () => {
          mainBody.classList.add("hidden");
          openBody.innerHTML = `<div class="bg-slate-200 justify-center mr-4 ml-4 mt-5 rounded p-5">
      <div>
          <p id="closeBody" class="text-right text-lg font-extrabold cursor-pointer ml-60">X</p>
          <p class="text-lg text-primary font-bold border-b-2 border-primary mb-4">Title: ${newArticle[i].tit} </p> 
          <p class="text-sm text-primary font-bold border-b-2 border-primary mb-4">Author: ${newArticle[i].aut} </p>
      </div>

      <div>
          <p class="mb-5 mt-5">${newArticle[i].bod}</p>
      </div>
  </div>`;

          const closeBody = document.querySelector("#closeBody");
          closeBody.addEventListener("click", () => {
            openBody.classList.add("hidden");
            mainBody.classList.remove("hidden");
            console.log("close");
            location.reload();
          });
        });
      }
    });
  });

/* CONTACT MAIL */
const openForm = document.getElementById("open");
const closeForm = document.getElementById("close");
// const form = document.getElementById("contactForm");
// const submit = document.getElementById("submit");

openForm.addEventListener("click", () => {
  console.log("clicked");
  document.getElementById("contactForm").style.display = "block";
});
closeForm.addEventListener("close", () => {
  document.getElementById("contactForm").style.display = "hidden";
});

// for EmailJs
const contactP = document.getElementById("contactP");
const submitContact = document.getElementById("submit");

submitContact.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicked");
  // let name = document.getElementById("name").value;
  // console.log(name);
  let templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("msg").value,
  };

  if (
    templateParams.email == "" ||
    templateParams.email == "" ||
    templateParams.message == ""
  ) {
    console.log("empty feild");
    contactP.innerHTML = "Field cannot be empty!";
    contactP.style.color = "black";
  } else {
    console.log("filled");
    emailjs
      .send("food_article", "food_article", templateParams)
      .then((res) => {
        console.log("SUCCESS!", res.status, res.text);
        contactP.innerHTML = "Message sent!";
        contactP.style.color = "green";

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("msg").value = "";
      })
      .catch((err) => {
        console.log("FAILED!", err);
        contactP.innerHTML = "Message not sent!";
        contactP.style.color = "red";
      });
  }
});
