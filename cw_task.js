function monkeyCount(n) {
    if (n === 1) {
        return [1]
    }
    let arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    return arr
}