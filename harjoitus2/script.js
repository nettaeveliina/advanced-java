//let h = document.getElementById("header");

// h.classList.toggle("important"); //tilanteesta riippuen joko lisää tai poistaa
//h.classList.add("important"); 
//h.classList.add("strong");

// h.classList.remove("important");

//h.style.color = "white";
//h.style.backgroundColor = "gray";
//h.style.fontSize = "40px";



//let button = document.getElementById("ok");


//button.addEventListener("mouseover", doSome);
//button.addEventListener("mouseleave", doSome);

//button.addEventListener("mouseup", doSome);


let div = document.getElementById("header");


div.addEventListener("click", doSome);


/**
 * 
 * @param {Event} event 
 */
function doSome(event){
    event.currentTarget.classList.add("strong");

}