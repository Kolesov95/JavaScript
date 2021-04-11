/* Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги.
Доска должна быть верно разлинована на черные и белые ячейки.
Строки должны нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.*/

var content = document.getElementById('chess')
var rows = [null, 8, 7, 6, 5, 4, 3, 2, 1, null]
var cols = [null, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', null]

for (let i = 0; i < 10; i++) {
    var tr = document.createElement('tr')
    content.appendChild(tr)
    for (let j = 0; j < 10; j++) {
        var td = document.createElement('td')
        tr.appendChild(td)
        if (rows[i] === null && cols[j] !== null) {
            td.innerHTML = cols[j]
        }
        else if (rows[i] !== null && cols[j] === null) {
            td.innerHTML = rows[i]
        }
        if (j !== 0 && j % 2 != 0 && i != 0 && i % 2 == 0 && j != 9) {
            td.style.backgroundColor = 'black'
        }
        if (i !== 0 && i % 2 != 0 && j != 0 && j % 2 == 0 && i != 9) {
            td.style.backgroundColor = 'black'
        }

    }
}
