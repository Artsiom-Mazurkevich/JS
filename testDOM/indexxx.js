// const spliter = document.getElementById('split');
// spliter.addEventListener('click', (e) => {
//
// })


const titleCity = document.getElementById('title');
const populationCity = document.getElementById('population');
const btnAdd = document.getElementById('add');
const containerCities = document.getElementById('cities');

let count = 0;
let arr = [];
btnAdd.addEventListener('click', (e) => {
    e.preventDefault();
    arr.push(count += 1)
    const span = document.createElement('span');
    span.id = count
    if (span.id % 2 === 0) {
        span.style.cssText = `
        width: 150px; 
        height: 150px; 
        border: 1px solid black; 
        margin: 3px animation-name: 
        blink animation-timing-function:linear animation-duration:1s;
  animation-iteration-count: infinite; @keyframes blink {
  50% {
    opacity: 0;
  }
}`
    } else {
        span.style.cssText = `width: 150px; height: 150px; border: 1px solid black; margin: 3px animation-name: blink;
                                animation-timing-function: linear;
                                animation-duration: 0.3s;
                                animation-iteration-count: infinite; 
                                @keyframes blink {50% {opacity: 0;}}
                                `
    }

    span.innerHTML = `${titleCity.value} - ${populationCity.value}`
    containerCities.appendChild(span)
})
