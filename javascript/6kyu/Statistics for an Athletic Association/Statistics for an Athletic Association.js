const stat = strg => {
  const _timeToSec = time => {
    return time.split("|").reduce((acc, v, i) => {
      let n = !i ? 3600 : i === 1 ? 60 : 1;
      acc += parseInt(v) * n;
      return acc;
    }, 0);
  };

  const _timeToFormat = sec => {
    let hours = String(Math.floor(sec / 3600));
    let minutes = String(Math.floor((sec % 3600) / 60));
    let seconds = String(sec % 60);
    return (
      hours.padStart(2, "0") +
      "|" +
      minutes.padStart(2, "0") +
      "|" +
      seconds.padStart(2, "0")
    );
  };

  if (strg === "") return "";
  const result = strg.split(", ");
  const length = result.length;
  const resultBySec = result.map(v => _timeToSec(v)); // sec단위 결과

  const range = _timeToFormat(
    Math.max(...resultBySec) - Math.min(...resultBySec)
  );

  const average = _timeToFormat(
    Math.floor(resultBySec.reduce((acc, x) => acc + x, 0) / length)
  );

  resultBySec.sort((a, b) => a - b); // 오름차순 정렬
  const middle = resultBySec.slice((length - 1) / 2, length / 2 + 1);
  const median = _timeToFormat(
    Math.floor(middle.reduce((acc, x) => acc + x, 0) / middle.length)
  );

  const answer = `Range: ${range} Average: ${average} Median: ${median}`;
  return answer;
};

module.exports = stat;
