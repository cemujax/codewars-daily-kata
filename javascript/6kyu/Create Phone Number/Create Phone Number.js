const createPhoneNumber = numbers => {
  numbers = numbers.join("");
  return numbers.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
};

module.exports = createPhoneNumber;
