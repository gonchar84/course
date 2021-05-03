
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

// ищем узлы по классу
const result5 = document.getElementsByClassName("asasas");

if (el.hasChildNodes()) {
    el.childNodes.forEach(child => el.removeChild(child));
}

// examples
const h1 = document.querySelector('body > h1');

if(h1) {

    h1.innerText = '1111'
    h1.nodeName
    h1.style.backgroundColor = 'red'
    h1.classList.add('red')
    h1.getBoundingClientRect().top  + window.scrollY;
    h1.remove()

    h1.getAttribute('')
    h1.setAttribute('1',1212)
   // listItem.parentNode.replaceChild(newItem, listItem);
}



