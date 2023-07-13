function sumEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let currentElement = Number(arr[i]);
        if (currentElement % 2 === 0) {
            sum += currentElement;
        }
    }
    console.log(sum);
}
