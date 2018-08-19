// Your code goes here

//input our data use prompt function
let priceUnDiscount = +prompt('Input amount of money: ', '4950');
let discountNumber = +prompt('Input discount, %: ', '30');

//if we input negative data use console
if (priceUnDiscount < 0) {
    console.log('’Invalid data’');
} else {

    //main doing
    let priceDiscount = priceUnDiscount - priceUnDiscount * discountNumber / 100;
    let saveNumber = priceUnDiscount - priceDiscount;

    //here we find the decimal part
    let getDecimal = priceDiscount - Math.floor(priceDiscount);
    //...i decided use min big value - 0.009 
    let expoNumber = 9e-3;

    //here we could use parseInt() function instead of getDemical 
    if (getDecimal === 0) {
        //...to show for example: 5 => 5
        priceDiscount = priceDiscount.toFixed();
        //in THIS case the same Method
        saveNumber = Math.round(saveNumber);

        //the same decimal part - remainder divided by 1
    } else if (priceDiscount % 1 <= expoNumber) {
        // if we input and we must have: 0.00123 => 0 
        priceDiscount = ~~priceDiscount;
        // bit operators: NOT and XOR
        saveNumber = saveNumber ^ 0;

        // the same decimal part
    } else if (parseFloat(priceDiscount)) {
        //to have it's exmpl - 2.1578746 => 2.15
        priceDiscount = Math.floor(priceDiscount * 100) / 100;
        //use equation - (n * 100) / 100 )
        saveNumber = Math.floor(saveNumber * 100) / 100;
    }

    console.log('Price without discount: ' + priceUnDiscount + '\n' +
        'Discount: ' + discountNumber + '%' + '\n' +
        'Price with discount: ' + priceDiscount + '\n' +
        'Saved: ' + saveNumber);
}