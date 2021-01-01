function solve(firstOperand, secondOperand, sign) {

    switch (sign) {

        case '+':
            console.log(firstOperand + secondOperand);
            break;
        case '-':
            console.log(firstOperand - secondOperand);
            break;
        case '*':
            console.log(firstOperand * secondOperand);
            break;
        case '/':
            console.log(firstOperand / secondOperand);
            break;
        case '%':
            console.log(firstOperand % secondOperand);
            break;
        case '**':
            console.log(firstOperand ** secondOperand);
            break;
    }
}
solve(5, 6, '+');

