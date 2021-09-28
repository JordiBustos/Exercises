//ShellSort implementation with n/2 increment secuence

const shellShort = (array: number[], n: number) => {
    let interval:number = Math.floor(n / 2)

    while (interval > 0){
        for (let i = interval; i < n; i++){
            let temp: number = array[i]
            let j: number = i
            while (j >= interval && array[j - interval] > temp) {
                array[j] = array[j - interval]
                j -= interval
            }
            array[j] = temp
        }
        interval = Math.floor(interval / 2)
    }
}

const data: number[] = [9, 8, 4, 7, 5, 6, 4, 1]
var size: number = data.length;

shellShort(data, size)
console.log(data)