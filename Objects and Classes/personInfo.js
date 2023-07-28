function personInfo(firstName, lastName, age) {
    // let myObj = {}
    // myObj.firstName = firstName;
    // myObj.lastName = lastName;
    // myObj.age = age;
    // return myObj

    let myObj = {
        firstName,
        lastName,
        age
    }
    return myObj

}

console.log(personInfo("Lilly", "Jeleva", 29));
