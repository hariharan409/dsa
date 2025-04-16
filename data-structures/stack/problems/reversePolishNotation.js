
const OPERATORS = {
    '+': (a, b) => a + b | 0,
    '-': (a, b) => a - b | 0,
    '*': (a, b) => a * b | 0,
    '/': (a, b) => a / b | 0,
};

/**
 * 
 * @param {Array} tokens 
 */
const reversePolishNotation = (tokens) => {
    let stack = [];

    for(let i=0;i<tokens.length;i++) {
        if(OPERATORS[tokens[i]]) {
            let lastValue = stack.pop();
            let lastPrevValue = stack.pop();
            let value = OPERATORS[tokens[i]](lastPrevValue,lastValue);
            stack.push(value);
        } else {
            stack.push(parseInt(tokens[i]));
        }
    }
    return stack[0];
}

console.log(reversePolishNotation(tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))
  