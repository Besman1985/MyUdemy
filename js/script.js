"use strict";




let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("Сколько фильмов вы уже посмотрели", "");
    }
}

start();
 



let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
 

function detectPersonalLevel() {
    if (personalMovieDB.count <= 10) {
        alert("Просмотрено довольно мало фильмов")
    } else if (10 < personalMovieDB.count <= 30) {
        alert("Вы классический зритель")
    } else if (personalMovieDB.count > 30) {
        alert("Вы Киноман")
    } else {
        alert("Произошла ошибка")
    };
}
detectPersonalLevel();


function rememberMyFilms() {

    for (let i = 0; i < 2; i++) {
        let
            a = prompt("Один из последних просмотренных фильмов?", ""),
            b = prompt("Насколько оцените его?", "");
        if (a === null || b === null || a.length > 50 || a == "" || b == "") {
            i--;
        };
        personalMovieDB.movies[a] = b;

    };

}
rememberMyFilms();

function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB)
    };
}

showMyDB();

function writeYourGenres() {

    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`"Ваш любимый жанр под номером ${i}"`)
    };


}
writeYourGenres();




























