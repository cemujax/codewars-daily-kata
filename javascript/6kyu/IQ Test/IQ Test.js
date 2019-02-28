const iqTest = numbers => {
  const arr = numbers.split(" ").map(n => n & 1);
  const oddIdx = [],
    evenIdx = [];

  arr.forEach((v, i) => {
    if (v) oddIdx.push(i + 1);
    else evenIdx.push(i + 1);
  });

  return oddIdx.length > 1 ? evenIdx[0] : oddIdx[0];
};

module.exports = iqTest;
