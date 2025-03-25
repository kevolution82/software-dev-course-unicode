const readlineSync = require('readline-sync');

console.log("🌲 You wake up in a dark forest. 🌲");
console.log("You find a compass and a rusty sword beside you.");

let hasCompass = true;
let hasSword = true;

console.log("\nYou see two paths: one leads to the 🏔️ mountains, the other to a 🏡 village.");
let firstChoice = readlineSync.question("Where do you want to go? (mountains/village): ");

if (firstChoice === "mountains") {
  console.log("\nYou head toward the mountains... 🧗‍♂️");
  console.log("A wild bear blocks your path! 🐻");

  if (hasSword && readlineSync.keyInYN("Do you want to fight the bear? ")) {
    console.log("\n💥 You defeat the bear with your sword and continue your journey. You are victorious!");
  } else {
    console.log("\n😬 Without a sword or courage, the bear chases you away. You barely escape back to the forest.");
  }

} else if (firstChoice === "village") {
  console.log("\nYou walk into the village and meet a merchant.");
  console.log("He offers to trade a magic amulet for your compass.");

  let tradeCompass = readlineSync.keyInYN("Do you trade your compass for the amulet? ");

  if (tradeCompass) {
    hasCompass = false;
    let hasAmulet = true;
    console.log("\nYou now have a glowing amulet. 🌟");

    console.log("You continue walking and find a fork: a dark cave or a sunny meadow.");
    let secondChoice = readlineSync.question("Where do you go? (cave/meadow): ");

    if (secondChoice === "cave") {
      console.log("\n🕳️ The cave is pitch black.");

      if (hasAmulet) {
        console.log("✨ The amulet lights your way. You find treasure deep inside!");
      } else {
        console.log("😱 You trip in the dark and run out. That was scary!");
      }

    } else if (secondChoice === "meadow") {
      console.log("\n🌼 The meadow is peaceful. You rest and feel stronger.");
    }

  } else {
    console.log("\nYou keep your compass and head north.");
    if (hasCompass && !hasSword) {
      console.log("🧭 You navigate easily, but encounter trouble with no weapon.");
    } else if (hasCompass && hasSword) {
      console.log("🧭 With your compass and sword, you survive the journey and find a hidden temple!");
    }
  }

} else {
  console.log("\n🤷 You get lost wandering aimlessly and fall asleep under a tree. The end.");
}
