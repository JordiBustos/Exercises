//Solution to hanoi's problem

function hanoi (n: number, A: string, B: string, C: string){
    if (n === 1){
        //console.log(`Disk 1 from ${A} to ${B}`);
        return
    }
    hanoi(n-1, A, C, B)
    //console.log(`Disk ${n} from ${A} to ${B}`);
    hanoi(n-1, C, B, A)
}

var n: number = 40;

function count(n: number){
    let times: number;
    if (n === 1) times = 1
    else times = (2* count(n-1) + 1)
    return times
}

console.log('Movements: ', count(n))

hanoi(n, 'A', 'B', 'C')