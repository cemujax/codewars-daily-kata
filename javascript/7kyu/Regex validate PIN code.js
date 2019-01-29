/**
 * Regex validate PIN code
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019. 01. 23
 * @url     : https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript
 *
 */

function validatePIN(pin) {
  //return true or false
  return /^(\d{4}|\d{6})$/.test(pin);
}
validatePIN("5001");
validatePIN("12345");
validatePIN("a234");
