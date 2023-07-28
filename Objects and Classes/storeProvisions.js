function storeProvisions(first, second) {
    let storeStorage = {}

    for (let i = 0; i < first.length; i += 2) {
        let product = first[i];
        let quantity = Number(first[i + 1]);
        storeStorage[product] = quantity;
    }
    for (let i = 0; i < second.length; i += 2) {
        let product = second[i];
        let quantity = Number(second[i + 1]);
        if (!(storeStorage.hasOwnProperty(product))) {
            storeStorage[product] = 0;
        }
        storeStorage[product] += quantity;
    }
    for (const product in storeStorage) {
        console.log(`${product} -> ${storeStorage[product]}`);
    }
}
