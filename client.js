const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "10.0.0.95",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    conn.write("Name: RDG");
    // setTimeout(() => {
    // conn.write("Move: up");
    // }, 4000);
    // setTimeout(() => {
    // conn.write("Move: down");
    // }, 500);
    // setTimeout(() => {
    // conn.write("Move: left");
    // }, 1000);
    // setTimeout(() => {
    // conn.write("Move: right");
    // }, 6000);
  });

  conn.on("connect", () => {
    setInterval(() => {
    conn.write("Move: left");
    }, 3000);
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};

module.exports = { connect };






