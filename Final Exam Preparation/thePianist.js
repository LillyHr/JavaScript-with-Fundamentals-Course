function thePianist(input) {
    let n = Number(input.shift());
    let collection = [];
    for (let i = 0; i < n; i++) {
        let nLine = input.shift();
        let [piece, composer, key] = nLine.split('|');
        let currentElement = {
            piece: piece,
            composer: composer,
            key: key
        }
        collection.push(currentElement);
    }
    let command = input.shift();
    while (command !== 'Stop') {
        if (command.includes('Add')) {
            command = command.substring(4, command.length);
            let [piece, composer, key] = command.split('|');
            let check = collection.find(m => m.piece === piece);
            if (check) {
                console.log(`${piece} is already in the collection!`);
            } else {
                let currentElement = {
                    piece: piece,
                    composer: composer,
                    key: key
                }
                collection.push(currentElement);
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        } else if (command.includes('Remove')) {
            let piece = command.split('|')[1];
            let check = collection.find(m => m.piece === piece);
            if (check) {
                collection = collection.filter(i => i.piece !== piece);
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (command.includes('ChangeKey')) {
            command = command.substring(10);
            let [piece, key] = command.split('|');
            let check = collection.find(i => i.piece === piece);
            if (check) {
                check.key = key;
                console.log(`Changed the key of ${piece} to ${key}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
        command = input.shift();
    }
    collection.forEach(element => {
        console.log(`${element['piece']} -> Composer: ${element['composer']}, Key: ${element['key']}`);
    });
}
