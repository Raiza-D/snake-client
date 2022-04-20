const { moveUp, moveDown, moveLeft, moveRight, specialPlayerMsgs } = require("./constants");

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
  // Terminates game if user inputs Ctrl+C 
  if (key === "\u0003") {
    process.exit();
  }
  
  // Movement commands:
  if (key === moveUp) {
    connection.write("Move: up");
  }

  if (key === moveDown) {
    connection.write("Move: down");
  }

  if (key === moveLeft) {
    connection.write("Move: left");
  }

  if (key === moveRight) {
    connection.write("Move: right");
  }

  // Key mapping to send messages:
  if (specialPlayerMsgs[key]) {
    connection.write(`Say: ${specialPlayerMsgs[key]}`);
  }
};

module.exports = { setupInput };