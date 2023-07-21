function theatherPromotions(day, age) {
    let typeDay = String(day);
    let ageRange = Number(age);
    if (typeDay === "Weekday") {
        if (ageRange >= 0 && ageRange <= 18) {
            console.log("12$");
        } else if (ageRange <= 64 && ageRange >18) {
            console.log("18$");
        } else if (ageRange >64 && ageRange <= 122) {
            console.log("12$");
        } else {
            console.log("Error!")
        }
    } else if (typeDay === "Weekend") {
        if (ageRange >= 0 && ageRange <= 18) {
            console.log("15$");
        } else if (ageRange <= 64 && ageRange >18) {
            console.log("20$");
        } else if (ageRange > 64 && ageRange <= 122) {
            console.log("15$");
        } else {
            console.log("Error!")
        }
    } else if (typeDay === "Holiday") {
        if (ageRange >= 0 && ageRange <= 18) {
            console.log("5$");
        } else if (ageRange <= 64 && ageRange >18) {
            console.log("12$");
        } else if (ageRange > 64 && ageRange < 123) {
            console.log("10$");
        } else {
            console.log("Error!")
        }
    } else {
        console.log("Error!")
    }
}
