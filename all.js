// String Transformations
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize("hello world")); // "Hello world"

function reverse(str) {
    return str.split('').reverse().join('');
}
console.log(reverse("hello")); // "olleh"

function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === reverse(cleaned);
}
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false

function wordCount(str) {
    return str.trim().split(/\s+/).length;
}
console.log(wordCount("Hello world! This is JavaScript.")); // 5

function toSnakeCase(str) {
    return str.toLowerCase().replace(/\s+/g, '_');
}
console.log(toSnakeCase("Hello World Example")); // "hello_world_example"

function toCamelCase(str) {
    return str.toLowerCase().replace(/(?:^|\s)(\w)/g, (match, letter) => letter.toUpperCase()).replace(/^\w/, match => match.toLowerCase());
}
console.log(toCamelCase("hello world example")); // "helloWorldExample"

function longestWord(str) {
    return str.split(/\s+/).reduce((longest, word) => word.length > longest.length ? word : longest, '');
}
console.log(longestWord("JavaScript is awesome")); // "JavaScript"

function countLetter(str, letter) {
    return str.split('').filter(char => char === letter).length;
}
console.log(countLetter("hello world", "l")); // 3

// Array Transformations
function double(arr) {
    return arr.map(num => num * 2);
}
console.log(double([1, 2, 3])); // [2, 4, 6]

function filterEven(arr) {
    return arr.filter(num => num % 2 !== 0);
}
console.log(filterEven([1, 2, 3, 4, 5])); // [1, 3, 5]

function sum(arr) {
    return arr.reduce((total, num) => total + num, 0);
}
console.log(sum([1, 2, 3, 4])); // 10

function average(arr) {
    return sum(arr) / arr.length;
}
console.log(average([10, 20, 30, 40])); // 25

function findMax(arr) {
    return Math.max(...arr);
}
console.log(findMax([3, 7, 2, 8, 5])); // 8

function findMin(arr) {
    return Math.min(...arr);
}
console.log(findMin([3, 7, 2, 8, 5])); // 2

function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 3, 4])); // [1, 2, 3, 4]

function findIndex(arr, value) {
    return arr.indexOf(value);
}
console.log(findIndex([1, 2, 3, 4], 3)); // 2
console.log(findIndex([1, 2, 3, 4], 5)); // -1

// Object Transformations
const person = { firstName: "John", lastName: "Doe", age: 25 };
function fullName(person) {
    return `${person.firstName} ${person.lastName}`;
}
console.log(fullName(person)); // "John Doe"

function isAdult(person) {
    return person.age >= 18;
}
console.log(isAdult(person)); // true

function filterByAge(people, minAge) {
    return people.filter(person => person.age >= minAge);
}
console.log(filterByAge([{ age: 15 }, { age: 20 }, { age: 30 }], 18)); // [{ age: 20 }, { age: 30 }]

const obj = { a: 1 };
function addProperty(obj, key, value) {
    obj[key] = value;
    return obj;
}
console.log(addProperty(obj, "b", 2)); // { a: 1, b: 2 }

function hasProperty(obj, key) {
    return obj.hasOwnProperty(key);
}
console.log(hasProperty(obj, "b")); // true

function countProperties(obj) {
    return Object.keys(obj).length;
}
console.log(countProperties(obj)); // 2

// Function Composition & Higher-Order Functions
function compose(...fns) {
    return (initialValue) => fns.reduceRight((value, fn) => fn(value), initialValue);
}

const reverseAndCapitalize = compose(capitalize, reverse);
console.log(reverseAndCapitalize("hello")); // "Olleh"

const doubleEvens = (arr) => arr.filter(num => num % 2 === 0).map(num => num * 2);
console.log(doubleEvens([1, 2, 3, 4, 5])); // [4, 8]

const students = [{ name: "Alice", grade: 45 }, { name: "Bob", grade: 55 }];
function transformStudents(students) {
    return students.map(student => ({ ...student, status: student.grade > 50 ? 'Pass' : 'Fail' }));
}
console.log(transformStudents(students));
// [{ name: "Alice", grade: 45, status: "Fail" }, { name: "Bob", grade: 55, status: "Pass" }]

const people = [{ name: "John", age: 30 }, { name: "Alice", age: 25 }];
function sortObjects(arr, key) {
    return arr.sort((a, b) => (a[key] > b[key] ? 1 : -1));
}
console.log(sortObjects(people, "age"));
// [{ name: "Alice", age: 25 }, { name: "John", age: 30 }]

const products = [{ name: "Laptop", category: "Electronics" }, { name: "Apple", category: "Food" }];
function filterByCategory(products, category) {
    return products.filter(product => product.category === category);
}
console.log(filterByCategory(products, "Electronics"));
// [{ name: "Laptop", category: "Electronics" }]

function cacheFunction(fn) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (!cache[key]) {
            cache[key] = fn(...args);
        }
        return cache[key];
    };
}
const cachedSum = cacheFunction(sum);
console.log(cachedSum([1, 2, 3])); // 6
console.log(cachedSum([1, 2, 3])); // 6 (retrieved from cache)