/**
 * Detect Pangram
 *
 * A pangram is a sentence that contains every single letter of the alphabet at least once.
 * For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
 * because it uses the letters A-Z at least once (case is irrelevant).
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019. 01. 24
 * @url     : https://www.codewars.com/kata/detect-pangram/train/javascript
 *
 */

function isPangram(string) {
  const alphaCheck = new Array(26).fill(false);

  for (let i = 0; i < string.length; i++) {
    const letter = string.charAt(i).toLowerCase();
    const code = letter.charCodeAt();
    if (code >= 97 && code <= 122) {
      alphaCheck[code - 97] = true;
    }
  }
  const result = alphaCheck.every(flag => flag === true);
  return result;
}

isPangram("The quick brown fox jumps over the lazy dog."); // true
isPangram("This is not a pangram."); // false
