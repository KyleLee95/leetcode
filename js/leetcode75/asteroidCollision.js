/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const stack = [];

  for (const asteroid of asteroids) {
    let flag = true;

    //while the following conditions are true:
    //1. stack has an element
    //2. the last element of the stack is greater than 0
    //3. the asteroid is less than 0

    //2 and 3 check for a collision because the magnitudes are different.
    //if they are, then check if the asteroid at the top of the stack is less than the
    //current asteroid under consideration.
    //remove from the stack if the current asteroid is larger, send control flow to if statement where flag is true.
    //otherwise, if they're equal, remove the top element and set flag to false and exit loop iteration.
    //otherwise, the default behavior is to add the current asteroid to the stack

    while (stack.length && stack[stack.length - 1] > 0 && asteroid < 0) {
      if (Math.abs(stack[stack.length - 1]) < Math.abs(asteroid)) {
        stack.pop();
        continue;
      } else if (Math.abs(stack[stack.length - 1]) === Math.abs(asteroid)) {
        stack.pop();
      }

      flag = false;
      break;
    }

    if (flag) {
      stack.push(asteroid);
    }
  }

  return stack;
};

const asteroids = [5, 10, -5];
const testTwo = [8, -8];
console.log(asteroidCollision(asteroids));
console.log(asteroidCollision(testTwo));
