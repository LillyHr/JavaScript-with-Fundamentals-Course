function matchPhoneNumber(input) {
    let regEx = /(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/g;
    let phoneNumbers = [];
    let matches = regEx.exec(input);
    while (matches) {
        phoneNumbers.push(matches[0]);
        matches = regEx.exec(input);
    }
    console.log(phoneNumbers.join(', '));
}
