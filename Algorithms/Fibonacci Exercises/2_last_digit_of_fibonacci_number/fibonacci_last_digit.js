const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(fib(parseInt(line, 10)));
    process.exit();
}

function fib(n) {
    //store just last digit
    let arr = [0, 1]
    for (let i = 2; i <= n; ++i){
        arr[i]= (arr[i-1] + arr[i-2]) % 10
    }
    return arr[n]
}

module.exports = fib;
