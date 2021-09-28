function fibo (){
    let arr = [0, 1]; let i = 2;
    function calculateNext (bool, n){ 
        if (!bool) { arr.push((arr[i-2] + arr[i-1])); i++ }
        else console.log(arr[n])
    }
    return calculateNext
}

const callFibo = fibo()

for (let i = 0; i < 10**7; i++){
    callFibo(false, -1)
}

callFibo(true, 1200)

