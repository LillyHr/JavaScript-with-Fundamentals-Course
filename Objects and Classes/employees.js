function employees(arr) {
    let employee = {}
    for (let i = 0; i < arr.length; i++) {
        employee.name = arr[i];
        employee.number = arr[i].length;
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.number}`);
    }
}
