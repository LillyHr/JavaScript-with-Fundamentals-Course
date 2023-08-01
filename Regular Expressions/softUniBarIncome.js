function softUniBarIncome(input) {
    let regexp = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>\d+.?\d*)\$/g;
    let i = 0;
    let totalPrice = 0;
    while (input[i] !== 'end of shift') {
        let line = input[i];

        let match = [...line.matchAll(regexp)];

        for (const el of match) {
            let price = Number(el.groups.count) * Number(el.groups.price);
            totalPrice += price;
            console.log(`${el.groups.name}: ${el.groups.product} - ${price.toFixed(2)}`);
        }
        i++
    }
    console.log(`Total income: ${totalPrice.toFixed(2)}`);

}
