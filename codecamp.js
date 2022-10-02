const user = {
    johnDoe: {
        age: 34,
        email: 'johnDoe@freeCodeCamp.com'
    }
};

const { johnDoe: { age, email }} = user;
console.log(age)



function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));




const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);


const sourcee = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    // Only change code below this line
    const arr = list.slice(2,list.length); // Change this line
    // Only change code above this line
    return arr;
}
const arrr = removeFirstTwo(sourcee);
console.log(arrr)











