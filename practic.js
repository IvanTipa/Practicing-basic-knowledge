'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: {},
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов Вы посмотрели?', '');

        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        personalMovieDB.count = +prompt('Сколько фильмов Вы посмотрели?', '');     
    }},
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
                  b = prompt('На сколько вы его оцениваете?', '');
        
            if (a != null && b != null && a != '' && b !='' && a.length < 50 ) { // проверка на пустую строку, строку не более 50 символов, а также нажатие отмена
                personalMovieDB.movies[a] = b;
                console.log('Done');
            } else {
                console.log('error');
                i--;// если условие не выполнилось - мы возвращаемся на одну итерацию цикла назад и задаем снова вопросы
            }
        
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30){
            console.log('Вы киноман');
        } else {
            console.log('error');
        }
    },
    showMyDB: function() {
        if(personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
           personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for(let i = 1; i <= 2; i++) {
            // let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            // if (genre === ''|| genre == null ) {
            //     console.log('Вы ввели некорректные данные или не ввели их вообще');
            //     i--;//если так произошло - откатываемся на одну итерацию цикла назад
            // } else {
            //     personalMovieDB.genres[i - 1] = genre;
            // }
            // // personalMovieDB.genres[i - 1] = genre;//если не использовать -1 - первый(нулевой) элемент массива будет пустой
            // //- как второй вариант работы кода

            let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

            if (genres === '' || genres == null) {
                console.log('Вы ввели некорректные данные или не ввели их вообще');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        };

        //item каждый елемент в массиве который перебираем. //жанр №1, жанр №2 и тд. i - номер по порядку 
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+ 1} - это ${item}`);
        });
    },
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.writeYourGenres();