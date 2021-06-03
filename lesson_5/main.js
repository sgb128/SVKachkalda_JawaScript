'use strict';

let basket = {
	goods : [
        //{name:'Компьютер Пень 33', price: 10_000},
        //{name:'Клавиатура Samsung', price: 500},
        //{name:'Акустическая система DolbySurround', price: 6_000 }
	],
	countBasketPrice() {
		let total = 0;
		for (let good in this.goods) {
			total += this.goods[good].price;
		}
		return total;
	},
	countBasketQuantity() {
		return this.goods.length;
	}
};


let quantity = basket.countBasketQuantity();
let totalSum = basket.countBasketPrice();

const bskt = document.querySelector('#basket');
bskt.insertAdjacentHTML('beforeBegin', '<h2>Корзина</h2>')

if(quantity) {
	bskt.insertAdjacentHTML('afterBegin', `<p>В корзине: ${quant} товаров на сумму ${totalSum} рублей</p>`)
}
else {
	bskt.insertAdjacentHTML('afterBegin', '<p>Корзина пуста</p>');
}