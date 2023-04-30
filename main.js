function lecturaJason(){
  
  const lineReader = require('line-reader');
lineReader.eachLine('./input_challenge_lab_2.jsonl', function(line, last) {
    const data = [JSON.parse(line)];
    return data
  
});
}
 function listaDeRiesgos(riesgo) {
  let salida = [];
  switch(riesgo){
    case "Red":
    salida = ["Red"];
    break;
    case "Orange":
    salida = ["Red", "Orange"];
    break;
  }
 }




