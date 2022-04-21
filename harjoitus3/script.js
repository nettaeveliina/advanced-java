let button = document.querySelector("button");

button.addEventListener("click", sendData);

/**
 * 
 * @param {Event} event 
 */
function sendData(event){
    //estää sivun päivittämisen
    event.preventDefault();

    let inputField = document.getElementById("fname");

    console.log(inputField.value);


}

