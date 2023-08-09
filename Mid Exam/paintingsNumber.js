function paintingsNumber(input) {
    let collection = input.shift().split(' ');
    let line = input.shift();

    while (line !== 'END') {
        line = line.split(' ');

        if (line.includes('Change')) {
            line = line.split(' ');
            let toBeChanged = line[1];
            let changing = line[2];
            let ind = collection.indexOf(toBeChanged);
            if (ind !== - 1) {
                collection[ind] = changing;
            }
        } else if (line.includes('Hide')) {
            line = line.split(' ');
            let newNumber = line[1];
            let finding = collection.indexOf(newNumber);
            if (finding !== -1) {
                collection.splice(finding, 1);
            }
        } else if (line.includes('Switch')) {
            line = line.split(' ');
            let first = line[1];
            let second = line[2];
            let one = collection.indexOf(first);
            let two = collection.indexOf(second);

            if (one !== -1 && two !== -1) {
                if (one < two) {
                    collection.splice(two, 1, first);
                    collection.splice(one, 1, second);

                } else {
                    collection.splice(one, 1, second);
                    collection.splice(two, 1, first);
                }

            }
        } else if (line.includes('Insert')) {
            line = line.split(' ');
            let index = Number(line[1]);
            let inserting = line[2];
            if (index < collection.length) {
                collection.splice(index + 1, 0, inserting);
            }
        } else if (line.includes('Reverse')) {
            collection = collection.reverse();
        }
        line = input.shift();
    }
    console.log(collection.join(' '));
}


