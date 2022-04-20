const { actions } = require("./constants");

// Stores the active TCP connection object
let connection;

// Setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  // Terminates game if user inputs Ctrl+C or x
  if (key === "\u0003" || key === "x") {
    console.log("You exited the game, goodbye.");
    process.exit();
  }

  /* References actions object. Executes corresponding action or message
  to send to server, according to keyboard stroke inputted by user. */
  if (actions[key]) {
    connection.write(actions[key]);
  }
};

module.exports = { setupInput };