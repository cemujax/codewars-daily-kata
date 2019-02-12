const toCamelCase = str => {
  const result = str
    .split(/[-_]/)
    .reduce((a, v) => a + v.charAt(0).toUpperCase() + v.slice(1));
  return result;
};

module.exports = toCamelCase;
