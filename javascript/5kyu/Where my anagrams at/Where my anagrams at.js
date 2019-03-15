const anagrams = (word, words) => {
  word = word
    .split("")
    .sort()
    .join("");

  const answer = words.filter(
    arr =>
      word ===
      arr
        .split("")
        .sort()
        .join("")
  );
  return answer;
};

module.exports = anagrams;
