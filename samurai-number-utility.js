export class SamuraiNumberUtility {
    getRandomInteger(fromInclusive, toExclusive) {
        if (fromInclusive >= toExclusive) {
            throw new Error("Invalid range: fromInclusive must be less than toExclusive.");
        }
        return Math.floor(Math.random() * (toExclusive - fromInclusive)) + fromInclusive;
    }
}