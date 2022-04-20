// Store host IP and port into variables (to hide them):
const IP = "10.0.0.95";
const Port = 50541;

// Store keyboard input to move snake:
// const moveUp = "w";
// const moveDown = "s";
// const moveLeft = "a";
// const moveRight = "d";

// Key mappings for messages:
// const specialPlayerMsgs = {
//   y: "Go, snake, go!",
//   h: "FEED ME!!",
//   j: "Mmm pie-thon!",
//   u: "Hisssterical"
// };

  const actions = {
    w: "Move: up",
    s: "Move: down",
    a: "Move: left",
    d: "Move: right",
    y: "Say: Got, snake, go!",
    h: "Say: FEED ME!!",
    j: "Say: Mmm pie-thon!",
    u: "Say: Hisssterical",
  };

module.exports = {
  IP,
  Port,
  // moveUp,
  // moveDown,
  // moveLeft,
  // moveRight,
  // specialPlayerMsgs
  actions
};
