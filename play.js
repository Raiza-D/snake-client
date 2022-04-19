const net = require("net");

const client = require("./client");

console.log("Connecting...");
console.log(client.connect());