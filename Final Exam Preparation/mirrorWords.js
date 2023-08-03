function mirrorWords(text) {
    let pattern = /([@#])(?<wordOne>[A-Za-z]{3,})\1\1(?<wordTwo>[A-Za-z]{3,})\1/g;
    let matchArr = [];
    let pairs = {};
    let count = 0;
    let match = pattern.exec(text);
    while (match) {
        let wordOne = match.groups['wordOne'];
        let wordTwo = match.groups['wordTwo'];
        matchArr.push(wordOne);
        matchArr.push(wordTwo);
        count++;
        match = pattern.exec(text);

    }
    if (count === 0) {
        console.log(`No word pairs found!`);
        console.log(`No mirror words!`);

    } else {
        console.log(`${count} word pairs found!`);

        for (let i = 0; i < matchArr.length - 1; i++) {
            let currentElement = matchArr[i];
            let nextElement = matchArr[i + 1].split('').reverse().join('');
            if (currentElement === nextElement) {
                pairs[currentElement] = matchArr[i + 1];
            }
        }
        let pairsArr = Object.entries(pairs);
        let result = "";
        if (pairsArr.length === 0) {
            console.log("No mirror words!");
        } else {
            console.log(`The mirror words are:`);
            for (let [key, value] of Object.entries(pairs)) {
                result = result + String(key) + " <=> " + String(value) + ", ";
            }
            console.log(result.substring(0, result.length - 2));
        }
    }
}
