const myname = 'Jean';
const myage = 12;
const suma = (a: number, b: number) => {
  return a + b;
};

suma(12, 3);

class Persona {
  constructor(
    private age: number,
    private name: string,
  ) {
    this.age = age;
    this.name = name;
  }

  getSummary() {
    return `Mi nombre es ${this.name} y mi edad es ${this.age}`;
  }
}

const jean = new Persona(myage, myname);

jean.getSummary();
