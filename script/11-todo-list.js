 const todoList = [];//empty array to store todo items

function addTodo()
{
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    console.log(name);

    todoList.push(name);
    console.log(todoList);
    //it will add  name to array and print array in console :) 

    inputElement.value = '';//will make th etext enpty when add buton is clicked

    
}
