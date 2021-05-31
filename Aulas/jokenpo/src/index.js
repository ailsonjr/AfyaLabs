// const rl = require('./interface');

// const MachineOptions = require("./controller/class/machine");
const User = require("./controller/class/user");
const options = require("./data");

// rl.question('Você está gostando do POO? ', resposta => {
//   console.log(`Sua resposta foi ${resposta}`);
//   rl.close();
// });

// let sorteio = new MachineOptions({ opt: options }).sort();
let usuario = new User({ opt: options, name: 'Maria', selected: 'Papel' }).game();

console.log(usuario);
