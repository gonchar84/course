// массив задач
const todos = [
  { name: 'task1', key: 1 },
  { name: 'task2', key: 2 },
  { name: 'task3', key: 3 },
  { name: 'task4', key: 4 },
  { name: 'task5', key: 5 },
  { name: 'task6', key: 6 },
  { name: 'tasks7', key: 7 },
];

// делаем запрос и вытаскиваем нужный тег
const parent = document.querySelector("body > div > div:nth-child(4) > ul");

// удаляем весь html в теге
parent.innerHTML = '';

// цикл - todos
for(let i=0; i < todos.length; i++) {
  // помещаем нужный элемент в переменную
  let todo = todos[i];

  // заполняем html тега
  parent.innerHTML += `<li data-id="${todo.id}"> 
                            ${todo.name} 
                       </li>`;
}

// ищем тэг по аттр id
let tag = document.getElementById('js-bar');

// ищем тэги по имени тега
let tags = document.getElementsByTagName('div');

// ищем тэги по selector запросу
const tagsWithClassRow = document.querySelectorAll(".row");


// ищем тэг по selector запросу
const span = document.querySelector("span");

// меняем его HTML, todos.length = кол во элементов в массиве
span.innerHTML = `${todos.length} items left`;

// ищем первый ul в документе
const result = document.querySelector("body div ul");

// ищем первый ul с классом list в документе
const result2 = document.querySelector("body div ul.list");

// ищем первый ul с классом list в документе, > означает у детей body
const result3 = document.querySelector("body > div ul.list");

// ищем первый div с классом limiter в документе, nth-child - порядковый номер ребенка
const result4 = document.querySelector("body div.limiter div:nth-child(4)");



const fon = document.getElementById("js-bar");
fon.style.background = "red";


const color = document.querySelector("h1");
color.style.color = "blue"; 

















