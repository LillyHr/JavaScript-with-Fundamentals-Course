function sumOffOddNumbers(n) {
    let sum = 0;
    let num = 1;
    for (let i = 1; i <= n; i++) {
        sum = sum + num;
        console.log(num);
        num += 2;
    }
    console.log(`Sum: ${sum}`);
}
