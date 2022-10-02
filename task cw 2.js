function generateHashtag (str) {
    let arr = []
    if (str === '') {
        return false
    } else {
        for (let i = 0; i < str.length; i++) {
            if (str[i] !== '#') {
                arr.push(str[i])
            }
        }
    }

    let s = arr.join('').split(' ').filter(t => t !== '').map(t => t[0].toUpperCase() + t.slice(1, t.length)).join('')
    let p = s[0].toUpperCase();
    let l = s.slice(1, s.length)
    let r = `#${p}${l}`;
    return r.length > 140 || r === '' ? false : r

}
let n = "code" + " ".repeat(140) + "wars";

console.log(generateHashtag("Codewars            is           nice"))



//map(t => t[0].toUpperCase() + t.slice(1, t.length)).join('');





// function generateHashtag (str) {
//     return str.length > 140 || str === '' ? false :
//         '#' + str.split(' ').map(capitalize).join('');
// }
//
// function capitalize(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }