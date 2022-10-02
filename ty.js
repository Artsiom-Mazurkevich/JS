//html столбцы высота число * 10 ширина20пх цвет рандом

// let colors = ['blue', 'orange', 'red', 'yellow', 'aqua', 'gray', 'black', 'violet', 'green','gold']
// let arr = [];
// for (let i = 0; i < 10; i++) {
//     arr.push(Math.floor(Math.random() * (25 - 1 + 1)) + 1)
// }
//
// const dom = document.body;
// for (let i = 0; i < arr.length; i++) {
//     let div = document.createElement('div')
//     div.setAttribute('id', `${i}`);
//     // document.getElementById(`${i}`).style.height = `${arr[i] * 10}`
//     div.style.height = `${arr[i] * 10}px`
//     div.style.width = `30px`
//     div.style.backgroundColor = `${colors[Math.floor(Math.random() * (colors.length + 1))]}`
//     dom.appendChild(div)
// }
//
// console.log(dom)


const n = {a:12, b: {n:'sdf'}};
const nm = Object.freeze(n);
n.b = 12;
console.log(n === nm)