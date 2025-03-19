
let arr = [-3, 1, 2, -1, 5, -4, 0];

console.log("Array:", arr);

let found = false;
for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
        for (let k = j + 1; k < arr.length; k++) {
            if (arr[i] + arr[j] + arr[k] === 0) {
                console.log(`Triplet: (${arr[i]}, ${arr[j]}, ${arr[k]})`);
                found = true;
            }
        }
    }
}

if (!found) console.log("No triplet found.");