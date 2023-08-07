function easterEggs(text) {
    let pattern = /[@#]+(?<color>[a-z]{3,})[@#]+[^\w0-9]*\/+(?<count>\d+)[^\w0-9]*\/+/g;
    let match = pattern.exec(text);
    while (match) {
        console.log(`You found ${match.groups.count} ${match.groups.color} eggs!`);
        match = pattern.exec(text);
    }
}
