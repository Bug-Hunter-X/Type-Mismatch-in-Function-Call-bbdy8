# Type Mismatch in TypeScript Function Call
This repository demonstrates a common type error in TypeScript: a type mismatch during a function call.  The function `add` expects two numbers as arguments, but the code calls it with a number and a string, leading to a type error.

## How to reproduce
1. Clone this repository.
2. Open `bug.ts`.
3. Try to compile the code using the TypeScript compiler (tsc).

## Solution
The solution demonstrates type checking and type casting to fix the type mismatch. Check out `bugSolution.ts` for the fix.
