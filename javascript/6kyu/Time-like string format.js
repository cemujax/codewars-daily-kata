/**
 * Time-like string format
 *
 * Build up a method that takes an integer and formats it to a 'time - like' format.
 * The method must raise an exception if its hour length is less than 3 digits and greater than 4.
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019. 01. 20
 * @url     : https://www.codewars.com/kata/time-like-string-format/train/javascript
 *
 */

function solution(hour) {
  const hourStr = hour.toString();

  if (hourStr.length < 3 || hourStr.length > 4) throw "exception ";

  const h = hourStr.slice(0, -2);
  const min = hourStr.slice(-2);
  return h + ":" + min;
}

solution(800); // should return '8:00'
solution(1000); // should return '10:00'
solution(1451); // should return '14:51'
solution(3351); // should return '33:51'
solution(10000); // should raise an exception
