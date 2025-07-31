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


