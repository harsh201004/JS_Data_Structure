function findRepeatedDigitNumbers() {
    let result = [];

    for (let i = 10; i <= 100; i++) {
        let tens = Math.floor(i / 10); 
        let ones = i % 10;             
        if (tens === ones) {
            result.push(i);
        }
    }

    return result;
}

// Find and store repeated digit numbers
let repeatedNumbers = findRepeatedDigitNumbers();
console.log("Numbers with repeated digits (like 11, 22, 33, ...):", repeatedNumbers);