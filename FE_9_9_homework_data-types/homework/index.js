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

forEach([], function(el) {
    console.log(el)
})

// 3. 
function map(elArr, funExec) {
    let basedArr = [];

    forEach(elArr, function(el) {

        basedArr.push(funExec(el));

    });

    return basedArr;
}

// map([2, 5, 8], function(el) { return el + 3 })

// 4.
function filter(elArr, funExec) {
    let basedArr = [];

    forEach(elArr, function(el) {
        if (funExec(el)) {
            basedArr.push(el);
        }
    });

    return basedArr;
}

//filter([2, 5, 8], function(el) { return el > 3 })

// 5.
function getAdultAppleLovers(data) {
    return map(filter(data, function(el) {
        return el.age > 18 && el.favoriteFruit === 'apple';
    }), function(el) {
        return el.name;
    });
}

// 6.