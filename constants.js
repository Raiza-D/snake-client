// constants.js
const IP = "10.0.0.95";

const Port = 50541;

const moveUp = "w";
const moveDown = "s";
const moveLeft = "a";
const moveRight = "d";

const specialPlayerMsgs = {
  y: "Go, snake, go!",
  h: "FEED ME!!",
  j: "Mmm pie-thon!",
  u: "Hisssterical"
};

module.exports = {
  IP,
  Port,
  moveUp,
  moveDown,
  moveLeft,
  moveRight,
  specialPlayerMsgs
};

/* Notes from mentor session: 
Single-source of truth -- Keeping important code into one file for easier
updating later on. Future maintainability.
Functions can be factored too.
Function names matter - verb and a noun or another verb.
*/