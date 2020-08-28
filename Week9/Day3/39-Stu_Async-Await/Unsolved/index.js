const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

async function combineAnimals() {
  try {
    //  read from each file
    const catData = await readFileAsync("./cat.json", "utf8");
    const dogData = await readFileAsync("./dog.json", "utf8");
    const goldfishData = await readFileAsync("./goldfish.json", "utf8");
    const hamsterData = await readFileAsync(",.hamster.json", "utf8");
    // combine to create a new set of data
    const allAnimals= [catData, dogData, goldfishData, hamsterData];
    // save file
    await writeFileAsync('./animals.json', JSON.stringify(allAnimals, null, 4));
    console.log('File all done');
  } catch(err) {
    console.log(error);
  }
}

combineAnimals();
