//Объект
let persone = {
    name: 'John',
    age: 25,
    isMarried: false
};
//Лекция 6
console.log(persone.name);// Первый способ вывода свойства объекта "Через точку"
console.log(persone["age"]);// Второй способ вывода свойства объекта "Через квадратные скобки"
//Массив - частный случай объекта
let arr = ["plum.png", "orange.jpg","apple.bmp"];
console.log(arr[0]);
//alert("Hello World!");
//confirm("Are you here?");
// let answer = confirm("Are you here?");
//  console.log(answer);
//let answer = prompt("Есть ли вам 18?", "Да");
//console.log(answer);
//console.log(typeof(arr));
// console.log(typeof(null));
// Лекция 7 Операторы
// console.log("arr" + "-object");// string
// console.log(4 + "-object");// string
// console.log(4 + +"-object");// number (NotANumber) - При добавлнении "+" перед string, string начинает читаться как число


//let answer = prompt("Есть ли вам 18?", "Да");//string
//let answer = +prompt("Есть ли вам 18?", "Да");//number

console.log(typeof(answer));
//Декремент и инкремент

let incr = 10,
decr = 10;

//incr++;
//decr--;

// console.log(++incr);
// console.log(--decr);

console.log(incr++);
console.log(decr--);
console.log(5%2);//остаток от деления
console.log('2' == 2);//сравнение значений (истина)
console.log('2' === 2);//сравнение типов данных (ложь)

let isChecked = true,
    isClose = false;

    console.log(isChecked && isClose);// Оператор "И"
    console.log(isChecked || isClose);// Оператор "ИЛИ"
    console.log(isChecked || !isClose);// Оператор "Отрицание"

