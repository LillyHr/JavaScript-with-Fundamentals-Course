function race(input) {
    let people = input.shift().split(', ');
    let objOfPeople = {}
    for (const name of people) {
        objOfPeople[name] = 0;
    }
    let currentRow = input.shift();
    let lettersPattern = /[A-Za-z]/g;
    let digitPattern = /[0-9]/g;

    while (currentRow !== 'end of race') {
        let currentName = currentRow.match(lettersPattern).join('');
        let distance = currentRow.match(digitPattern);
        let currentDistance = 0;
        distance.map(d => currentDistance += Number(d));
        if (objOfPeople.hasOwnProperty(currentName)) {
            objOfPeople[currentName] += currentDistance;
        }
        currentRow = input.shift();
    }
    let arr = Object.entries(objOfPeople).sort((a,b) => b[1] - a[1]);
    console.log(`1st place: ${arr[0][0]}`);
    console.log(`2nd place: ${arr[1][0]}`);
    console.log(`3rd place: ${arr[2][0]}`);
}
