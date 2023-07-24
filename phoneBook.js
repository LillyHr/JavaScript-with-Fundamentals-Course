function phoneBook(arr) {
let phoneB = {}
for (let index = 0; index < arr.length; index++) {
    let [name,number] = arr[index].split(' ');
    phoneB[name] = number;
}
for (const name in phoneB) {
    console.log(`${name} -> ${phoneB[name]}`)

}
}
