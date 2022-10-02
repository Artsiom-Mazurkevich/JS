

const names = ['Artem', 'Yura', 'Dima', 'Vasya', 'Nikolay', 'Victor', 'James', 'Jhon', 'Tad', 'Vincent', 'Kirill', 'Hanna', 'Olga', 'Elena', 'Vladimir', 'Betty', 'Vanessa', 'Angelika', 'Judy', 'Grase' ]

const fn = () => {
  return  Math.floor(Math.random() * (names.length - 1)) + 1
}

function createObject (num) {
    let objects = [];
    const baseObj = (name, age, gender) =>  ({name, age, gender})
    for (let i = 0; i < num; i++) {
        switch (names[fn()]) {
            case 'Artem' :
                objects.push(baseObj('Artem', fn(), 'male'))
                break
            case 'Yura' :
                objects.push(baseObj('Yura', fn(), 'male'))
                break
            case 'Dima' :
                objects.push(baseObj('Dima', fn(), 'male'))
                break
            case 'Vasya' :
                objects.push(baseObj('Vasya', fn(), 'male'))
                break
            case 'Nikolay' :
                objects.push(baseObj('Nikolay', fn(), 'male'))
                break
            case 'Victor' :
                objects.push(baseObj('Victor', fn(), 'male'))
                break
            case 'James' :
                objects.push(baseObj('James', fn(), 'male'))
                break
            case 'Jhon' :
                objects.push(baseObj('Jhon', fn(), 'male'))
                break
            case 'Tad' :
                objects.push(baseObj('Tad', fn(), 'male'))
                break
            case 'Vincent' :
                objects.push(baseObj('Vincent', fn(), 'male'))
                break
            case 'Kirill' :
                objects.push(baseObj('Kirill', fn(), 'male'))
                break
            case 'Hanna' :
                objects.push(baseObj('Hanna', fn(), 'female'))
                break
            case 'Olga' :
                objects.push(baseObj('Olga', fn(), 'female'))
                break
            case 'Elena' :
                objects.push(baseObj('Elena', fn(), 'female'))
                break
            case 'Vladimir' :
                objects.push(baseObj('Vladimir', fn(), 'male'))
                break
            case 'Betty' :
                objects.push(baseObj('Betty', fn(), 'female'))
                break
            case 'Vanessa' :
                objects.push(baseObj('Vanessa', fn(), 'female'))
                break
            case 'Angelika' :
                objects.push(baseObj('Angelika', fn(), 'female'))
                break
            case 'Judy' :
                objects.push(baseObj('Judy', fn(), 'female'))
                break
            case 'Grase' :
                objects.push(baseObj('Grase', fn(), 'female'))
                break
        }


        // objects.push(baseObj(names[fn()], fn()))


            // i % 2 !== 0
            // ? objects.push({name: names[fn()], age: fn()})
            // : objects.push(baseObj)
    }
    return objects
}

console.log(createObject(20))