let findType = data => {
    return typeof data
}

// console.log(findType('string'))
// console.log(findType(null))



let elArr = [ /*2, 5, 8*/ ];

let forEach = (elArr, elFun) => {
    for (let i = 0; i < elArr.length; i++) {
        elFun(elArr[i])
    }
}

// forEach(elArr, el => {
//     console.log(el)
// })



let map = (elArr, elFun, elStor) => {
    elStor = [];

    forEach(elArr, el => {
        elStor[elStor.length] = elFun(el)
    });

    return elStor
}

// console.log(map(elArr, el => {
//     return el + 3
// }))



let filter = (elArr, elFun, elStor = []) => {

    forEach(elArr, el => {

        if (elFun(el)) {

            elStor.push(el)
        }
    })

    return elStor
}

// console.log(filter(elArr, el => {
//     return el > 3
// }))



const data = [{
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
]


let getAdultAppleLovers = data => {

    let filterDat = filter(data, el => {

        return el.age > 18 && el.favoriteFruit === 'apple'

    })

    return map(filterDat, el => {

        return el.name
    })
}

// console.log(getAdultAppleLovers(data))



const elObj = {
    keyOne: 1,
    keyTwo: 2,
    keyThree: 3
};


const keys = (elObj, elStor = []) => {

    for (let key in elObj) {
        if (key) {
            elStor.push(key)
        }
    }
    return elStor
}

// console.log(keys(elObj))



const values = elObj => {
    let elStor = [];

    for (let value of Object.values(elObj)) {
        elStor.push(value)
    }

    return elStor
}

// console.log(values(elObj))



let showFormattedDate = (date = new Date( /*2018, 7, 27*/ )) => {

    return `It is ${date.getDate()} of ${date.toLocaleString('en-US', {month: 'short'})}, ${date.getFullYear()}`
}

// console.log(showFormattedDate())