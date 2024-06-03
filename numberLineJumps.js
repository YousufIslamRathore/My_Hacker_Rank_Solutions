// Given Input
let x1 = 0;
let v1 = 3;
let x2 = 4;
let v2 = 2;

let result = "NO";
for (let i = 1; i <= 100000; i++) {
    if (x1 === x2) {
        result = "YES";
        break;
    }
    x1 += v1;
    x2 += v2;
}
console.log(result);
