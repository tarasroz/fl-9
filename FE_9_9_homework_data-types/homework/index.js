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

//console.log(map([2, 5, 8], function(el) { return el + 3 }));

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

//console.log(filter([2, 5, 8], function(el) { return el > 3 }));

// 5.
let data = [{
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        'age': 39,
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        'age': 38,
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        'age': 2,
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        'age': 17,
        'eyeColor': 'green',
        'name': 'Weiss',
        'favoriteFruit': 'banana'
    }
];

function getAdultAppleLovers(data) {

    return map(filter(data, function(el) {

        return el.age > 18 && el.favoriteFruit === 'apple';

    }), function(el) {

        return el.name;
    });
}

//console.log(getAdultAppleLovers(data));

// 6.
let obj = { keyOne: 1, keyTwo: 2, keyThree: 3 };

function keys(obj) {
    let basedArr = [];

    for (let key in obj) {

        if (key) {

            basedArr.push(key);
        }
    }

    return basedArr;
}

// console.log(keys(obj));

// 7.
function values(obj) {
    let basedArr = [];

    for (let prop in obj) {

        if (prop) {

            basedArr.push(obj[prop]);
        }
    }

    return basedArr;
}

// console.log(values(obj));

// 8.
function showFormattedDate(date) {

    const MONTH = [
        `Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`
    ];

    return `It is ${date.getDate()} of ${MONTH[date.getMonth()]}, ${date.getFullYear()}`;

}