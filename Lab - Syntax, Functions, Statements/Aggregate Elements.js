function solve(input) {

    let sum = input.reduce((a, b) => a + b);
    let concat = input.map(e => e.toString()).reduce((a, b) => a.concat(b));
    let inverseSum = input.map(e => 1 / e).reduce((a, b) => a + b);

    console.log(sum);
    console.log(inverseSum);
    console.log(concat);
}
solve([1, 2, 3]);