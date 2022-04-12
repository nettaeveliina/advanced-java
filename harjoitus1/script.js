let firstLi = document.querySelector("li");
let allLi = document.querySelectorAll("li");

/**@type{Element} */ //toimii ilman tätäkin
let elem;
for (elem of allLi) {
    console.log(elem.textContent)
}
//let x = document.querySelectorAll("#days>li");

// firstLi.textContent = "Netta Nissilä" //käytä mieluumin tätä
// firstLi.innerHTML = "<h1>netta</h1>" vain testailuun ei kannata käyttää