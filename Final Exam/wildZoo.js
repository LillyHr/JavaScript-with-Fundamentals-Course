function wildZoo(input) {
    let line = input.shift();
    let zoo = {}
    let areas = {}
    while (line !== 'EndDay') {
        let [command, ...rest] = line.split(' ');
        switch (command) {
            case 'Add:':
                let [name, food, area] = rest.join('').split('-');
                if (zoo.hasOwnProperty(name)) {
                    zoo[name].food += Number(food);
                } else {
                    zoo[name] = {
                        food: Number(food),
                        area: area
                    }
                    if (areas.hasOwnProperty(area)) {
                        areas[area].count += 1;
                    } else {
                        areas[area] = { count: 1 };
                    }
                }

                break;
            case 'Feed:':
                let [animal, feed] = rest.join('').split('-');
                if (zoo.hasOwnProperty(animal)) {
                    zoo[animal].food -= Number(feed);
                    if (zoo[animal].food <= 0) {
                        let animalArea = zoo[animal].area;
                        delete zoo[animal];
                        if (areas.hasOwnProperty(animalArea)) {
                            areas[animalArea].count -= 1;
                            if (areas[animalArea].count === 0) {
                                delete areas[animalArea];
                            }
                        }
                        console.log(`${animal} was successfully fed`);

                    }
                }
                break;
        }
        line = input.shift();
    }
    console.log(`Animals:`);
    let zooArr = Object.entries(zoo);
    for (const animal in zoo) {
        console.log(`${animal} -> ${zoo[animal].food}g`);
    }
    console.log(`Areas with hungry animals:`);
    let areasArr = Object.entries(areas);
    for (const [key, value] of areasArr) {
        console.log(`${key}: ${value.count}`);
    }
}
