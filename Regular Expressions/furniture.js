function furniture(text) {
    let pattern = />>(?<name>\w+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/;
    let totalSum = 0;
    console.log(`Bought furniture:`);
    for (const line of text) {
        let result = line.match(pattern);
        if (result) {
            let name = result.groups.name;
            let price = +result.groups.price;
            let quantity = +result.groups.quantity;
            totalSum += price * quantity;
            console.log(name);
        }
    }
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}
