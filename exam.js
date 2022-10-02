const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

//1. Создайте поверхностную копию объекта user
let copyUser = {...user};
console.log(user===copyUser);
console.log(user===copyUser)  //- что должно быть в консоли?
console.log(user.friends===copyUser.friends)    //- что должно быть в консоли?

//2. Полная (глубокая) копия объекта user
let deepCopyUser = JSON.parse(JSON.stringify(user))

//Проверка:
 console.log(user===deepCopyUser) //- что должно быть в консоли?
 console.log(user.friends===deepCopyUser.friends) // - что должно быть в консоли?

//3. Поверхностная копия массива students
let copyStudents = [...students]

//Проверка:
console.log(copyStudents === students) //- что должно быть в консоли?
console.log(copyStudents[0] === students[0]) //- что должно быть в консоли?

//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map(s => s);

//Проверка:
console.log(deepCopyStudents === students) //- что должно быть в консоли?
console.log(deepCopyStudents[0] === students[0]) //- что должно быть в консоли?

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
let sortedByName = deepCopyStudents.sort((o,b) => {
        let nameA=o.name.toLowerCase(), nameB=b.name.toLowerCase()
        if (nameA < nameB)
            return -1
        if (nameA > nameB)
            return 1
        return 0
})

console.log(sortedByName);

//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortedByScores = deepCopyStudents.sort((a,b) => {
    let c = a.scores, n = b.scores;
    return c > n ? -1 : 1
})
console.log(sortedByScores);

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let  bestStudents = deepCopyStudents.filter(s => s.scores > 100)
console.log(bestStudents)

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents = deepCopyStudents.splice(0,3)
console.log(topStudents)
console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
//чтоб сохранился порядок сортировки (spread-оператор || concat)
let newDeepCopyStudents = topStudents.concat(deepCopyStudents)
console.log(newDeepCopyStudents)


//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = deepCopyStudents.filter(s => s.isMarried === false)
console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
let studentsNames = deepCopyStudents.map(s => s.name)
console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let nameWithSpace = deepCopyStudents.map(s => s.name).join(' ')
console.log(nameWithSpace)
let namesWithComma = deepCopyStudents.map(s => s.name).join(',')
console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = deepCopyStudents.map(s => {s.isStudent = true; return{...s}})                           ////////////////////
console.log(trueStudents)

//10. Nick женился. Выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = students.map(s => s.name === 'Nick' ?  {...s, isMarried: true} : s)
console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let ann = students.find(s => s.name === 'Ann')
console.log(ann)

//12. Найдите студента с самым высоким баллом (reduce)
// - c помощью reduce
// - *не испльзуя методы массивов и Math.max()*
let bestStudent = 0;
let bests = students.reduce((a,s) => a.scores < s.scores ? s : a)
for (let i = 0; i < students.length; i++) {
    if (students[i].scores > bestStudent) {
        bestStudent = students[i].scores
    }
}
console.log(bestStudent)
console.log(bests)

//13. Найдите сумму баллов всех студентов (reduce)

// И поднимаем руку!!!!

let scoresSum = students.reduce((acc,s) => {
    return acc + s.scores
},0)
console.log(scoresSum)

// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => students.map(el=> el.name !== "Bob" ? {...el, friends:[...students.map(el => el.name)]} : el)
console.log(addFriends(students));