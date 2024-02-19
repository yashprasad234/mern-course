"use strict";
// Function that can take types of inputs and return multiple types of outputs
// function returnFirst(arr: (string | number)[]) {
//   return arr[0];
// }
// Problem with the above function
// We can't use type specific functions like if we know that we have passed an array of string and it is returning a string we can't use the function "toLowerCase()" because the type of input that the function takes is "(number | string)[]" so the inferred return type will also be the same we cannot also specify a single return type if we are returning an element from the array.
// Ugly solution
// Create different functions
// GENERICS (Pretty solution)
/*
function returnFirst<T>(arr: T[]) {
    return arr[0];
}

let ans1 = returnFirst([1, 2, 3, 4]);
console.log(ans1);

let ans2 = returnFirst(["one", "two", "three"]);
console.log(ans2);
*/
// Assignment 2
// Write a function that takes two inputs that are of the same type and returns an array with the values swapped i,e. swap(3, 4) will return [4,3];
function swap(a, b) {
    return [b, a];
}
let ans1 = swap(3, 1);
console.log(ans1);
let ans2 = swap("yash", "ayush");
console.log(ans2);
let ans3 = swap(false, true);
console.log(ans3);
