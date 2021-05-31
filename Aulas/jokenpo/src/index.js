// const rl = require('./interface');

// const MachineOptions = require("./controller/class/machine");
const User = require("./controller/class/user");
const options = require("./data");

let jogar = new User({
  opt: options
}).game();

jogar;
