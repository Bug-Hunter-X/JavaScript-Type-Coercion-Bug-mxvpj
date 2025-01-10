function myFunction(a, b) {
  return a + b;
}

console.log(myFunction(5, '5')); //Output: 55

function myFunction(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

console.log(myFunction(5, '5')); // throws an error