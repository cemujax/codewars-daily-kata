const findOutlier = integers => {
  const odd = integers.filter(v => v & 1);
  const even = integers.filter(v => !(v & 1));
  return odd.length > 1 ? even[0] : odd[0];
};

module.exports = findOutlier;
