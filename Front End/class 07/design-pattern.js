// class Calculator {
//   constructor() {
//     this._value = 0;
//   }
//   add(value) {
//     this._value += value;
//     return this;
//   }
//   multiply(value) {
//     this._value *= value;
//     return this;
//   }
//   get value() {
//     return this._value;
//   }
// }

// const myCalc = new Calculator();
// myCalc.add(10).multiply(10);
// console.log(myCalc.value);

class Employee {
  constructor(name, position, id) {
    this._name = name;
    this._position = position;
    this._id = id;
  }
}
class Developer extends Employee {
  constructor(name, position, id) {
    super(name, position, id);
  }
}
class LeadDeveloper extends Employee {
  constructor(name, position, id) {
    super(name, position, id);
    this._team = [];
  }
  addMember(member) {
    this._team.push(member);
  }

  viewTeam() {
    const teamView = this._team.map((teamMember) => {
      const member = {
        name: teamMember._name,
        position: teamMember._position,
      };
      return member;
    });
    return teamView;
  }
}
const employee1 = new Employee("Tom", "Programmer", 155);
const developer1 = new Developer("Tom", "Developer", 155);
const developer2 = new Developer("George", "Developer", 250);
const leadDeveloper1 = new LeadDeveloper("Mike", "Lead", 222);

leadDeveloper1.addMember(developer1);
leadDeveloper1.addMember(developer2);

console.log(leadDeveloper1);
console.log(leadDeveloper1.viewTeam());
