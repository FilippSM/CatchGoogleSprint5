import { SamuraiNumberUtility } from './samurai-number-utility.js';

describe('SamuraiNumberUtility', () => {
    let utility;

    beforeEach(() => {
        utility = new SamuraiNumberUtility();
    });

    test('should return a number within the specified range', () => {
        const from = 1;
        const to = 10;
        const randomNumber = utility.getRandomInteger(from, to);
        expect(randomNumber).toBeGreaterThanOrEqual(from);
        expect(randomNumber).toBeLessThan(to);
    });

    test('should throw an error if fromInclusive is greater than or equal to toExclusive', () => {
        expect(() => {
            utility.getRandomInteger(10, 10);
        }).toThrow("Invalid range: fromInclusive must be less than toExclusive.");

        expect(() => {
            utility.getRandomInteger(10, 5);
        }).toThrow("Invalid range: fromInclusive must be less than toExclusive.");
    });

    test('should return a number when range is small', () => {
        const from = 0;
        const to = 1;
        const randomNumber = utility.getRandomInteger(from, to);
        expect(randomNumber).toBe(0); // In this case, it will always return 0
    });
});