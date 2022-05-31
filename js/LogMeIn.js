//Slider Effect
const signUpButton = document.getElementById('js-signUp');
const signInButton = document.getElementById('js-signIn');
const container = document.getElementById('js-container');

signUpButton.addEventListener('click', () => {
    container.classList.add("js-right-panel__active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("js-right-panel__active");
});

//Logging in
const logInForm = document.getElementById('js-login-form');
const logInBtn = document.getElementById('login-button');
const logInEmail = document.getElementById('li-email');
const logInPass = document.getElementById('li-password');
const logInWarn = document.getElementsByClassName('js-form-warning');

logInBtn.addEventListener('click', () => {
    let email = logInEmail.value;
    let pass = logInPass.value;

    if(email == "" || pass == "") {
        alert("Please enter your Email and Password")
    } else {
        alert("Wrong Email or Password")
    }
})