
let numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 900) + 100);
}

console.log("Generated Numbers:", numbers);

numbers.sort();

console.log("Sorted Numbers:", numbers);
console.log(`2nd Smallest: ${numbers[1]}, 2nd Largest: ${numbers[numbers.length - 2]}`);