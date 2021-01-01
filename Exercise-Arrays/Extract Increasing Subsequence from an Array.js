function solve(input) {
    let resultArr = [];
    let biggest = input.slice(0, 1);
    for (let el of input) {

        if (el >= biggest) {
            biggest = el;
            resultArr.push(biggest);
        }
    }
    return resultArr.join('\n');
}
console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]));