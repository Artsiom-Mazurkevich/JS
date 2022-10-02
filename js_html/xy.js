// /*const body = document.querySelector('body');
// const x = document.getElementById('x');
// const y = document.getElementById('y');
// body.addEventListener('mousemove', (e) => {
//     x.innerText = `x = ${e.screenX}`
//     y.innerText = `y = ${e.screenY}`
//
//
//     // if (e.screenX < 500) {
//     //     x.style.color = 'red'
//     // }
//     // if (e.screenX > 500 && e.screenX <= 1000) {
//     //     x.style.color = 'orange'
//     // }
//     // if (e.screenX > 1000) {
//     //     x.style.color = 'green'
//     // }
//     // if (e.screenY < 500) {
//     //     y.style.color = 'red'
//     // }
//     // if (e.screenY > 500 && e.screenY <= 1000) {
//     //     y.style.color = 'orange'
//     // }
//     // if (e.screenY > 1000) {
//     //     y.style.color = 'green'
//     // }
//
//
//     // x.style.color = 'red'
//     // y.style.color = 'red'
//     // if (e.screenX > 500 && e.screenX <= 1000) {
//     //     x.style.color = 'orange'
//     // } else if (e.screenX > 1000) x.style.color = 'green';
//     // if (e.screenY > 500 && e.screenY <= 1000) {
//     //     y.style.color = 'orange'
//     // } else if (e.screenY > 1000) {y.style.color = 'green'};
//
//
//     x.style.color = GetColor(e.screenX);
//     y.style.color = GetColor(e.screenY);
// });
//
// function GetColor(value) {
//     if (value < 500) {
//         return 'red'
//     }
//     else if (value > 500 && value <= 1000) {
//         return  'orange'
//     }
//     else {
//         return 'green'
//     }
// }*/


//=================================================================

const viev = document.getElementById('view');
const btn = document.getElementsByTagName('button');
let result = 0;


for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', () => {
        // if (btn[i].value !== '=') viev.innerText += btn[i].value;
        // if (btn[i].value === 'c') viev.innerText = null;
        // if (btn[i].value === '=') {
        //     result = eval(viev.innerHTML)
        //     viev.innerText = result
        // }
        if (btn[i].value === 'c') {
            viev.innerText = '';
        }
        else if (btn[i].value === '=') {
            let expressionView = viev.innerText;

            console.log(expressionView.split(/[-+/*]/))
        }
        else {
            viev.innerText += btn[i].value;
        }

    } )
}

// btn.map(btn => {btn.addEventListener('click', () => {
//     viev.innerText = btn.value
// } )})
