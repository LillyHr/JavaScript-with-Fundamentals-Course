function reverseAnArrayOfNumbers(num,arr) {
    let newArray = [];
    for (let i = Number(num - 1); i >= 0; i--){
        let add = Number(arr[i]);
        newArray.push(add);
    }
    console.log(newArray.join(' '));

}
