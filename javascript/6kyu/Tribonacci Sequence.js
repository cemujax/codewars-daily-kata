/**
 * Tribonacci Sequence
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019. 01. 25
 * @url     : https://www.codewars.com/kata/tribonacci-sequence/train/javascript
 *
 */
function tribonacci(signature, n) {
  for (let i = 0; i < n - 3; i++) {
    const num = signature[i] + signature[i + 1] + signature[i + 2];
    signature.push(num);
  }
  return signature.slice(0, n);
}

tribonacci([1, 1, 1], 10);
tribonacci([0, 0, 1], 10);
tribonacci([0, 1, 1], 10);
tribonacci([1, 0, 0], 10);
tribonacci([0, 0, 0], 10);
tribonacci([1, 2, 3], 10);
tribonacci([3, 2, 1], 10);
tribonacci([1, 1, 1], 1);
