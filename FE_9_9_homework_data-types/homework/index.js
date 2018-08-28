// 1. 
function findType(data) {

    return typeof data;
}

findType();

// 2. 
let forEach = function(el) {
    let execfun = '';

    for (let i = 0; i < el.length; i++) {

        execfun += ' ' + Number(el[i]);
    }

    el = execfun;
    // console.log(el);

    return el;
}

forEach([]);

// 3. 
let map = function(el) {
    let mapArr = 0,
        mapNum = 3;

    for (let i = 0; i < el.length; i++) {

        mapArr = +forEach([el[i] + mapNum]);

    }
    el = [mapArr];

    return el;
}

map([])