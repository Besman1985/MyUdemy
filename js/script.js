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


//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     for (let i = 0; i< arr.length; i++){
//          result[i] = arr[i];

//     };
// console.log(result);

// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i < data.length; i++) {
//     if (typeof data[i] === 'string') {
//        data[i] = data[i]+"-done"

//     } else  {
//       data[i] = data[i]*2;
//     };
// };

// console.log (data);


 const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
    let a = 0;
    for ( let i = data.length; i>0; i--){
    result[a] = data [i-1];
    a++;
        console.log (i);
    };
    console.log (result);


    const lines = 8;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
};
console.log(result);