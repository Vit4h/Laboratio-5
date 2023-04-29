function lecturaJason(){
  
  const lineReader = require('line-reader');
lineReader.eachLine('./input_challenge_lab_2.jsonl', function(line, last) {
    const jason = JSON.parse(line);
    console.log(jason);
    if(last) {
    console.log('Last line printed.');
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
  }
});
}
console.log(lecturaJason());

// Node.js program to demonstrate
// the fs.readFile() method

// Include fs module
/*var fs = require('fs');

// Use fs.readFile() method to read the file
fs.readFile('./input_challenge_lab_2.jsonl', 'utf8', function(err, data){
	const lectura = JSON.parse(data);
	// Display the file content
	console.log(lectura);
});*/


