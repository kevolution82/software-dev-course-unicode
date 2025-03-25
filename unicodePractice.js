// Task 1: Extract Code Points from Characters
let codeString = "Code";
let firstCodePoint = codeString.charCodeAt(0); // 'C'
let thirdCodePoint = codeString.charCodeAt(2); // 'd'

console.log("Task 1:");
console.log("First Code Point (C):", firstCodePoint);     // 67
console.log("Third Code Point (d):", thirdCodePoint);     // 100

// Task 2: Create a Word from Code Points
let wordFromCodePoints = String.fromCharCode(72, 101, 108, 108); // H, e, l, l
console.log("\nTask 2:");
console.log("Word from code points:", wordFromCodePoints);       // "Hell"

// Task 3: Swap First and Last Characters
let launchString = "Launch";
let firstCharCode = launchString.charCodeAt(0);  // 'L'
let lastCharCode = launchString.charCodeAt(launchString.length - 1); // 'h'
let swappedString = String.fromCharCode(lastCharCode) + 
                    launchString.slice(1, launchString.length - 1) + 
                    String.fromCharCode(firstCharCode);

console.log("\nTask 3:");
console.log("Swapped string:", swappedString);   // "hauncL"
