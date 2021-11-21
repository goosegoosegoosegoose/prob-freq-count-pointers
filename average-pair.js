// add whatever parameters you deem necessary
function averagePair(arr, avg) {
  if (!arr.length) return false;
  let first = 0;
  let last = arr.length-1;
  for (let i=0; i<arr.length; i++) {
    let result = ((arr[first] + arr[last])/2);
    if (first >= last) return false;
    if (result === avg) return true;
    if (result > avg) {
      last--;
    } else {
      first++;
    }
  }
}
