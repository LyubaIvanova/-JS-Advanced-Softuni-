function solve(input) {
    let resultArr = [];
    let currNum = 1;
    for (let el of input) {

        el === 'add' ? resultArr.push(currNum) : resultArr.pop();
        currNum++;
    }
    let result;
    resultArr.length > 0 ? result = resultArr.join('\n') : result = 'Empty';

    return result;
}
console.log(solve(['add',
    'add',
    'remove',
    'add',
    'add'
]));