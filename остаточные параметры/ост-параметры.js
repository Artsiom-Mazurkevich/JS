

const obj1 = {
    name: 'this name',
    age: 10
}

const obj2 = {
    hasCat: true,
    hasDog: false
}

const dest = Object.assign({}, obj1, obj2, 1,56);
console.log(dest);


function sumAll (...args) {
    let i = 0;
    const res = args.map(e => i+= e);
    console.log(i)
}

sumAll(1,2,3,4,5,6,7,8,9)




let name = "John";

function sayHi() {
    console.log("Hi, " + name);
}

name = "Pete";
sayHi()
name = 'Yura';
sayHi()



function User (name) {
    this.sayHi = function () {
        console.log('Hi i am ' + name)
    }
    this.age = 20
}

let user = new User('Jhon')
user.sayHi()
console.log(user.age)






function makeCounter () {
    let i = 0;
    return function () {
        return i++
    }
}

let counter = makeCounter();

console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())

