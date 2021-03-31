/*С помощью цикла while вывести все простые числа в промежутке от 0 до 100.*/
var arr = []
arr.push(1)
arr.push(2)
var count = 3
while (count < 100) {
    if (count % 2 != 0) {
        arr.push(count)
    }
    count++
}
j = 0
while (j <= arr.length) {
    for (var k = 3; k < arr[j]; k++) {
        if (arr[j] % k == 0) {
            delete arr[j]

        }
    }
    j++
}
var result = arr.filter(Number)
alert(result)