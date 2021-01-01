function solve(input) {

    let arr = input.toString().split('').map(Number);
    let sum = arr.reduce((a, b) => a + b, 0);

    if (arr.every(e => e === arr[0])) {

        console.log(true);

    } else {
        console.log(false);
    }

    console.log(sum);

}
solve(7777779);