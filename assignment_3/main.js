'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let numbers = [];

  while (true) {
    let input = prompt('Enter a number or type stop to finish:');

    if (input === null || input.toLowerCase() === 'stop') {
      break;
    }

    let number = parseFloat(input);
    if (!isNaN(number)) {
      numbers.push(number);
    } else {
      alert('You must enter a number or type stop.');
    }
  }

  let evenNumbersText = 'Even numbers: ';
  let foundEven = false;
  for (let number of numbers) {
    if (number % 2 === 0) {
      evenNumbersText += `${number}, `;
      foundEven = true;
    }
  }
  if (!foundEven) {
    evenNumbersText += 'None';
  } else {
    evenNumbersText = evenNumbersText.slice(0, -2);
  }

  document.getElementById('evenNumbers').textContent = evenNumbersText;

  document.body.innerHTML += '<div>Program has finished executing.</div>';
});
