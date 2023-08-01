function triplesOfLatinLetters(n) {

    for (let i = 1; i <= n; i++) {
        let triples = '';
        let letter = String.fromCharCode(96 + i);
        triples += letter;

        for (let j = 1; j <= n; j++) {
            let letter = String.fromCharCode(96 + j);
            triples += letter;

            for (let k = 1; k <= n; k++) {
                let letter = String.fromCharCode(96 + k);
                triples += letter;
                console.log(triples);
            }
        
        }
    }
    
}
solve (3)
