//2-ге відео ДЗ
"use strict";
console.log("Я вчу JS");

//1 варіант: 
console.log('Вчим JS')
/* ПРАВИЛЬНО */

//2 варіант:
console.log('JS')
console.log('Вчим')
/*ПРАВИЛЬНО, але при стисканні файлу буде помилка через відсутність ; */

//3 варіант: console.log('Вчим') console.log('JS')
/*
НЕПРАВИЛЬНО, потрібно поставити ;
*/

//4 варіант: 
/* 
console.log('Вчим); 
console.log('JS')  

НЕПРАВИЛЬНО. Рядок 17 не закриті одинарні лапки
*/


//3-тє відео ДЗ

let userEyesColor; //змінна, яка містить значення кольору очей користувача
userEyesColor = 'Green';

let user;
let userName = 'Вася';
user = userName;
console.log(`Значення змінної user: ${user}`);

//1 варіант: let user = 'Вася' let age = 36
/* НЕПРАВИЛЬНО, потрібна ; */

//2 варіант:
let myage = 36;
/*ПРАВИЛЬНО, але потрібно дотримуватися стилю іменування змінних lowerCamelCase - myAge */

//3 варіант: 
const BLOCK_SIZE = 14 + 50;
/*
ПРАВИЛЬНО, але потрібно дотримуватися стилю іменування змінних lowerCamelCase, 
бо значення константи присвоєнно в хрді виконання програми - blockSize
*/

//4 варіант: 
const BLOCK_HEIGHT = 100;
/* 
ПРАВИЛЬНО
*/

//5 варіант: 
if (true) {
    var size = 15;
}
console.log(size);
/* 
ПРАВИЛЬНО
*/


//4-тє відео ДЗ

//1 варіант: 
let userAge = 36;
let userInfo = "Фрілансер ${userAge}";
/* НЕПРАВИЛЬНО, код написан без помилок, 
але щоб результат виводу строки був Фрілансер 36 потрібно лапки замінити -  `Фрілансер ${userAge}`*/

//2 варіант:
let userHeight = 145 / 0;
console.log(userHeight); //повернеться значення Nan

/*НЕПРАВИЛЬНО, повернеться знаечння Infinity */

//3 варіант:
/*let userName;
console.log(typeof userName); - повернеться Null
*/
/*
НЕПРАВИЛЬНО, повернеться Undefined
*/

//4 варіант: 
let userSize = "45" / "8";
console.log(typeof userSize); //- повернеться Number
/* 
ПРАВИЛЬНО
*/