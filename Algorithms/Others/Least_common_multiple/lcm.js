const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    if (line !== "\n") {
        const a = parseInt(line.toString().split(' ')[0], 10);
        const b = parseInt(line.toString().split(' ')[1], 10);

        console.log(lcm(a, b));
        process.exit();
    }
}

function lcm(a, b) {
let hcf;
// looping from 1 to number1 and number2 to find HCF
for (let i = 1; i <= a && i <= b; i++) {
    if(a % i == 0 && b % i == 0) {
        hcf = i;
    }
}
    return (a * b) / hcf;
}

module.exports = lcm;