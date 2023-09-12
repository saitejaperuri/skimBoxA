let card1= document.getElementById("card1");
let card2= document.getElementById("card2");
let card3= document.getElementById("card3");

function btn1() {
    card1.classList.remove("d-none");
    card2.classList.add("d-none");
    card3.classList.add("d-none");
}

function btn2() {
    card1.classList.add("d-none");
    card2.classList.remove("d-none");
    card3.classList.add("d-none");
}

function btn3() {
    card1.classList.add("d-none");
    card2.classList.add("d-none");
    card3.classList.remove("d-none");
}
