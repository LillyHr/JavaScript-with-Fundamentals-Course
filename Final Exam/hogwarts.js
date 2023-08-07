function hogwarts(text) {
    let spell = text.shift();
    let line = text.shift();

    while (line !== 'Abracadabra') {
        let [command, ...rest] = line.split(' ');
        switch (command) {
            case 'Abjuration':
                spell = spell.toUpperCase();
                console.log(spell);
                break;
            case 'Necromancy':
                spell = spell.toLowerCase();
                console.log(spell);
                break;
            case 'Illusion':
                let index = Number(rest[0]);
                let letter = rest[1];
                if (index >= spell.length || index < 0) {
                    console.log(`The spell was too weak.`);
                } else {
                    let ch = spell.substring(index, index + 1);
                    spell = spell.replace(ch, letter);
                    console.log(`Done!`);
                }
                break;
            case 'Divination':
                let first = rest[0];
                let second = rest[1];
                if (spell.includes(first)) {
                    spell = spell.split(first).join(second);
                    console.log(spell);
                }
                break;
            case 'Alteration':
                let substr = rest[0];
                if (spell.includes(substr)) {
                    spell = spell.replace(substr,'');
                    console.log(spell);
                }
                break;
            default:
                console.log(`The spell did not work!`);
                break;
        }
        line = text.shift();
    }
}
