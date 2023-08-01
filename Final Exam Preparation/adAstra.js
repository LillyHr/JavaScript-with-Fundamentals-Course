function adAstra(text) {
    let pattern = /([|#])(?<food>[A-Za-z A-Za-z]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<cal>\d+)\1\B/gm;
    let foods = [];
    let match = pattern.exec(text);
    while (match) {
        let currentFood = {
            product: match.groups['food'],
            date: match.groups['date'],
            cal: Number(match.groups['cal'])
        }
        foods.push(currentFood);
        match = pattern.exec(text);
    }
    let totalCal = 0;
    foods.forEach(element => {
        totalCal += element['cal'];
    });
    let days = Math.floor(totalCal / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    foods.forEach(element => {
        console.log(`Item: ${element['product']}, Best before: ${element['date']}, Nutrition: ${element['cal']}`);
    });
}
