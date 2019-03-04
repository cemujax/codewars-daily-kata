const isValidWalk = walk => {
  const length = walk.length;
  if (length !== 10) return false;
  let dir = 0;
  walk.forEach(v => {
    if (v === "n" || v === "w") dir++;
    else dir--;
  });
  return !dir ? true : false;
};
module.exports = isValidWalk;
