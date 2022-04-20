const { connect } = require("./client");
const { setupInput } = require("./input");

// Print message onto user's Terminal, when client-server connection initated
console.log("Connecting...");

// Store results of connect function (an object)
const conn = connect();

// Pass in results from above into setupInput
setupInput(conn);