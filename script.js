// Before diving into MERN (MongoDB, Express.js, React.js, Node.js) stack development, it's essential to have a solid understanding of JavaScript fundamentals. Here are some topics you should master:

// 1. Variables and Data Types: Understand how to declare variables using var, let, and const, and know the different data types like strings, numbers, booleans, arrays, and objects.

// I .  Strings
// creating a string
// let firstName = "Shuva";
// let lastName = "Patra";
// Concatenating a String
// let fullName = firstName+ " " + lastName;

// console.log(fullName)
// Assessing Characters
// console.log(fullName[0]);
// console.log(fullName.charAt(0));
// String Length
// console.log(fullName.length)

// String methods
// 1. chatAt - gives the index value
// console.log(fullName.charAt(2))
// 2.charCodeAt - gives the uniCode value of the index
// console.log(fullName.charCodeAt(2))
// 3. concat - add two or more strings together
// console.log(fullName.concat(" is dissapointed!"));
// 4. indexOf (searchValue, startIndex)
// console.log(fullName.indexOf("a"))
// console.log(fullName.indexOf("a",8))
// 5. lastIndexOf(searchValue, startIndex):
// console.log(fullName.lastIndexOf("a",5));
// 6. Slice - Extract a part of a string and return a new string,  its takes character from the starting point
// console.log(fullName.slice(-1,5))
// 7. substring(startIndex, endIndex), its takes character between the starting point and the ending point
// console.log(fullName.substring(-1, 5))
// NOte : Both slice and substring works same but when it have a negative index, slice takes from last & substring counts from first
// 8. substr(startIndex, length): Extract a specific number from the index number to the length given
// console.log(fullName.substr); - depreciated
// 9.  toLowerCase()
// console.log(fullName.toUpperCase());
// 10. toUpperCase()
// console.log(fullName.toLowerCase());
// 11. trim - remove the extra white spaces
// const fName= "    Pappy";
// console.log(fName)
// console.log(fName.trim())
// 12. startsWith(searchString, position): Check wheater is starts from this search string or Notification, we can also define from where we should findand make the starting point as per our choice
// console.log(fullName.startsWith("huva",1))
// 13. endsWith(searchString, length)
// console.log(fullName.endsWith("Shuva",5));
// console.log(fullName.endsWith("Patra",14));
// 14. includes(searchString, position):If its includes this value or if its includes this value from a specific position or not!
// console.log(fullName.includes("Patra",0))
// 15. replace(searchValue, replaceValue): It search a value, if they got that value then they replace it with the fixed value
// console.log(fullName.replace("Shuva","Sanju"))
// we can replace all it by using a format like  - console.log(fullName.replace(/Shuva/g, "Sanju")) - Then globally it will replace all words name Shuva with Sanju but in earlier simple case it will replace once
// 16. split(separator, limit): Split an array of strings into sub-strings
// console.log(fullName.split("",11));
// console.log(fullName.split(" "));

// II. Numbers
// integers , eg - 22;

// III Booleans
// True or false

// IV  Arrays
// 1. Creating and Array
// let fruits = ['apple','mango','banana','grapes','orange']
// 2. Accessiing an array
// console.log(fruits[1])
// 3. Modifying an array
// console.log(fruits.push('pomegranate'))
// console.log(fruits)
// 4. remove an item from an array
// console.log(fruits.pop())
// console.log(fruits)
// 5. Iterating over an array
// fruits.forEach(fruit=>{
//    console.log(fruit)
// })

// V Objects
// 1. Creating an Object
// let person ={
//     name:'John',
//     age:'30',
//     city:'New York'
// }
// 2. Accessing Object Properties
// console.log(person.name)
// console.log(person['age'])
// 3. Modifying Object
// console.log(person.name)
// person.name = "Shuva";
// console.log(person.name);
// 4. Adding new Properties
// person.job= "Web Developer";
// console.log(person)
// 5. Nested Objects
// person.jobDetails ={
//     jobTitle : 'Web Designer',
//     salaryPerAnnum : '8 Lakhs',
//     workType : 'Full time basis'
// }

