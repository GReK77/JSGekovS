/*Задание 1
Создать массив «Список покупок». Каждый элемент массива
является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

1. Вывод всего списка на экран таким образом, чтобы сначала
шли некупленные продукты, а потом – купленные.*/

let shopList = [
    {name: 'tipe1', quantity: 30, bought: true},
    {name: 'tipe2', quantity: 15, bought: false},
    {name: 'tipe3', quantity: 22, bought: false},
    {name: 'tipe4', quantity: 45, bought: true}
];
console.log (shopList.sort((a, b) => (a.bought < b.bought) ? -1 : 1));


/*2. Добавление покупки в список. Учтите, что при добавлении
покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке,
а не добавлять новую.*/

function addItem (item, number) {
    let check = 0;
    shopList.map (function (a){
        if ((a.name === item) && (a.bought)) {
            check = 1;
            return a.quantity = a.quantity + number, a.bought = false;

        } else if ((a.name === item) && (!a.bought)) {
            check = 1;
            return a.quantity = a.quantity + number;
        };
    });
    if (!check) {
        shopList.push ({name: item, quantity: number, bought: false});
    };
    
};
addItem ('tipe4', 15);

/*3. Покупка продукта. Функция принимает название продукта
и отмечает его как купленный.*/

function buy (item) {
    shopList.map((a) => (a.name === item) ? a.bought = true: a.bought);
};
buy ('tipe2');


/*Задание 2
Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за
единицу товара. Написать следующие функции.*/

let salesSlip = [
    {name: 'tipe1', quantity: 30, price: 120},
    {name: 'tipe2', quantity: 15, price: 250},
    {name: 'tipe3', quantity: 22, price: 700},
    {name: 'tipe4', quantity: 45, price: 360}
];

//1. Распечатка чека на экран.

salesSlip.forEach ((a) => document.write (`<pre>${a.name}  ${a.quantity}  ${a.price};
<\/pre>`));

//2. Подсчет общей суммы покупки.

let sum = 0;
salesSlip.forEach ((a) => sum = sum + a.price);
console.log (sum);

//3. Получение самой дорогой покупки в чеке.

salesSlip.sort ((a, b) => (a.price > b.price) ? -1 : 1);
console.log (salesSlip[0]);

//4. Подсчет средней стоимости одного товара в чеке.

salesSlip.forEach ((a) => console.log(`${a.name} средняя цена ${a.price/a.quantity}`));

/*Задание 3
Создать массив css-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля.
Написать функцию, которая принимает массив стилей и
текст, и выводит этот текст с помощью document.write() в тегах
<p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.*/

let styleList = [
    'font-family: Arial, Helvetica, Verdana, sans-serif;',
    'font-size: 150%;',
    'font-style: italic;',
    'color: red;'
];
function inputText (style, text) {
    document.write (`<style type="text/css"> p {`)
    style.forEach ((a) => document.write(` ${a} `));
    document.write (`} </style> <p> ${text} </p>`);
};
inputText (styleList, 'какой-то текст');


/*Задание 4
Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и
названия факультета, для которого она предназначена.
Написать несколько функций для работы с ним.*/

let classrooms = [
    {name: 'ass', seats: 10, faculty: 'aaa'},
    {name: 'qws', seats: 12, faculty: 'bbb'},
    {name: 'sda', seats: 20, faculty: 'fff'},
    {name: 'xsa', seats: 18, faculty: 'aaa'},
    {name: 'rds', seats: 15, faculty: 'bbb'},
    {name: 'zez', seats: 16, faculty: 'fff'},
    {name: 'xaz', seats: 17, faculty: 'fff'}
];

//1. Вывод на экран всех аудиторий.

classrooms.forEach ((a) => document.write (`<pre>${a.name}  ${a.seats}  ${a.faculty}
<\/pre>`));

//2. Вывод на экран аудиторий для указанного факультета.

function findClassroom (array, fac) {
    let newArray = [];
    array.forEach (function (a) {
        if (a.faculty === fac) { 
           newArray.push (a.name);
        }; 
    });
    return newArray;
};

console.log (findClassroom (classrooms, 'fff'));

/*3. Вывод на экран только тех аудиторий, которые подходят для
переданной группы. Объект-группа состоит из названия,
количества студентов и названия факультета.*/

let students = [
    {name: 'a1', number: 12, facultu: 'aaa'},
    {name: 'a2', number: 15, facultu: 'aaa'},
    {name: 'a3', number: 17, facultu: 'aaa'},
    {name: 'b1', number: 10, facultu: 'bbb'},
    {name: 'b2', number: 16, facultu: 'bbb'}
];
function findClassroom2 (array, group) {
    let newArray = [];
    array.forEach (function (a) {
        if ((a.faculty === group.facultu)&&(a.seats >= group.number)) { 
           newArray.push (a.name);
        }; 
    });
    return newArray;
};
console.log (findClassroom2 (classrooms, students[1]));

//4. Функция сортировки аудиторий по количеству мест.

console.log (classrooms.sort((a, b) => (a.seats < b.seats) ? -1 : 1));

//5. Функция сортировки аудиторий по названию (по алфавиту).

console.log(classrooms.sort((a, b) => (a.name < b.name) ? -1 : 1));