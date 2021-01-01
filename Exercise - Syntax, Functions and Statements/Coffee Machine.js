function solve(input) {

    let totalEarnings = 0;
    let drinkPrice = 0;
    for (let el of input) {
        drinkPrice = 0;
        let params = el.split(', ');
        let sugarIndex = params.length - 1;
        let coins = Number(params[0]);
        //if it is a coffee
        if (params[1] === 'coffee') {

            let typeCoffee = params[2];
            typeCoffee === 'caffeine' ? drinkPrice += 0.8 : drinkPrice += 0.9;

            //or it is a tea
        } else {

            drinkPrice += 0.8;
        }
        //if the drink is with milk
        if (el.includes('milk')) {

             drinkPrice = addMilk(drinkPrice);
            addSugar(Number(params[sugarIndex]));

        } else {

            addSugar(Number(params[sugarIndex]));
        }
        let change = coins - drinkPrice;
        if (change >= 0) {

            totalEarnings += drinkPrice;
            console.log(`You ordered ${params[1]}. Price: $${drinkPrice.toFixed(2)} Change: $${change.toFixed(2)}`);

        } else {

            console.log(`Not enough money for ${params[1]}. Need $${Math.abs(change).toFixed(2)} more`);
        }
    }

    console.log(`Income Report: $${totalEarnings.toFixed(2)}`);

    function addSugar(sugar) {

        if(sugar > 0){
            drinkPrice += 0.1;
        }
        return drinkPrice;
        
    }

    function addMilk(price) {
        let milk = price * 0.1;
        price += Math.round(milk * 10) / 10;
        return price;
    }
}
solve(['8.00, coffee, decaf, 4', '1.00, tea, 2']);