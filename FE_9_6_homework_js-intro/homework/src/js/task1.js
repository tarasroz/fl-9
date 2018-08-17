// Your code goes here
let priceUnDiscount = prompt('Input amount of money: ', '4950');
let discountNumber = prompt('Input discount, %: ', '30');

if (priceUnDiscount < 0) {
    console.log('’Invalid data’');
} else {

    let priceDiscount = priceUnDiscount - priceUnDiscount * discountNumber / 100;
    let saveNumber = priceUnDiscount - priceDiscount;

    console.log('Price without discount: ' + priceUnDiscount + '\n' +
        'Discount: ' + discountNumber + '%' + '\n' +
        'Price with discount: ' + priceDiscount + '\n' +
        'Saved: ' + saveNumber);
}