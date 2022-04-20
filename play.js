const { connect } = require("./client");
const { setupInput } = require("./input");

// Store results of connect function (an object)
const conn = connect();

// Pass in results from above into setupInput
setupInput(conn);