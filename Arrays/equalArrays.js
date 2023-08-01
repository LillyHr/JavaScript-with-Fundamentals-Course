function equalArrays(arr1, arr2) {
    let arrOne = [];
    let arrTwo = [];
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        arrOne.push(Number(arr1[i]));
        sum += arrOne[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        arrTwo.push(Number(arr2[i]));
    }
    let isEqual = true;
    for (let i = 0; i < arrOne.length; i++) {
        if (arrOne[i] !== arrTwo[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isEqual = false;
            break;
        }
    }
    if (isEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
