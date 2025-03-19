const prompt = require("prompt-sync")();

function findPrimeFactors(n) {
    let factors = [];

    while (n % 2 === 0) {
        factors.push(2);
        n = n / 2;
    }

    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n = n / i;
        }
    }

    if (n > 2) {
        factors.push(n);
    }

    return factors;
}

// Taking user input
let num = parseInt(prompt("Enter a number: "), 10);

if (num > 1) {
    let primeFactors = findPrimeFactors(num);
    console.log(`Prime Factors of ${num}:`, primeFactors);
} else {
    console.log("Enter a number greater than 1.");
}