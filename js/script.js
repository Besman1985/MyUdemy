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


// const Name = function (a,b) {
//      let c;
//      c = a+b;
//     return c;

// }

// let aba = Name;
// console.log (aba (3,5));




// function Name (a,b) {
//    let c;
//      c = a+b;
//      return c;
// }
// let abba = Name (3,5);
// console.log (abba);

// let Name = (a,b) => {
//   let c = a+b ;
//   return c;

// };
// let abbba = Name (3,5);
// console.log (abbba);




// let Name = prompt("Как тебя зовут", ""),
//     Sername = prompt("Как твоя фамилия", ""),
//     Age = prompt("Сколько тебе лет", "");


//     function welcome (Name,Sername,Age) {
//      alert (`Привет ${Name} ${Sername} с возрастом ${Age} лет`);
//     }

// welcome(Name,Sername,Age);
// let sex = "G";

// function sexIndefeciti (sex) {

//    if ( sex == "F") {
//     console.log ("Ваш пол женский")
//    } else if ( sex === "M"){
//      console.log ("Ваш пол Мужской")
//    } else {
//     console.log ("Ваш пол не определен")
//    }
// }

// sexIndefeciti(sex);

// let sex = "F";

// let sexIndefeciti = (sex) => {
//    if ( sex == "F") {
//      return "Ваш пол женский"
//    } else if ( sex == "M"){
//      return "Ваш пол Мужской"
//    } else {
//      return "Ваш пол не определен"
//    };
// };
// console.log (sexIndefeciti(sex));


// let day = +prompt ("Ведите число от 1 до 7", ""),
//     dayName;
// function watDay (day) {
//    switch (day) {
//       case 1 :
//       dayName = "Понедельник";
//       break;
//       case 2 :
//         dayName = "Вторник";
//       break;
//        case 3 :
//         dayName = "Среда";
//       break;
//        case 4 :
//         dayName ="Четверг";
//       break;
//        case 5 :
//        dayName = "Пятница";
//       break;
//        case 6 :
//         dayName ="Суббота";
//       break;
//        case 7 :
//        dayName = "Восскресенье";
//       break;
//    }
// }
// watDay(day);
// alert (`это день недели ${dayName}`);







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




// function sayHello(name) {
//     return `"Привет,${name}!"`

// }

// console.log(sayHello("Ivan"));

// // Место для второй задачи
// function returnNeighboringNumbers(nam) {
//     let Numbers = [];
//     for ( let i = 0; i < 3; i++) {
//         if (i == 0) {
//             Numbers[i] = nam - 1;
//         } else if (i == 1) {
//             Numbers[i] = nam;
//         } else if (i == 2) {
//             Numbers[i] = nam + 1;
//         }
//     };
//     return Numbers;
// };
//  console.log (returnNeighboringNumbers(10));



// Создайте функцию, которая будет принимать в себя 2 аргумента,
//  оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить
//   это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку
//    (или число в особых случаях, о которых ниже), где эти числа идут по порядку,
//     разделенные тремя дефисами "---". После последнего числа их не должно быть.

// Если второй аргумент не является числом, равен или меньше нуля - то 
// возвращать просто первый аргумент. (Проверяем через оператор typeof)

// Примеры:

// Вызов функции getMathResult(5, 3) даст ответ 5---10---15

// Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30

// Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50

// Вызов функции getMathResult(10, '5') даст ответ 10

// Вызов функции getMathResult(10, 0) даст ответ 10

// Вызов функции getMathResult(20, -5) даст ответ 20

// Эта задача уже ближе к реальности, когда вам нужно учитывать и тип данных у аргументов, проверять
//  их и продумывать логику работы внутри. Обратите внимание на прогрессию, 
//  она рассчитывается по простой формуле умножения.
//   Если первый аргумент 5, а второй 3, то число повторяется 3 раза, 
//   каждый раз увеличиваясь на само себя. 
 

// Место для третьей задачи
function getMathResult() {

}
