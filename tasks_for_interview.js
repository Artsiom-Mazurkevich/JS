//1
//реализуйте функцию которая принимает аргументы (строки) и возвращает строку '1^b^1c'
// console.log (
// f('^', '1', 'b', '1c', '2', '3') -> '1^b^1c^2^3'
// )


// function f() {
//
//     // const args = Array.from(arguments).slice(1)
//     // return args.join(arguments[0])
//
//     return console.log(Array.prototype.slice.call(arguments, 1).join(arguments[0]))
// }
// f('^','1','2','3', '4')


//2
// напишите функцию которая найдёт сумму всех вершин в структуре данных типа tree
// рекурсивно
// в цикле


// const tree = {
//     valueNode: 3,
//     next: [
//         {
//             valueNode: 1,
//             next: null
//         },
//         {
//             valueNode: 2,
//             next: null
//         },
//         {
//             valueNode: 3,
//             next: null
//         },
//         {
//             valueNode: 4,
//             next: [
//                 {
//                     valueNode: 5,
//                     next: null
//                 },
//                 {
//                     valueNode: 6,
//                     next: null
//                 },
//             ]
//         },
//     ]
//
// };
//
//
// const treeSumRecursive = (tree) => {
//     let sum = tree.valueNode;
//
//     if (tree.next) {
//         tree.next.forEach(subTree => {
//            sum += treeSumRecursive(subTree)
//         })
//     }
//
//
//     return sum
// }
//
// console.log(treeSumRecursive(tree));
//
//
//
//
// const myTree = (tree) => {
//   let n = 0;
//   let queue = [tree];
//
//   while (queue.length) {
//       let current = queue.pop();
//       n += current.valueNode;
//       if (current.next) {
//           current.next.forEach(subTree => {
//               queue.push(subTree)
//           })
//       }
//   }
//   return n
// }
//
//
// console.log(myTree(tree))


//3
// Реализуйте функцию Foo что бы всё работало корректно

// function Book (name, author) {
//     this.name = name
//     this.author = author
//     return this
// }
//
// const book = Foo (Book, 'js', 'Petr');
// console.log(book.name); // js
//
//
//
// const Foo = (Cl, name, author) => {
//     return new Cl (name, author)
// }










//4
// Необходимо написать функцию принимающую в аргументах массив целых чисел и возвращающую новый массивб состоящий из уникальных значений первого массива
// console.log(f([1,2,2,3,3,4,5,5])) -> [1,2,3,4,5]


// const fn = (arr) => {
//     const res = {}
//     arr.forEach(n => {
//         res[n] = n
//     })
//     return Object.keys(res).map(n => +n)
// }

// const fn = (arrNums) => {
//   return Array.from(new Set(arrNums))
// }

// console.log(fn([1,2,2,3,3,4,5,5]))












//5
//Реализовать функцию f: f(2,3) -> 5, при вызове f(2)(3) тоже вернёт 5

// const karryF = (a,b) => {
//     if (b === undefined) {
//         return (c) => {
//             return a + c
//         }
//     } else return a + b
// }
//
// console.log(karryF(2)(5));


//6
// реализовать функцию: f: f(1)(2)(3)() -> 6, f()(3)(1)(5)() -> 9, f()(5)() -> 5


// const fn = (value = 0) => {
//     let outer = value
//     return (value) => {
//         if (!value) {
//             return outer
//         } else {
//            return fn(value + outer)
//         }
//     }
// };
//
// console.log(fn()())
// console.log(fn(1)())
// console.log(fn()(1)())















//7
// Необходимо реализовать функцию, принимающую в аргументах строку, состоящую из букв и вернуть новую строку
// в которой повторяющиеся буквы заменены количеством повторений
// fn('ABBBCCCDEE') -> 'AB3C3DE2'


const fn = (str) => {
  let arr = []
    let count = 0
    for (let i = 0; i < str.length; i++) {

    }
}












