const isValidIP = str => {
  if (!/^(\d{1,3}\.){3}\d{1,3}$/.test(str)) {
    return false;
  }

  const ip = str.split(".");
  return ip.every(
    v => v.length === String(+v).length && Number(v) >= 0 && Number(v) <= 255
  );
};

module.exports = isValidIP;
