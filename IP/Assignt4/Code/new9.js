// Import the 'events' module
const EventEmitter = require('events');

// Create an instance of the EventEmitter class
const myEmitter = new EventEmitter();

// Register an event listener for the 'greet' event
myEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit the 'greet' event
myEmitter.emit('greet', 'Alice'); // This will trigger the event listener

// Register another event listener for the 'greet' event
myEmitter.on('greet', (name) => {
  console.log(`Hi, ${name}!`);
});

// Emit the 'greet' event again
myEmitter.emit('greet', 'Bob');

// Remove the first 'greet' event listener
myEmitter.removeListener('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit the 'greet' event one more time
myEmitter.emit('greet', 'Charlie'); // Only the second listener will be called

// Register an event listener that will execute only once for the 'message' event
myEmitter.once('message', (text) => {
  console.log(`Received a message: ${text}`);
});

// Emit the 'message' event
myEmitter.emit('message', 'This is a one-time message');
myEmitter.emit('message', 'This will not trigger the one-time listener');

// Note: When registering and removing event listeners, it's essential to pass the same function reference to removeListener or once.
