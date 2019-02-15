const moveZeros = arr => {
  const result = arr.reduceRight((acc, v) => {
    if (v === 0) {
      acc.push(v);
    } else {
      acc.unshift(v);
    }
    return acc;
  }, []);

  return result;
};

module.exports = moveZeros;
