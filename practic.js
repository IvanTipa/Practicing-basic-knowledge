let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?', '');     
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false,
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько вы его оцениваете?', '');
    
        if (a != null && b != null && a != '' && b !='' && a.length < 50) { // проверка на пустую строку, строку не более 50 символов, а также нажатие отмена
            personalMovieDB.movies[a] = b;
            console.log('Done');
        } else {
            console.log('error');
            i--;// если условие не выполнилось - мы возвращаемся на одну итерацию цикла назад и задаем снова вопросы
        }
    
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30){
        console.log('Вы киноман');
    } else {
        console.log('error');
    }
}

detectPersonalLevel();

function showMyDB() {
    if(personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();



function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;//если не использовать -1 - первый(нулевой) элемент массива будет пустой
        // personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`) - как второй вариант работы кода
    }
}

writeYourGenres();