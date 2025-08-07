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















function calculateVolumeAndArea(a) {

    if (!isNaN(a) && Number.isInteger(a) && a > 0) {
        let volume,
            area,
            result;
        volume = a * a * a;
        area = 6 * (a * a);
        result = `'Объем куба:${volume}, площадь всей поверхности: ${area}'`;
        return result;
    } else {
        let error = 'При вычислении произошла ошибка';
        return error;

    };

}

console.log(calculateVolumeAndArea(15));


function getCoupeNumber(nam) {
    let result;
    if (!isNaN(nam) && Number.isInteger(nam) && nam > 0 && nam <= 36) {
        if (nam > 0 && nam <= 4) {
            result = 1;
        } else if (nam > 4 && nam <= 8) {
            result = 2;
        } else if (nam > 8 && nam <= 12) {
            result = 3;
        } else if (nam > 12 && nam <= 16) {
            result = 4;
        } else if (nam > 16 && nam <= 20) {
            result = 5;
        } else if (nam > 20 && nam <= 24) {
            result = 6;
        } else if (nam > 24 && nam <= 28) {
            result = 7;
        } else if (nam > 28 && nam <= 32) {
            result = 8;
        } else if (nam > 32 && nam <= 36) {
            result = 9;
        };
        return result;
    } else if (nam < 0 || !Number.isInteger(nam)) {
        result = "Ошибка. Проверьте правильность введенного номера места";
        return result;
    } else {
        result = "Таких мест в вагоне не существует";
        return result;
    };
};
console.log(getCoupeNumber(0));

function getTimeFromMinutes(allMinut) {
    let time;
    if (allMinut < 0 || typeof (allMinut) == "string") {
        time = "Ошибка, проверьте данные";
        return time;
    } else {
        let minut = allMinut % 60;
        let hours = (allMinut - minut) / 60;
        if (hours === 0 || hours === 5 || hours === 6 || hours === 7 || hours === 8 || hours === 9 || hours === 10) {
            time = `"Это ${hours} часов и ${minut} минут"`;
        } else if (hours === 1 || hours === 21) {
            time = `"Это ${hours} час и ${minut} минут"`;
        } else {
            time = `"Это ${hours} часа и ${minut} минут"`;
        };

        return time;
    };

}

console.log(getTimeFromMinutes(210));


function findMaxNumber(a, b, c, d) {
    const arr = [a, b, c, d];
    if (arr.length < 4) {
        return "Error";
    } else {
        let max = Math.max(...arr);
        return max;
    };

}
console.log(findMaxNumber(1, 35, 22));





function fib(nam) {
    let prev = 0,
        next = 1;
    result = "0";
    if (typeof (nam) == "string" || !Number.isInteger(nam)) {
        result = " ";
    } else if (nam === 1) {
        result = 0;
    } else if (nam === 0) {
        result = "";
    } else {
        for (let i = 1; i < nam; i++) {
            next = prev + next;
            prev = next - prev;
            result += `.${prev}`;
        };
    };

    return result;


}


console.log(fib(1.5));



























































































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

// let n = "Я люблю весну потому, что это утро природы. Мальчик написал в уголке. Пусть всегда будет солнце! Пусть всегда будет мама! Пусть всегда буду я! Море было лазурное, зелёное и даже золотистое"
// function getTextResult(text,nam) {

//     let textN = text.split(/[.!]\s*/),
//         textAbj = [],
//         word = " ";

//     for (let i = 0; i < textN.length; i++) {
//         if (i == 0) {
//             textAbj[i] = textN[i].split(" ");
//             word += `${textAbj[i][nam]}`;
//         } else {
//             textAbj[i] = textN[i].split(" ");
//             word += `,${textAbj[i][nam]}`;
//         };

//     };
//     return word;
// }

// console.log(getTextResult(n,0));
















