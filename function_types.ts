/**
 * This example demonstrates TypeScript function types, a core feature for writing safer and more maintainable code.
 */

// --- Basic Function Type Declaration ---

// Declaring a function type that accepts two numbers and returns a number.
type MathOperation = (a: number, b: number) => number;

// Implementing a function that matches the MathOperation type.
const add: MathOperation = (x, y) => {
  return x + y;
};

// Implementing another function that matches the MathOperation type.
const subtract: MathOperation = (x, y) => {
  return x - y;
};

console.log(`Addition: ${add(5, 3)}`); // Output: Addition: 8
console.log(`Subtraction: ${subtract(10, 4)}`); // Output: Subtraction: 6

// --- Function Types with Optional Parameters ---

// A function type that accepts a name (string) and an optional greeting (string).
type GreetFunction = (name: string, greeting?: string) => string;

const greet: GreetFunction = (name, greeting = 'Hello') => {
  return `${greeting}, ${name}!`;
};

console.log(greet('Alice')); // Output: Hello, Alice!
console.log(greet('Bob', 'Hi')); // Output: Hi, Bob!

// --- Function Types with Call Signatures (for objects that are functions) ---

// An interface defining an object that is callable and has properties.
interface Counter {
  (start: number): void;
  interval: number;
  reset(): void;
}

// Implementing the Counter interface.
let counter: Counter;

counter = function(start: number) {
  console.log(`Starting at ${start}`);
} as Counter; // Type assertion needed here for implementation

counter.interval = 123;
counter.reset = function() {
  console.log('Resetting counter');
};

counter(10);
counter.reset();
console.log(`Interval: ${counter.interval}`); // Output: Interval: 123

// --- Arrow Function Types ---

// An arrow function type for a function that takes no arguments and returns void.
type LogMessage = () => void;

const log: LogMessage = () => {
  console.log('Logging a message.');
};

log(); // Output: Logging a message.

// --- Type Inference for Function Types ---

// TypeScript can infer the type of a function if it's assigned to a variable with a type.
const multiply = (a: number, b: number): number => {
  return a * b;
};

// TypeScript infers that 'result' is a number.
const result = multiply(6, 7);
console.log(`Multiplication result: ${result}`); // Output: Multiplication result: 42

// --- Demonstrating Type Safety ---

// If we try to assign a function that doesn't match the type, TypeScript will error.
/*
const wrongAdd: MathOperation = (a, b) => {
  return (a + b).toString(); // Error: Type 'string' is not assignable to type 'number'.
};
*/

// Similarly, calling a function with incorrect argument types will also result in a compile-time error.
/*
console.log(add('hello', 5)); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
*/

console.log('\nTypeScript function types help catch errors at compile time, leading to more robust code.');
