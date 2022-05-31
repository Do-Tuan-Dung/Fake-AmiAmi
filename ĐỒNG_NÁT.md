<!-- ShopHub.js catalog image -->
        <img
        class="product__image"
        src="${prod.img}"
        alt=""
        />

<!-- LogMeIn.js 8.1 -->
logInBtn.addEventListener('click', () => {
    let email = logInEmail.value;
    let pass = logInPass.value;

    if(email == "" || pass == "") {
        alert("Please enter your Email and Password")
    } else {
        alert("Wrong Email or Password")
    }
})

<!-- LogMeIn.js 8.2 -->
//`Pass alert on whether logging in is a success or failure`
function setFormMessage (formElement, type, message) {
    const messageElement = formElement.querySelector(".js-form-alert");

    messageElement.textContent = message;
    messageElement.classList.remove("js-form-alert__success", "js-form-alert__error");
    messageElement.classList.add(`js-form-alert__${type}`);
}

//`Pass alert when invalid input`
function setInputError(inputElement, message) {
    inputElement.classList.add(".js-input__error");
    inputElement.parentElement.querySelector(".js-input__error__warning").textContent = message;
}

//`Clear previous alert`
function clearInputError(inputElement) {
    inputElement.classList.remove(".js-input__error");
    inputElement.parentElement.querySelector(".js-input__error__warning").textContent = "";
}


document.addEventListener("DOMContentLoaded", () => {
    const logInForm = document.querySelector('#js-login-form');

    //Prevent log in through page refresh
    logInForm.addEventListener("submit", e => {
        e.preventDefault();
    
        setFormMessage(logInForm, "error", "Incorrect username/password!");
    });

    //After unfocus from an input -> Runs check on input data -> Give error message -> Clear error
    document.querySelectorAll(".js-form__input").forEach (inputElement => {
    let email = logInEmail.value;
    let pass = logInPass.value;

    inputElement.addEventListener("blur", e => {
        if (email == "" || pass == "") {
            setInputError(inputElement, "Please enter your Email and Password");
        } else {
            setInputError(inputElement, "Wrong Email or Password");
        }
    })

    inputElement.addEventListener("input", e => {
        clearInputError(inputElement);
    })
})