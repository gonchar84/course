const ToDos = [
  {id: 1, title: 'task 1'},
  {id: 2, title: 'task 2'},
  {id: 3, title: 'task 3'},
  {id: 4, title: 'task 4'},
];

const listNode = document.querySelector('body > div > div:nth-child(4) > ul');

listNode.innerHTML = '';
for (let i = 0; i < ToDos.length; i++) {

  listNode.innerHTML += `<li data-id="${ToDos[i].id}">
                             <div class="todo">
                               <input type="checkbox" class="toggle">
                               <span>${ToDos[i].title}</span><button class="destroy"></button></div>
                               <input type="text" class="edit">
                           </li>`;
}






