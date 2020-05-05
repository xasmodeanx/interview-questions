// Write a function that takes a number as input and determines if the number is prime or not


function isPrime(num) {
    let factor = 2;

    if (num !== 2 && num % 2 == 0) {
        return false;
    }

    while (factor < num) {

        if (num % factor === 0) {
            return false;
        }

        factor++;
    }

    return true;
}

console.log(isPrime(18));
