const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("js-right-panel__active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("js-right-panel__active");
});