// 2. Functions: Learn how to define functions, use function expressions and arrow functions, understand scope, closures, and hoisting.
// I Defining Functions
// 1. Function Declaration
// function hello(name){
//     return `Hello, ${name}`
// }
// 2. Function with mutiple parameters
// function add(a,b,c){
//     return a+b+c;
// }
// 3. Function wih Default Parameters
// function fullName(firstName="Shuva", lastName="Patra"){
//     return `Admin name is ${firstName} ${lastName}`
// }
// 4. Function returning a value
// function square(number){
//     return number * number;
// }
// console.log(square(4));
// 5. Function with No Parameters
// function showMessage(){
//     console.log("Hey,There!")
// }
// showMessage()
// console.log(showMessage())
// console.log(square(2))

// II Functions Expressions
// 1. Named Function Expression
// const member = function (name){
//     return `Hello, ${name} Patra`
// }
// console.log(member("Sumit"))
// 2: Anonymous Function Expression
// const greet = function(name){
//     return `Hello , ${name}`
// };
// 3: Passing Function Expression as an Argument
// function processUserInput(callback){
//     const name = "Shuva";
//     callback(name)
// }
// processUserInput(function(name){
//     console.log(`Hello, ${name}!`)
// })
// 4: Immediately Invoked Function Expression (IIFE)
// (function(){
//     console.log(`This function runs immediately`)
// })();
// 5: Function Expression with Default Parameters
// const multiply = function (a=1,b=2){
//     return a*b;
// }

// III Arrow Functions
// Arrow functions provide a shorter syntax for writing function expressions.
// 1. Basic Arrow Function
// const hello = (name)=>{
//    return `Hello ${name}`;
// }
// 2: Arrow Function with Implicit Return
// const yoo = name => `Yoo Yo ${name} Singh`
// 3: Arrow Function with No Parameters
// const hello = ()=>{console.log("Hello Helloooo")}
// 4: Arrow Function with Multiple Parameters
// const multiply = (a,b)=>{
//     return a*b;
// }
// 5: Arrow Function in Array Method
// const numbers =[1,2,3,4,5,6,7,8,9,10];
// const squares = numbers.map(n=>{
//     return n*n;
// })

// IV. Scope
// Scope determines the accessibility (visibility) of variables. JavaScript has function scope and block scope.
// 1: Function Scope - Scoped withhin the function

// 2: Block Scope with let - Scoped within the block
// function myFunction() {
//     let a =1;
//     if(true){
//         let b =2;
//     }
//     console.log(a);
//     console.log(b);
// }
// 3: Block Scope with const
// function myFunction(){
//     const a =1;
//     if(true){
//         const b =2;
//         console.log(b);
//     }
//     console.log(a);
//     console.log(b);
// }
// 4: Global Scope
// var a="I'm Global";
// function myFunction(){
//     console.log(a);
// }
// console.log(a);
// 5: Lexical Scope - innerFunctions can access parent function variables, this is called lexical scope
// function outerFunction(){
//     var outerVar = 'I am outer';
//     function innerFunction(){
//         console.log(outerVar);
//     }
//     innerFunction()
// }
// outerFunction()

