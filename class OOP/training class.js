// function Animal (name) {
//     this.name = name;
//     this.speed = 100;
//     this.age = 5;
//     this.getName = function () {
//         return this.age
//     }
// }
//
// const fox = new Animal('fox');
// console.log(fox)
// console.log(fox.getName())














// const useFabricUser = (name) => {
//     const user = {
//         name: name,
//         site: 'IT-INCUBATOR',
//         dateOfBirth: new Date(1995, 9, 20),
//         hello: function () {
//             console.log(`I am ${this.name} from ${this.site} `)
//         },
//         helloArrow: () => {
//             console.log(`I am ${this.name} from ${this.site} `)
//         },
//     }
//     return user
// }
//
// const userArtem = useFabricUser('Artem')
// console.log(userArtem)
// console.log(userArtem.hello())







// class User {
//     #age = null
//     constructor(name, site, job, children = false, age = null) {
//         this.name = name
//         this.site = site
//         this.job = job
//         this.children = children
//         this.#age = age
//     }
//
//     get age () {
//        return this.#age
//     }
//
//     hello () {
//         console.log(`Hello, I am ${this.name}`)
//     }
//     hasChild () {
//         console.log(this.children)
//     }
// }
//
// const u1 = new User('Yuri', 'www.top.ru', 'c# dev.')
// const u2 = new User('Leonid', 'www.regard.ru', 'manager', true, 20)


// console.log(u1)
// console.log(u1.hello())
// console.log(u2)
// console.log(u2.hasChild())


// console.log(u1.hasChild === u2.hasChild) //true
// console.log(u1.hasChild === User.prototype.hasChild) //true
// console.log(u2.age)





// class Car {
//     #model
//     constructor(model, maxSpeed, engine) {
//         this.#model = model
//         this.maxSpeed = maxSpeed
//         this.engine = engine
//     }
//     get model () {
//         return this.#model
//     }
//     showTimeToWay (way) {
//         return way/this.maxSpeed
//     }
// }












// class Person {
//     name;
//     age;
//     weight = 70;
//     move(place){
//         console.log(`Go to ${place}`);
//     };
//     print() {
//        return console.log(`Name: ${this.name}, Age: ${this.age}`)
//     }
// }
//
// const artem = new Person();
// artem.name = 'Artem';
// artem.age = 20;
// console.log(artem.print());






// class Person{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age
//     }
// }
//
// const tom = new Person('Tom', 23);
// console.log(tom);










class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    print(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
}
class Employee extends Person{
    work(){
        console.log(`${this.name} works in USA`);
    }
}

const name = new Employee('Bob', 20);
name.work()











