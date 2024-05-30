const loginform = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");


const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginform.classList.add(HIDDEN_CLASS);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
};

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASS);
};

const saveUserName = localStorage.getItem(USERNAME_KEY);

if(saveUserName === null){
        loginform.classList.remove(HIDDEN_CLASS);
        loginform.addEventListener("submit", onLoginSubmit);
    } else {
        paintGreetings(saveUserName);
    }