// V. Closures
// A closure is a function that retains access to its outer scope even after the outer function has returned.
// 1: Basic Closure
// function outerFunction(){
//     var outerVar = 'I am outer';
//     function innerFunction(){
//         console.log(outerVar)
//     } innerFunction()
// }
// const myClosure = outerFunction();
// console.log(myClosure);
// Note : The ability of the innerFunction to acces the outerFunction after it got completed is called closures
// 2: Closure with Parameters
// function makeMultiplier(x){
//     return function(y){
//         return x*y;
//     };
// }
// const multiplyByTwo = makeMultiplier(3);
// console.log(multiplyByTwo(5));
// Note : multipluByTwo is a closure that store x value of makeMultiplier function and multiple by any value passing within it as "y"
// 3: Closure for Data Privacy
// function createCounter(){
//     let count = 0;
//     return function(){
//         count++;
//         return count;
//     };
// }
// const counter = createCounter();
// console.log(counter());
// 4: Closure with Event Listeners
// function setupEventListener(){
//     let count =0;
//     document.getElementById('myButton').addEventListener('click',function(){
//         count++;
//         console.log(`Buttons Clicked ${count} times`)
//     })
// }
// setupEventListener()
// Note : In Java Script a closure is created when an inner function within the aprent function is called from outside the parent function
// 5: Closures in Loops
// function createFunction (){
//     let functions = [];
//     for (let i=0; i<5; i++){
//         functions.push(function(){
//             console.log(` Hey ${i}`)
//         });
//     }
//     return functions;
// }
// const funcs = createFunction()

// VI. Hoisting
// Hoisting is JavaScript's behavior of moving declarations to the top of the current scope.
// 1: Hoisting with var
// console.log(a);
// var a = 5; // Undefined
// 2: Hoisting with function Declarations
// console.log(greet('Shuva'));
// function greet(name){
//     return `Hello, ${name}`
// } // WORKS
// 3: Hoisting with let and const
// console.log(b);
// console.log(c);
// let b = 0;
// const c = 2; // ERROR
// 4: Hoisting with Function Expressions
// console.log(greet('Bob'));
//  var greet = function (name){
//     return `Hello, ${name}`;
//  }  // ERROR
// 5: Variable and Function Hoisting Together

// 3. Control Flow: Master conditional statements (if, else, switch) and looping constructs (for, while, do-while).

// Control Flow in JavaScript: Conditional Statements and Looping Constructs
// Understanding control flow in JavaScript is essential for writing logical and efficient code. Below, we will explore conditional statements (if, else, switch) and looping constructs (for, while, do-while) with detailed explanations and examples.
// Conditional Statements

// 1. if Statement
// The if statement executes a block of code if a specified condition is true.
// let a =true;
// if(a===true){
//     console.log("A is true!")
// }
// 2. if else - statement
// let a = 1;
// if(a<2){
//     console.log("a is smaller than 2");
// } else{
//     console.log("a is larger or equals than 2");
// }
// 3. else if - statement
// let a = 3;
// if(a<2){
//     console.log("A is lesser than 2");
// } else if(a===2){
//     console.log("A is equals to 2");
// } else {
//     console.log("A is Greater than 2");
// }
// 4. Switch Case
// let a = 1;
// switch(a){
//     case 2:
//         console.log("A is 2");
//         break;
//     case 1:
//         console.log("A is less than 2");
//         break;
//     default:
//         console.log("A is Greater than 2");
// }

// II. Looping Constructs
// 1. for Loop
// The for loop repeats a block of code a specified number of times.

// let sum = 0;
// for(let i=1; i<=5; i++){
//     // sum += i;
//     console.log(i);
// } // How the output is coming 0,1,3,6,10 - It coming becasue after seond round sum has stored 1 and i has stored 2 [So, it has becamed 3], in the third round sum's value has became 3 and i's value has also became 3 as it is its 3rd round of increament, so it prints 6 and so on.
// 2. while loop
// let i = 0;
// let sum = 0;
// while (i<=5){
//     sum+=i;
//     i++;
// }
// console.log(sum);
// 3. do ... while loop
// let fruits = ["apple", "banana", "cherry"];
// let index = 0;
// do {
//     console.log(fruits[index]); // Output: "apple" "banana" "cherry"
//     index++;
// } while (index < fruits.length);

