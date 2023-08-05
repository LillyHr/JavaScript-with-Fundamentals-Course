function secretChat(input) {
    let message = input.shift();
    let line = input.shift();
    while (!line.includes('Reveal')) {
        let [command, ...rest] = line.split(':|:');
        switch (command) {
            case 'InsertSpace':
                let index = Number(rest[0]);
                message = message.substring(0, index) + ' ' + message.substring(index);
                console.log(message);
                break;
            case 'Reverse':
                let substr = rest[0];
                if (message.includes(substr)) {
                    let start = message.indexOf(substr);
                    let end = start + substr.length;
                    let newSub = message.substring(start,end);
                    newSub = newSub.split("").reverse().join("");
                    message = message.replace(substr,newSub);
                    // let newSub = [];
                    // let sliced = message.substring(start,end).split('');
                    // for (let i = substr.length - 1; i >= 0; i--) {
                    //     newSub.push(sliced[i]);
                    // }
                    // message = message.split(substr).join(newSub.join(''));
                    console.log(message);
                } else {
                    console.log('error');
                }
                break;
            case 'ChangeAll':
                let sub = rest[0];
                let replacement = rest[1];
                    message = message.split(sub).join(replacement);
                console.log(message);
                break;
        }
        line = input.shift();
    }
    console.log(`You have a new text message: ${message}`);
}
