const net = require("net");
const { IP, Port } = require("./constants");

// Establishes a connection with the game server
const connect = function() {
  console.log("Connecting...");
  const conn = net.createConnection({
    host: IP,
    port: Port
  });

  // Interpret incoming data as text
  conn.setEncoding("utf8");

  // Confirmation that connection to server has been established
  // Send player name. Appears on gameboard
  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    conn.write("Name: RDG");
  });

  // Receive data (a message) from game server to confirm connection
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};

module.exports = { connect };






