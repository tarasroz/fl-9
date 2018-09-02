// 1)

function userCard(key) {

    let balance = 100;
    let transactionLimit = 100;
    let historyLog = [];
    let taxPercent = 0.005;
    let event = new Date(Date.UTC( /* 2018, 06, 27, 3, 24, 53 */ ));


    function getCardOptions() {

        return {

            key,
            balance,
            transactionLimit,
            historyLog
        }
    }


    function putCredits(creditsPut) {

        balance += creditsPut;
        historyLog[historyLog.length] = {
            operationType: 'Received credits',
            credits: creditsPut,
            operationTime: event.toLocaleString('en-GB', { timeZone: 'UTC' })
        }
    }

    putCredits( /* 150 */ );


    function takeCredits(creditsTake) {

        if (transactionLimit >= creditsTake && balance >= creditsTake) {

            balance -= creditsTake;
            historyLog[historyLog.length] = {
                operationType: 'Withdrawal of credit',
                credits: creditsTake,
                operationTime: event.toLocaleString('en-GB', { timeZone: 'UTC' })
            }

        } else {
            console.log('You could not take credit greater than transaction limit and remaining balance!')
        }
    }

    takeCredits( /* 100 */ );


    function setTransactionLimit(creditsLimit) {

        transactionLimit = creditsLimit;
        historyLog[historyLog.length] = {
            operationType: 'Transaction limit change',
            credits: creditsLimit,
            operationTime: event.toLocaleString('en-GB', { timeZone: 'UTC' })
        }
    }

    setTransactionLimit( /* 5000 */ );


    function transferCredits(creditsTransfer /* = 50 */ , cardRecipient = card1) {

        if (transactionLimit >= creditsTransfer && balance >= creditsTransfer) {

            let sumTransfer = creditsTransfer + creditsTransfer * taxPercent;

            balance -= sumTransfer;
            cardRecipient.putCredits(creditsTransfer);

        } else {
            console.log('You could not take credit greater than transaction limit and remaining balance!')
        }
    }


    return {

        key,
        balance,
        transactionLimit,
        getCardOptions,
        putCredits,
        takeCredits,
        setTransactionLimit,
        transferCredits
    }
}



// 2)

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cardsArray = [];
        this.maxUserCard = 3
    }


    addCard() {
        this.cardsArray.length < this.maxUserCard ?
            this.cardsArray[this.cardsArray.length] = userCard(++this.cardsArray.length) :
            console.log('NOTE. User should have no more 3 cards!')
    }


    getCardByKey(key) {

        return this.cardsArray[--key]
    }
}



// CODE

let user = new UserAccount('Bob');
user.addCard()
user.addCard()
user.addCard()

console.log(user.cardsArray);

let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey( /* 2 */ );


card1.putCredits( /* 500 */ );
card1.setTransactionLimit( /* 800 */ );
card1.transferCredits( /* 300, */ card2);

card2.takeCredits( /* 50 */ );

console.log(card1.getCardOptions());
console.log(card2.getCardOptions());

// let user2 = new UserAccount('Marley');
// user2.addCard();
// user2.addCard();
// user2.addCard();
// user2.addCard();

// console.log(user2.cardsArray);