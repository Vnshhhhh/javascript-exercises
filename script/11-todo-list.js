
const todoList = []; // empty array to store todo items

renderTodoList();

function renderTodoList()
//render means to display on  webpage
    {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html = `<p>${todo}</p>`;
        todoListHTML += html; 
        // combine all the HTML code together
    }//generating html using javascript

    /**
     steps when creating webpag ewith javascipt
     1. Save the data (here isaved data in a array)
     2. genera tehtml using data
     3. make th epage interative
     */

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
    }

function addTodo() 
    {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    console.log(name);

    todoList.push(name);
    console.log(todoList);
    // it will add name to array and print array in output :)

    inputElement.value = ''; 
    // will make the text empty when Add button is clicked

    renderTodoList();
    }

