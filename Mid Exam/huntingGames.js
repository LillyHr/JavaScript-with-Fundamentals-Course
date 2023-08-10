function huntingGames(arr) {
    let questTime = Number(arr.shift());
    let players = Number(arr.shift());
    let totalEnergy = Number(arr.shift());
    let waterForGroup = Number(arr.shift()) * players * questTime;
    let foodForGroup = Number(arr.shift()) * players * questTime;
    let isFinished = true;
    for (let i = 1; i <= questTime; i++) {

        let dailyEnergyLoss = Number(arr.shift());
        totalEnergy -= dailyEnergyLoss;

        if (i % 2 === 0 ) {
            waterForGroup -= waterForGroup * 0.3;
            totalEnergy += totalEnergy * 0.05;
        }
         if (i % 3 === 0) {
            foodForGroup -= foodForGroup / players;
            totalEnergy += totalEnergy * 0.1;
        }
        if (totalEnergy <= 0) {
            isFinished = false;
            break;
        }
    }
    if (isFinished) {
        console.log(`You are ready for the quest. You will be left with - ${totalEnergy.toFixed(2)} energy!`)
    } else {
        console.log(`You will run out of energy. You will be left with ${foodForGroup.toFixed(2)} food and ${waterForGroup.toFixed(2)} water.`)
    }
}
