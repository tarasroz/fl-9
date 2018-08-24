// Task #4
// Write a function - isPrime
function isPrime(primeNum) {

    let simple = true;

    for (let i = 2; i < primeNum; i++) {

        if (primeNum % i === 0) {

            simple = false;
        }

    }
    // It should accept one integer argument and returns true if it is prime number or false otherwise
    return simple;
}
// For example: isPrime(5); // => true
isPrime();