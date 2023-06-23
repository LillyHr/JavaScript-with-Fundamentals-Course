function smallestTwoNumbers(arr) {
    let sorted = arr.sort((a,b) => {
        return a - b;
    });
    console.log(sorted[0] + ' ' + sorted[1]);
}
