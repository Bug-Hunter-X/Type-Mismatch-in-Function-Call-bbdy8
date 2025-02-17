function add(a: number, b: number): number {
  return a + b;
}

const num1 = 5;
const num2 = parseInt('10'); // Type casting to convert string to number
const result = add(num1, num2); // No type error now
console.log(result); // Output: 15