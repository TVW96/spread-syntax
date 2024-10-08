// spread-syntax.js
// add your code here

// Task 1
function sum(x, y, z) {

    return (x + y + z);
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));


// Task 2
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const mergedArray = [...array1, ...array2];
console.log(mergedArray);


// Task 3
const colors = ['red', 'green', 'blue'];
const extendedColors = ['yellow', ...colors, 'purple'];
console.log(extendedColors);


// Task 4
const person = {
    name: 'John',
    age: 30
}

const newperson = { ...person };
newPerson.name = "Jane";
newPerson.gender = "female";

console.log(person);
console.log(newPerson);


// Task 5
const object1 = {
    a: 1,
    b: 2
}
const object2 = {
    b: 3,
    c: 4
}

const combinedObject = { ...object1, ...object2 };

console.log(combinedObject);