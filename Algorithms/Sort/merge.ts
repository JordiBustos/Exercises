//Merge sort algorithm :D

function insertionSort(arr: number[] | string[]){
    for (let i = 1; i < arr.length; ++i) {
        let actual: number | string = arr[i]
        let j: number = i - 1
        while (j > -1 && arr[j] > actual){
            arr[j+1] = arr[j]
            j = j - 1 
        }
        arr[j+1] = actual
    }
    return arr
}


function merge(aux: number[] | string[], a: number[] | string[], mid: number, low: number, high: number): void{
    let i: number = low, j = mid+1;
    for (let k = low;k <= high; k++){
        if (i > mid) aux[k] = a[j++];
        else if (j > high) aux[k] = a[i++]
        else if (a[j] < a[i]) aux[k] = a[j++]
        else aux[k] = a[i++]
    }
}

function sort(aux: number[] | string[], high: number, low: number, a: number[] | string[]){
    let CUTOFF: number = 7;

    if (high <= (low + CUTOFF - 1)) return insertionSort(a);
    let mid: number = Math.floor(low + (high -   low)/2);
    
    sort(a, mid,low, aux);
    sort(a, high, mid+1, aux);

    if (a[mid+1] > a[mid]) return
    merge(aux, a, mid, low, high);
}

var arr: number[] = []
for (let i = 0; i < 10**6; i++){
    arr[i] = Math.floor(Math.random()* 10**5)
}

//sort(arr, arr.length-1, 0, arr)

buMerge(arr)
console.log(arr)

/*Bottom Up merge sort implementation*/
function buMerge(a: number[] | string[]){
    let N: number = a.length;
    let aux: number[] | string[] = [N];

    for (let sz = 1; sz < N; sz = sz*2){
        for(let low=0; low < N-sz; low+= sz*2){
            merge(aux, a, low+sz, low, Math.min(low+sz*2-1, N-1))
        }
    }
}
