
let message = "Hello world!!!";
console.log(message);

if (true) {
    let message = 'Godbuy!!!';
    console.log(message);
}

console.log(message);



var var_message = "Hello VAR!!!";
console.log(var_message);

if (true) {
    var var_message = 'Godbuy VAR!!!';
    console.log(var_message);
}

console.log(var_message);


const speak = 'lalala';
console.log(speak);


console.log(speak);

// Типи даних:
// 1. Рядок, стрічка - "string"
let str = 'string!';
str = "My String!!";
str = `My String!!!`;

console.log(str)

let name = "Mark"

console.log(`Hello, ${name}!!!`);
// 2. Число - "number"
let number = 123;
let anothernumber = 256.356;

console.log(number);
// 3. Булевий - Boolean
let check = true;
let checked = false;

console.log(check, checked);
// 4. Спеціальне значення - null
let age = null;

console.log(age);
// 5. Спеціальне значення - undefined
let x;

console.log(x);


//Object

let user = {
 _name: "Jack",
 age: 16,
 isAuth: true,
 jobs: {
  first: "Broker",
  second: "Builder"
 }
}

console.log(user.isAuth)
console.log(user['age'])

// Масиви (Array)

let arr = ['one', 'two', 'three', 26, true,['Hello', 'ES6', true]];
console.log(arr[5][1]);
console.log(arr[1]);

arr[1] = 'TWO';
console.log(arr);
console.log(arr.length);

arr.push('four', 'six'); 
console.log(arr);

arr.pop();
console.log(arr);

let addUnshift = arr.unshift('zero', 10) // дод.на початок
console.log(arr);

arr.shift(); // видаляє з початку елем.
console.log(arr);

let arr_num = [1,2,23,3,4,5,12,6,7,8,9,10,11];
console.log(arr_num);

let str_arr = arr_num.join(); // число в рядок
console.log(str_arr);

let str_arr1 = arr_num.join("-!"); // число в рядок
console.log(str_arr1);

let revers_ = arr_num.reverse();
console.log(revers_);

let sort_ = arr_num.sort();
console.log(sort_);

let alphabet = ['Orange', 'Banana', 'Apple', 'Mango']

alphabet.sort();
console.log(alphabet);

let alph_part = alphabet.slice(1,3)
console.log(alph_part);

// Арифметичні операціїї JS

// 1. Стандартні оператори - +, -, *, /.

let a = 5;
let b = 6;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

let a_str = 'My';
let b_str = 'string';
console.log(a_str + b_str);

console.log(1 + 3);
console.log(1 + '3');

// 2. Інкремент ++ збільшення не 1
let a_2 = 100;
a_2 ++ // a_2 = a_2 + 1
console.log(a_2);

// 3. Декремент -- зменшення не 1
let b_2 = 100;
b_2 --
console.log(b_2);

// 4. Оператори порівняння - повертають true - false 

let a_tr_fl = '5';
let b_tr_fl = 5;

console.log(a_tr_fl > b_tr_fl);
console.log(a_tr_fl >= b_tr_fl);
console.log(a_tr_fl <= b_tr_fl);
console.log(a_tr_fl == b_tr_fl);
console.log(a_tr_fl === b_tr_fl);

// 5. Оператор не дорівнює
console.log(a_tr_fl != b_tr_fl);
console.log(a_tr_fl !== b_tr_fl);

// 6. Логічні оператори &&(AND) (OR)

// && (AND)

console.log(true && true && true);
console.log(true && false && true);

console.log(100 > 10 && 30 < 40 && 10 == 10);

//  (OR)

console.log(true | true | true);
console.log(true | false | false);
//(якщо одне true, то всі true)

let hour = 14;

if (hour < 10 || hour > 18){
 console.log('Office is closed!!!');
}

alert('Hello World!!!');   // виводить модальне вікно(повідомлення) користувачу


// let result = promt(title, default);
// виводить модальне вікно, що містить поле вводу

let result = prompt("What is your name?", "Max" );
alert(`Hello, ${result}`);

// confirm - виводить модальне вікно з питанням та 2-ма кнопками: Ok(true) i Cancel(false)

// let result_ = confirm(question);
let result_ = confirm('Are you adult?');
alert(`Adult = ${result_}`);
alert(`Adult` + result_);
