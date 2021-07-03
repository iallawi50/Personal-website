let school = document.querySelector(".effect-right-school");


let skills1 = document.querySelector(".effect-right-skills1");
let skills2 = document.querySelector(".effect-right-skills2");
let skills3 = document.querySelector(".effect-bottom-skills3");
let skills4 = document.querySelector(".effect-bottom-skills4");
let skills5 = document.querySelector(".effect-left-skills5");
let skills6 = document.querySelector(".effect-left-skills6");

let brand1 = document.querySelector(".effect-right-brand");
let brand2 = document.querySelector(".effect-left-brand");

let span = document.querySelector(".up");




window.onscroll = function () {
    this.scrollY >= 250 ? span.classList.add("show") : span.classList.remove("show");

    this.scrollY >= 3 ? school.classList.add("effect-right-school-show") : '';
    this.scrollY >= 300 ? skills1.classList.add("effect-right-skills-show") : '';
    this.scrollY >= 300 ? skills2.classList.add("effect-right-skills-show") : '';
    this.scrollY >= 300 ? skills3.classList.add("effect-bottom-skills-show") : '';
    this.scrollY >= 300 ? skills4.classList.add("effect-bottom-skills-show") : '';
    this.scrollY >= 300 ? skills5.classList.add("effect-left-skills-show") : '';
    this.scrollY >= 300 ? skills6.classList.add("effect-left-skills-show") : '';
    this.scrollY >= 400 ? brand1.classList.add("effect-right-brand-show") : '';
    this.scrollY >= 400 ? brand2.classList.add("effect-left-brand-show") : '';
};


span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
