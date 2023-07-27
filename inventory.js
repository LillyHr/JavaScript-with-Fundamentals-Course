function inventory(arr) {
    let heroData = []
    for (let el of arr) {
        let [name, level, items] = el.split(' / ');
let hero = {
    heroName: name,
    level: Number(level),
    items: items
}
heroData.push(hero);
    }
    heroData.sort((a,b) => a.level - b.level);
    for (let hero of heroData) {
        console.log(`Hero: ${hero['heroName']}`);
        console.log(`level => ${hero['level']}`);
        console.log(`items => ${hero['items']}`);
    };
}
