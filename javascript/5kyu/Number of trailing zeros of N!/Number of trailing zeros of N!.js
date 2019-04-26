const zeros = n => {
  let trailingZero = 0;
  let div = 1,
    i = 1;
  while (div >= 1) {
    div = n / Math.pow(5, i++);
    trailingZero += Math.floor(div);
  }
  return trailingZero;
};

module.exports = zeros;
