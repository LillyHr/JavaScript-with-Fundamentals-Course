function matchDates(input) {
    let pattern = /\b(?<day>\d{2})([-\/.])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/gm;
    let matched = pattern.exec(input);
    while (matched) {
        let day = matched.groups['day'];
        let month = matched.groups['month'];
        let year = matched.groups['year'];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);

        matched = pattern.exec(input);
    }
}
