const rgb = (r, g, b) => {
  const MIN = 0,
    MAX = 255;
  const validNum = value => {
    if (value < MIN) {
      return MIN;
    } else if (value > MAX) {
      return MAX;
    }
    return value;
  };
  const answer = [r, g, b].reduce((acc, v) => {
    v = validNum(v)
      .toString(16)
      .toUpperCase();
    acc += v.padStart(2, "0");
    return acc;
  }, "");
  return answer;
};

module.exports = rgb;
