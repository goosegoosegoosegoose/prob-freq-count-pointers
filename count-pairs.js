// add whatever parameters you deem necessary
function countPairs(arr, num) {
  let first = 0;
  let second = 1;
  let count = 0;
  for (let i=0; i<arr.length**2; i++) {
    if (first === arr.length-1) break;
    if (first === second) {
      second++;
      continue;
    }
    const sum = arr[first] + arr[second];
    if (sum === num) {
      count++;
      first++;
      second = first + 1;
    } else if (second === arr.length-1){
      first++;
      second = first + 1;
    } else {
      second++;
    }
    console.log(i, arr.length)
  }
  return count;
}

// Hoping the time complexity of this is O(N * log(n)) but i feel like I just made a loop with extra steps, making it quadratic