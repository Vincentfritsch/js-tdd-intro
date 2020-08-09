const assert = require('assert');
// WRITE THE ACTUAL FUNCTION HERE
function capitalizeFirstLetters(str) {

}
//Assertions

assert.strictEqual(typeof capitalizeFirstLetters,'function')
assert.strictEqual(capitalizeFirstLetters.length, 1)
assert.strictEqual(capitalizeFirstLetters('I am Grrot'), 'I Am Groot')
assert.strictEqual(capitalizeFirstLetters('i'), 'I')
assert.strictEqual(capitalizeFirstLetters('I'), 'I')
assert.strictEqual(capitalizeFirstLetters(''), '')