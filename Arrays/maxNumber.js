function maxNumber(arr) {
    let newArray = [];
    let isBigger = true;
    for (let i = 0; i < arr.length; i++) {
        let currentElement = Number(arr[i]);
        for (let j = i + 1; j < arr.length; j++) {
            let nextElement = Number(arr[j]);
            if (nextElement >= currentElement) {
                isBigger = false;
                break;
            }   else {
                isBigger = true;
            }
        }        
        if (isBigger || i === (arr.length - 1)) {
            newArray.push(arr[i]);
        }
    }
    console.log(newArray.join(' '));
}
