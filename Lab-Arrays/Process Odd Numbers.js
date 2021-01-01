function solve(input) {

    let arr = [];
    for (let i = 1; i <= input.length; i += 2) {

        arr.push(input[i]);
    }
    let result = arr.map(n => n * 2).reverse();

    console.log(result.join(' '));
}
solve([10, 15, 20, 25]);