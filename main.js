'use strict';

const soldier = {
    health: 400,
    armor: 100,
    sayHello: () => console.log('hello'),
};//это большой прототип, который описывает всех солдат

john.__proto__ = soldier;//Теперь мы установили прототипом Джона - Солдата

Object.setPrototypeOf(john, soldier);//мы установили прототип для Джона от содата.
//Это если нужно сделать в динамике. То-есть Джон уже существовал, мы ему просто установили прототип.

const john = Object.create(soldier);//мы создаем новый объект Jonh, который будет прототипно наследоваться от soldier;