// Given  Input
let arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
let mainDiagonalSum = 0;
let antiDiagonalSum = 0;
let diagonalDifference;

for (let i = 0; i < arr.length; i++) {
    mainDiagonalSum += arr[i][i]                   // Since, in Matrix | Multidimensional Array we have same no. of index of row and column in the main diagonal
    antiDiagonalSum += arr[i][(arr.length-1)-i]    // In Anti Diagonal, the number of columns are reversed that they start from the upper right to the lower left diagonally
}

diagonalDifference = Math.abs(mainDiagonalSum - antiDiagonalSum)      // As any of the diagonal can have large value

console.log("Sum of Main Diagonal => ", mainDiagonalSum)
console.log("Sum of Anti Diagonal => ", antiDiagonalSum)
console.log("Absolute Difference of Diagonals => ", diagonalDifference)