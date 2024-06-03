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
    let maxSizeVehicleToPass = Math.min(...entryToExitWidths); // since we have to choose the max size of the car which can pass through the service lane of dynamic width list from entry to exit point.
    result.push(maxSizeVehicleToPass);
}
console.log(result);
