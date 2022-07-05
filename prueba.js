//map and reduce functions for arrays

//values
const arr = [1, 2, 3, 4, 5];
const toSum = 3;
const initial = 0;

//arrow functions
const auxArr = arr.map(element => element + toSum);
const auxReduct = arr.reduce(
	(prevVal, currVal) => prevVal + currVal,
  initial
);

//display
console.log("Map: " + auxArr);
console.log("Reduce: " + auxReduct);
