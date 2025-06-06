class Person {
  constructor(name) {
    this.name = name;
  }

  SayMyName() {
    return `Your name is ${this.name}`;
  }
}

module.exports = { Person }; // exportação nomeada
