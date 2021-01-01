function solve(input) {

    let arr = input.slice()
    let rotations = Number(arr.pop()) % arr.length;
    for (let i = 0; i < rotations; i++) {

        arr.unshift(arr.pop());
    }
    return arr.join(' ');
}
console.log(solve(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']));