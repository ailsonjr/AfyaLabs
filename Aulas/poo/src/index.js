const objJavascript = require('./literals/objeto');
const ObjJSON = require('./literals/objeto.json');
const Pessoa = require('./class//anatomia');

console.log(objJavascript.getFinalPrice());

console.log(ObjJSON.produto[0]);

console.log(Pessoa.hello('Ailson', 'dev', 38));