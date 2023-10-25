function checkEmail() {
    let email = document.getElementById('txtEmail');
    let errMess = document.getElementById('errMessage')
    let card = document.getElementById("card")
    let success = document.getElementById("success")
    let span = document.getElementById("input-name"); 
    let emailValue = email.value;
    span.textContent = emailValue; 

    let filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!filter.test(email.value)) {
        email.style.borderColor = "red";
        email.style.backgroundColor = "#FFE8E6";
        errMess.style.visibility = "visible"
    } else {
        
        card.style.display = "none";
        success.style.display = "block"

    }
}

function dismiss () {
    let card = document.getElementById("card")
    let success = document.getElementById("success")

    card.style.display = "flex";
        success.style.display = "none"


}

function clearError() {
    let email = document.getElementById('txtEmail');
    let errMess = document.getElementById('errMessage');
    email.style.borderColor = "";
    email.style.backgroundColor = "";
    errMess.style.visibility = "hidden";
    email.value = "";
}

// Add a click event listener to the input field
let emailInput = document.getElementById('txtEmail');
emailInput.addEventListener('click', clearError);





