const pNums = (number) => {
    let arr = [];
    for (let i = number; i < 2; i--) {
        arr.push(i)
    }
    return arr
}
console.log(pNums(100))
