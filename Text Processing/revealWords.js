function revealWords(firstString, sentance) {
    let words = firstString.split(',');
    let arrayed = sentance.split(' ');
    let revealed = [];
    for (let i = 0; i < words.length; i++) {
        let element = words[i];
        arrayed.forEach(line => {
            if (line.includes('*') && line.length === element.length) {
                revealed.push(element);
            } else {
                revealed.push(line);
            }
        });

    }
    console.log(revealed.join(' '));
}
