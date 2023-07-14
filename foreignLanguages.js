function foreignLanguages(country) {
    let place = String(country);
    switch (place) {
        case "England":
        case "USA":
            console.log("English"); break;
        case "Spain":
        case "Mexico":
        case "Argentina":
            console.log("Spanish"); break;

        default:
            console.log("unknown"); break;
    }
}
