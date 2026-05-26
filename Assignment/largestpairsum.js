function largestPairSum(numbers) {
  
  numbers.sort((a, b) => b - a); // Descending order

  return numbers[0] + numbers[1];
}


console.time('Execution Time');
let result = largestPairSum([10, 14, 2, 23, 19])
console.log(result);
console.timeEnd('Execution Time');

// console.log(largestPairSum([99, 2, 2, 23, 19]));