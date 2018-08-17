// Your code goes here
let katetA = +prompt('Input first triangle side: ', '10');
let katetB = +prompt('Input second triangle side: ', '20');
let angleBetween = +prompt('Input angle between sides, grad° :', '30');

if (katetA < 0) {
    console.log('`Invalid data`');
} else {
    let vanNetti = 180;
    let radianBetween = angleBetween * Math.PI / vanNetti;
    let katetC = Math.sqrt(Math.pow(katetA, 2) + Math.pow(katetB, 2) - 2 * katetA * katetB * Math.cos(radianBetween));
    let squareTriangle = katetA * katetB * Math.sin(radianBetween) / 2;
    let trianglePerimeter = katetA + katetB + katetC;

    console.log('c length: ' + katetC.toFixed(2) + '\n' +
        'Triangle square: ' + squareTriangle.toFixed() + '\n' +
        'Triangle perimeter: ' + Number(trianglePerimeter.toFixed(2)));
}