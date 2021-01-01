function solve(steps, foodPrintMeters, speedKmPerHour) {

    let length = steps*foodPrintMeters;
    let totalRestInMinutes = Math.floor(length/500);
    let totalTime = length/speedKmPerHour/1000*60;
    let totalTimeInSeconds = Math.ceil((totalRestInMinutes+totalTime)*60);
    let result = new Date(null, null, null, null, null, totalTimeInSeconds);

    return result.toTimeString().split(' ')[0];

}
solve(2564, 0.70, 5.5);