// 4. Arrays and Objects: Understand how to manipulate arrays and objects, including methods like map(), filter(), reduce(), and object destructuring.
// Arrays and Objects in JavaScript
// Arrays and objects are fundamental data structures in JavaScript. Understanding how to manipulate them, including methods like map(), filter(), reduce(), and object destructuring, is crucial for efficient coding.

// Arrays
// map() Method
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// eg 1:
// const numbers = [1,2,3,4];
// const doubleOfNumbers = numbers.map(num=> num*2);
// console.log(doubleOfNumbers[3]);
// eg 2:
// const users = [{name:'Shuva Patra',title:'Eldest Son'},{name:'Sanju Patra',title:'Middle Son'},{name:'Sumit Patra',title:'Smallest Son'}]
// const userNames = users.map(user=>user.name)
// const userTitles = users.map(user=>user.title)
// console.log(userNames);
// console.log(userTitles);
// eg 3:
// const fruits = ['mango','apple','banana','orange'];
// const upperCaseFruits = fruits.map(fruit=> fruit.toUpperCase())
// console.log(upperCaseFruits);

// filter() Method
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// eg 1:
// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12];
// const evenNumber = numbers.filter(num=> num%2 === 0);
// console.log(evenNumber);
// eg 2:
// const users = [{name:'Shuva Patra',age:22},{name:'Sanju Patra',age:20},{name:'Sumit Patra',age:18}]
// const aboveEighteen = users.filter(user=> user.age > 20)
// console.log(aboveEighteen);
// const randomWords = ['apple','shuva','sanju','pomegranate','borntolive','ola','oiikozo','bhakmadarchod']
// const bigWords = randomWords.filter(words=>words.length>=4)
// console.log(bigWords);

// reduce() Method
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// eg 1:
// const numbers = [1,2,3,4];
// const totalNumbers = numbers.reduce((acc,num)=>acc + num, 0);
// console.log(totalNumbers);
// eg 2:
// const printHelloWorld = ['Hello','World','is','you'];
// const helloWorld = printHelloWorld.reduce((acc,helloWorld)=>acc + " " + helloWorld)
// console.log(helloWorld);
// eg 3:
// const words = ['mango','banana','orange','apple','banana','apple'];
// const countWords = words.reduce((acc,word)=>{
// acc[word] = (acc[word] || 0)+ 1;
// return acc;
// },{})
// console.log(countWords);

//PRACTICE REDUCE 10 to 15 ADVANCE SUMS UNTIL YOU ARE BECAMING FLUENT IN IT!
// Eg 1 : Sum of array elements
// const numbers = [1,2,3,4,5,6,7,8,9,10];
// const numCount = numbers.reduce((acc, num)=> acc + num, 0)
// console.log(numCount);
// Eg 2: Flattening an Array
// const numbers = [[1,2],[3,4],[5,6],[7,8]];
// const allNum = numbers.reduce((acc,num)=>acc.concat(num),[])
// console.log(allNum);
// console.log(numbers);
// Eg 3 : Counting Word Occurances
// const words = ['apple','banana','apple','orange','apple','orange'];
// const wordsCount = words.reduce((acc,word)=>{
//     acc[word] = (acc[word] || 0) + 1;
//     // console.log(acc[word]);
//     return acc;
// },{})
// console.log(wordsCount);
// Eg 4:
// const number = [10,29,33,76,59,8];
// const maxNum = number.reduce((acc,num)=>Math.max(acc,num),-Infinity);
// console.log(maxNum);
// Eg 5 : Average of Arrays
// const number = [10,29,33,96,59,8];
// const average = number.reduce((acc,num,index,array)=>{
//    acc += num;
//    if (index === array.length -1){
//     return acc/array.length;
//    } else{
//     return acc
//    }
// },0)
// console.log(average);

