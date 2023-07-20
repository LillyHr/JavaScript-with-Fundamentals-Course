function rounding(num, tail) {
    let numb = Number(num);
    let round = Number(tail);
    if (round > 15) {
        round = 15;
    }
    console.log(parseFloat(numb.toFixed(round)));
}
