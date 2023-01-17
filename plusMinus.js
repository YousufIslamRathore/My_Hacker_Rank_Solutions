// Given Input
let arr = [-4, 3, -9, 0, 4, 1];

let arrLength = arr.length;
let positiveVals = 0;
let negativeVals = 0;
let zeroVals = 0;

for( let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
        positiveVals++;         // for the Total Count of Positive Values 
    } else if (arr[i] < 0) {
        negativeVals++;         // for the Total Count of Negative Values
    } else if (arr[i] == 0 ){
        zeroVals++;             // for the Total Count of Zero Values
    }
}

// Calculating Proportions of Positive, Negative and Zero Values with Length of Array
let positiveProportion = (positiveVals/arrLength).toFixed(6);   // .toFixed(NO_OF_PLACES_AFTER_DIGIT) ... is used for a number to give entered no of places after decimal
let negativeProportion = (negativeVals/arrLength).toFixed(6);
let zeroProportion = (zeroVals/arrLength).toFixed(6);

console.log(positiveProportion);
console.log(negativeProportion);
console.log(zeroProportion);