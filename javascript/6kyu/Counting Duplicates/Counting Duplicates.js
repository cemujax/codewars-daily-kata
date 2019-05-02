const duplicateCount = text => {
  let answer = 0;
  const map = new Map();

  text
    .toLowerCase()
    .split("")
    .forEach(v => {
      const count = map.has(v) ? map.get(v) + 1 : 1;
      map.set(v, count);
    });

  for (let [key, value] of map) {
    if (value > 1) answer++;
  }
  return answer;
};

module.exports = duplicateCount;
