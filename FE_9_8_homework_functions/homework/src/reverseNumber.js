// Task #6

// Write a function - reverseNumber
function reverseNumber(reverseArr) {
    let reverseSum = '',
        reverseAbs = 0,
        reverseDec = 0;
    const Find_Decimal = 10,
        For_Big = 4;

    reverseAbs = Math.abs(reverseArr);

    for (let i = 0; i < reverseAbs * For_Big; i++) {

        reverseAbs = reverseAbs / Find_Decimal;
        reverseDec = Math.trunc((reverseAbs - Math.floor(reverseAbs)) * Find_Decimal);
        reverseSum += reverseDec;
    }
    //Numbers should preserve their sign: i.e. a negative number should still be negative when reversed.
    reverseArr < 0 ? reverseSum = -reverseSum : reverseSum;
    // It should accept an integer and return it`s reversed version.
    return parseInt(reverseSum);
}
// For example: 
// reverseNumber(123); // => 321
// reverseNumber(-456); // => -654
// reverseNumber(1000); // => 1
reverseNumber();