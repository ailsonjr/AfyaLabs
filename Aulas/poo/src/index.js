const objJavascript = require('./literals/objeto');
const ObjJSON = require('./literals/objeto.json');
const Pessoa = require('./class//anatomia');
const mariane = require('./class/gettersAndSetters');
const Person = require('./class/metodoPublico');
const Employee = require('./class/metodoPrivado');

let maria = new Employee({
  name: 'Maria',
  age: 19,
  codelanguage: 'Javascript'
});

maria.speak();
maria.stack();

// let marco = new Person({
//   name: 'Marco',
//   age: 22
// })._name;

// console.log(marco)

// console.log(objJavascript.getFinalPrice());

// console.log(ObjJSON.produto[0]);

// console.log(Pessoa.hello('Ailson', 'dev', 38));

console.log(mariane.name);