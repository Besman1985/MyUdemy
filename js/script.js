"use strict";


let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели","");
    
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for (let i = 0; i < 2; i++ ) {
  let a = prompt("Один из последних просмотренных фильмов?",""),
      b = prompt("Насколько оцените его?","");
           personalMovieDB.movies[a] = b;
};
console.log (personalMovieDB);


 let nam = 11;
 (nam === 5) ? console.log("ok"): console.log("No");


 if (nam < 5) {
  console.log("ok")
 } else if (nam < 10){
  console.log("Normal")
 } else {
console.log("No")
 };