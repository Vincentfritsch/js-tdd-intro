const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters')

//Assertions
// give the test suite a label using describe
describe('capitalizeFirstLetters', () => {
    // give the test a label using it
    it('is a function accepting one argument', () => {
        assert.strictEqual(typeof capitalizeFirstLetters, 'function');
        assert.strictEqual(capitalizeFirstLetters.length, 1);
    });
    it('transforms javaScript correctly', () => {
        assert.strictEqual(capitalizeFirstLetters('javaScript'), 'JavaScript');
    });
    it('works with 1-character string', () => {
        assert.strictEqual(capitalizeFirstLetters('i'), 'I')
        assert.strictEqual(capitalizeFirstLetters('I'), 'I')
    })
    it('works with an empty string', () => {
        assert.strictEqual(capitalizeFirstLetters(''), '')
    })
    it('works correctly', () => {
        assert.strictEqual(capitalizeFirstLetters('I am Groot'), 'I Am Groot')
    })
})



