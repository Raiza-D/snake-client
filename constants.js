
const IP = "10.0.0.95";

const Port = 50541;

const UTF = "utf8";

// const setEncodingUTF8 = function(objParam, encoding) {
//   objParam.setEncoding(encoding);
// };

const setEncoding = function (objParam, encoding) {
  objParam.setEncoding(encoding);
};

module.exports = {
  IP,
  Port,
  UTF,
  // setEncodingUTF8
  setEncoding
};

// Single-source of truth -- Keeping important code into one file for easier
// updating later on. Future maintainability.
// Functions can be factored too. Function names matter - verb and a noun or another verb.