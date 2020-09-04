class Character {
  constructor(name, strength, hitPoints) {
    this.name = name;
    this.strength = strength;
    this.hitPoints;
  }
  // method which prints all of the stats for a character
  printStats() {
    console.log(`Stats for ${this.name} are as following:`);
    console.log(`Each attack will do ${this.strength} damage.`);
    console.log(`${this.name} has ${this.hitPoints} hit points remaining!`);
    console.log("------------");
  }
  // method which determines whether or not a character's "hitPoints" are less then zero
  // and returns true or false depending upon the outcome
  isAlive() {
    return this.hitPoints > 0;
  }
  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
    console.log(`${opponent.name} is being attacked for ${this.strength} points.`);
    // console.log which character was attacked and how much damage was dealt
    opponent.hipPoints -= this.strength;
    // Then, change the opponent's hitPoints to reflect this
  }
}

// Create two unique characters using the "character" class
const char1 = new Character('Agnes the Bog Witch', 18, 34);
const char2 = new Character('Nancy the Evil Librarian', 25, 20);
// Create an interval that alternates attacks every 2000 milliseconds
let currentAttacker = null
function setAttacker() {
  if(currentAttacker === char1) {
    currentAttacker = char2;
  } else {
    currentAttacker = char1;
  }
}
function getVictim() {
  if(currentAttacker === char1) {
    return char2;
  } else {
    return char1;
  }
}
const intervalId = setInterval (() => {
  char1.printStats();
  char2.printStats();
  setAttacker();
  const victim = getVictim();
  currentAttacker.attack(victim);
  if(!victim.isAlive()) {
    console.log(`${victim.name} has died.`);
    clearInterval(intervalId)
  }
}, 750);