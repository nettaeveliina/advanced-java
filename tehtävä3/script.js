
//harjoitus 1
let h1 = document.querySelector("h1");
h1.classList.add("special");
h1.style.width ="250px"

//harjoitus 2
let p = document.querySelector("p");

p.addEventListener("mouseenter", changeColor);
p.addEventListener("mouseleave", changeColor);
p.addEventListener("click", changeBg);

function changeColor(){
    p.classList.toggle("textcolor");
}

function changeBg(){
    p.classList.toggle("textbg")
}

//harjoitus 3
let sotu = document.getElementById("sotu");
sotu.addEventListener("input", checkValidity);

function checkValidity(){
    let text = sotu.value;

    if(text.length == 11){
        sotu.classList.remove("invalid")
    }else{
        sotu.classList.add("invalid");
    }
}