function disneylandJourney(arr) {
    let money = Number(arr.shift());
    let time = Number(arr.shift());
    let savings = 0;
    for (let i = 1; i <= time; i++) {
        if (i % 2 !== 0 && i !== 1) {
            savings -= savings * 0.16;
        }
        if (i % 4 === 0) {
            savings += savings * 0.25;
        }
        savings += money * 0.25;
    }
    let left = Math.abs(savings - money);
    if (money < savings) {
        console.log(`Bravo! You can go to Disneyland and you will have ${left.toFixed(2)}lv. for souvenirs.`);
    } else {
        console.log(`Sorry. You need ${left.toFixed(2)}lv. more.`);
    }
}
