const todoList = [{
  name: 'Make dinner',
  dueDate: '2025-02-15'
},
{
  name: 'Make FB',
  dueDate: '2025-02-15'
}];


function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const dateElement = document.querySelector('.js-date-input');
 

  const name = inputElement.value;
  const dueDate = dateElement.value;

  if (name !== ''){
    todoList.push({
      name, dueDate
    });
  }
  else{
    console.log('Nothings New')
  }
  inputElement.value = '';
  renderToDoList();
}



function renderToDoList(){
  let todoListHtml = '';

  for(let i=0; i<todoList.length; i++){
    const {name, dueDate} = todoList[i];
    todoListHtml += `
    <div>${name}</div> 
    <div>${dueDate}</div>
    <button onclick="
    todoList.splice(${i}, 1);
    renderToDoList();
    ">Delete</button>
    `;
  }

  let jsResult = document.querySelector('.js-result');
  jsResult.innerHTML = todoListHtml;
}

renderToDoList();