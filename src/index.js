import { initializeApp } from "firebase/app";
import { query, orderBy, collection, getDocs, getFirestore } from "firebase/firestore";
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

burger.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

const db = getFirestore();
const colRef = collection(db, "articles");
const storage = getStorage();

let article = [];

const q = query(colRef, orderBy("title", "asc"));
getDocs(q).then( async (s) => {
  let allUrl = []
  // console.log(s);
  // console.log(article, "flog");
   const pro = new Promise((resolve, reject) => {s.forEach( async (doc) => {
    // console.log(article);
    let title = doc.data().title;
    let author = doc.data().author;
    let body = doc.data().body;
    let img = doc.data().img;
    const sparkyRef = ref(storage, `images/${img}`);
     const url =  getDownloadURL(sparkyRef)
     allUrl.push(url);
      article.push({ ...doc.data(), id: doc.id, url });
      // console.log("article pushed")
      // .then((url) => {
        // console.log(url + img);  
    });
    resolve(allUrl);
  });
    return pro        
}).then(async(pro) => {
  
  let allUrlS = await Promise.all(pro);
  // console.log(allUrlS, "sna")
  // console.log(article, "snaA")
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
            // console.log(article[i].title);
          });
        }
  })
 
});





  /* CONTACT MAIL */
  const openForm = document.getElementById("open");
  const closeForm = document.getElementById("close");
  const form =  document.getElementById("contactForm");
  const submit = document.getElementById("submit");

  openForm.addEventListener("click", ()=> {
    console.log("clicked");
    document.getElementById("contactForm").style.display = "block";
  });
  closeForm.addEventListener("close", ()=> {
    document.getElementById("contactForm").style.display = "hidden";
  });
  submit.addEventListener("click", (e)=> {
    e.preventDefault();

    let name = form["name"].value;
    let email = form["email"].value;
    let message = form["message"].value;
    console.log(name, "\n", email, "\n", message);
  })

