// Given Input
let arr = [5, 5, 5, 5, 5];
let sumsArr = []; // Initiating this array to store each sum

for (let i = 0; i < arr.length; i++) {
  let multipleSum = 0;
  for (let j = 0; j < arr.length; j++) {
    if (i !== j) {
      // This Condition is checking if as for the first iteration as we will be neglecting the 0th index in calculating the sum ....
      multipleSum += arr[j]; // Adding up hte number of each iteration to the variable except for on which iteration the parent loop is ... so by this we will be missing one iteration
    }
  }
  // console.log(multipleSum);
  sumsArr.push(multipleSum); // Since on each 'i' it is giving a new multipleSum ... so we pushing it to the sumsArr
}

// After for loop ... sumsArr will end up having all the multipleSums
sumsArr.sort(); // Applying .sort() to the sumsArr because by this we will have the minimum and maximum values at the ends of the array
console.log(sumsArr[0], sumsArr[arr.length - 1]);
