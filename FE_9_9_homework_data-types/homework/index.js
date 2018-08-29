let findType = data => {
    return typeof data
}



let elArr = [];

let forEach = (elArr, elFun) => {
    for (let i = 0; i < elArr.length; i++) {
        elFun(elArr[i])
    }
}



let map = (elArr, elFun, elStor) => {
    elStor = [];

    forEach(elArr, el => {
        elStor[elStor.length] = elFun(el)
    });

    return elStor
}



let filter = (elArr, elFun, elStor = []) => {

    forEach(elArr, el => {

        if (elFun(el)) {

            elStor.push(el)
        }
    })

    return elStor
}



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



const values = elObj => {
    let elStor = [];

    for (let value of Object.values(elObj)) {
        elStor.push(value)
    }

    return elStor
}



let showFormattedDate = (date = new Date()) => {

    return `It is ${date.getDate()} of ${date.toLocaleString('en-US', {month: 'short'})}, ${date.getFullYear()}`
}