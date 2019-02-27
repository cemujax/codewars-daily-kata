const countBits = n => {
  const binary = n.toString(2);
  return binary.split("").filter(n => n === "1").length;
};

module.exports = countBits;
