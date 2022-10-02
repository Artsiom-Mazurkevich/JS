

//
// function userCreator(name, age) {
//     return {
//         name,
//         age,
//     }
// }

// const userArtem = userCreator('Artem', 26);
// const userYura = userCreator('Yura', 27);
//
// Object.prototype.showName = function () {
//     console.log(this.name)
// }
//
//
// console.log(userArtem)
// console.log(userYura)
//
//
//
// const animal = {
//     name: 'Lion'
// }
//
//
// console.log(animal.showName())















/////////////// --CONSTRUCTOR-- /////////////////

// function User (name, age) {
//     this.name = name
//     this.age = age
// }
// User.prototype.showName = function () {
//     console.log(this.name)
// }
//
// const user1 = new User('Vladimir', 45);
// console.log(user1)
// console.log(user1.showName())











///////////-- CLASS-- ////////////////////



// class User {
//
//     #isHaveCar = true
//
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     showName () {
//         console.log(this.name)
//     }
//     static isMale = false
//     get isHaveCar () {
//         return this.#isHaveCar
//     }
// }
//
// const user1 = new User('Mikhail', 15);
// const user2 = new User('Jhon', 30);
//
//
//
// console.log(user1)
// console.log(user1.showName())
// console.log(user2.isHaveCar)










class Car {
    constructor(brand, model) {
        this.brand = brand
        this.model = model
    }
    run() {
        console.log(`Car ${this.brand} is running!` + ` model: ${this.model}`)
    }
}

class Audi extends Car{
    constructor(brand, model) {
        super(brand, model);
    }
}

const audi = new Audi('audi', 'rs6')



class Audi_A6 extends Audi {
    constructor(model) {
        super();
        this.model = model
    }
}
const audi_A6 = new Audi_A6('a6')



console.log(audi)
console.log(audi_A6)
