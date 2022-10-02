// const person = new Object({
//     name: 'Yuri',
//     age: 10,
//     tel: 51485124,
//     saHi: function () {
//         console.log('Hi')
//     }
// });


// person.prototype = () => {
//     console.log (1234)
// };


// const Jhon = Object.create(person);

// const str = 'I am string'

// const str = new String('hello world')


///////////////////this///////////call///bind/////apply/////////


// function hello() {
//     console.log('hello world', this)
// };
//
// const dog = {
//     name: 'teddy',
//     age: 3,
//     sayHello: hello,
//     sayHelloWindow: hello.bind(document),
//     logInfo: function () {
//         console.log(`Name is ${this.name}`)
//         console.log(`Age is ${this.age}`)
//     }
// };
//
// const lena = {
//     name: 'lena',
//     age: 20,
//     job: 'frontend',
// };
//
// dog.logInfo.bind(lena)();


// $("h2").css("color", "red");
// $('#paragraph').css({
//     color: 'blue',
//     backgroundColor: 'black'
//     }
// )


// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     if (fuelLeft == 0) {
//         return false
//     }
//     else {return (mpg / 25) * fuelLeft === distanceToPump ? true : false}
// };


// function find_average(array) {
//
//  if (array.length === 0) {
//   return 0;
//  } else {
//   let  arrr = array.reduce((s, c) => s + c);
//   return arrr / array.length
//  }
//
// }
// console.log(find_average([]));


//написать рекурсивную функцию копирования сложного объекта


// function arrayDiffVeryFast(a, b) {
//     let bs = new Set(b);
//     let difference = [...a].filter(x => !bs.has(x));              5kyu
//
//     console.log(difference) ;
// }
// arrayDiffVeryFast([1,2,2,2,3,5,5,1,2,4,5,1], [2,1,5]);


let myCrazyObject = {
    "name": "Нелепый объект",
    "some array": [7, 9, {purpose: "путаница", number: 123}, 3.3],
    "random animal": "Банановая акула"
};

// console.log(myCrazyObject['some array'][2].number);
//
//
//
// let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
// let randomString = "";
//
// while (randomString.length > 7) {
//     Math.floor(Math.random() * alphabet.length)
// }
//
// console.log(randomString)


// const obj = {
//      fn: function consLog() {
//          console.log('1')
//      },
//      isM: true,
//      kuy: {first:1, second: 2, arr: ['1', '2']},
//      something: undefined
//  }
//  console.log(obj.fn())
//
//
//
//  let clone = {...obj};
//  clone.isM = false;
//  console.log(clone);
//  console.log(obj);


// let students = [
//     {
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 85
//     },
//     {
//         name: "Alex",
//         age: 21,
//         isMarried: true,
//         scores: 89
//     },
//     {
//         name: "Nick",
//         age: 20,
//         isMarried: false,
//         scores: 120
//     },
//     {
//         name: "Alex",
//         age: 19,
//         isMarried: false,
//         scores: 100
//     }
// ];
//
//
// const arr = [];
//
// for (let i = 0; i < students.length; i++) {
//     const result = students[i].name;
//     console.log(result)
//     arr[i] = result
// };
//
// console.log(arr)


// const myFind = (array, callbck) => {
//     const arr = []
//     for (let i = 0; i < array.length; i++) {
//        if (callbck(array[i])) {
//            arr.push(array[i])
//        }
//     }
//     return arr
// }
//
//
//
// console.log(myFind(students, students => students.name === 'Alex'))


/*let input = document.querySelector('#input');
const btnAdd = document.querySelector('#addBtn');
const ul = document.querySelector('#result');
const spanTotal = document.querySelector('#total');

btnAdd.addEventListener('click', () => {
    if (input.value === '') return;
    createAndRemove(input.value);
    input.value = ''
})


function createAndRemove() {
    const li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = input.value


    const btnRemove = document.createElement('button');
    li.appendChild(btnRemove);
    btnRemove.textContent = 'remove';
    btnRemove.addEventListener('click', () => {
        ul.removeChild(li)
    })

}*/


// let arr = x => (x,0,1,2,3,4,15,100,26);
// let result = arr(10);
// console.log(result)


/*const add = document.getElementById('addBtn');
const input = document.getElementById('input');
const containerForTask = document.getElementById('task');

let arrayTasks = []

add.addEventListener("click", () => {
    const valueInput = input.value;
    if (valueInput !== '' && valueInput !== ' ') {
        let obj = {
            title: valueInput,
            isDone: false
        }
        arrayTasks.push(obj)
    } else return;
    console.log(arrayTasks)
    addTask()
})


function addTask () {
    for (let i = 0; i < arrayTasks.length; i++) {
        let str = arrayTasks[i].title
    }
}

addTask()*/


/*
function bonusTime(salary, bonus) {
    return bonus ? `£${salary * 10}`: `£${salary}`
}

console.log(bonusTime(10000, true))*/


