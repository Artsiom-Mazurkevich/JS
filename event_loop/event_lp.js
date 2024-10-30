// setTimeout(() => {console.log('setTimeout1')}, 3000)
// setTimeout(() => {console.log('setTimeout2')}, 2000)
// setTimeout(() => {console.log('setTimeout3')}, 1000)
//
// console.log('1')
// console.log('2')
// console.log('3')
// console.log('4')
// console.log('5')
// console.log('6')


















// setTimeout(() => {
//     console.log('timeout 5000')}, 5000)
//
//
// console.log('1')
//
// setTimeout(() => {
//     console.log('timeout 2000')}, 2000)
//
// console.log('3')
//
//
// setTimeout(() => {
//     console.log('timeout 3200')}, 3200)
//
// console.log('9')



// '1' '3' '9' 'timeout 2000' 'timeout 3200' 'timeout 5000'





















// setTimeout(() => {
//     console.log('s3')}, 3000)
//
//
// setTimeout(() => {
//     console.log('s1')}, 1)
//
// console.log('log1')
//
// new Promise((resolve, reject) => {
//     console.log('p1')
//     resolve()
// }).then(() => {
//     console.log('then1')})
//
//
// console.log('log2')
//
// async function asf() {
//     console.log('asf1')
//     await test2()
// }
//
// async function test2() {
//     console.log('test2')
// }
//
// asf()
//
// console.log('log3')

// 'log1' 'p1' 'log2' 'log3' 'asf1' 'then1' 'test2' 's1' 's3' // not correct

// 'log1' 'p1' 'log2' 'asf1' 'test2' 'log3' 'then1' 's1' 's3' // correct ✔



























// setTimeout(() => {
//     console.log('s4')}, 4)
//
//
// setTimeout(() => {
//     console.log('s1')}, 1)
//
// console.log('log1')
//
// new Promise((resolve, reject) => {
//     console.log('p1')
//     resolve()
// }).then(() => {
//     console.log('then1')})
//
// async function asf() {
//     console.log('asf1')
//     await test2()
//     console.log('afaw1')
//     console.log('afaw2')
// }
//
// async function test2() {
//     console.log('test2')
// }
//
// asf()


// 'log1' 'p1' 'asf1' 'test2' 'then1' 'afaw1' 'afaw2' 's1' 's4'  ✔
































console.log(1);

setTimeout(() => {console.log(2)})

Promise.resolve().then(() => {console.log(3)})


Promise.resolve()
    .then(() => setTimeout(() => {console.log(4)}, 2000))
    .then(() => {console.log(5)})

Promise.resolve().then(() => {console.log(6)})
Promise.resolve().then(() => {console.log(7)})

setTimeout(() => {console.log(8)})

console.log(9)

//???
