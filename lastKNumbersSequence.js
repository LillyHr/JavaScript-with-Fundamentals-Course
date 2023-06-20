function lastKNumbersSequence(n, k) {
    let arr = [1];
    let sumOfK = 0;
    for (let i = 1; i < n; i++) {
        if (arr.length > k) {
            for (let j = arr.length - k; j < arr.length; j++) {
                sumOfK += arr[j];
            }
        } else {
            for (let l = 0; l < arr.length; l++) {
                sumOfK += arr[l];
            }
        }
        arr.push(sumOfK);
        sumOfK = 0;
    }
    console.log(arr.join(' '));
}
