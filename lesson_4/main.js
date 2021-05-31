"use strict"

/*
Задача №1:
Написать функцию, преобразующую число в объект.
Передавая на вход число от 0 до 999, надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни.
Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/
//var num = prompt('Введите число до 10000:');
var num = 123
var objectNumber = {
    nums:'',
    decs:'',
    hnrds:'',
    thsnds:''
};


function to_string(number){
    var rez = objectNumber
    rez.nums = 'единицы ' + String(number%10);
    if(number >= 10){
        rez.decs = 'десятки ' + String(parseInt(number/10)%10);
    };
    if(number >= 100){
        rez.hnrds = 'сотни ' + String(parseInt(number/100)%10);
    };
    if(number >= 100){
        rez.thsnds = 'тысячи ' + String(parseInt(number/1000)%10);
    };
    return objectNumber;
};

console.log(to_string(num).nums);
console.log(to_string(num).decs);
console.log(to_string(num).hnrds);
console.log(to_string(num).thsnds);

/*
Задача №2:
Продолжить работу с интернет-магазином:
В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
Реализуйте такие объекты.
Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/

var basket = { 
    items: [
        {name:'Компьютер Пень 33', price: 10_000},
        {name:'Клавиатура Samsung', price: 500},
        {name:'Акустическая система DolbySurround', price: 6_000 }
    ],

    countBasketPrice: function() {
        var k, sum = 0;
        for (k in this.items) {
            sum += this.items[k].price;
        }
        return sum;
    }
};

console.log("Сумма товаров в корзине: " + basket.countBasketPrice())