function rotationArray (arr,num) {
    let currentElement;
    for (let i = 0; i < num; i++) {
        currentElement = arr[0];
        arr.push(arr[0]);
        arr.shift(arr[0]);
    }
    console.log(arr.join(' '));
}
