function rightPlace(first,c,second){
    let word = first.replace("_",c);
    let result= word === second? "Matched": "Not Matched"
    console.log(result);
}
