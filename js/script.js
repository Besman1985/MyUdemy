"use strict";


let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели",""),
    theFilms = prompt("Один из последних просмотренных фильмов?",""),
    grade = prompt("Насколько оцените его?",""),
    theFilms2 = prompt("Один из последних просмотренных фильмов?",""),
    grade2 = prompt("Насколько оцените его?","");



let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};
personalMovieDB.movies[theFilms] = grade;
personalMovieDB.movies[theFilms2] = grade2;





 console.log (personalMovieDB);


const month = 9;


if (month == 6 || month == 7 || month == 8) {
  console.log ("Лето")
} else if (month == 1 || month == 2 || month == 12) {
  console.log ("Зима")
} else if (month == 3 || month == 4 || month == 5) {
  console.log ("Весна")
} else if (month == 9 || month == 10 || month == 11) {
  console.log ("Осень")
};