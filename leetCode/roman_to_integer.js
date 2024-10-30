const longestCommonPrefix = function(strs) {


    const arrayLengthStrings = strs.map(s => s.length)
    const maxLengthStringInArray = Math.max(...arrayLengthStrings)
    const firstItem = strs.find(s => s.length === maxLengthStringInArray)


    console.log(firstItem)

    const arrPrefix = [];
    for (let i = 0; i < firstItem.length; i++) {
        arrPrefix.push(firstItem.slice(0,i))
    }
    console.log(arrPrefix)

};
longestCommonPrefix(["flower","flow","flight"])
