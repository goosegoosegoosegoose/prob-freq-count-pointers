// add whatever parameters you deem necessary
function constructNote(msg, ltrs) {
  if (msg.length > ltrs.length) return false;
  const msgCount = countFreq(msg);
  const ltrsCount = countFreq(ltrs);
  for (let i of Object.keys(msgCount)) {
    if (msgCount[i] > ltrsCount[i]) return false
  }
  return true;
}

function countFreq(str) {
  let obj = {};
  for (let ele of str) {
    obj[ele] = (obj[ele] + 1) || 1
  }
  return obj
}