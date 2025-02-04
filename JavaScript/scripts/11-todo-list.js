const todoList = [];

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  if (name !== ''){
    todoList.push(name);
  }
  else{
    console.log('Nothings New, Nothings New, Nothings New, Nothings New')
  }

  inputElement.value = '';
  console.log(todoList);
}