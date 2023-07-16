function multiplicationTable(num) {
    let digit = Number(num);
    for (let i = 1; i <= 10; i++) {
        console.log(`${digit} X ${i} = ${digit * i}`);
    }
}
