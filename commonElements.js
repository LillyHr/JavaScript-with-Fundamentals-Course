function commonElements(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        let currentElemenOne = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            let currentElementTwo = arr2[j];
            if (currentElemenOne === currentElementTwo) {
                console.log(currentElemenOne);
                break;
            }
        }
    }
}
