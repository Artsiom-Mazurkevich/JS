// class User {
//     name: string
//     age: number
//     constructor(name: string, age: number) {
//         this.name = name
//         this.age = age
//     }
//     showName (): void {
//         console.log(`Name is ${this.name}`)
//     }
// }



class CustomUser {
    constructor(readonly name: string, readonly age: number) {

    }
    showName (): void {
        console.log(`Name is ${this.name}`)
    }
}