// Objects
// Object Destructuring
// Object destructuring allows you to extract properties from an object and bind them to variables.
// eg 1:
// const users = [{name: "Shuva", age:22},{name:'Sanju',age:20}];
// for (const {name, age} of users) {
//     console.log(`Name: ${name}, Age: ${age}`);
//   }
// const [{name:name1, age:age1},{name:name2, age:age2}]= users;
// console.log(name1, age1);
// console.log(name2, age2);
// eg 2:
// const person = {firstName : 'Shuva',lastName:'Patra'};
// const {firstName:fName,lastName:lName}= person;

// console.log(`${fName} ${lName}`);
// eg 3: object destructuring with default values
// const settings = {themeColor:'black'};
// const {themeColor, fontSize = "16px"}= settings;
// console.log(`With ${themeColor} theme and ${fontSize} font size, We are ready to go !`);

// Adding/Updating Properties
// Manipulating object properties involves adding new properties or updating existing ones.
// eg 1: Adding a property
// const user={name:'Shuva'};
// user.age =  22;
// console.log(user);
// eg 2: Updating a property
// const user = {name:'Shuva',age:22};
// user.age=20;
// user.name='Sanju';
// console.log(user);
// eg 3: Adding a method in an object
// const user ={name:'Shuva Patra'};
// user.work = function(){
//     // console.log('He works as a web developer'); // It will return extra undefined as in js func we need to share the value in retunr or else it will print undefined by default.
//     return 'He works as a web developer'; // It won't show any extra undefined as in js a func should have a return value.
// }
// console.log(user.work());

// Iterating Over Properties
// You can iterate over the properties of an object using for...in.

// Eg:1 Basic Iteration
// const user ={name:'Shuva',age:22};
// for(const key in user){
//     console.log(`${key} : ${user[key]}`);
// }
// Example 2: Check for own properties
// const obj = { a: 1, b: 2 };
// for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//         console.log(`${key}: ${obj[key]}`);
//     }
// }
// eg 3: using Object.keys
// const person ={name:'Shuva',lastName:'Patra',age:22,}
// Object.keys(person).forEach(key =>{
//     console.log(`${key} : ${person[key]}`);
// })

// 5. ES6+ Features: Familiarize yourself with new features introduced in ES6 and later, such as template literals, arrow functions, destructuring, spread/rest operators, classes, and modules.

// 1. Template Literals
// Template literals allow for easier and cleaner string interpolation, multi-line strings, and embedding expressions within strings using backticks (`).
// 2. Arrow Functions
// Arrow functions provide a shorter syntax for writing functions and lexically bind the this value.
// 3. Destructuring
// Destructuring allows you to unpack values from arrays or properties from objects into distinct variables.
// 4. Spread/Rest Operators
// The spread operator (...) allows an iterable to expand in places where multiple elements are expected, and the rest operator collects multiple elements into an array.
// 5. Classes
// Classes provide a syntax for creating constructor functions and performing inheritance in a more readable way.

// 6. Asynchronous JavaScript: Learn about asynchronous programming concepts, including callbacks, promises, async/await, and the event loop.
// setTimeout(() => { // & setInterval
//     console.log('Printed after 2000 ms');
// }, 2000);

// Basic Callback
// function fetchData(callback){
//     setTimeout(() => {
//         callback("Data recieved")
//     }, 1000);
// }
// fetchData((message)=>{
//     console.log(message);
// })  // Passing a callback function as an argument to get the data, which we will be getting after 1 sec as the main function has 1 sec setTimout Delay.
// let myPromise = new Promise((resolve,reject)=>{
//     let success = true;
//     if(success){
//      resolve('We are on suscess')
//     } else{
//         reject("We are on Rejection")
//     }
// })

// myPromise.then(result=>{
//     console.log(result);
// }).catch(error=>{
//     console.log(error);
// })

