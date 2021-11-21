// add whatever parameters you deem necessary
function separatePositive(arr) {
  for (let i in arr) {
    if (arr[i] <= 0) {
      continue;
    } else {
      let num = arr.splice(i, 1)[0];
      arr.splice(0, 0, num);
    }
  }
  return arr;
}