'use strict';

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
console.log(`Fruits: ${fruits}`);

console.log('The length of the array is: ' + fruits.length);
console.log('The fruit at index 2 is: ' + fruits[2]);
console.log('The last fruit is: ' + fruits[fruits.length - 1]);

const vegetables = [];

for (let i = 0; i < 3; i++) {
  const veggie = prompt('Enter a vegetable:');
  vegetables.push(veggie);
}

console.log(`Vegetables: ${vegetables}`);
console.log('The length of the array is: ' + vegetables.length);
