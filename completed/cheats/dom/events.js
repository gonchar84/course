
// <button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>


const newLi = document.createElement("p");
newLi.innerText = 11;

parent.insertAdjacentElement('afterEnd', newLi);
parent.onclick = function() {
  const rndCol = 'red';
  document.body.style.backgroundColor = rndCol;
}

parent.addEventListener('click', function(event) {
  console.dir(event)
  console.dir(event.currentTarget)
  console.dir(event.target)
});

parent.addEventListener('dblclick', function(event) {
  console.dir(event)
  console.dir(event.currentTarget)
  console.dir(event.target)
});

parent.addEventListener('mouseover', function(event) {
  let x= event.clientX;
  let y= event.clientY;
  let cursor="Your Mouse Position Is : " + x + " and " + y ;
  console.log(cursor)

});

parent.addEventListener('mouseover', function(event) {
  console.dir(event)

  // highlight the mouseover target
  event.target.style.color = "orange";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);

});

element.addEventListener("mouseout", function(event) {
  console.dir(event)
  console.dir(event.currentTarget)
  console.dir(event.target)
});

const form = document.getElementById('js-insert');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const input = e.currentTarget.firstElementChild;
  console.log(input.value)

})

const form = document.getElementById('js-insert');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const input = e.currentTarget.firstElementChild;
  console.log(input.value)

})



