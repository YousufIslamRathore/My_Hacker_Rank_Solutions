// // Given Input
let candles = [3, 2, 1, 3];

//// This function is placed here because the sort method if we want to work on the number will perfectly run ifff this will be placed in the method
function compareFunction(a, b) {
  return a - b;
}

candles.sort(compareFunction); // it will be easy for us to find the tallest candle ... which will ofcourse be on the last index
let tallestCandle = candles[candles.length - 1];
let tallestCandleCount = 0;
for (let i = 0; i <= candles.length; i++) {
  // Loop for finding the count of tallest candle in the array
  switch (tallestCandle) {
    case candles[i]:
      tallestCandleCount++;
  }
}
console.log(tallestCandleCount);
