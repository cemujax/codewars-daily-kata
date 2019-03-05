const duplicateEncode = word => {
  const result = word
    .toLowerCase()
    .split("")
    .map((v, i, w) => {
      return w.indexOf(v) === w.lastIndexOf(v) ? "(" : ")";
    })
    .join("");
  return result;
};

module.exports = duplicateEncode;
