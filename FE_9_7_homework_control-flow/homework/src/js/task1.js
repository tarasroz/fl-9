// Your code goes here

//Ask user for a login
let login = prompt('Enter login:', 'User');

//If the input is an empty line or Esc – 
if (!login || null) {

    //show “Canceled.” 
    alert('Canseled');

    //If the input length less than 4 symbols - 
} else if (login.length < 4) {

    //show “......”. 
    alert('I don\'t know any users having name length less than 4 symbols');

    //If the visitor enters "User", 
} else if (login === 'User') {

    //then prompt for a password.
    let password = prompt('Your password:', 'SuperUser');

    //For an empty string or cancelled input, 
    if (!password || null) {

        //show “Canceled.”
        alert('Canseled');

        //If it equals “SuperUser”, then -
    } else if (password === 'SuperUser') {

        //ternary operator
        // if the current time in hours is less than 20 - show “Good day!”  Or if it’s not - show “Good evening!”
        new Date().getHours() < 20 ? alert('Good day!') : alert('Good evening!');

        //Another string, except “SuperUser” – 
    } else {

        //show “Wrong password”. 
        alert('Wrong password');
    }

    //If it’s another string –
} else {

    // then show “I don’t know you”.
    alert('I don’t know you');
}