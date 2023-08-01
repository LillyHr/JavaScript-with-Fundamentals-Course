function specialNumbers(n) {
    for (let j = 1; j <= n; j++) {
        let numTxt = j.toString();
        let sum = 0;
        let isTrue = "False";
        for (let i = 0; i < numTxt.length; i++) {
            sum += Number(numTxt[i]);
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            isTrue = "True";
            console.log(`${j} -> ${isTrue}`);
            continue;
        } else {
            console.log(`${j} -> ${isTrue}`);
            continue;
        }
    }
}
