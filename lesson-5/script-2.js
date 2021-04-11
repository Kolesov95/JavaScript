/* Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре.
Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
Пустая корзина должна выводить строку «Корзина пуста»;
Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
*/

var basket = {
    products: [
        {
            id: 10,
            product_name: 'Cola-cola',
            price: 85,
            quantity: 3
        },
        {
            id: 20,
            product_name: 'Хлеб',
            price: 10,
            quantity: 1
        },
        {
            id: 1,
            product_name: 'Шоколад',
            price: 50,
            quantity: 50
        }
    ],
    countBasketPrice() {
        let result = 0
        for (var i = 0; i < this.products.length; i++) {
            result = result + this.products[i].price * this.products[i].quantity
        }
        return result
    },
    countBasketQuantity() {
        let result = 0
        for (var i = 0; i < this.products.length; i++) {
            result = result + this.products[i].quantity
        }
        return result

    }
}

p = basket.countBasketPrice()
q = basket.countBasketQuantity()


var content = document.getElementById('catalog')

if (basket.countBasketQuantity() !== 0) {
    var newElement = document.createElement("div")
    newElement.innerHTML = 'В корзине ' + basket.countBasketQuantity() + ' товаров на сумму ' + basket.countBasketPrice()
    content.appendChild(newElement)
}
else {
    var newElement = document.createElement("div")
    newElement.innerHTML = "Корзина пуста"
    content.appendChild(newElement)
}

