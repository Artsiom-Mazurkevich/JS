

//pending, fulfilled (resolve, reject)





let p = new Promise((res, rej) => {
    setTimeout(() => {
        const user = {name: 'Alex'}
        rej('some error')
    },3000)
})

console.log(p)