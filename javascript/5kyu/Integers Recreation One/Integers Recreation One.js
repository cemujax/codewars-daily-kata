const listSquared = (m, n) => {
  const answer = [];
  for (let i = m; i <= n; i++) {
    let sum = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        sum += j * j;
      }
    }

    if (Number.isInteger(Math.sqrt(sum))) {
      answer.push([i, sum]);
    }
  }
  return answer;
};

module.exports = listSquared;
