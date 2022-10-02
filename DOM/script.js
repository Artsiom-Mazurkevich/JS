let articleDiv = document.querySelector("div.article");
// создаем элемент
let elem = document.createElement("h2");
let elem_h3 = document.createElement('h3')
// создаем для него текст
let elemText = document.createTextNode("Привет мир");
// добавляем текст в элемент в качестве дочернего элемента
elem.appendChild(elemText);
let sp1 = document.createElement("span");

// Get the reference element
let sp2 = document.getElementById("childElement");
// Get the parent element
let parentDiv = sp2.parentNode;

// Insert the new element into before sp2
let elem_322 = document.createElement("h2");
elem_322.textContent = 'dfgdfh';
parentDiv.insertBefore(elem_322, sp2);
// добавляем элемент в блок div
articleDiv.appendChild(elem);

class Hello_Yura extends HTMLElement{
    constructor() {
        super();
    }
}

customElements.define('hello-yura', Hello_Yura)

const blueRect = document.getElementById('blueRect');
const redRect = document.getElementById('redRect');
blueRect.addEventListener('click', (e) => {
    console.log("Событие на blueRect");
}, true)
redRect.addEventListener('click', (e) => {
    console.log("Событие на redRect");
    e.stopPropagation()
}, true)

document.body.addEventListener("click", function(){
    console.log("Событие на body");
}, true);

const query = document.querySelector('span');
console.log(query)