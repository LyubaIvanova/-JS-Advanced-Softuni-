function solve(input) {
    let foodObj = {};
    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            foodObj[input[i]] = Number(input[i + 1]);
        }
    }
    console.log(foodObj);
}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);