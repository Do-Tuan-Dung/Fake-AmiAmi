const signUpButton = document.getElementById('js-signUp');
const signInButton = document.getElementById('js-signIn');
const container = document.getElementById('js-container');

signUpButton.addEventListener('click', () => {
    container.classList.add("js-right-panel__active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("js-right-panel__active");
});