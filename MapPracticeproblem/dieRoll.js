
let dieRolls = new Map();
let maxCount = 10;

while (true) {
    let roll = Math.floor(Math.random() * 6) + 1;
    dieRolls.set(roll, (dieRolls.get(roll) || 0) + 1);

    if (dieRolls.get(roll) === maxCount) break;
}

console.log("Die Roll Results:", dieRolls);

let maxValue = Math.max(...dieRolls.values());
let minValue = Math.min(...dieRolls.values());

let maxNumbers = [...dieRolls.entries()].filter(([key, val]) => val === maxValue).map(([key]) => key);
let minNumbers = [...dieRolls.entries()].filter(([key, val]) => val === minValue).map(([key]) => key);

console.log(`Number(s) that reached max times (${maxValue}):`, maxNumbers);
console.log(`Number(s) that appeared least times (${minValue}):`, minNumbers);