function solve(fruitType, grams, pricePerKilo) {

    let weight = grams * 0.001;
    let money = weight * pricePerKilo;
    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruitType}.`);

}
solve('apple', 1563, 2.35);