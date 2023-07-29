function matchFullName(names) {
    let pattern = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g;
    let result = [];
    let matched = pattern.exec(names);
    while (matched) {
        result.push(matched[0]);
        matched = pattern.exec(names);
    }
    console.log(result.join(' '));
}
