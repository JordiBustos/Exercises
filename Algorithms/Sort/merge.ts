//Merge sort algorithm :D

function merge(a: number[] | string[], mid: number, low: number, high: number){
    let n: number = mid - low + 1;
    let n2: number = high - mid;

    let L: number[] | string[] = [];
    let R: number[] | string[] = [];
    
    //Copy left half of the array
    for (let i = 0; i < n; i++) L[i] = a[low + i];
    //Copy right half of the array 
    for (let j = 0; j < n2; j++) R[j] = a[mid + 1 + j];

    let i: number = 0, j: number = 0, k: number = low;

    while (i < n && j < n2){
        if (L[i] <= R[j]){ a[k] = L[i]; i++ }
        else if (R[j] <= L[i]) { a[k] = R[j]; j++ }
        k++
    }
    
    //Just to check
    while (i < n) {
        a[k] = L[i];
        i++;
        k++;
    }
    
    while (j < n2) {
        a[k] = R[j];
        j++;
        k++;
    }
}

function sort(high: number, low: number, a: number[] | string[]){
    if (low >= high) return

    let mid = Math.floor(low + (high - low)/2);
    
    sort(mid,low, a);
    sort(high, mid+1, a);

    merge(a, mid, low, high);
}


var arr: number[] = [10, 20, 500000, 1, 2, 3, 209, 2, 100, 252, 3904293402, 2, 1, 1, 1, 3, 5, 5, 9]

sort(arr.length-1, 0, arr)

console.log(arr)