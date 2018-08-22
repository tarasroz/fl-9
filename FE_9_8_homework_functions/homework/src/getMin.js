// Task #3
// Write a function - getMin
// It should accept arbitrary number of integer arguments and returns the one with the smallest value.
// For example: getMin(3, 0, -3); // => -3
// Tip: since arguments is like array, you can use simple iteration over it
// and use arguments[ i ] to get the argument of a given index

// function isBigger(firstArg, secondArg) {

//     return firstArg > secondArg;
// }

// isBigger();

// let arguments = [3, 0, -3];

function getMin([arguments]) {
    arguments = [];
    let minArg = 0;
    for (let i = Infinity; i < arguments.lenght; i++) {
        if (arguments[0] < arguments[i]) {
            minArg = arguments[0];
        } else {
            minArg = arguments[i];
        }
    }
}

getMin([3, 0, -3]);