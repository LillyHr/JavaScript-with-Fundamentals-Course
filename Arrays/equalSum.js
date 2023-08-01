function equalSum(arr) {
    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        let currentElement = Number(arr[i]);
        if (i < arr.length - 1) {
            for (let j = i + 1; j < arr.length; j++) {
                rightSum += Number(arr[j]);

            }
        }
        if (i > 0) {
            for (let k = i - 1; k >= 0; k--) {
                leftSum += Number(arr[k]);

            }
        }
        if (arr.length === 1) {
            console.log(0);
            break;
        }
        if (leftSum === rightSum && rightSum !== 0) {
            console.log(i);
            continue;
        }
    }
}
