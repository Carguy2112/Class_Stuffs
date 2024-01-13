/*  Exercise 4: Working with Streams
    Aim: Learn to handle large files with streams

    I.   Create a large text file manually or programmatically, similar to the example given in the lesson.
    II.  Use the createReadStream method to read from the file.
    III. Set up event listeners to handle the 'data', 'error', and 'end' events.
    IV.  Log the data chunks to the console as they are read, and log a message when the stream ends.
    V.   Experiment with different highWaterMark values to see how it affects the size of the data chunks.
*/

const { createReadStream } = require('fs');

const stream = createReadStream('./content/big.txt', {
	highWaterMark: 90000,
	encoding: 'utf8',
});

stream.on('error', (error) => {
	console.log(error);
    return;
});

stream.on('data', (chunk) => {
	console.log(`received ${chunk.length} bytes of data.`);
});

stream.on('end', () => {
    console.log('There will be no more data.');
  });