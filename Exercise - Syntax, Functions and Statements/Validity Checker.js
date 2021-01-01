function solve(input) {

    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];
    let distanceOne = Math.hypot(0 - x1, 0 - y1);
    let distanceTwo = Math.hypot(x2 - 0, y2 - 0);
    let distanceThree = Math.hypot(x2 - x1, y2 - y1);

    Number.isInteger(distanceOne) ? console.log(`{${x1}, ${y1}} to {0, 0} is valid`) : console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    Number.isInteger(distanceTwo) ? console.log(`{${x2}, ${y2}} to {0, 0} is valid`) : console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    Number.isInteger(distanceThree) ? console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`) : console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
}
solve([2, 1, 1, 1]);
