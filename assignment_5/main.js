'use strict';
let numbers = ['1', '6', '2', '7', '3', '8', '4', '9', '5', '10'];

function sortArray(numbers, order) {
  let sortedNumbers = [...numbers];
  switch (order) {
    case 'desc':
      sortedNumbers.sort((a, b) => b - a);
      break;
    case 'asc':
      sortedNumbers.sort((a, b) => a - b);
      break;
  }
  return sortedNumbers;
}

console.log('Original numbers: ', numbers);
console.log('Sorted numbers in descending order: ', sortArray(numbers, 'desc'));
console.log('Sorted numbers in ascending order: ', sortArray(numbers, 'asc'));
