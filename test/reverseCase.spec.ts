import { strictEqual, notStrictEqual } from "assert";
import reverseCase from '../src/reverseCase';
describe('reverse case swap', () => {
    describe('reverseCase', () => {
        it('should return valid output', () => {
            strictEqual(reverseCase('abCD12'), '21dcBA')
        })
        it('should return empty string', () => {
            strictEqual(reverseCase(''), '')
        })
        it('should not be equal', () => {
            notStrictEqual(reverseCase('123'), '21')
        })
        it('should return simple number string', () => {
            strictEqual(reverseCase('123'), '321')
        })
    })

}
)
