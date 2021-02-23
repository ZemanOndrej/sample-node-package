import assert from "assert";
import reverseCase from '../src/reverseCase';
describe('reverse case swap', () => {
    describe('reverseCase', () => {
        it('should return valid output', () => {
            assert.strictEqual(reverseCase('abCD12'), '21dcBA')
        })
        it('should return empty string', () => {
            assert.strictEqual(reverseCase(''), '')
        })
        it('should not be equal', () => {
            assert.notStrictEqual(reverseCase('123'), '21')
        })
        it('should return simple number string', () => {
            assert.strictEqual(reverseCase('123'), '321')
        })
    })

}
)
