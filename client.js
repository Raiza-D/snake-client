const net = require("net");
const { IP, Port, UTF, setEncoding } = require("./constants");

// const { IP, Port, UTF, setEncodingUTF8 } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: Port
  });

  // console.log(conn, typeof conn);

  // interpret incoming data as text
  // conn.setEncoding(UTF);
  // setEncodingUTF8(conn, UTF);
  setEncoding(conn, UTF);

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






