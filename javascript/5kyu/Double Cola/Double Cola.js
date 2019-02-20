const whoIsNext = (names, r) => {
  const length = names.length;
  let num = 0;
  let [index, prev] = [1, 1];

  while (index <= r) {
    [index, prev] = [(1 << num) * length + index, index];
    num++;
  }
  const repeatCnt = Math.pow(2, num - 1);
  return names[Math.floor((r - prev) / repeatCnt)];
};

module.exports = whoIsNext;
