/*Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 — значения аргументов, operation — строка с названием операции.
В зависимости от переданного значения выполнить одну из арифметических операций
(использовать функции из пункта 5) и вернуть полученное значение (применить switch).*/

function addition(a, b) {
    return a + b
}
function subtraction(a, b) {
    return a - b
}
function multiplication(a, b) {
    return a * b
}
function division(a, b) {
    return a / b
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return (addition(arg1, arg2))
        case '-':
            return (subtraction(arg1, arg2))
        case '*':
            return (multiplication(arg1, arg2))
        case '/':
            return (division(arg1, arg2))

    }
}


alert(mathOperation(3, 4, '+'))
alert(mathOperation(3, 4, '-'))
alert(mathOperation(3, 4, '*'))
alert(mathOperation(3, 4, '/'))




