const chooseBestSum = (t, k, arr) => {
  if (k > arr.length) return null;

  const _getDistanceSubSet = (arr, k) => {
    const subset = arr
      .reduce(
        (subsets, value) => subsets.concat(subsets.map(set => [value, ...set])),
        [[]]
      )
      .filter(a => a.length === k);
    return subset;
  };

  const distanceSubSet = _getDistanceSubSet(arr, k);
  let distanceSumArr = distanceSubSet.map(arr =>
    arr.reduce((acc, v) => acc + v, 0)
  );
  distanceSumArr = distanceSumArr.filter(v => v <= t).sort((a, b) => b - a);
  return distanceSumArr[0] || null;
};

module.exports = chooseBestSum;
