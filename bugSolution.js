```javascript
function myFunction(a, b) {
  if (b === 0) {
    return NaN; // Handle division by zero
  } else if (a === 0 || b === 0) {
    return 0; // Handle the case where one of the inputs is 0
  }
  return a / b;
}

console.log(myFunction(10, 0)); // Returns NaN
console.log(myFunction(10,2)); //Returns 5
console.log(myFunction(0,2)); //Returns 0
```