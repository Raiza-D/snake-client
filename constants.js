// Store host IP and port into variables (to hide them):
const IP = "10.0.0.95";
const Port = 50541;

/* Key mappings for snake movements and special player messages.
Letters represent keyboard stroke. */
  const actions = {
    w: "Move: up",
    s: "Move: down",
    a: "Move: left",
    d: "Move: right",
    y: "Say: Go, snake, go!",
    h: "Say: FEED ME!!",
    j: "Say: Mmm pie-thon!",
    u: "Say: Hisssterical",
  };

module.exports = {
  IP,
  Port,
  actions
};
