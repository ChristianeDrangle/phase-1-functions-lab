function distanceFromHqInBlocks(blocks) {
    const headquarters = 42;
    return Math.abs(blocks - headquarters);
}
function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264
}
function distanceTravelledInFeet(starting, ending) {
    return Math.abs(starting - ending) * 264;
}
function calculatesFarePrice(starting, ending) {
    const distance = distanceTravelledInFeet(starting, ending)

    if (distance <= 400) {
        return 0
    }
    else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * .02
    }
    else if (distance > 2000 && distance <= 2500) {
        return 25.00
    }
    else if (distance > 2500) {
        return 'cannot travel that far'
    }



}