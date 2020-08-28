function DigitalPal() {
  this.hungry = false;
  this.sleepy = false;
  this.bored = true;
  this.age = 0;
  this.outside = false;
  this.houseCondition = 100;
}

DigitalPal.prototype = {
  feed: function() {
    if(this.hungry) {
      console.log("That was yummy!");
      this.hungry = false;
      this.sleepy = true;
    } else {
      console.log("No thanks! I'm full.");
    }
  },
  sleep: function() {
    if(this.sleepy) {
      console.log('Zzzzzzzz');
      this.sleepy = false;
      this.bored = true;
      this.increaseAge();
    } else {
      console.log('No way! I\'m not tired.');
    }
  },
  play: function() {
    if(this.bored) {
      console.log("Yay! Let's play!");
      this.bored = false;
      this.hungry = true;
    } else {
      console.log("Not right now. Later?");
    }
  },
  increaseAge: function() {
    this.age ++;
    console.log(`Happy Birthday to me! I am ${this.age} days old!`);
  }
};

function DigitalCat() {
  DigitalPal.call(this);
}

DigitalCat.prototype = {
  ...DigitalPal.prototype,
  meow: function() {
    console.log("Meow! Meow!");
  },
  destroyFurniture: function() {
    console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
    this.houseCondition -= 10;
    this.bored = false;
    this.sleepy = true;
  },
  buyNewFurniture: function() {
    this.houseCondition +=50;
    console.log("Are you sure about that?");
  }
};

const cat = new DigitalCat();
