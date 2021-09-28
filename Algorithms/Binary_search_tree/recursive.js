/*
a. Implemente un módulo que genere una lista a partir de la lectura de números
enteros. La lectura finaliza con el número -1.
b. Implemente un módulo recursivo que devuelva el mínimo valor de la lista.
c. Implemente un módulo recursivo que devuelva el máximo valor de la lista.
d. Implemente un módulo recursivo que devuelva verdadero si un valor determinado
se encuentra en la lista o falso en caso contrario.
*/
var arr = []

function lecture(){ 
    let i = 0
    num = Math.floor(Math.random() * 100)
    while (i < 30 && num != -1){
        arr.unshift(num)
        num = Math.floor(Math.random() * 100)
        i++
    }
}

function minRecursive(arr, left, right, min){
    
    if (left >= right){
        console.log(min)
        return min
    }
    if (arr[left] <= min){
        min = arr[left]
    }
    left += 1
    console.log('im left', left); console.log('im min', min)
    minRecursive(arr, left, right, min)
}

lecture()
console.log(arr)
var left = 0; let min = Infinity
//minRecursive(arr, left, arr.length, min)

function maxRecursive(arr, left, right, max){
    if (left >= right){
        return max
    }
    if (arr[left]>= max){
        min = arr[left]
    }
    left += 1
    minRecursive(arr, left, right, max)
}


function searchRecursive(arr, left, right, num){
    if (left >= right){
        return False
    }
    if (arr[left] === num){
       return True
    }
    left += 1
    minRecursive(arr, left, right, num)
}
//------------------------------------------------------------------------------------------

/*
a. Implemente un módulo que genere un vector de 20 números enteros.
b. Implemente un módulo recursivo que devuelva el máximo valor del vector.
c. Implementar un módulo recursivo que devuelva la suma de los valores contenidos
en el vector.
*/
var arr=[]
function generate(){
    for (let i = 0; i < 20; i++){
        arr[i] = Math.floor(Math.random()*1000)
    }
}

function searchRecursive(arr, left, right, num){
    if (left >= right){
        return num
    }
    num = num + arr[left]
    left += 1
    minRecursive(arr, left, right, num)
}