function centuriesToMinutes(cent){
let days = Math.trunc(Number(cent)*100*365.2422);
let hours = days*24;
let minutes = hours * 60;
console.log(`${cent} centuries = ${cent*100} years = ${days} days = ${hours} hours = ${minutes} minutes`);

}
