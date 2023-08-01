function evenAndOddSubtractions(arr) {
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let currentElement = Number(arr[i]);
        if (currentElement % 2 === 0) {
            evenSum += currentElement;
        } else {
            oddSum += currentElement;
        }
    }
    console.log(evenSum - oddSum);
}
