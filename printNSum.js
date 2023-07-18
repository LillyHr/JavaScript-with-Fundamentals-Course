function printNSum(n, m) {
    let sum = 0;
    let numberInRow = '';
    for (let i = n; i <= m; i++) {
        sum += i;
        numberInRow += i + ' ';
    }
    console.log(numberInRow);
    console.log(`Sum: ${sum}`);
}
