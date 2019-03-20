const pickPeaks = arr => {
  const obj = {
    pos: [],
    peaks: []
  };
  let pos = -1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] < arr[i]) {
      pos = i;
    } else if (arr[i] < arr[i - 1] && pos !== -1) {
      obj.pos.push(pos);
      obj.peaks.push(arr[pos]);
      pos = -1;
    }
  }
  return obj;
};

module.exports = pickPeaks;
