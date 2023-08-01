function destinationMapper(text) {
    let pattern = /([=\/])(?<stop>[A-Z][A-Za-z]{2,})\1/g;
    let stop = [];
    let points = 0;
    let match = pattern.exec(text);
    while (match) {
        let currentStop = match.groups['stop'];
        stop.push(currentStop);
        points += currentStop.length;
        match = pattern.exec(text);
    }
    console.log(`Destinations: ${stop.join(', ')}`);
    console.log(`Travel Points: ${points}`);
}
