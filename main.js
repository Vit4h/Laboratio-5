const lineReader = require('line-reader');

lineReader.eachLine('./input_challenge_lab_2.jsonl', function(line, last) {
  
  let jasonObject = JSON.parse(line);
  //console.log(jasonObject);
  console.log(jasonObject.input1);
  
  
  if(last) {
    console.log('Last line printed.');
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
  }
});
