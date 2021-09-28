//This tic tac toe play agains itself and improve every match

//Winner Positions
const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

var auxO = 0; var auxX = 0;
var scoreX = 0; var scoreO = 0; var draws = 0; //score 

var who = 0; //who++ per move

//Data to acumulate through games
var goodMovesO = []; var goodMovesX = [];

//Cells of the current game
var cells = [-1, -1, -1, -1, -1, -1, -1, -1, -1];

//Currents moves
var moves = []

function principal(){
    play(1, 0); checkWinner(); who += 1
    play(0, 1); checkWinner(); who += 1
}

function play(good, bad){
    if (checkForLoseOrWin(good, bad)) {
        if (good === 1) {
            if (checkGoodMovesX()){
                if (who === 8){draws++; reset()}
                else random(good)
            } 
        } else if (checkGoodMovesO()) {
            if (who === 8){draws++; reset()}
            else random(good)
        }
    } 
}
//Chequear si se puede ganar o perder en este movimiento
function checkForLoseOrWin(good, bad){
    let i = 0;
    while (i < lines.length){
        const [a,b,c] = lines[i]
        if (cells[a] === cells[b] && (cells[a] === good || cells[a] === bad)){
            if (cells[c] === -1){
                cells[c] = good; moves.push(c); return false;
            }
        }else if (cells[a] === cells[c] && (cells[a] === good || cells[a] === bad)){
            if (cells[b] === -1){
                cells[b] = good; moves.push(b); return false;
            }
        }else if (cells[b] === cells[c] && (cells[b] === good || cells[b] === bad)){
            if (cells[a] === -1){
                cells[a] = good; moves.push(a); return false; 
            }
        }
        i++
    } return true
}

function checkGoodMovesX(){
    while (auxX < goodMovesX.length){
        let i = 0; let arrAux = goodMovesX[auxX]
        while (i < moves.length && moves[i] === arrAux[i]){
            i+=1
        }
        if (i === moves.length && cells[i] === -1){
            cells[arrAux[i]] = 1; moves.push(arrAux[i]); return false;
        }
        auxX++
    } return true
}

function checkGoodMovesO(){
    while (auxO < goodMovesO.length){
        let i = 0; let arrAux = goodMovesO[auxO]
        while (i < moves.length && moves[i] === arrAux[i]){
            i+=1
        }
        if (i === moves.length && cells[i] === -1){
            cells[arrAux[i]] = 0; moves.push(arrAux[i]); return false;
        }
        auxO++
    } return true
}


function random(good){
    let x = Math.floor(Math.random()*8)
    while (cells[x] !== -1) x = Math.floor(Math.random()*8)
    cells[x] = good; moves.push(x); 
}

//Check for winners
function checkWinner(){
    for(let i = 0; i < lines.length; i++){
        const [a, b, c] = lines[i]
        if (cells[a] === cells[b] && cells[b] === cells[c] && cells[a] !== -1){
            if (who % 2 === 0){
                scoreX++; goodMovesX.push(moves)
            }
            else {
                scoreO++; goodMovesO.push(moves)
            }
            reset(); break
        }
    }
    if (who === 8){ draws++; reset() }
}

function reset(){console.log(k); auxO = 0; auxX = 0; k++;cells = [-1, -1, -1, -1, -1, -1, -1, -1, -1]; moves = []; who = 0; }
var k = 0
while (k < 50001){ principal() }

console.log('Score player X: ', scoreX, ' Score player O: ', scoreO, ' Empates: ', draws);
