const gap = (g, m, n) => {
  const _isPrime = n => {
    for (let i = 2; i <= n ** 0.5; i++) {
      if (n % i == 0) return false;
    }
    return true;
  };

  let prevPrime = 0;
  for (let i = m; i <= n; i++) {
    if (_isPrime(i)) {
      if (g === i - prevPrime) return [prevPrime, i];
      prevPrime = i;
    }
  }
  return null;
};

module.exports = gap;
