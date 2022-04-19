
const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "10.0.0.95",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};

module.exports = { connect };


// const connect = {

//   createConnection: () => {
//     const conn = net.createConnection({
//     host: "10.0.0.95",
//     port: 50541,
//     message: console.log("Connecting...")
//   });
//     return conn;
//   },

//   interpretIncomingData: () => {
//     // interpret incoming data as text
//     conn.setEncoding("utf8");
//   },

//   receiveDataFromGameServer: () => {
//     conn.on("data", (data) => {
//     console.log("Server says: ", data);
//   });
//  }
// };





