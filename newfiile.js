function setFormMesssage(formElement, type, message) {
    const message = formElement.querySelector(".form__message")


    messageElement.textContent = message;
messageElement.classList.remove("form__message--sucess", "form__message--error");
messageElement.classList.add('form__message--${type}');
} 
setFormMesssage(loginForm, "success", "you're logged in!");


document.addEventListener("DOMContenLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

document.querySelector("#linkCreateAccount").addEventListener("click", e => {
e.preventDefault();
    loginForm.classList.add("form--hidden");
    createAccountForm.classList.remove("form--hidden");
});
document.querySelector("#linkLogin").addEventListener("click", e => {
    e.preventDefault();
    loginForm.classList.remove("form--hidden");
    createAccountForm.classList.add("form--hidden");
});
loginForm.addEventListener("submit", e => {
e.preventDefault();
setFormMesssage(loginForm, "error", "invalid username/password combination");

});

});