const validPhoneNumber = phoneNumber => {
  const phoneReg = /^\(\d{3}\) \d{3}-\d{4}$/;
  return phoneReg.test(phoneNumber);
};

module.exports = validPhoneNumber;
