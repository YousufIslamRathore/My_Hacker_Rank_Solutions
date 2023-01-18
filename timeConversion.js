// Given Input
let s = '12:05:45AM';

let hrs = s.slice(0, 2);
let timeSpan = s.slice(-2)

if(timeSpan == "AM") {
    hrs = Nubmer(hrs) - 12
}

console.log(hrs)