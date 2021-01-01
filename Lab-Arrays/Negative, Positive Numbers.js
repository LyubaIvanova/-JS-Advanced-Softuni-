function solve(input) {

    let newArr = [];

    input.forEach(el => {
        el >= 0 ? newArr.push(el) : newArr.unshift(el);
    });

    newArr.forEach(el => console.log(el));
}
solve([3, -2, 0, -1]);