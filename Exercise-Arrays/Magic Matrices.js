function solve(input) {
    let sums = [];

    for (let i = 0; i < input.length; i++) {

        let sumCol = 0;
        for (let j = 0; j < input.length; j++) {
            sumCol += input[j][i];
        }
        let sumRow = input[i].reduce((a, b) => a + b);
        sums.push(sumRow);
        sums.push(sumCol);
    }
    let result;
    sums.every(e => e == sums[0]) ? result = true : result = false;
    return result;
}
console.log(solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));