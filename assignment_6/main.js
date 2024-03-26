'use strict';

const numOfMovies = prompt('Montako leffaa laitetaan?');

const movies = [];

for (let i = 0; i < numOfMovies; i++) {
  const name = prompt('Leffan nimi?');
  const rating = +prompt('Arvosana 1-5?');
  const leffa = {
    nimi: name,
    arvio: rating,
  };
  movies.push(leffa);
}

movies.sort(sortByRating);
console.log(movies);

function sortByRating(a, b) {
  return b.arvio - a.arvio;
}

/*for (const leffa of movies) {
  document.getElementById(
    'target'
  ).innerHTML += `<li>${leffa.nimi}, ${leffa.arvio}</li>`;
}*/

for (const [index, leffa] of movies.entries()) {
  const listItem = `${index + 1}. ${leffa.nimi}, ${leffa.arvio}`;
  const html =
    index === 0 ? `<li><b>${listItem}</b></li>` : `<li>${listItem}</li>`;
  document.getElementById('target').innerHTML += html;
}

document.getElementById(
  'highest'
).innerHTML = `Highest rating: ${movies[0].nimi}, ${movies[0].arvio}`;
