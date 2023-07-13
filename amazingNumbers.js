function amazingNumbers(n) {
    let numTxt = n.toString();
    let sum = 0;
    for (let i = 0; i < numTxt.length; i++) {
        sum += Number(numTxt[i]);
    }
    let res = sum.toString().includes('9') ? "True" : "False";
    console.log(`${n} Amazing? ${res}`);
}
