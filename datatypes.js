// Data Types:

// Primitives:
// numbers:
// var num = 10;

// string:
// var str = "Vikram";

//boolean:
// var bool = true;

//null:
// var isEmpty = null;

//undefined:
// var x;
// var y = undefined;

//symbol:
// var sym = Symbol("Hello");

//bigInt:
// var bigNum = 99896566821111n,
// x = Number.MAX_SAFE_INTEGER;

// Array:
// var arr = [2,4,1,5,6,7,3,9];

// Object :
// var obj = {
//   name: "Vikram",
//   age: 23,
// };

// functions:
// function fun1() {
//   return "Hello world";
// }

// ===> Primitive types are value types and stores data in the "Stack",
//      whereas reference type is a pointer to an object or array stored on heap memory.

// const output = fun1;
// console.log(output(), typeof output);

// => //

// Value type vs Reference Type:

// var num = 10,
//   newNum = num;
// console.log(num, newNum);

// newNum = 20;

// console.log(num, newNum);

// var num = 10,
//   newNum = num;
// console.log(num, newNum);

// newNum = 20;

// console.log(num, newNum);

//for Non primitive types:

// var person = {
//     name: "Vikram",
//   },
//   newPerson = person;
// console.log(person, newPerson);

// newPerson.name = "Vicky";

// console.log(person, newPerson);

//Type conversions:
// var num = 10;

//converting string to number:
// const output = parseInt(num);
// const output = +num;
// const output = Number(num);

//converting string to floating number:
// const output = parseFloat(num);

//convert number to String:
// const output = String(num);
// const output = "" + num;
// const output = num.toString();

// convert to Boolean:
// const output = Boolean(num); Falsy values: 0, null, undefined, '', false, NaN;

// 5 ways which end up to NaN:  and NaN type is a number
// const output = parseInt("string"); //true
// const output = "hello" - 10; // arithmetic operators with string and number will return NaN, except for + operator:
// const output = undefined + undefined;
// const output = 100 - NaN;
// const output = Math.sqrt(-1); // square root of negatives returns NaN

// console.log(output, typeof output);

//
