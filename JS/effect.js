let header = document.querySelector(".effect-header");
let bgheader = document.querySelector(".bg-header-effect");
let school = document.querySelector(".effect-right-school");
let skills1 = document.querySelector(".effect-right-skills1");
let skills2 = document.querySelector(".effect-right-skills2");
let skills3 = document.querySelector(".effect-bottom-skills3");
let skills4 = document.querySelector(".effect-bottom-skills4");
let skills5 = document.querySelector(".effect-left-skills5");
let skills6 = document.querySelector(".effect-left-skills6");

let brand1 = document.querySelector(".effect-right-brand");
let brand2 = document.querySelector(".effect-left-brand");

let up = document.querySelector(".up");
header.classList.add("effect-header-show");
bgheader.classList.add("bg-header-effect-show");




window.onscroll = function () {
    if (this.scrollY >= 540) {
        skills1.classList.add("effect-right-skills-show");
        skills2.classList.add("effect-right-skills-show");
        skills3.classList.add("effect-bottom-skills-show");
        skills4.classList.add("effect-bottom-skills-show");
        skills5.classList.add("effect-left-skills-show");
        skills6.classList.add("effect-left-skills-show");
    }

    if (this.scrollY >= 240) {
        school.classList.add("effect-right-school-show");
    }




    if (this.scrollY >= 1100) {
        brand1.classList.add("effect-right-brand-show");
        brand2.classList.add("effect-left-brand-show")
    }


    this.scrollY >= 250 ? up.classList.add("show") : up.classList.remove("show");
};


up.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};



// window.onscroll = function () {
//     console.log(this.scrollY)
// }