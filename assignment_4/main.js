'use strict';
let numbers = ['1', '6', '2', '7', '3', '8', '4', '9', '5', '10'];

function sortArray(numbers) {
  let sortedNumbers = [...numbers];
  sortedNumbers.sort((a, b) => a - b);

  return sortedNumbers;
}

let sortedArray = sortArray(numbers);
console.log('Original numbers: ', numbers);
console.log('Sorted numbers: ', sortArray(numbers));
