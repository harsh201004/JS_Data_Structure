
let birthMonths = new Map();

for (let i = 0; i < 50; i++) {
    let month = Math.floor(Math.random() * 12) + 1;
    if (!birthMonths.has(month)) {
        birthMonths.set(month, []);
    }
    birthMonths.get(month).push(i + 1); 
}

console.log("Birth Month Distribution:");
for (let [month, people] of birthMonths) {
    console.log(`Month ${month}: ${people.length} individuals →`, people);
}