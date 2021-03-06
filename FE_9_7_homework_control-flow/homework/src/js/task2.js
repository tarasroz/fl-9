//Guessing game

//Step 1:

//Create a prompt window (use confirm()). Show the message inside the window ‘Do you want to play a game?’
let start = confirm('Do you want to play a game?');

//In case the user clicks the 'Cancel' button, 
if (!start) {

    //the message 'You did not become a millionaire, but can.' 
    alert('You did not become a millionaire, but can.');

    //Step 2:

    //If user clicked ‘Ok’ – start a game:
} else {

    //choose a number in range [0; 5], 
    let numOne = 0,
        numTwo = 5;

    const numHelp = 1;

    //on 1-st attempt prize is 10$ (maximum prize for current numbers range), 2-nd attempt – 5$, 3-rd attempt – 2$. 
    let attemptI = 10,
        attemptII = 5,
        attemptIII = 2;

    //could use object/array !!
    let attempt = [
        [attemptIII],
        [attemptII],
        [attemptI]
    ];

    let sumAttempt = 0;

    //User has 3 attempts to guess a number
    outer: for (let j = 0; j < Infinity; j++) {

        for (let i = attempt.length - numHelp; i >= 0; i--) {

            //randomly (use Math.random()) 
            let randomNum = Math.floor(Math.random() * (numTwo - numOne + numHelp)) + numOne;

            //ask user to enter a number. (use prompt())
            //Each time you ask user to enter a number you should show him a range of numbers, how much attempts he has left, his total prize and possible prize on current attempt.
            let gessNum = parseInt(prompt(`Enter a number from ${numOne} to ${numTwo}
Attempts left: ${i + numHelp}
Total prize: ${sumAttempt}$
Possible prize on current attempt: ${attempt[i]}$`, '0'));

            //If user guessed number 
            if (randomNum === gessNum) {

                sumAttempt += +attempt[i];
            }
        }
        //If user did not guess a number show the message ‘Thank you for a game. Your prize is: …’ (Use alert),
        alert(`Thank you for a game. Your prize is: ${sumAttempt}$`);

        //and ask if he wants to play again (use confirm). !!!!
        let goOn = confirm('Do U want to play again?');

        //Step 3:

        //If user did guess - Show the message ‘Congratulation!   Your prize is: … Do you want to continue?’
        if (goOn) {
            alert(`Congratulation!   Your prize is: ${sumAttempt}$ Do you want to continue?`);

            //If user does not want to continue – show the message ‘Thank you for a game. Your prize is: …’ (Use alert),
        } else {
            alert(`Thank you for a game. Your prize is: ${sumAttempt}$`);

            //and ask if he wants to play again (use confirm). !!!!!
            goOn = confirm('Do U want to play again?');
        }

        // If user does want to continue,  
        if (goOn) {

            //make number range twice as big as the previous one,
            numTwo *= 2;

            //and three times bigger maximum prize
            attemptI *= 3;
            attemptII = attemptI / 2;
            attemptIII = Math.floor(attemptI / 4);

            attempt = [
                [attemptIII],
                [attemptII],
                [attemptI]
            ];

            //All these stuffs should be repeated until user lose or decide to quit
        } else {
            break outer;
        }
    }
}