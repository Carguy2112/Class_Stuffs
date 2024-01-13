/* 
    Exercise 3: Exploring the Event Loop
    Aim: Gain a deeper understanding of the Node.js Event Loop

    I.   In the given event loop example with setTimeout and readFile, add more asynchronous operations like setImmediate and process.nextTick.
    II.  Predict the order of execution before running the program.
    III. Run the program and compare the actual order of execution to your prediction.
    IV.  Document your findings in comments in the code, explaining why the order of execution is the way it is.
*/

// 
// console.log('Starting app');

// setImmediate(()=>{
//     console.log('before timeout')
// })

// setTimeout(() => {
// 	console.log('Inside of callback');
// }, 0);

// console.log('Finishing up');

// setImmediate runs at the beginning of the next itteration of the loop. I thought setTimeout also ran on the next itteration so I expected it to run last however, Timeout ran 3rd. I'm not sure why. 
// I think it has something to do with the 0 delay but have been unable to find documentation to confirm this.


// 
console.log('Starting app');

setImmediate(()=>{
    console.log('after timeout')
})

setTimeout(() => {
	console.log('Inside of callback');
}, 0);

process.nextTick(()=>{
    console.log('This should run third')
});

console.log('Finishing up');

// process.nextTick runs before the next itteration of the loop. In this example, it will run before setImmediate and setTimeout but after everything else.