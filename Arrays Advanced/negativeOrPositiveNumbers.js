function negativeOrPositiveNumbers(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let currentElement = Number(arr[i]);
        if (currentElement >= 0) {
            result.push(currentElement);
        } else {
            result.unshift(currentElement);
        }
    }
    console.log(result.join('\n'));
}
