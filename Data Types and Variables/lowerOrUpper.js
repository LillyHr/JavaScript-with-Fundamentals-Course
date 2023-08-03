function lowerOrUpper(a) {
    if (a.charCodeAt(0) > 64 && a.charCodeAt(0) < 91) {
        console.log(`upper-case`);
    } else if (a.charCodeAt(0) > 96 && a.charCodeAt(0) < 123) {
        console.log(`lower-case`);
    }
}
