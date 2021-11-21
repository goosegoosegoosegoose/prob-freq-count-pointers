// add whatever parameters you deem necessary

function sameFrequency(num1, num2) {
  const freq1 = countFreq(num1);
  const freq2 = countFreq(num2);
  if (Object.keys(freq1).length !== Object.keys(freq2).length) return false;
  for (let i of Object.keys(freq1)) {
    if (freq1[i] !== freq2[i]) return false;
  }
  return true;
}

function countFreq(val) {
  let str = String(val);
  let freq = {}
  for (let ele of str) {
    freq[ele] = (freq[ele] + 1) || 1
  }
  return freq;
}

// looks more like a O(3N) instead of 2N
