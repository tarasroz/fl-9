// Task #2
function isBigger(firstArg, secondArg) {

    return firstArg > secondArg;
}


function isSmaller(firstArg, secondArg) {

    return !isBigger(firstArg, secondArg);
}

isSmaller();