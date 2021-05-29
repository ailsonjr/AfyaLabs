const rl = require('./interface');

rl.question('Você está gostando do POO? ', resposta => {
  console.log(`Sua resposta foi ${resposta}`);
  rl.close();
});
