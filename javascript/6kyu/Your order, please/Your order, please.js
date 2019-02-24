const order = words => {
  const arr = words.split(" ").sort((a, b) => a.match(/\d/) - b.match(/\d/));
  return arr.join(" ");
};

module.exports = order;
