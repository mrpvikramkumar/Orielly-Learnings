let x;

const arr = [23, 32, 11, 89, 143];

//Push a value on to the end of the array
arr.push(100);

//Take the last value off
arr.pop();

//Add a value to the beginning of the array
arr.unshift(99);

//Remove first value
arr.shift();

//Reverse an array
arr.reverse();

//Check to see if something is in the array
x = arr.includes(121);

//Return the index of the first match
x = arr.indexOf(78);

// Return array as a string
x = arr.toString();
x = arr.join();

// slice() returns selected elements in an array, as a new array,
//it takes in the index of the first element and the index of the last element to be included in the new array.
x = arr.slice(1, 4);

// splice() works like slice() except it takes the index of the first element and the number of elements after that as a second argument ,
//it also mutates the original array where slice() does not
x = arr.splice(1, 4);

// Remove a single element/value - The following will mutate the original array by taking out the element with the index of 4. x will be equal to a new array with that plucked out value.
x = arr.splice(4, 1);

// Chaining methods - Some methods can be chained depending on the return value.
x = arr.slice(1, 4).reverse().toString().charAt(0);

console.log(x);
