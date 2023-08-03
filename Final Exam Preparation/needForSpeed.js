function needForSpeed(input) {
    let n = Number(input.shift());
    let collectionOfCars = {};
    for (let i = 0; i < n; i++) {
        let line = input.shift();
        let [car, mileage, tank] = line.split('|');
        collectionOfCars[car] = {
            mileage: +mileage,
            tank: +tank
        }
    }
    let command = input.shift();
    while (command !== 'Stop') {
        let [line, ...rest] = command.split(' : ');
        switch (line) {
            case 'Drive':
                let name = rest[0];
                let distance = Number(rest[1]);
                let fuel = Number(rest[2]);
                if (collectionOfCars[name].tank < fuel) {
                    console.log(`Not enough fuel to make that ride`);
                } else {
                    collectionOfCars[name].tank -= fuel;
                    collectionOfCars[name].mileage += distance;
                    console.log(`${name} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                }
                if (collectionOfCars[name].mileage >= 100000) {
                    delete collectionOfCars[name];
                    console.log(`Time to sell the ${name}!`);
                }
                break;
            case 'Refuel':
                let carName = rest[0];
                let carFuel = Number(rest[1]);
                collectionOfCars[carName].tank += carFuel;
                if (collectionOfCars[carName].tank >= 75) {
                    console.log(`${carName} refueled with ${(75 - (collectionOfCars[carName].tank - carFuel))} liters`);
                    collectionOfCars[carName].tank = 75;

                } else {
                    console.log(`${carName} refueled with ${carFuel} liters`);
                }
                break;
            case 'Revert':
                let currName = rest[0];
                let km = Number(rest[1]);
                collectionOfCars[currName].mileage -= km;
                if (collectionOfCars[currName].mileage < 10000) {
                    collectionOfCars[currName].mileage = 10000;
                } else {
                    console.log(`${currName} mileage decreased by ${km} kilometers`);
                }
                break;
        }
        command = input.shift();
    }
    let arrCollection = Object.entries(collectionOfCars);
    for (const [key, value] of arrCollection) {
        console.log(`${key} -> Mileage: ${value.mileage} kms, Fuel in the tank: ${value.tank} lt.`);
    }
}
