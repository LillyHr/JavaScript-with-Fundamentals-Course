function meetings(arr) {
    let schedule = {}
    for (let index = 0; index < arr.length; index++) {
        let [weekday, name] = arr[index].split(' ');
        if (schedule.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            schedule[weekday] = name;

            console.log(`Scheduled for ${weekday}`);
        }
    }
    for (let [key, value] of Object.entries(schedule)) {
        console.log(`${key} -> ${value}`);
    }
}
