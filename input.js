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

const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  }

  if (key === "w") {
    connection.write("Move: up");
  }

  if (key === "s") {
    connection.write("Move: down");
  }

  if (key === "a") {
    connection.write("Move: left");
  }

  if (key === "d") {
    connection.write("Move: right");
  }

  if (key === "y") {
    connection.write("Say: Go, snake, go!");
  }

  if (key === "h") {
    connection.write("Say: FEED ME!!");
  }

  if (key === "j") {
    connection.write("Say: Mmm pie-thon!");
  }

  if (key === "u") {
    connection.write("Say: Hisssterical");
  }

};

module.exports = { setupInput };