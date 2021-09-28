let cells=document.querySelectorAll('.row > div');let moves=0; let round=1; let scoreX=0; let scoreO=0; document.getElementById("round-counter").innerHTML = ('Round: ' + round.toString()); document.getElementById("score-counter").innerHTML = (`X: ${scoreX} - O: ${scoreO}`);
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

//Every cell now is cickeable
for (let i = 0;i < cells.length; i++){
  cells[i].addEventListener('click', cellClicked);
}

function cellClicked(){
    //Put X in the cell if it is empty
    if (event.target.textContent == ''){
      //Change bg color
      const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
      changeColors(rndCol)
        
        event.target.textContent = 'X'; event.target.style.transition = 'inmediatly'; event.target.style.color = 'blue'
        moves += 1;
        //Calculate next O position
        calculateO(moves)
        if (calculateWinner()){
            //if somebody win reset
            moves= 0; round+=1;
            document.getElementById("round-counter").innerHTML = ('Round: ' + round.toString());
            document.getElementById("score-counter").innerHTML = (`X: ${scoreX} - O: ${scoreO} `);
        } else if (moves === 5){
            //if movements === 5 and nobody wins it's a draw 
            moves= 0; round+=1;
            document.getElementById("round-counter").innerHTML = ('Round: ' + round.toString());
            for (let i = 0;i < cells.length; i++){
                cells[i].textContent = '';
            }
            alert('Nobody win :(')
        }
    }
}

function calculateO(moves){
    let puedo = true;
    let i = 0;
    var continuar = true;
    //Prioritize victory
    iCanWin(continuar)
    //Check if O can lose in this move
    if (continuar){
        while (i < lines.length - 1 && puedo) {
            const [a, b, c] = lines[i];
            if ((cells[a].textContent === cells[b].textContent) && (cells[a].textContent !== '' && cells[b].textContent !== '')){
                if (cells[c].textContent === ''){
                    posO(c); puedo = false;
                }
            }else if ((cells[a].textContent === cells[c].textContent) && (cells[a].textContent !== '' && cells[c].textContent !== '')){
                if (cells[b].textContent === ''){
                    posO(b); puedo = false;
            }
            } else if ((cells[b].textContent === cells[c].textContent) && (cells[b].textContent !== '' && cells[c].textContent !== '')){
                if (cells[a].textContent === '')  {  
                    posO(a); puedo = false;
                }       
            }
            i += 1;
        }
        //Put it randomly
        if (puedo && moves < 5) {
            i = Math.floor(Math.random() * 8);
            while (cells[i].textContent !== ''){
                i = Math.floor(Math.random() * 8);
            }
            posO(i)
        }
    }
}

function iCanWin(continuar){
    let puedo = true;
    let i = 0;
    //First check if O can win in this move
    while (i < lines.length - 1 && puedo) {
        const [a, b, c] = lines[i];
        if ((cells[a].textContent === cells[b].textContent) && (cells[a].textContent === 'O')){
            if (cells[c].textContent === ''){
                posO(c); puedo = false;
            }
        }else if ((cells[a].textContent === cells[c].textContent) && (cells[a].textContent === 'O')){
            if (cells[b].textContent === ''){
                posO(b); puedo = false;
            }
        } else if ((cells[b].textContent === cells[c].textContent) && (cells[c].textContent === 'O')){
            if (cells[a].textContent === '')  {  
                posO(a); puedo = false;
            }
        }
    i+=1;
    }
    if (puedo) continuar = false
}

function posO (pos){cells[pos].style.transition = 'inmediatly'; cells[pos].style.color = 'red'; cells[pos].textContent='O'}

function calculateWinner(){
    //Check every winner position to see if someone won
    for (let i = 0; i < lines.length; i++){
        const [a, b, c] = lines[i];
        //if a b c are equals and not '' it's because we have a winner
        if ((cells[a].textContent === cells[b].textContent && cells[b].textContent === cells[c].textContent) && (cells[a].textContent !== '' && cells[b].textContent !== '' && cells[c].textContent !== '')){
            alert(`Player ${cells[a].textContent} is the winner`);
            if (cells[a].textContent === 'X'){scoreX++} else {scoreO++}
                for (let i = 0;i < cells.length; i++){
                cells[i].textContent = '';
                }
            return true;
      }
   }
}

function random(number) {
    return Math.floor(Math.random() * (number+1)); //Generates random number
}

function changeColors(rndCol){
  document.getElementById('body').style.backgroundColor = rndCol;
  document.getElementById('round-counter').style.color =  rndCol;
  document.getElementById('score-counter').style.color =  rndCol;
  document.getElementById('title').style.color =  rndCol;
}

