//Exercise 1
function greet(name){
    console.log('Hello ' + name);
};
greet('John')

//Exercise 2
function multiply(x,y){
    console.log(x*y);
};
multiply(2,3); multiply(3,3); multiply(3,4);

//Exercise 3
let person = {
    name: 'John',
    age: 25,
    gender: 'male',
};
console.log(`${person.name} is ${person.gender} and is ${person.age} years old.`)

//Exercise 4
let car = {
    make: 'Ford',
    model: 'Maverick',
    year: 1972,
};
console.log(`My first car was a ${car.year} ${car.make} ${car.model}.`);

//Exercise 5
function reverseString(str){
    return str.split('').reverse().join('');
};
console.log(reverseString("Backwards"))

//Exercise 6
function calculatedArea(radius){
    let area = Math.PI * (Math.pow(radius, 2));
    return area;
};
console.log(calculatedArea(3));

//Exercise 7
console.log(new Date);

//Exercise 8
console.log(Math.floor(Math.random()*10)+1)

//Exercise 9 seems to be missing

//Exercise 10 
function strInter(str){
    console.log(`I need to put ${str} somewhere in this string. Maybe I'll put it here >>> ${str} <<<`)
};
strInter('words');

//Exercise 11
