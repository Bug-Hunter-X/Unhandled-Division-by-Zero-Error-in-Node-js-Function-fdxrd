```javascript
function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Handle the case where one of the inputs is 0
  }
  return a / b; // This will cause an error if b is 0
}

console.log(myFunction(10, 0)); // This will cause an error
```