// class Person {
//   // Helps in creating object blueprints
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log(
//       `Hello, my name is ${this.name} and I am ${this.age} years old.`
//     );
//   }
// }

// const john = new Person("John", 30);
// john.greet();

// class user extends Person { // Extending Person js Class to user new class which will hahve all the object blueprint from earlier. Which has been imported in this new user classs through super(name,age)
//   constructor(name, age, email) {
//     super(name, age);
//     this.email = email;
//   }
//   bark() {
//     console.log(`
// Name : ${this.name}
// Age : ${this.age}
// Email : ${this.email}`);
//   }
// }

// const say = new user("Shuva Patra", "23", "shuvapatra011@gmail.com");
// say.bark();  // An instance is a specific object created from the help of the class for eg the class is a structured template from which we created an object with stating new className ('Objects Name')

// 7. DOM Manipulation: Understand how to interact with the Document Object Model (DOM) using JavaScript to create, modify, and remove HTML elements dynamically.
// 1. Creating an element
// const p = document.createElement('p')
// 2. Adding attribute in that element
// p.id = 'paragraph'
// 3 Appending p below img
// document.body.appendChild(p)
// 4. Adding textContent in p element
// p.textContent = 'Im Shuva Patra';
// const btn1 = document.createElement('button');
// btn1.textContent='Buy Now';
// document.getElementById('hero').appendChild(btn1)
// const img1 = document.createElement('img')
// img1.src = 'https://www.freecodecamp.org/news/content/images/2022/02/arrows-2889040_1920.jpg'
// document.getElementById('hero').appendChild(img1)
// const h2 = document.querySelector('h2');
// h2.textContent='Oii Kozo'
// h2.remove()
// const li = document.querySelector('li');
// while(li.firstChild){
//   li.firstChild.remove()
// }
// this method - refers to the object it returns to and also depends on where it is used.
// const user={
//     name:"Shuva",
//     email:"shuvapatra011@gmail.com",
//     allInOne : function(){
//         console.log(`Hello, my name is ${this.name}`); // In object it refers to the owner object
//     }
// }
// user.allInOne()
// console.log(this); // Alone this refers to the global onject[ in non strict mode]

// Call Method - calls a function with giiven `this` value and arguments provided individually
// function oiSunn(olaparam){
//     return `${olaparam} My name is ${this.name}`;
// }
// Apply Method works same but in apply method we give arguments as an array (or an array like object)
// Bind Method helps in calling a func too with agiven sequence of arguments but its main work is that we can make a new function with it like this eg :
// const kisko={
//     name:'Shuva'
// }
// const testFunc = oiSunn.bind(kisko,'Ola')

// 8. Browser APIs: Explore browser APIs like localStorage, fetch, XMLHttpRequest, and setTimeout/setInterval.

// 9. Error Handling: Know how to handle errors using try/catch blocks and understand error propagation.
// Eg 1 :
// try {
//     let result = 10/o;
//     console.log(result);
// } catch (error) {
//     console.log(`Error is : ${error.message}`);
// }

// 10. Module Systems: Understand how to use module systems like CommonJS and ES6 modules for organizing code.

// 11. Testing: Familiarize yourself with testing frameworks like Jest or Mocha for writing unit tests for your JavaScript code.

// Once you're comfortable with these JavaScript fundamentals, you'll be better equipped to tackle the MERN stack and its associated frameworks and libraries. After that, you can start learning about MongoDB for database management, Express.js for server-side development, React.js for building user interfaces, and Node.js for server-side JavaScript execution.

// var a = 121323;
// let b = a
// console.log(b);

// const array = ['shuva', 'sanju', 'sumit'];

// // Find the index of "sanju"
// const index = array.indexOf('sanju');

//     array.splice(index + 1, 0, 1,2,3,4);

// console.log(array); // Output: ['shuva', 'sanju', '123', 'sumit']
// console.log(a);
// console.log(f1);
// console.log(f2);
// console.log(fn());
// console.log(b);

// var a = 10;
// var b = 'rahul'
// function fn(){console.log('hhhh');}
// var f1 = function(){}
// const f2 = ()=>{}

// function add() {
//   let num1 = parseInt(prompt("Enter the First Number"));
//   let num2 = parseInt(prompt("Enter the Second Number"));
//   const addedNum = num1 + num2;
//   return addedNum;
// }
// console.log(add());
// function mutiply() {
//     let num1 = parseInt(prompt("Enter the First Number"));
//     let num2 = parseInt(prompt("Enter the Second Number"));
//     const multiplyNum = num1 + num2;
//     return multiplyNum;
//   }
//   console.log(mutiply());

// 1. async function
// console.log('One');
// setTimeout(() => {
//     console.log("One in a Half was lefted");
// }, 3000);
// console.log('Two');

// 2. Callback
// function sum(a,b) {
//     console.log(a+b);
// }

// function calculator(a,b,sumCallback) {
//     sumCallback(a,b)
// }
// calculator(1,2,sum)
// When we pass callbacks, we pass it with just their names without any paranthesis as with "()" it directly executed but here we are taking it as an argument

// Callback Hell : Nested callbacks stacked below one another forming a pyramid structure. (Pyramid of Doom)
// This style of programming becomes difficult to understand & manage

// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);                   //// CALLBACK HELL { Because of Nested Callbacks }
// }
// getData(1, () => {
//     console.log("getting data 2 .....");
//   getData(2, () => {
//     console.log("getting data 3 .....");
//     getData(3, () => {
//         console.log("getting data 4 .....");
//       getData(4);
//     });
//   });
// });
// getData(2);
// getData(3);

// --- Going to do the CALLBACK HELL with --- PROMISES CHAINING
// function getData(dataId, getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data :",dataId);
//             resolve("Success")
//         },2000)
//     })
// }

// getData(1)
// .then((res)=>{
//     console.log(res);
//     getData(2).then((res)=>{
//         console.log(res);
//     })
//  })
// getData(1)
// .then((res)=>{
//     return getData(2);
//     }).then((res)=>{
//     return getData(3);
//     }).then((res)=>{
//         console.log("Final Success");
//     })

// To solve Deeper usage callbacks as callback hell we have --- PROMISES ---

// Promise have 3 states - pending, fulfilled and rejected

// const promise = new Promise((resolve,rejected)=>{
//     console.log("Promise has been printed!");
// })

// how api's get used
// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//      setTimeout(() => {
//         console.log("Data : ",dataId);
//         resolve("Success")
//      },5000);
//     })
// }

// const getPromise = () => {
//  return new Promise((resolve, reject) => {
//     console.log("I am a Promise");
//     // resolve("Success");
//     reject("Network Error")
//   });
// };

// let promise = getPromise();
// promise.then((res) => {
//   console.log("Promise Fulfilled :",res);
// });
// promise.catch((err)=>{
//     console.log("Some Error Occured :",err);
// })

// In Promises we have two function one is then and second is catch

// ` then ` is used, when our code has executed and has resolve success on running it
// ` catch ` is used when the has executed and got some errors

// --- PROMISE CHAIN ---
// function asyncFunc(){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//          console.log("data1");
//          resolve("Success");
//         // reject("Network Issue");
//         },4000)
//     })
// }
// function asyncFunc2(){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//          console.log("data2");
//          resolve("Success");
//         // reject("Network Issue");
//         },4000)
//     })
// }

// console.log("Fetching data1....");
// let p1 = asyncFunc();
// p1.then((res)=>{
//     console.log("p1 has resolve", res);
//     console.log("Fetching data2....");
//     let p2 = asyncFunc2();
// p2.then((res)=>{
//     console.log("p2 has resolve", res);
// })
// p2.catch((err)=>{
//     console.log("p2 has some error",err);
// })
// })
// p1.catch((err)=>{
//     console.log("p1 has some error",err);
// })

// Async - Await
// async function always returns a Promise.
// async function myFunc(){...}

// await pauses the execution of its surrounding async function until the promise is settled
// Two keywords in js

// async function hello(){
//     console.log("hello");
// }  // Automatically returns a promise

// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Weather data recieved");
//         resolve(200)
//         },2000)
//     })
// }
// async function getWeatherData(){
//     await api();  // 1st call
//     await api();  // 2nd call
// }

// async and await using on getData twice time example
// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//      setTimeout(() => {
//         console.log("Data : ",dataId);
//         resolve("Success")
//      },2000);
//     })
// }

// // Async-await
// async function getAllData(){
//     console.log("Getting data 1 ...");
//     await getData(1);
//     console.log("Getting data 2 ...");
//     await getData(2);
//     console.log("Getting data 3 ...");
//     await getData(3);
// }

// In maximum work, we use Async-await as this is much suitable way of working than callback hell and promises as they are easy to understand and handle.

// But in async-await we make an async function unneccessarily which can be fixed by IIFE : Immediately Invoked Function Expression
// IIFE is a function that is called immediately as soon as it is defined

// 3 ways of defining IIFE
// 1.
// (functioon(){
//     //..
// })();

// 2.
// (()=>{
//     //..
// })();

// 3.   --- USED FOR IIFE Async-await function running immeditately withput any extra function creation
// (async()=>{
//     console.log("Getting data 1 ...");
//     await getData(1);
//     console.log("Getting data 2 ...");
//     await getData(2);
//     console.log("Getting data 3 ...");
//     await getData(3);
// })();

// Fetch API
// The Fetch API provides an interface for fetching (sending,receiving) resources.
// It uses Request and Response objects.
// The fetch() method is used to fetch a resource (data).

// let promise = fetch(url,[options])

// API stands for Appplication Programming Interface ( url end points which we change on getting our wished search keywords)

// const URL = "https://cat-fact.herokuapp.com/facts";
// const factPara = document.querySelector("#fact");
// const btn = document.querySelector("#btn")

// const getFacts = async () =>{
//     console.log("getting data ......");
//     let response = await fetch(URL);
//     console.log(response); // JSON Fomat
//     let data = await response.json();
//     // console.log(data[0].text);
//     factPara.innerText= data[4].text
// }
// btn.addEventListener("click",getFacts)

// To understand the data type of the api get data, which rec
// Understanding Terms
// AJAX is Asynchronous JS & XMl -- Old data format
// JSON is JavaScript Object Notation --- Nowadays data format eg => "name":"Shuva"  , also known as AJAJ = Asynchronous JavaScript and JSON
// Note : we use JSON but called it AJAX as it seems for user friendly than AJAJ
// json() method : returns a second promise that resolves with the result of parsing the response body text as JSON. (Input is JSON, output is JS object)

// Requests & Response
// Hyper Text Trasnfer Protocol [HTTP] Verbs
// Respopnse Status Code
// * HTTP rersponse headers also contain details about the responses, such as content type, HTTP status code etc.
// Headers in api - which has an additional information
// 1. Informational responses (100 - 199)
// 2. Successful responses ( 200 - 299 )
// 3. Redirection messages ( 300 - 399 )
// 4. Client error responses ( 400 - 499 )
// 5. Server error responses ( 500 - 599 )

// API Fetching With promises chaining
// function getFacts (){
//     fetch(URL)
//     .then((response)=>{
//         return response.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         factPara.innerText= data[4].text
//     })
// }
// btn.addEventListener("click",getFacts)

// Currency Convertor Web App

const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate()
});

window.addEventListener("load",()=>{
  updateExchangeRate();
})
const updateExchangeRate = async () =>{
  let amount = document.querySelector(".amount input");
  let amtValue = amount.value;
  if (amtValue === "" || amtValue < 1) {
    amtValue = 1;
    amount.value = "1";
  }
  // console.log(fromCurr.value,toCurr.value);
  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
  // console.log(rate);
  let finalAmount = amtValue * rate ;
  msg.innerText= `${amtValue} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`
}
