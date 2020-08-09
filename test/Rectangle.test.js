const assert = require('assert')
let Rectangle = require('../Rectangle')

describe('Rectangle', () => {

    it('isSquare render true when it\'s a square', () => {
        const square = new Rectangle(2, 2)
        assert.strictEqual( square.isSquare(), true)
    })
    it('isSquare render false when it\'s not a square', () => {
        const rectangle = new Rectangle(2, 3)
        assert.strictEqual(rectangle.isSquare(), false)
    })
    it('getArea is ok', () => {
        const rectangle = new Rectangle(13,7)
        assert.strictEqual(rectangle.getArea(), 91)
    })
    it('getPerimeter is ok', () => {
        const rectangle = new Rectangle(13,7)
        assert.strictEqual(rectangle.getPerimeter(), 40)
    })

})