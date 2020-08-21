const fs = require('fs');

const args = process.argv.slice(2);

fs.appendFile('commit.log', args[0] + '\n', function (error) {
  if(Boolean(error)) {
    console.log('Error: ' + error.message);
    return;
  }
  console.log('Log updated!');
});