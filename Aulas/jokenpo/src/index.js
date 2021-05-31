// const rl = require('./interface');

const MachineOptions = require("./controller/class");
const options = require("./data");

// rl.question('Você está gostando do POO? ', resposta => {
//   console.log(`Sua resposta foi ${resposta}`);
//   rl.close();
// });

let sorteio = new MachineOptions({ opt: options }).sort();

console.log(sorteio);
