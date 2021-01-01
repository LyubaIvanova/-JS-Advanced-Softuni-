function solve(a, b) {

    let remainder;
    while ((a % b) > 0) {
        remainder = a % b;
        a = b;
        b = remainder;
    }
    return b;

}
solve(15, 5);