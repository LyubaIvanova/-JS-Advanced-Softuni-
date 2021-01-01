function solve(arr){
    let input = arr;
    let smallest = Math.min(...input);
    input.splice(input.indexOf(smallest), 1);
    let secondSmallest = Math.min(...input);
    console.log(`${smallest} ${secondSmallest}`);
}
solve([30, 15, 50, 5]);