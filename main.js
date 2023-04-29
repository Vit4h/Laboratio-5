function lecturaJason(){
  let lectura = require('fs');
// este metodo denominado fs.readfile sirve para leer el archivo
lectura.readFile('./input_challenge_lab_2.jsonl', 'utf8', function(err, data){
		// Desplegando la lectura del archivo
	console.log(data);
});
//este despliegue solo es para decir el archivo leido
console.log('readFile called');

}
lecturaJason();
