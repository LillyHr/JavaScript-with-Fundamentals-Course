function triangleOfNumbers(num) {
    let digit = Number(num);
    let numInRow = '';
    for (let i = 1; i <= digit; i++) {
        for (let j = 1; j <= i; j++) {
            numInRow += `${i} `;
        }
        console.log(numInRow);
        numInRow = '';
    }
}
