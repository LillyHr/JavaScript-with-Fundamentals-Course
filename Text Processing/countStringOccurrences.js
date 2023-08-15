function countStringOccurrences(text, word) {
    let words = text.split(' ');
    let count = 0;
    for (let line of words) {
        if (line === word) {
            count++;
        }
    }
    console.log(count);
}