// class Block{
//
//     constructor(data){
//        this.width = data[0]
//        this.length = data[1]
//        this.height = data[2]
//     }
//     getWidth () {
//         return this.width
//     }
//     getLength () {
//         return this.length
//     }
//     getHeight() {
//         return this.height
//     }
//     getVolume () {
//         return this.width * this.length * this.height
//     }
//     getSurfaceArea () {
//         return 2 * (this.length * this.width + this.width * this.height + this.height * this.length)
//     }
//
// }


console.log('request data')


// setTimeout( () => {
//     console.log('preparing data');
//     const backendData = {
//         serwer: 'aws',
//         port: 2000,
//         status: 'working'
//     };
//     setTimeout( () => {
//         backendData.modified = true
//         console.log('data recived', backendData)
//     }, 2000)
// }, 2000)


// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('preparing data');
//         const backendData = {
//             serwer: 'aws',
//             port: 2000,
//             status: 'working'
//         };
//         resolve(backendData)
//     }, 2000)
// });
//
//
// p.then( (backendData) => {
//     const p2 = new Promise((resolve, reject) => {
//         setTimeout( () => {
//         backendData.modified = true
//         resolve(backendData)
//     }, 2000)
//     })
// })


// const todoListsID_1 = '34hf'  // =v1() -> ??????
// const todoListsID_2 = '09ax'  // =v1() -> ??????
//
// const todoLists = [
//     {
//         id: todoListsID_1,
//         title: 'What to learn',
//         filter: 'all',
//     },
//     {
//         id: todoListsID_2,
//         title: 'What to buy',
//         filter: 'all',
//     }
// ]
//
// const tasks = {
//     [todoListsID_1]: [
//         {id: 1, name: 'HTML', isDone: true},
//         {id: 2, name: 'CSS', isDone: true},
//         {id: 2, name: 'React', isDone: false},
//     ],
//     [todoListsID_2]: [
//         {id: 3, name: 'Sugar', isDone: true},
//         {id: 4, name: 'Salt', isDone: true},
//     ]
// }
//
// console.log(tasks)
//
//
// console.log(tasks[todoListsID_1][1].name)
// console.log(tasks[todoListsID_1].find(t => t.id === 1))
// console.log(tasks[todoListsID_1].filter(t => t.isDone === true))
// console.log(tasks[todoListsID_1].map(t => t.name))
//
//
//
// let names = []
// for (const key in tasks) {
//     names = names.concat(tasks[key].map(t => t.name))
//     // names = [...name, ...tasks[key].map(t => t.name)] // ?????
// }
//
// console.log(names)
//
// //reduce: [] -> unit //сокращает массив до определенного значения
// const numbers = [1, 3, 5, 6, 7]
// console.log(numbers.reduce((acc, el)=>{
//     return acc + el
// }, 0)) // 0 - необязательный параметр, начало, без него начнется с первого значения = 1
//
// console.log(numbers.reduce((acc, el)=> acc > el ? acc : el))  //находим бОльшее значение
//
// let students = [
//     {
//         name: 'Bob',
//         age: 22,
//         isMarried: true,
//         scores: 85,
//     },
//     {
//         name: 'Alex',
//         age: 21,
//         isMarried: true,
//         scores: 89,
//     },
//     {
//         name: 'Nick',
//         age: 25,
//         isMarried: false,
//         scores: 120,
//     }
// ]
//
// console.log(students.reduce((acc, el)=>{
//     acc[el.name] = el.scores
//     return acc
// }, {}))
//
//
// console.log(students.reduce((acc, el)=>{
//     acc.push({...el})
//     return acc
// }, []))
//
//
//
// console.log(students.reduce((acc, el)=>{
//     acc[el.name] = {...el}
//     delete acc[el.name].name
//     return acc
// }, {}));


let users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
];

// console.log(users)
// console.log(
//     users.reduce((a,e) => {
//     a.push({name: e.name, website: e.website})
//     return a
// },[]));


// function palindrome(num) {
//     let arr = [num].join('').split('');
//     let result = arr.join('').split('').reverse();
//     let answer = [];
//     for (let j = result.length - 1; j >=0 ; j--) {
//         answer.push(result[j])
//     }
//     console.log(arr)
//     console.log(result)
//     let write = num === Number(answer.join(''));  //true
//     let znachenie = Number(result.join('')) === num; //true
//     console.log(write)
//     console.log(znachenie)
//     let finish ;
//     if (write === true && znachenie === true) {
//         finish = true
//     } else finish = false
//
//     return typeof num === "string" || num < 10 ? 'Not valid' : finish;
//
// }


/*
function palindrome(num) {
    if (typeof num === 'string' || num < 0) {
        return "Not valid";
    }

    const numbers = num.toString().split('').sort( (a,b) => a - b);
    console.log(numbers)
    let counter = 0;

    for (let i=0; i<numbers.length;) {
        if (numbers[i] !== numbers[i+1]) {
            counter++;
            i++;
        } else {
            i+=2;
        }
    }

    return counter < 2 && numbers.length > 1;
}

console.log(palindrome(35776659))*/
