console.log("navbar script");

// border-primary border-r-4
const HOME = document.querySelectorAll("#HOME");
const ABOUT = document.querySelectorAll("#ABOUT");

for(let i = 0; i < HOME.length; i++){
    HOME[i].addEventListener("click", ()=> {
        if(!HOME[i].classList.contains("navFull")){
            HOME[i].classList.add("navFull");
            ABOUT[i].classList.remove("navFull");
            // console.log(ABOUT[i]);
        }
    });
}
for(let i = 0; i < ABOUT.length; i++){
    ABOUT[i].addEventListener("click", ()=> {
        if(!ABOUT[i].classList.contains("navFull")){
            ABOUT[i].classList.add("navFull");
            HOME[i].classList.remove("navFull");
            // console.log(HOME[i]);
        }
        // console.log(ABOUT[i]);
    })
}