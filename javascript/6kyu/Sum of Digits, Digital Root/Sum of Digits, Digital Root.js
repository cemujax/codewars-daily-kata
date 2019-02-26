const digital_root = n => {
  if (n < 10) return n;

  return digital_root(
    String(n)
      .split("")
      .reduce((acc, v) => acc + +v, 0)
  );
};

module.exports = digital_root;
