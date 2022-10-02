// let obj = {}
// console.log(obj.__proto__);
//
// let obj2 = new Object({});
// console.log(obj2.__proto__);
//
// class Car {
//
// }
//
// const nnn = new Car()
//
//
// console.log(obj.__proto__ === obj2.__proto__)
// console.log(obj.__proto__ === Object.prototype)
// console.log(obj2.__proto__ === Object.prototype)
// console.log(Car.__proto__ === Function.prototype)







//----------#1---------------------
let dimych = { name: 'Dimych' }
console.log(dimych.prototype);              // undefined, прототип отсутствует


//----------#2---------------------
console.log(dimych.__proto__);             //  прото есть!



//----------#3-------чему равно __proto__ ??--------
console.log(dimych.__proto__ === Object.prototype);             //  Object.prototype!




//----------#4  есть ли прототип у намс???--------
const nums = [1,2,3,4,5]
console.log(nums.prototype);             //  нет
console.log(nums.__proto__);             //  yes   // [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …] //
console.log(nums.__proto__ === Array.prototype);









//----------#5 есть ли прототип у класса???--------

class Samurai {
    constructor(name) {
        this.name = name
    }
    hello () {
        alert(this.name)
    }
}

console.log(Samurai.prototype);           // Есть! прототип есть у любого класса или Function
console.log(Samurai.__proto__);           // Есть! тк класс это одновременно объект
console.log(Samurai.__proto__ === Function.prototype);       //true
console.log(Samurai.__proto__ === Object.prototype);         //false





//----------#6 есть ли прототип у shogun???--------

const shogun = new Samurai('shogun')


console.log(shogun.prototype);            //undefined тк shogun это уже просто объект а не класс
console.log(shogun.__proto__ === Samurai.prototype);            // {constructor: ƒ, hello: ƒ}




//----------#7 равны ли прото и есть ли они???--------

class User {
    constructor(name) {
        this.name = name
    }
    sayYourName () {
        alert(`My name is ${this.name}`)
    }
}

const userDimych = new User('Dimych')
const userViktor = new User('Viktor')
console.log(userDimych.__proto__ === userViktor.__proto__);      //true




//----------#8 есть ли прототип у стрелочной функции???--------


const Component = (props) => {return 'I need help'}

console.log(Component.prototype);                      // undefined
console.log(Component.__proto__);                      // ƒ () { [native code] }
console.log(Component.__proto__ === Function.prototype);   //true


/*
const users = ['Elbay Malik',
    'Wallflower',
    'Homs Hern',
    'Prem Chapagain',
    'New World',
    'Carolina Bentresca',
    'Arquidex ~ Arki',
    'Denis Shubin',
    'Candy',
    'Tarun Gaur',
    'Jefferson Simão Gonçalves',
    'vivekweb2013',
    'Yamamoto Kenji',
    'Peter Kimanzi',
    'JCSIVO',
    'Leonardo Kotlarenko',
    'Jishan Shaikh',
    'Malik',
    'Vladimir Petrozavodsky',
    'Aplus Developer',

]*/
