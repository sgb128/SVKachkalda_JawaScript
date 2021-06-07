'use strict';

let cartArr = {
	goods : [],
	getTotalSum() {
		let totalSum = 0;
		for (let good in this.goods) {
			totalSum += this.goods[good].price;
		}
		return totalSum;
	},
	getTotalQuantity() {
		return this.goods.length;
	},
	add(title, price) {
		this.goods.push({title, price : Number(price)});
	}
};

let productsArr = {
	products : [
		{
			id : 0,
			title : 'Комп',
			description : 'Компьютер Пень 33',
			picture : './img/pen33.png',
			price : 10000,
			quantity : 6
		},
		{
			id : 1,
			title : 'Клава',
			description : 'Не та Клава, которая Клавдия, а та клава по которой стучать можно',
			picture : './img/klava.jpg',
			price : 500,
			quantity : 4
		},
		{
			id : 2,
			title : 'Акустическая система DolbySurround',
			description : 'DolbySurround - dolbit normalno!',
			picture : './img/dolby.jpg',
			price : 6000,
			quantity : 9
		}
	],
	getProduct(id) {
		for(let i of this.products) {
			if(i.id == id) {
				i.quantity--;
				return i;
			}
		}
	}
};


function updateCart() {
	let quantity = cartArr.getTotalQuantity();
	let totalSum = cartArr.getTotalSum();

	const cart = document.querySelector('#cart');
	cart.innerHTML = null;

	if(quantity) {
		cart.insertAdjacentHTML('afterBegin', `В корзине: ${quantity} товаров на сумму ${totalSum} рублей`)
	}
	else {
		cart.insertAdjacentHTML('afterBegin', 'Корзина пуста');
	}
}

function createProductCard(data) {
	let card = '';
	
	card += `<h3 class='card__title'>${data.title}</h3>\n`;

	if(data.picture) {
		card += `<div class='card__img'><img src='${data.picture}'></div>\n`;
	}
	else {
		card += `<div class='card__img'>&nbsp;</div>\n`;
	}

	card += `<div class='card__description'><span>Описание: </span>${data.description}</div>\n`;
	card += `<div class='card__price'><span>Цена: </span>${data.price}</div>\n`;
	if(data.quantity) {
		card += `<div class='card__quantity'><span>В наличии: </span>${data.quantity}</div>\n`;
		card += `<button class='card__add'>В корзину</button>`;
	}
	else {
		card += `<div class='card__quantity'>Нет в наличии</div>\n`;
		card += `<button class='card__add' disabled>Нет в наличии</button>`;
	}

	return `<div class='card' data-id='${data.id}'>${card}</div>`;
}

function updateProducts(data) {
	const catalog = document.querySelector('#products');
	catalog.innerHTML = null;
	for(let i = 0; i < data.length; i++) {
		let card = createProductCard(data[i]);
		catalog.insertAdjacentHTML('beforeend', card);
	}
	for(let btn of catalog.querySelectorAll('.card')) {
		btn.querySelector('.card__add').addEventListener('click', clickCardHandler);
	}
}

function clickCardHandler(e) {
	let productId = e.target.parentNode.dataset.id;
	let product = productsArr.getProduct(productId);
	cartArr.goods.push(product);
	updateShop();
}

function updateShop() {
	updateProducts(productsArr.products);
	updateCart();
}

updateShop()