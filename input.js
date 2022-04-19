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

    if (key === "a") {
      console.log("This is to move left: ", key);
    }

    if (key === "d") {
      console.log("This is to move right: ", key);
    }
    
  };

  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = { setupInput };