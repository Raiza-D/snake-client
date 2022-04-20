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
  if (key === "\u0003") {
    process.exit();
  }
  
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

  if (specialPlayerMsgs[key]) {
    connection.write(`Say: ${specialPlayerMsgs[key]}`);
  }
};

module.exports = { setupInput };

  // if (key === "y") {
  //   connection.write("Say: Go, snake, go!");
  // }

  // if (key === "h") {
  //   connection.write("Say: FEED ME!!");
  // }

  // if (key === "j") {
  //   connection.write("Say: Mmm pie-thon!");
  // }

  // if (key === "u") {
  //   connection.write("Say: Hisssterical");
  // }