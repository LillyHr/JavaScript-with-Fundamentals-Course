function censoredWords(sentance, word) {
    let censored = sentance.replace(word, '*'.repeat(word.length));
    while (censored.includes(word)) {
        censored = sentance.replace(word, '*'.repeat(word.length));
    }
    console.log(censored);
}
