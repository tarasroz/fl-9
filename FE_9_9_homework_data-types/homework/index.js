// 1. 
function findType(data) {

    return typeof data;
}

findType();

// 2. 
function forEach(elArr, funExec) {

    for (let i = 0; i < elArr.length; i++) {

        funExec(elArr[i]);

    }
}

// 3. 
function map(elArr, funExec) {
    let basedArr = [];

    forEach(elArr, function(el) {

        basedArr.push(funExec(el));

    });

    return basedArr;
}