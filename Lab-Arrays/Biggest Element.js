function solve(input) {

    let biggest = Number.MIN_SAFE_INTEGER;
    for (let el of input) {

        let currBiggest = Math.max(...el);
        if (currBiggest > biggest) {

            biggest = currBiggest;
        }
    }
    return biggest;
}
solve([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
]);