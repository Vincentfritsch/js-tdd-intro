const assert = require('assert');
// WRITE THE ACTUAL FUNCTION HERE
function capitalizeFirstLetters(str) {
    return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
        return $1.toUpperCase();
    });
}
//Assertions

assert.strictEqual(typeof capitalizeFirstLetters,'function')
assert.strictEqual(capitalizeFirstLetters.length, 1)
assert.strictEqual(capitalizeFirstLetters('I am Groot'), 'I Am Groot')
assert.strictEqual(capitalizeFirstLetters('i'), 'I')
assert.strictEqual(capitalizeFirstLetters('I'), 'I')
assert.strictEqual(capitalizeFirstLetters(''), '')