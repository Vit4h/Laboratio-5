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
    case "Yellow":
    salida = ["Red", "Orange", "Yellow"];
    break;
    case "Green":
    salida = ["Red", "Orange", "Yellow", "Green"]
    break;
  }
  return salida;
 }

 function filtroDeTipoDeEdificio(input1, construccion){
  let Match = [];
  let finalMatch = [];
  for(let i = 0; i < input1.lenght; i++)
  {
    for(let j = 0; j < input1[i]["Builds"].keys(); j++){
      if(j == construccion){
        Match.append(input1[i]["Builds"][j]);
      }

    }
  }
  for (let i = 0;i < finalMatch ; i++){
    for (i in j ){
      finalMatch.append(j);
    }
  }
  return filtroDeTipoDeEdificio;
 }
function filtroZonaDeRiesgo (listaOcurrente, riesgo){
  let match = [];
  listaRiesgo =[];
  listaRiesgo = filtroZonaDeRiesgo(riesgo);
  for (i in Range(listaOcurrente) ){
    if (part === listaOcurrente[i]["zoneDanguerous"]){
      match.append(listaOcurrente[i]);

    }
  }
  return match;
}

function filtroPetFriendly(listaOcurrente, decision){
  let match = [];
  for (i in range (listaOcurrente)){
    if (listaOcurrente[i]["isPetFriendly"] === decision){
      match.append(listaOcurrente[i]);
    }
  }
  return match;
}

function filtroActividadDeComercio(listaOcurrente, comercios){
  let match = [];
  for (i in range(listaOcurrente[i])){
    if (comercios === listaOcurrente[i]["commercialActivies"]){
      match.append(listaOcurrente[i]);
    }
  }
  return match;
}




