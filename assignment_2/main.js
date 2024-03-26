'use strict';

const numbers = [];

for (let i = 0; i < 5; i++) {
  const number = prompt('Enter a number:');
  numbers.push(number);
}

console.log(`Original numbers: ${numbers}`);

const userNumber = prompt('Enter a number to search for:');
const found = numbers.includes(userNumber);

if (found) {
  alert(
    `The number ${userNumber} is in the array at index ${numbers.indexOf(
      userNumber
    )}.`
  );
} else {
  alert(`The number ${userNumber} is not in the array.`);
}
1;

numbers.pop();
console.log(`Numbers with last element removed: ${numbers}`);

function ascendingSort(a, b) {
  return a - b;
}

numbers.sort(ascendingSort);
console.log(`Sorted numbers: ${numbers}`);
