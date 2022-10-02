function diffArray(arr1, arr2) {
    const newArr = arr1.concat(arr2);
    const uniqArr = Array.from(new Set(newArr));
    for (let i = 0; i < uniqArr.length; i++) {
        if (newArr.find(uniqArr[i])) {
            delete uniqArr[i]
        }
    }
    return uniqArr
}



console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))