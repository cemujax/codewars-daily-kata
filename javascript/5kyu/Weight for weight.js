/**
 * Weight for weight
 *
 * For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.
 * Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019. 01. 28
 * @url     : https://www.codewars.com/kata/weight-for-weight/train/javascript
 *
 */

function orderWeight(strng) {
  const weightArr = strng.split(" ").map(strng => {
    const weight = strng.split("").reduce((a, x) => a + +x, 0);
    return {
      strng: strng,
      weight: weight
    };
  });
  const answer = weightArr
    .sort((a, b) => {
      if (a.weight > b.weight) return 1;
      if (a.weight < b.weight) return -1;
      if (a.weight === b.weight) {
        console.log(a.strng, b.strng);
      }
      return a.strng > b.strng ? 1 : -1;
    })
    .map(v => v.strng)
    .join(" ");
  return answer;
}

orderWeight("103 123 4444 99 2000"); // "2000 103 123 4444 99"
orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"); // "11 11 2000 10003 22 123 1234000 44444444 9999"
