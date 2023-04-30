function lecturaJason(){
  
  const lineReader = require('line-reader');
lineReader.eachLine('./input_challenge_lab_2.jsonl', function(line, last) {
 HEAD
    const jason = JSON.parse(line);
  console.log(jason);
    if(last) {
    console.log('Last line printed.');
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
  }

    const data = [JSON.parse(line)];
    return data
  
 lab2
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
  listaRiesgo = listaDeRiesgos(riesgo);
  for (i in range(listaOcurrente) ){
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

function filtroDePrecio(listaOcurrente, presupuesto){
  let match = [];
  for (i in range(listaOcurrente)){
    if(listaOcurrente[i]["price"] <= presupuesto){
      match.append(listaOcurrente[i]);
    }
  }
  return match;
}

function salida(listaOcurrente){
  let output = [];
  for (i in range (listaOcurrente)){
    output.append(listaOcurrente[i]["id"])
  }
  return output;
}

function filtroMatch(input1, input2){
  
  const Construcciones = filtroDeTipoDeEdificio(input1, input2["typeBuilder"])
  switch(input2["typeBuilder"]){
    case "Houses":
      listadoFiltro2 = filtroZonaDeRiesgo(Construcciones,input2["minDanger"]);
      break;
    case "Apartments":
      listadoFiltro2 = filtroPetFriendly(Construcciones, input2["wannaPetFriendly"])
      break;
    case "Premises":
      listadoFiltro2 = filtroActividadDeComercio(Construcciones, input2["commercialActivity"])
    break;

    const filtroPrecio = filtroDePrecio(listadoFiltro2, input2["budget"])

    filtroDePrecio.sort( ["price"]);
    let output = salida(filtroPrecio);
    console.log(output);
  }
}

let dat = lecturaJason();
for (i in range(dat)){
  filtroMatch(data[i]["input1"], data[i]["input2"])
}





