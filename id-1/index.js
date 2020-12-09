// Multiples of 3 and 5
// ID 1

// @Description
// Find the sum of all the multiples of 3 or 5 below 1000.

const n = 1000;
let result = 0;

for(let i = 1; i < n; i++) {
  if(i % 3 == 0 || i % 5 == 0) {
    result += i;
  }
}

console.log(result);

