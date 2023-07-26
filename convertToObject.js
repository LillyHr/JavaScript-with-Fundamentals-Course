function convertToObject(str) {
    let converted = JSON.parse(str);
    for (let [key, value] of Object.entries(converted)) {
        console.log(`${key}: ${converted[key]}`);
    }
}
