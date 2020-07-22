var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

// initially set the text content of the todolist ot an empty string
randerTodos();

// now turn it into a function
function renderTodos() {
    // clear todoList element and update todoCountSpan
    todoList.innerHTML = "";
    // todoCountSpan should show the total count of todos on the page.
    todoCountSpan.textContent = todos.length;

    //inside of your render function you will also need a for loop.
    // render a new li for each todo
    for (var i = 0; i < todos.length; i++) {
        // it should set the content of the created 'li' element ot the value of the current array index
        var todo = todos[i];

        // fianlly the 'li' should be appended to the 'ul' provided
        var li = document.createElement("li");
        li.textContent = todo;
        todoList.appendChild(li);
    }
}