 function lecturaJason(){
    const lineReader = require('line-reader');
  lineReader.eachLine('./input_challenge_lab_2.jsonl', function(line, last) {
      const jason = JSON.parse(line);
    return jason.input1;
      if(last) {
      console.log('Last line printed.');
      const used = process.memoryUsage().heapUsed / 1024 / 1024;
      console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
    }
  });
  }
  module.exports = lecturaJason();
  

