// Setup interface to handle user input from stdin
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function(key) {
    if (key === "\u0003") {
      process.exit();
    }

    if (key === "w") {
      console.log("This is to move up: ", key);
    }

    if (key === "s") {
      console.log("This is to move down: ", key);
    }
  };

  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = { setupInput };