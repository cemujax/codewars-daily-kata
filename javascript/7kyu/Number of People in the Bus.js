/**
 * Number of People in the Bus
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019. 01. 18
 * @url     : https://www.codewars.com/kata/number-of-people-in-the-bus/train/javascript
 *
 */

var number = function(busStops) {
  // Good Luck!
  const sleeping = busStops.reduce((a, x) => a + x[0] - x[1], 0);
  return sleeping;
};

number([[10, 0], [3, 5], [5, 8]]);
number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]);
number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]);
