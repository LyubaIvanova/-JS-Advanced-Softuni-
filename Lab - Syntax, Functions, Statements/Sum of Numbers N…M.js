function solve(firstNum, secondNum) {

    let first = Number(firstNum);
    let second = Number(secondNum);
    let sum = 0;

    for (let i = first; i <= second; i++) {

        sum += i;
    }

    return sum;
}
solve('1', '5');