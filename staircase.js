// Given Input
let n = 6;

// // // This Code is for Incrementing Staircase ...
// // for(let i = 1; i <= n; i++) {
// //     for(let j = 1; j <= i; j++) {
// //         console.log('*')
// //     }
// //     console.log("\n")
// // }

// // For Reverse Staircase ... but this down one was to make this logic ... and was not efficent line of code
// for (let i = 1; i <= n; i++) {
//   let emptySpaces = "";
//   let hashSymbol = "";
//   for (let j = 0; j < n - i; j++) {
//     // console.log(" ");
//     emptySpaces += " ";
//   }
//   for (let k = 0; k < i; k++) {
//     // console.log("#");
//     hashSymbol += "#";
//   }
//   let iResult = emptySpaces + hashSymbol;
//   console.log(iResult);
// }

//// Or we can replace emptySpaces and hashSymbol variables ... and replace them by a single variable
for (let i = 1; i <= n; i++) {
  let iStair = "";
  for (let j = 0; j < n - i; j++) {
    iStair += " ";
  }
  for (let k = 0; k < i; k++) {
    iStair += "#";
  }
  console.log(iStair);
}


///// Another method to do with the same approach but different for loops initialization 

for(let i = 0; i < n; i++) {
  let iStair = '';
  for (let j = 0; j < n - (i + 1); j++) {
    iStair += " ";
  }
  for (let k = 0; k < i; k++) {
    iStair += "#";
  }
  console.log(iStair);
}
