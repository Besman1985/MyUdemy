"use strict";




// let numberOfFilms;
// for (let j = 1; j < 2; j++) {
//   let c = prompt("Сколько фильмов вы уже посмотрели", "");
//   if (c === null || isNaN(c) || c.length > 50 || c === "") {
//     j--;
//     continue;
//   } else {
//     numberOfFilms = c;
//     if (c <= 10) {
//       alert("Просмотрено довольно мало фильмов")
//     } else if (10 < c <= 30) {
//       alert("Вы классический зритель")
//     } else if (c > 30) {
//       alert("Вы Киноман")
//     } else {
//       alert("Произошла ошибка")
//     };
//   };
// };


// let personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// };

// console.log(personalMovieDB);


// for (let i = 0; i < 2; i++) {
//   let
//     a = prompt("Один из последних просмотренных фильмов?", ""),
//     b = prompt("Насколько оцените его?", "");
//   if (a === null || b === null || a.length > 50 || a == "" || b == "") {
//     i--;
//   };
//   personalMovieDB.movies[a] = b;

// };


// console.log(personalMovieDB);


const Name = function (a,b) {
     let c;
     c = a+b;
    return c;

}

let aba = Name;
console.log (aba (3,5));




function Name (a,b) {
   let c;
     c = a+b;
     return c;
}
let abba = Name (3,5);
console.log (abba);

let Name = (a,b) => {
  let c = a+b ;
  return c;

};
let abbba = Name (3,5);
console.log (abbba);








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


//  const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];
//     let a = 0;
//     for ( let i = data.length; i>0; i--){
//     result[a] = data [i-1];
//     a++;
//         console.log (i);
//     };
//     console.log (result);


//     const lines = 8;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// };
// console.log(result);

// function drawChristmasTree(height) {
//   for (let i = 1; i <= height; i++) {
//     let row = '';
//     // Добавляем пробелы перед звездочками
//     for (let j = 1; j <= height - i; j++) {
//       row += ' ';
//     }
//     // Добавляем звездочки
//     for (let k = 1; k <= 2 * i - 1; k++) {
//       row += '*';
//     }
//     console.log(row);
//   }
// }

// drawChristmasTree(8);