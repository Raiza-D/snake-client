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
    // conn.write("Move: left");
  });

  conn.on("connect", () => {
      setTimeout(() => {
      conn.write("Move: down");;
      }, 4000);
  });

  conn.on("connect", () => {
    setInterval(() => {
    conn.write("Move: left");
    }, 3000);
  });

  conn.on("connect", () => {
    console.log("This is the right command");
    conn.write("Move: right");
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};

module.exports = { connect };






