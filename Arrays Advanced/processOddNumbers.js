function processOddNumbers(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i % 2 !== 0) {
            newArr.push(arr[i] * 2);
        }
    }
    console.log(newArr.join(' '));
}
