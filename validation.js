function checkEmail() {
    const email = document.getElementById('txtEmail');
    const errMess = document.getElementById('errMessage')
    const card = document.getElementById("card")
    const success = document.getElementById("success")
    const emailValue = email.value;
    const span = document.getElementById("input-name"); 
    span.textContent = `${emailValue}`; 

    const filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
    const card = document.getElementById("card")
    const success = document.getElementById("success")

    card.style.display = "flex";
        success.style.display = "none"


}

function clearError() {
    const email = document.getElementById('txtEmail');
    const errMess = document.getElementById('errMessage');
    email.style.borderColor = "";
    email.style.backgroundColor = "";
    errMess.style.visibility = "hidden";
    email.value = "";
}

// Add a click event listener to the input field
const emailInput = document.getElementById('txtEmail');
emailInput.addEventListener('click', clearError);





