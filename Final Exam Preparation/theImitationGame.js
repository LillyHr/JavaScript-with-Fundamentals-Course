function theImitationGame(input) {
    let firstLine = input.shift();
    let command = input.shift();
    while (command !== 'Decode') {
        if (command.includes('Move')) {
            command = Number(command.substring(5));
            let newLine = firstLine.slice(0, command);
            firstLine = firstLine.slice(command, firstLine.length) + newLine;
        } else if (command.includes('Insert')) {
            command = command.split('|');
            let index = Number(command[1]);
            let value = command[2];
            let arr = firstLine.split('');
            arr.splice(index, 0, value);
            firstLine = arr.join('');

        } else if (command.includes('ChangeAll')) {
            command = command.split('|');
            while (firstLine.includes(command[1])) {
                firstLine = firstLine.replace(command[1], command[2]);
            }
        }
        command = input.shift();
    }
    console.log(`The decrypted message is: ${firstLine}`);
}
