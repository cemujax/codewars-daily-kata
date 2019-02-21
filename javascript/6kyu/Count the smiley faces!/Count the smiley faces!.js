const countSmileys = arr => {
  const count = arr.reduce((acc, v) => acc + /^[:;][-~]?[)D]$/.test(v), 0);
  return count;
};

module.exports = countSmileys;
