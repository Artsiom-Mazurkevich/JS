function hello () {
    console.log('hello', this)
}

const person = {
    name: 'Yura',
    age: 25,
    sayHello: hello
}



