function solve(input) {

    let number = Number(input.shift());

    let operations = {

        chop: x => x / 2,
        dice: x => Math.sqrt(x),
        spice: x => ++x,
        bake: x => x *= 3,
        fillet: x => x *= 0.8
    }
    for (let i = 0; i < input.length; i++) {

        number = operations[input[i]](number);
        console.log(number);
    }

}
solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);