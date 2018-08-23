// Task #3
// Write a function - getMin
function getMin(arg) {

    let minArg = 0;
    // Tip: since arguments is like array, you can use simple iteration over it
    for (let i = 0; i < arg.length; i++) {
        // and use arguments[ i ] to get the argument of a given index
        if (minArg > arg[i]) {
            minArg = arg[i];
        }
    }
    //It should accept arbitrary number of integer arguments and returns the one with the smallest value.
    return parseInt(minArg);
}
// For example: getMin(3, 0, -3); // => -3
getMin([]);