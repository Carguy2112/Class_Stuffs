// console.log("howdy")

// function aName(name){
//     let groot = `Hello ${name}`
//     console.log(groot)
//     }

// aName("George")

// let randomVariable;

// function checkIfHoisted(){
//   let randomVariable=10
//   console.log('inside ' + randomVariable)
// }
// checkIfHoisted()
// console.log('outside ' + randomVariable)

// function sayBalance(balance){
//   let initialBalance = balance;
//   return function fnGetBalance(){
//     return initialBalance;
//   }
// }

// const getBalance = sayBalance(300)
// console.log(getBalance());


function setupCounterFunction() {
  let tick = 0

  return function(){
    tick++
    if(tick > 10){
      tick=0;
    }
    console.log(tick)
  }
}
const counterTick = setupCounterFunction()
for (let index = 0; index < 30; index++) {
  counterTick()
}










