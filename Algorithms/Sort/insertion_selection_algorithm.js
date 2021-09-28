//Insertion Order Algorithm
function insertionOrder(){
    for (let i = 1; i < arr.length; ++i) {
        actual = arr[i]
        j = i - 1
        while (j > -1 && arr[j] > actual){
            arr[j+1] = arr[j]
            j = j - 1 
        }
        arr[j+1] = actual
    }
    return arr
}

//Selection Order Algorithm
function selectionOrder(){
    for (let i = 0; i < arr2.length; i++){
        let p = i;
        for (let j = i + 1; j < arr2.length; j++){
            if (arr2[j] < arr2[p]) p = j
        }
        if (i !== p){
            let item = arr2[p];
            arr2[p] = arr2[i]
            arr2[i] = item
        }
    }
}

var arr = [40, 30, 20, 10, 50]
var arr2 = [50, 30, 20, 40, 10]

insertionOrder()
selectionOrder()

//Check if are ===
console.log(arr, arr2)

