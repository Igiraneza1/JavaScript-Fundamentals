// capitalize(str) – Write a function that capitalizes the first letter of a string.
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize("hello world")); 


// reverse(str) – Write a function that reverses a given string.
function reverse(str) {
    return str.split('').reverse().join('');
}
console.log(reverse("hello")); 

// isPalindrome(str) – Write a function that checks if a string is a palindrome (reads the same backward as forward).
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === reverse(cleaned);
}
console.log(isPalindrome("mamam")); 
console.log(isPalindrome("hello"));


// wordCount(str) – Write a function that counts the number of words in a given string.
function wordCount(str) {
    return str.trim().split(/\s+/).length;
}
console.log(wordCount("Happy to learn code.")); 


// toSnakeCase(str) – Write a function that converts a string to snake_case.
function toSnakeCase(str) {
    return str.toLowerCase().replace(/\s+/g, '_');
}
console.log(toSnakeCase("Hello, I am Adeline")); 



// toCamelCase(str) – Write a function that converts a string to camelCase.
function toCamelCase(str) {
    return str.toLowerCase().replace(/(?:^|\s)(\w)/g, (match, letter) => letter.toUpperCase()).replace(/^\w/, match => match.toLowerCase());
}
console.log(toCamelCase("hello world example")); 


// longestWord(str) – Write a function that finds the longest word in a given string.
function longestWord(str) {
    return str.split(/\s+/).reduce((longest, word) => word.length > longest.length ? word : longest, '');
}
console.log(longestWord("Are you guya ready")); 


// countLetter(str, letter) – Write a function that counts the number of times a specific letter appears in a string.
function countLetter(str, letter) {
    return str.split('').filter(char => char === letter).length;
}
console.log(countLetter("she can code", "c"));



// double(arr) – Write a function that doubles every number in an array.
function double(arr) {
    return arr.map(num => num * 2);
}
console.log(double([1, 2, 3])); 


// filterEven(arr) – Write a function that filters out even numbers from an array.
function filterEven(arr) {
    return arr.filter(num => num % 2 !== 0);
}
console.log(filterEven([1, 2, 3, 4, 5])); // [1, 3, 5]


// sum(arr) – Write a function that calculates the sum of all numbers in an array.
function sum(arr) {
    return arr.reduce((total, num) => total + num, 0);
}
console.log(sum([1, 2, 3, 4])); 


// average(arr) – Write a function that calculates the average of all numbers in an array.
function average(arr) {
    return sum(arr) / arr.length;
}
console.log(average([10, 20, 30, 40])); 


// findMax(arr) – Write a function that returns the largest number in an array.

function findMax(arr) {
    return Math.max(...arr);
}
console.log(findMax([3, 7, 2, 8, 5])); // 8


// findMin(arr) – Write a function that returns the smallest number in an array.
function findMin(arr) {
    return Math.min(...arr);
}
console.log(findMin([3, 7, 2, 8, 5])); 


// removeDuplicates(arr) – Write a function that removes duplicate values from an array.
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 3, 4])); // [1, 2, 3, 4]


// findIndex(arr, value) – Write a function that returns the index of a given value in an array (or -1 if not found).
function findIndex(arr, value) {
    return arr.indexOf(value);
}
console.log(findIndex([1, 2, 3, 4], 3)); // 2
console.log(findIndex([1, 2, 3, 4], 5)); // -1





// Object Transformations
// fullName(person) – Write a function that returns the full name of a person object (given properties firstName and lastName).
const person = { firstName: "Adeline", lastName: "IGIRANEZA", age: 25 };
function fullName(person) {
    return `${person.firstName} ${person.lastName}`;
}
console.log(fullName(person));


// isAdult(person) – Write a function that checks if a person is 18 or older (given property age).
function isAdult(person) {
    return person.age >= 18;
}
console.log(isAdult(person)); 



// filterByAge(people, minAge) – Write a function that filters an array of person objects to keep only those who are at least minAge years old.
function filterByAge(people, minAge) {
    return people.filter(person => person.age >= minAge);
}
console.log(filterByAge([{ age: 15 }, { age: 20 }, { age: 30 }], 18)); 



// addProperty(obj, key, value) – Write a function that adds a new property to an object.
const obj = { a: 1 };
function addProperty(obj, key, value) {
    obj[key] = value;
    return obj;
}
console.log(addProperty(obj, "b", 2)); 



// hasProperty(obj, key) – Write a function that checks if an object has a specific property.
function hasProperty(obj, key) {
    return obj.hasOwnProperty(key);
}
console.log(hasProperty(obj, "b")); 


// countProperties(obj) – Write a function that returns the number of properties in an object.
function countProperties(obj) {
    return Object.keys(obj).length;
}
console.log(countProperties(obj));



// Function Composition & Higher-Order Functions

function compose(...fns) {
    return (initialValue) => fns.reduceRight((value, fn) => fn(value), initialValue);
}
// Create a function to reverse and capitalize a string.
const reverseAndCapitalize = compose(capitalize, reverse);
console.log(reverseAndCapitalize("hello")); 


// Create a function to double all the even numbers in an array.
const doubleEvens = (arr) => arr.filter(num => num % 2 === 0).map(num => num * 2);
console.log(doubleEvens([1, 2, 3, 4, 5]));


// Transform an array of objects
const students = [{ name: "Adeline", grade: 75 }, { name: "Alice", grade: 60 }];
function transformStudents(students) {
    return students.map(student => ({ ...student, status: student.grade > 50 ? 'Pass' : 'Fail' }));
}
console.log(transformStudents(students));

// Sort array of objects – Write a function that sorts an array of objects by a given key (e.g., sorting people by age).
const people = [{ name: "John", age: 30 }, { name: "Alice", age: 25 }];
function sortObjects(arr, key) {
    return arr.sort((a, b) => (a[key] > b[key] ? 1 : -1));
}
console.log(sortObjects(people, "age"));



// Filter by keyword – Given an array of products (each with a name and category), write a function that returns only the products in a specified category.
const products = [{ name: "Laptop", category: "Electronics" }, { name: "Apple", category: "Food" }];
function filterByCategory(products, category) {
    return products.filter(product => product.category === category);
}
console.log(filterByCategory(products, "Electronics"));


// Simple caching function – Write a function that stores results of previous calculations to avoid recomputation.
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
