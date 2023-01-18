// Given Input
let s = "12:05:45PM";

let hrs = s.slice(0, 2);
let timeSpan = s.slice(-2);

if (timeSpan == "AM" && +hrs >= 12) {
  hrs = "0" + (+hrs - 12);
} else if (timeSpan == "PM" && +hrs < 12) {
  hrs = +hrs + 12;
}

let resultTime = hrs + s.slice(2, -2);

console.log(resultTime);
