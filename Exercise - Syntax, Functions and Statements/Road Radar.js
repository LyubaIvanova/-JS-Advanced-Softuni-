function solve(input) {

    let speed = input[0];
    let area = input[1];
    let limit;
    let overTheLimit;
    switch (area) {

        case 'motorway':
            limit = 130;
            break;
        case 'interstate':
            limit = 90;
            break;
        case 'city':
            limit = 50;
            break;
        case 'residential':
            limit = 20;
            break;
    }
    if(speed > limit){

        overTheLimit = Math.abs(speed - limit);
    }

    if (overTheLimit > 0 && overTheLimit <= 20) {

        console.log(`speeding`);

    } else if (overTheLimit > 20 && overTheLimit <= 40) {

        console.log(`excessive speeding`);

    } else if (overTheLimit > 40) {

        console.log(`reckless driving`);
    }
}
solve([21, 'residential']);