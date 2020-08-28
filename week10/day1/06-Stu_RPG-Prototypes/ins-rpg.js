function RPGCharacter({ // Object destructuring
  name,
  profession,
  age,
  strength,
  hitPoints
}) {
  // These are property definitions
  this.name = name;
  this.profession = profession;
  this.age = age;
  this.strength = strength;
  this.hitPoints = hitPoints;
}

RPGCharacter.prototype = {
  isAlive: function() {
    return this.hitPoints >0;
  },
  attack: function(character) {
    character.hitPoints -= this.strength;
  },
  levelUp: function() {
    this.age ++;
    this.strength += 5;
    this.hitPoints += 25;
  },
  // This is a method
  printStats: function() {
    // The string is a template literal
    const statsString = `
==== Character Stats ====
Name: ${this.name}
Profession: ${this.profession}
Age = ${this.age}
Strength = ${this.strength}
HitPoints = ${this.hitPoints}
    `;
    console.log(statsString);
  }
};

const hero = new RPGCharacter ({
  name: "Agnes",
  profession: "Bog Witch",
  age: 46,
  strength: 18,
  hitPoints: 34,
})

const villain = new RPGCharacter ({
  name: "Nancy",
  profession: "Evil Librarian",
  age: 27,
  strength: 25,
  hitPoints: 20,
})

hero.printStats();
villain.printStats();
