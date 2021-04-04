/* Написать функцию, преобразующую число в объект.
Передавая на вход число от 0 до 999, мы должны получить на выходе объект,
в котором в соответствующих свойствах описаны единицы, десятки и сотни.
Например, для числа 245 мы должны получить следующий объект:
{‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999,
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.*/


function numberToObject(number) {
    var result = {
        ones: 0,
        tens: 0,
        hundreds: 0
    }
    if (number > 999) {
        console.log('Ошибка. Число больше 999')
        return {}
    }
    else if (number <= 9) {
        result.ones = number % 10
        result.tens = 0
        result.hundreds = 0
    }
    else if (number <= 99) {
        result.ones = number % 10
        result.tens = Math.floor(number / 10) % 10
        result.hundreds = 0
    }
    else if (number <= 999) {
        result.ones = number % 10
        result.tens = Math.floor(number / 10) % 10
        result.hundreds = Math.floor(number / 100) % 10
    }
    return result
}

a = numberToObject(105)
console.log(a.ones)
console.log(a.tens)
console.log(a.hundreds)
b = numberToObject(9)
console.log(b.ones)
console.log(b.tens)
console.log(b.hundreds)
c = numberToObject(9999)
