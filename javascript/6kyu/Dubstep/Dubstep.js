const songDecoder = song => {
  const DUB_STEP = "WUB";
  const result = song
    .split(DUB_STEP)
    .filter(v => !!v)
    .join(" ");
  return result;
};

module.exports = songDecoder;
