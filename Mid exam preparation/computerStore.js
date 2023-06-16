function computerStore(arr) {
    let price = 0;
    let isPositive = true;
    let currentElement;
    for (let i = 0; i < arr.length; i++) {
        currentElement = arr[i];
        if (currentElement === 'special' || currentElement === 'regular') {
            break;
        } else {
            if (Number(currentElement) < 0) {
                console.log('Invalid price!');
                continue;
            }
            price += Number(currentElement);
        }
    }
    let total = 0;
    let taxes = price * 0.2;
    switch (currentElement) {
        case 'special':
            total = price + taxes;
            total *= 0.9;
            break;
        case 'regular':
            total = price + taxes;
            break;
    }
    if (total === 0) {
        isPositive = false;
    }
    if (!isPositive) {
        console.log('Invalid order!');
    } else {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${price.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${total.toFixed(2)}$`);
    }
}
