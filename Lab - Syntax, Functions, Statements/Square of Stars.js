function solve(number) {

    for (let i = 0; i < number; i++) {

        console.log('* '.repeat(number));
    }
    if (number === undefined) {
        for (let i = 0; i < 5; i++) {

            console.log('* '.repeat(5));
        }
    }
}
solve();