const validParentheses = parens => {
  let count = 0;
  for (let i = 0; i < parens.length; i++) {
    const ch = parens[i];
    if (ch === "(") {
      count++;
    } else if (ch === ")") {
      count--;
    }
    if (count < 0) return false;
  }
  return count === 0;
};

module.exports = validParentheses;
