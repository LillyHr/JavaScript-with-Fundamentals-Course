function towns(input) {
    let towns = {}
    for (let i = 0; i < input.length; i++) {
        let [town, latitude, longitude] = input[i].split(' | ');
        towns.town = town;
        towns.latitude = (Number(latitude)).toFixed(2);
        towns.longitude = (Number(longitude)).toFixed(2);
        console.log(towns);
    }
}
