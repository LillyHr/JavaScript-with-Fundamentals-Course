function friendsList(arr) {
    let names = arr.shift().split(', ')
    let blacklistedCount = 0;
    let lostCount = 0;
    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i].split(' ');
        switch (currentElement[0]) {
            case 'Blacklist':
                if (names.includes(currentElement[1])) {
                    console.log(`${currentElement[1]} was blacklisted.`);
                    names.splice(i, 1, 'Blacklisted');
                    blacklistedCount++;
                } else {
                    console.log(`${currentElement[1]} was not found.`);
                }
                break;
            case 'Error':
                if (Number(currentElement[1]) >= 0 && Number(currentElement[1]) < names.length) {
                    if (names[currentElement[1]] !== 'Blacklisted' && names[currentElement[1]] !== 'Lost') {
                        console.log(`${names[currentElement[1]]} was lost due to an error.`);
                        names.splice(currentElement[1], 1, 'Lost');
                        lostCount++;
                        break;
                    }

                }
                break;
            case 'Change':
                if (Number(currentElement[1]) >= 0 && Number(currentElement[1]) < names.length) {
                    console.log(`${names[currentElement[1]]} changed his username to ${currentElement[2]}.`);
                    names.splice(currentElement[1], 1, currentElement[2]);
                }
                break;
            case 'Report':
                console.log(`Blacklisted names: ${blacklistedCount} `);
                console.log(`Lost names: ${lostCount}`);
                console.log(names.join(' '));
                break;
        }
    }
}
