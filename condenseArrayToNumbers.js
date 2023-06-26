function condenseArrayToNumbers(arr) {
    let sum = 0;
    let newArr = [];

for (let i = 0; i < arr.length; i++) {
    if (i == arr.length-1){
        break;
    }
    let currentElement = Number(arr[i]);
    let nextElement = Number(arr[i+1]);
    
    let newElement = currentElement + nextElement;
    newArr.push(newElement);
    
    }

console.log(sum);
}
