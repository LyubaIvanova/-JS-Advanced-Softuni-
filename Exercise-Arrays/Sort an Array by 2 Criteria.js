function solve(input) {

    let arr = input.slice().sort((a, b) => a.length - b.length || a.localeCompare(b));
    return arr.join('\n');
}
console.log(solve(['test',
    'Deny',
    'omen',
    'Default'
]));