const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

function handleTodoSubmit(event){
    event.preventDefault();
}

toDoForm.addEventListener("submit", handleTodoSubmit);