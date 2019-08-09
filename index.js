/**
 * Don't change these constants!
 */
const DODGER = document.getElementById('dodger');
const GAME = document.getElementById('game');
const GAME_HEIGHT = 400;
const GAME_WIDTH = 400;
const LEFT_ARROW = 37; // use e.which!
const RIGHT_ARROW = 39; // use e.which!
const ROCKS = [];
const START = document.getElementById('start');

var gameInterval = null;

/**
 * Be aware of what's above this line,
 * but all of your work should happen below.
 */

function checkCollision(rock) {
  // implement me!
  // use the comments below to guide you!
  
  const top = positionToInteger(rock.style.top);
  
  //gives rock's distance from top as an integer (without 'px')

  // rocks are 20px high
  // DODGER is 20px high
  // GAME_HEIGHT - 20 - 20 = 360px;
  //the following 'if' statement says 'if the rock's distance from the top is greater than 360 (i.e. it is now at same level or below where the dodger is)...
  
  if (top > 360) {
    const dodgerLeftEdge = positionToInteger(DODGER.style.left);
    //gives dodger's left edge distance from left as an integer (without 'px')

    // FIXME: The DODGER is 40 pixels wide -- how do we get the right edge?
    const dodgerRightEdge = dodgerLeftEdge + 40;
    //gives dodger's right edge distance from left as an integer (without 'px')

    const rockLeftEdge = positionToInteger(rock.style.left);
    //gives rock's left edge distance from left as an integer (without 'px')

    // FIXME: The rock is 20 pixel's wide -- how do we get the right edge?
    const rockRightEdge = rockLeftEdge + 20;

    if ((rockLeftEdge <= dodgerLeftEdge && rockRightEdge >= dodgerLeftEdge) ||
        (rockLeftEdge >= dodgerLeftEdge && rockRightEdge <= dodgerRightEdge) ||
        (rockLeftEdge <= dodgerRightEdge && rockRightEdge >= dodgerRightEdge)) {
          return true;
        }
}
}

/** explaining above logic:
               * Think about it -- what's happening here?
               * There's been a collision if one of three things is true:
               * 1. The rock's left edge is < the DODGER's left edge,
               *    and the rock's right edge is > the DODGER's left edge;
               * 2. The rock's left edge is > the DODGER's left edge,
               *    and the rock's right edge is < the DODGER's right edge;
               * 3. The rock's left edge is < the DODGER's right edge,
               *    and the rock's right edge is > the DODGER's right edge
               */

function createRock(x) {
  const rock = document.createElement('div');

  rock.className = 'rock';
  rock.style.left = `${x}px`;

  // Hmmm, why would we have used `var` here?
  var top = 0;

  rock.style.top = top;

   GAME.appendChild(rock);
}
  /**
   * We have a rock that we need to append
   * it to GAME and move it downwards.
   */

  /**
   *This function moves the rock.(2 pixels *time)
   */

  function moveRock() {
    rock.style.top = `$(top += 2)px`;

    if (checkCollision(rock)) {
      endGame();
    }//if collision, end game

    if (top < GAME_HEIGHT) {
      window.requestAnimationFrame(moveRock);
    /**
     * if rock hasn't reached bottom of
     * GAME, we want to move it again.
     */
    } else {
      rock.remove();
     /**if rock *has* reached the bottom of the GAME,
     * remove it from the DOM
     */
    }
  }
  window.requestAnimationFrame(moveRock);

  {ROCKS.push(rock);
  /** Add the rock to ROCKS so that we can remove all *rocks when there's a collision
   */

  return rock;// Finally, return the rock element you've created
}


/**
 * End the game by clearing `gameInterval`,
 * removing all ROCKS from the DOM,
 * and removing the `moveDodger` event listener.
 * Finally, alert "YOU LOSE!" to the player.
 */
function endGame() {
}

function moveDodger(e) {
  // implement me!
  /**
   * This function should call `moveDodgerLeft()`
   * if the left arrow is pressed and `moveDodgerRight()`
   * if the right arrow is pressed. (Check the constants
   * we've declared for you above.)
   * And be sure to use the functions declared below!
   */
}

function moveDodgerLeft() {
  // implement me!
  /**
   * This function should move DODGER to the left
   * (mabye 4 pixels?). Use window.requestAnimationFrame()!
   */
}

function moveDodgerRight() {
  // implement me!
  /**
   * This function should move DODGER to the right
   * (mabye 4 pixels?). Use window.requestAnimationFrame()!
   */
}

/**
 * @param {string} p The position property
 * @returns {number} The position as an integer (without 'px')
 */
function positionToInteger(p) {
  return parseInt(p.split('px')[0]) || 0
}

function start() {
  window.addEventListener('keydown', moveDodger)

  START.style.display = 'none'

  gameInterval = setInterval(function() {
    createRock(Math.floor(Math.random() *  (GAME_WIDTH - 20)))
  }, 1000)
}

