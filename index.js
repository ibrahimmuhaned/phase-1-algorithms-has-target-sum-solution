// function hasTargetSum(array, target) {
//   // Write your algorithm here
// }

// /* 
//   Write the Big O time complexity of your function here
// */

// /* 
//   Add your pseudocode here
// */

// /*
//   Add written explanation of your solution here
// */

// // You can run `node index.js` to view these console logs
// if (require.main === module) {
//   // add your own custom tests in here
//   console.log("Expecting: true");
//   console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

//   console.log("");

//   console.log("Expecting: true");
//   console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

//   console.log("");

//   console.log("Expecting: false");
//   console.log("=>", hasTargetSum([1, 2, 5], 4));
// }

// module.exports = hasTargetSum;

function hasTargetSum(array, target) {
  // Iterate through the array
  for (let i = 0; i < array.length; i++) {
    // Calculate the complement for the current number
    const complement = target - array[i];
    // Iterate through the remaining numbers in the array
    for (let j = i + 1; j < array.length; j++) {
      // Check if the complement exists in the array
      if (array[j] === complement) {
        // If a pair is found that adds up to the target, return true
        return true;
      }
    }
  }
  // If no such pair is found, return false
  return false;
}

// Time complexity: O(n^2) - Quadratic time complexity due to nested loops
// Space complexity: O(1) - Constant space complexity as no additional data structures are used

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Add your own custom tests here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
