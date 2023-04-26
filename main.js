function lecturaJason(){
  var fs = require('fs');
// este metodo denominado fs.readfile sirve para leer el archivo
fs.readFile('./input_challenge_lab_2.jsonl', 'utf8', function(err, data){
		// Desplegando la lectura del archivo
	console.log(data);
});
console.log('readFile called');

}
lecturaJason();
