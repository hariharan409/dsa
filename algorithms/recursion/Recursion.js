/* FIND FACTORIAL */

// The factorial of a number is the product of all positive integers from 1 up to that number.


const findFactorial = (number) => {
    if(number <= 1) {
        return number;
    }
    return number * findFactorial(number - 1);
}

console.log(findFactorial(4));