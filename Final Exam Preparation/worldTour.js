function worldTour(input) {
    let stops = input.shift();
    let command = input.shift();
    while (command !== 'Travel') {
        if (command.includes('Add Stop:')) {
            let [index, str] = command.substring(9, command.length).split(':');
            if (Number(index) < stops.length) {
                let arr = stops.split('');
                arr.splice(Number(index), 0, str);
                stops = arr.join('');
            }
        } else if (command.includes('Remove Stop:')) {
            let [start, end] = command.substring(12, command.length).split(':');
            if (Number(start) < stops.length && Number(end) < stops.length) {
                stops = stops.substring(0, Number(start)) + stops.substring(Number(end) + 1, stops.length);
            }
        } else if (command.includes('Switch:')) {
            let [oldStop, newStop] = command.substring(7, command.length).split(':');
            if (stops.includes(oldStop)) {
                stops = stops.split(oldStop).join(newStop);
                //stops = stops.replaceAll(oldStop,newStop);
            }
        }
        console.log(stops);
        command = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
}
