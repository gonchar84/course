// массив задач
const todos = [
  { name: 'task1', key: 1, status: "overdue" },
  { name: 'task2', key: 2, status: "overdue" },
  { name: 'task3', key: 3, status: "done" },
  { name: 'task4', key: 4, status: "active" },
  { name: 'task5', key: 5, status: "active" },
  { name: 'task6', key: 6, status: "active" },
  { name: 'task7', key: 7, status: "active" },
];

// делаем запрос и вытаскиваем нужный тег
const parent = document.querySelector("body > div > div:nth-child(4) > ul");

// удаляем весь html в теге
parent.innerHTML = '';

/* <li data-id="1614959130076">
<div class="todo">
  <input type="checkbox" class="toggle">
    <span>To</span>
    <button class="destroy"></button>
    </div><input type="text" class="edit"></li> */


// цикл - todos
for (let i = 0; i < todos.length; i++) {
  // помещаем нужный элемент в переменную
  let todo = todos[i];
  // создаем тег li
  let newLi = document.createElement("li");
  let newDiv = document.createElement("div");
  let input = document.createElement("input");
  let span = document.createElement("span");
  let button = document.createElement("button");
  newDiv.classList.add("todo")
  input.setAttribute("type", "checkbox");
  input.classList.add("toggle")
  span.innerText = `${todo.name}`
  button.classList.add("destroy")

  newDiv.append(input, span, button)

  newLi.appendChild(newDiv)
  // добавляем событие
  newLi.onclick = function () {
    // alert(`${todo.name}`);
    // добавляем класс completed
    newLi.classList.add("completed")
  }
  newLi.ondblclick = function () {

    newLi.classList.remove("completed")
  }

  newLi.onmouseover = function () {

    newLi.style.border = "1px solid green"
  }

  newLi.onmouseout = function () {

    newLi.style.border = ""
  }

  const form = document.getElementById("insert__form");
  form.onsubnit = function(event){
event.preventDefault()

// console.log(event)
  }



// todos.push(
//   { name: event.currentTarget.firstElementChild.value, key: 7, status: "active" }
// )


  // вставляем текст
  // newLi.innerText = `${todo.name}`

  //  вставляем тег
  parent.appendChild(newLi);

}




let newLi = document.createElement("li");

newLi.innerText = `super first`

parent.prepend(newLi)

let superLast = document.createElement("li");

superLast.innerText = `super last`

parent.appendChild(superLast)


let middleLast = document.createElement("li");

middleLast.innerText = `middle last`

// вставляем перед тегом

parent.insertBefore(middleLast, parent.children[3])

parent.nextElementSibling
parent.previousElementSibling

let coint = document.getElementById('js-bar')
console.log(coint)
// его брат выше
console.log("previousElementSibling", coint.previousElementSibling)

// его брат ниже
console.log("nextElementSibling", coint.nextElementSibling)

let p = document.createElement("p");
p.innerText = "я выше";
parent.insertAdjacentElement("beforeBegin", p);

let p2 = document.createElement("p");
p2.innerText = "я ниже";
parent.insertAdjacentElement("afterEnd", p2);

// заполняем html тега
// parent.innerHTML += `<li data-id="${todo.id}">
//       ${todo.name}
//     </li>`;


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





const blockIdList = document.getElementById("js-list");

blockIdList.innerHTML = ""

let div = document.createElement("div");
div.classList.add("col-1-4");

let span1 = document.createElement("span");

span1.classList.add("total");

span1.setAttribute("id", "js-total");

span1.innerText = `${todos.length} items left`

div.appendChild(span1);

blockIdList.appendChild(div)




