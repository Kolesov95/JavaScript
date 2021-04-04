/* Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.*/

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
        }],
    countBasketPrice() {
        var result = 0
        for (var i = 0; i < this.products.length; i++) {
            result = result + this.products[i].price * this.products[i].quantity
        }
        return result
    }
}
alert(basket.countBasketPrice())