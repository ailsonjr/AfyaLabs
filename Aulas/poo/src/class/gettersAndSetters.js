class Person {
  constructor(name, ocuppation) {
    this._name = name;
    this._ocuppation = ocuppation;
  }

  speak() {
    return `${this._name} trabalha com ${this._ocuppation}`
  }

  set name(string) {
    this._name = string.toUpperCase()
  }

  get name() {
    return this._name;
  }
}

let mariane = new Person('Mariane', 'Desenvolvedora');
mariane.name = 'mariane'

module.exports = mariane;
