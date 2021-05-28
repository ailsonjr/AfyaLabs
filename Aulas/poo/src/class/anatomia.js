class Person {
  constructor(name, ocuppation, age) {
    this._name = name;
    this._ocuppation = ocuppation;
    this._age = age;
  }

  hello(name, ocuppation, age) {
    if (ocuppation === 'dev') {
      return `Fala ${ocuppation} seu nome é ${name} e você tem ${age} anos.`
    } else {
      return `Fala ${name} e você tem ${age} anos e sua profissão é ${ocuppation}`
    }
  }
}

const Pessoa = new Person;

module.exports = Pessoa;