// Your code goes here
let priceUnDiscount = +prompt('Input amount of money: ', '4950');
let discountNumber = +prompt('Input discount, %: ', '30');

if (priceUnDiscount < 0) {
    console.log('’Invalid data’');
} else {

    let priceDiscount = priceUnDiscount - priceUnDiscount * discountNumber / 100;
    let saveNumber = priceUnDiscount - priceDiscount;

    let getDecimal = priceDiscount - Math.floor(priceDiscount);
    let expoNumber = 9e-3;

    if (getDecimal === 0) {
        priceDiscount = priceDiscount.toFixed();
        saveNumber = Math.round(saveNumber);

    } else if (priceDiscount % 1 <= expoNumber) {
        priceDiscount = ~~priceDiscount;
        saveNumber = saveNumber ^ 0;

    } else {
        priceDiscount = Math.floor(priceDiscount * 100) / 100;
        saveNumber = Math.floor(saveNumber * 100) / 100;
    }

    console.log('Price without discount: ' + priceUnDiscount + '\n' +
        'Discount: ' + discountNumber + '%' + '\n' +
        'Price with discount: ' + priceDiscount + '\n' +
        'Saved: ' + saveNumber);
}