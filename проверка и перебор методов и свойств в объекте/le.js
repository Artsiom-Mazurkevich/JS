const user = {};
user.name = "Tom";
user.age = 26;
user.print = function(){

    console.log(this.name);
    console.log(this.age);
};

const hasName = 'name' in user
console.log(hasName);





/*
const objTest = {a:2, b: 3};
const test = Object.freeze(objTest);
console.log(test);
*/
