function handleTodosClick(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayUsers(data))
}

function displayUsers (todos){
    const todosContainer = document.getElementById('todos-container');
    todosContainer.classList.add('todos')

    for(const todo of todos.slice(0,10) ){
    const div = document.createElement('div');
    div.classList.add('todo')
    const h3 = document.createElement('h3');
    div.appendChild(h3);
    const p = document.createElement('p');
    div.appendChild(p);
    div.innerHTML = `<p>${todo.id}</p><h3>${todo.title}</h3>
    <p>${todo.completed}</p>
    `;
    todosContainer.appendChild(div);
    }
}