/*
Realizar un programa que lea números y que utilice un procedimiento recursivo que
escriba el equivalente en binario de un número decimal.
*/

function binaryTranslation(arr, num){
    if (num < 2){
        return arr.unshift(1)
    }
    arr.unshift(num % 2)
    num = Math.floor(num/2)
    binaryTranslation(arr, num)
}

let arr = []; let num = 23
binaryTranslation(arr, num)
console.log(arr)