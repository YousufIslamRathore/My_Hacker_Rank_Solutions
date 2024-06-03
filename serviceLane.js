// Given Input
let n = 8;
let t = 5;
let width = [2, 3, 1, 2, 3, 2, 3, 3];
let cases = [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]];

let result = [];
for (let i = 0; i < t; i++) {
    let entry = cases[i][0];
    let exit = cases[i][1];
    let entryToExitWidths = width.slice(entry, exit + 1)
    let maxSizeVehicleToPass = Math.min(...entryToExitWidths);
    result.push(maxSizeVehicleToPass);
}
console.log(result);
