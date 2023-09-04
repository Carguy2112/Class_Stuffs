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
let user = {
    name: 'Bill',
    age: 67,
    occupation: 'CEO'};

function logUser(person){
    console.log(`${person.name} is ${person.age} years old and the former ${person.occupation} of Microsoft.`)
};

//Exercise 12
function sortByKeys(input){
    let sortedArray = (Object.fromEntries(Object.entries(input).sort()));

    console.log(sortedArray);
    console.log(Object.keys(sortedArray), Object.values(sortedArray));
    }

let keysAndValues = { key3: true, key2: false, key1: undefined };    
sortByKeys(keysAndValues);

//Exercise 13
function Backwards(string){
    return string.split("").reverse().join("").split(" ").reverse().join(" ")
}

let sentence = 'Words in a sentence';
console.log(Backwards(sentence))

//Exercise 14
function balancedParentheses(string) {
    let parentheses = "[]{}()";
    let stack = [];
  
    for(i = 0; character = string[i]; i++) {
      bracePosition = parentheses.indexOf(character);
  
      if(bracePosition === -1) {
        continue;
      }
      if(bracePosition % 2 === 0) {
        stack.push(bracePosition + 1);
        } 
      else if(stack.pop() !== bracePosition) {
        return false;
        } 
    }
    return stack.length === 0;
  }
if (balancedParentheses("[()]{}{[()()]()}")){
    console.log('balanced')
    } else {console.log('not balanced')};

//Exercise 15
function anagramPairs(str1, str2){
    //Check length
    if(str1.length !== str2.length){return false};

    let s1 = str1.split("").sort().join("");
    let s2 = str2.split("").sort().join("");

    return (s1===s2);
    }
if (anagramPairs('fired','fried')){
        console.log('is anagram')
    } else {console.log('not anagram')}

//Exercise 16
for (i=1; i<101; i++){
    if(i%15 == 0) console.log("FizzBuzz");
    else if (i%3 == 0) console.log("Fizz");
    else if (i%5 == 0) console.log("Buzz");
    else console.log(i);
}

//Exercise 17
function palindrome(string){
    let str = string.replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/,"")
    let str2 = str.replace(/\s{1,}/g,"");
    let len = str2.length;
    for(i=0; i<len/2; i++){
        if(str2[i].toUpperCase() !== str2[len-1-i].toUpperCase()){
            return(str2.toLowerCase() + " is not a palindrome")
        } 
    }
    return(str2.toLowerCase() + " is a palindrome")
}
console.log(palindrome('r?a\d aR'))

//Exercise 18
let str = "the words in a sentence"
console.log(str.split(/\s/).reverse().join(" "));