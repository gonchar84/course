var myElement = document.getElementById("intro");
console.dir(e)

//
parent.appendChild(newLi);
//
parent.insertBefore(newLi, child);
//
parent.append(newLi)

parent.prepend(newLi)

parent.insertAdjacentElement('afterEnd', p);
parent.insertAdjacentElement('beforeBegin', p);

currentNode.nextElementSibling;
currentNode.previousElementSibling;

var getSiblings = function (elem) {

  // Setup siblings array and get the first sibling
  var siblings = [];
  var sibling = elem.parentNode.firstChild;

  // Loop through each sibling and push to the array
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem) {
      siblings.push(sibling);
    }
  }

};
