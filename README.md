# Unhandled Division by Zero Error in Node.js

This repository demonstrates a common error in Node.js: unhandled division by zero. The `bug.js` file contains the erroneous code, while `bugSolution.js` provides a corrected version.

## Bug Description

The `myFunction` in `bug.js` attempts to divide two numbers. However, it lacks proper error handling for the case when the denominator is zero. This leads to an uncaught `RangeError: Division by zero`. 

## Solution

The `bugSolution.js` file corrects this by adding a check to explicitly handle the case where the denominator is zero, preventing the error.  The improved function now returns an appropriate value (NaN) or throws a more informative error instead of crashing the application.
