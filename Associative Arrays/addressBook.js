function addressBook(data) {
    let book = {}
    for (let el of data) {
        let [name, address] = el.split(':');
        book[name] = address;
    }
    let sortArr = Object.keys(book).sort((a, b) => a.localeCompare(b));
    for (let key of sortArr) {
        console.log(`${key} -> ${book[key]}`);
    }
}
