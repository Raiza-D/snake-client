const net = require("net");
const { IP, Port, UTF } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: Port
  });

  // interpret incoming data as text
  conn.setEncoding(UTF);

  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    conn.write("Name: RDG");
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};

module.exports = { connect };






