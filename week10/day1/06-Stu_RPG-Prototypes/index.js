// Constructor function
function Character(name, job, age, strength, hp) {
  this.name = 'Name';
  this.job = 'Profession';
  this.age = 20;
  this.strength = 5;
  this.hp = 25;
  this.printStats = () => {
    console.log(`Name: ${this.name}`);
    console.log(`Profession: ${this.job}`);
    console.log(`Age: ${this.age}`);
    console.log(`Strength = ${this.strength}`);
    console.log(`HitPoints = ${this.hp}`);
  };
};

const Char1 = new Character('Agnes', 'Bog Witch', 46, 18, 34);
const Char2 = new Character('Nancy', 'Evil Librarian', 27, 25, 20);

Char1.printStats();
Char2.printStats();

