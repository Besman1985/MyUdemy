"use strict";





let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели", "");
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели", "");
        };
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count <= 10) {
            console.logconsole.log("Просмотрено довольно мало фильмов")
        } else if (10 < personalMovieDB.count <= 30) {
            console.logconsole.log("Вы классический зритель")
        } else if (personalMovieDB.count > 30) {
            console.logconsole.log("Вы Киноман")
        } else {
            console.logconsole.log("Произошла ошибка")
        };
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let
                a = prompt("Один из последних просмотренных фильмов?", ""),
                b = prompt("Насколько оцените его?", "");
            if (a === null || b === null || a.length > 50 || a == "" || b == "") {
                i--;
            };
            personalMovieDB.movies[a] = b;
        };
    },
    showMyDB: function () {
        if (personalMovieDB.privat === false) {
            console.log(personalMovieDB)
        };
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let a = prompt(`"Ваш любимый жанр под номером ${i}"`);
            if (a === null || a === "") {
                i--
            } else {
                personalMovieDB.genres[i - 1] = a;
            };
        };
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр № ${i + 1} - это ${item}`)
        });
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        };

    }
};



































