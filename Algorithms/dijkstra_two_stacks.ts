// Dijkstra's two stack algorithm 

const getResult = (first_operand, second_operand, operator) => {
    //Convert to int the two operands
    const firstOperandInt = parseInt(first_operand, 10);
    const secondOperandInt = parseInt(second_operand, 10)

    //Check the operation to make
    switch (operator) {
           case "+":
                  return secondOperandInt + firstOperandInt;

           case "-":
                  return secondOperandInt - firstOperandInt;

           case "*":
                  return secondOperandInt * firstOperandInt;

           case "/":
                  return secondOperandInt / firstOperandInt;

           default:
                  break;
    }
}

const evaluateExpresion = (n: string) => {
    let operatorStack: string[] = []; //Arr to store digits [0..9]
    let operandStack: string[] = [];  //Arr to store +, -, /, *

    let arrChar = [...n]; //Store the expression into one char vector

    arrChar.forEach(char => { //Go through the char vector
        if (char === "+" || char === "-" || char === "/" || char === "*"){
            operatorStack.push(char);
        } else if (/^[0-9]*$/.test(char)){
            operandStack.push(char);
        } else if (char === ")"){
            const firstOperand = operandStack.pop();
            const secondOperand = operandStack.pop();

            const operation = operatorStack.pop();
            const expressionResult = getResult(firstOperand, secondOperand, operation);

            operandStack.push(expressionResult.toString())
        }
    });

    //Print the result
    console.log(operandStack[0]);
}


const n = '(1+((2+3)*(4*5)))'

evaluateExpresion(n);
