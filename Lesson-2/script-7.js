/*Сравнить null и 0. Объяснить результат.*/
alert(null >= 0) //true
alert(null > 0) // false
alert(null < 0) // false
alert(null == 0) // false
alert(null === 0) //false
alert(null != 0) //true
alert(null !== 0) //true

// Нестрогое сравнение преобразует null в 0, поэтому null >= 0 True
// При равенстве null не преобразуется

