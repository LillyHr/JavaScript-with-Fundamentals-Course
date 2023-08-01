function arrayManipulations(arr) {
    let newArr = arr.shift().split(' ').map(Number)
    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i].split(' ');
        let commands = currentElement[0];
        let nums = Number(currentElement[1]);

        switch (commands) {
            case 'Add':
                newArr.push(Number(nums));
                break;
            case 'Remove':
                newArr = newArr.filter(el => el !== nums);
                break;
            case 'RemoveAt':
                newArr.splice(Number(nums), 1);
                break;
            case 'Insert':
                let third = currentElement[2];
                newArr.splice(Number(third), 0, Number(nums));
                break;
        }
    }

    console.log(newArr.join(' '));
}
