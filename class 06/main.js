// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log("Hello! I'm " + this.name);
//   }
// }

// let user1 = new User("Tom");
// console.log(user1);
// user1.speak();

// let user2 = new User("Joseph");
// user2.speak();

// class Rectangle {
//   constructor(width, height) {
//     this._height = height;
//     this._width = width;
//   }
//   get area() {
//     let area = this._height * this._width;
//     return area;
//   }
//   set dimensions(value) {
//     [this._height, this._width] = value;
//   }
// }

// let rec1 = new Rectangle(4, 5);

// rec1.dimensions = [2, 3];
// console.log(rec1.area);

// class Calc {
//   add(x, y) {
//     let sum = x + y;
//     return sum;
//   }
//   divide(x, y) {
//     let sum = x / y;
//     return sum;
//   }
//   multiply(x, y) {
//     let sum = x * y;
//     return sum;
//   }
// }
// let calc1 = new Calc();
// console.log(calc1.add(9, 4));
// console.log(calc1.multiply(9, 4));
// console.log(calc1.divide(9, 4));

// class Circle {
//   #radius;

//   constructor(diameter) {
//     this.#radius = diameter / 2;
//   }
// }

// let coolCircle = new Circle(10);
// console.log(coolCircle);

// class Dog {
//   constructor(owner) {
//     this.owner = owner;
//   }
//   set ownerName(name) {
//     this.owner = name;
//   }
// }

// let fido = new Dog("George");
// fido.ownerName = "Bob";
// console.log(fido)

// class Calculator{
//   static add(x,y){
//     let sum = x+y;
//     return sum
//   }
// }

// console.log(Calculator.add(3,4))

// class User {
//   constructor(name, email) {
//     this.name = name
//     this.email = email;
//   }

//   greeting() {
//    let stuffJoeWants = `Hello! I'm ${this.name} and my email is ${this.email}`;
//    return stuffJoeWants;
//   }
// }

// let user1 = new User('Tom', 'no@email.com')
// console.log(user1.greeting())

class English {
  static verb(action) {
    let _action = action;
    return action;
  }
  static noun(thing) {
    let _thing = thing;
    return _thing;
  }
  static adjective(color) {
    let _color = color;
    return _color;
  }
}

console.log(
  `${English.adjective("Blue")} ${English.noun("flowers")} ${English.verb(
    "burn"
  )} well!`
);
