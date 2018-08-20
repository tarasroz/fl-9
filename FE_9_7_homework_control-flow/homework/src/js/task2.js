// Your code goes here

let start = confirm('Do you want to play a game?');

if (!start) {
    alert('You did not become a millionaire, but can.');
} else {
    let num_1 = 0;
    let num_2 = 5;
    let numHelp = 1;

    let min = Math.ceil(num_1);
    let max = Math.floor(num_2);

    //could use object !!
    let attemptI = 10;
    let attemptII = 5;
    let attemptIII = 2;

    let attempt = [attemptI, attemptII, attemptIII];

    let sumAttempt = 0;

    for (let i = 0; i < attempt.length; i++) {
        let randomNum = Math.floor(Math.random() * (max - min + numHelp)) + min;

        let gessNum = +prompt('Enter a number from 0 to 5');

        if (randomNum === gessNum) {

            sumAttempt += +attempt[i];
            // continue;
        }
    }
    alert(`Thank you for a game. Your prize is: ${sumAttempt}$`);

    let goOn = confirm('Do U want to play again?');

    if (goOn) {
        alert(`Congratulation!   Your prize is: ${sumAttempt}$ Do you want to continue?`);
    } else {
        alert(`Thank you for a game. Your prize is: ${sumAttempt}$`);
        goOn = confirm('Do U want to play again?');

        // if (goOn) {}
    }
}