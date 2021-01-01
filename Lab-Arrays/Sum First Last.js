function solve(input) {
    let numbers = input.map(Number);
    let sum = numbers[0] + numbers[numbers.length - 1];
    return sum;
}
solve(['20', '30', '40']);