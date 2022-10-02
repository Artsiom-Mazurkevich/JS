const names = ['Игорь','Bob', 'Alex', 'Fred', 'Ted', 'bob','1',100];
console.log([...names].sort());
console.log(names);
console.log(names.reverse());


const numbers = [-1, 200, 2, 100, 1800, 333, 9];
console.log(numbers.sort())

// отрицательное число - не будет менять местами
// положительное число - будет менять местами

//возрастание
const compareFn = (a,b) => {
  if (a <= b) {
      return  -333
  } else return 1
}

console.log(numbers.sort((a,b) => a - b));
console.log(names.sort((a,b) => a.length - b.length));



const students = [
    {
        name: "bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        name: "alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
];


console.log(students.sort((a,b) => b.age - a.age));
console.log(students.sort((a,b) => a.name < b.name ? -1 : 1));




// bubble sort

const nums = [-1, 200, 2, 100, 1800, 333, 9, 255, 789, 843, 5, 43];


for (let j = 0; j < nums.length - 1; j++) {

    let isSort = true

    for (let i = 0; i < nums.length - 1 - j; i++) {
        if (nums[i] > nums[i + 1]) {
            isSort = false;
            [nums[i + 1], nums[i]] = [nums[i], nums[i+1]]   // тоже самое
            /*let temp = nums[i]
            nums[i] = nums[i + 1]
            nums[i + 1] = temp*/
        }
    }
    if (isSort) break

}




console.log(nums);










