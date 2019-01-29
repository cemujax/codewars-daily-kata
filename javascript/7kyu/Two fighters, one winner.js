/**
 * Two fighters, one winner
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019. 01. 23
 * @url     : https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/train/javascript
 *
 */

function declareWinner(fighter1, fighter2, firstAttacker) {
  const attackTurn = [fighter1, fighter2];
  if (firstAttacker === fighter2.toString()) attackTurn.reverse();

  while (true) {
    const first = attackTurn[0];
    const second = attackTurn[1];

    second.health -= first.damagePerAttack;
    if (second.health <= 0) return first.toString();
    first.health -= second.damagePerAttack;
    if (first.health <= 0) return second.toString();
  }
}

function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function() {
    return this.name;
  };
}

declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew");
declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry");
declareWinner(
  new Fighter("Harald", 20, 5),
  new Fighter("Harry", 5, 4),
  "Harry"
);
declareWinner(
  new Fighter("Harald", 20, 5),
  new Fighter("Harry", 5, 4),
  "Harald"
);
declareWinner(
  new Fighter("Jerry", 30, 3),
  new Fighter("Harald", 20, 5),
  "Jerry"
);
declareWinner(
  new Fighter("Jerry", 30, 3),
  new Fighter("Harald", 20, 5),
  "Harald"
);
