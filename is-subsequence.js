// add whatever parameters you deem necessary
function isSubsequence(within, without) {
  if (within.length > without.length) return false;
  const idxIn = findIndex(within);
  const idxOut = findIndex(without);
  for (let i of Object.keys(idxIn)) {
    if (!idxOut[i]) return false;
    if (idxIn[i].length > idxOut[i].length) return false;
    if (idxIn[i][0] > idxOut[i][0]) return false;
  }
  return true;
}

function findIndex(str) {
  let obj = {};
  for (let i in str) {
    if (str[i] === " ") continue;
    obj[str[i]] ? obj[str[i]].push(i) : obj[str[i]] = [i]
  }
  return obj;
}

