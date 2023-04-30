function lecturaJason(){
  
  const lineReader = require('line-reader');
lineReader.eachLine('./input_challenge_lab_2.jsonl', function(line, last) {
    const data = [JSON.stringify(line)];
    return data
  
});
}
class Nodo {
  constructor(valor, data) {
    this.valor = valor,data;
    this.izquierda = null;
    this.derecha = null;
  }
}

class ArbolBinario {
  constructor() {
    this.raiz = null;
  }

  agregarNodo(valor, data) {
    const nodo = new Nodo(valor);

    if (this.raiz === null) {
      this.raiz = nodo.data.dpi;
      return;
    }

    let nodoActual = this.raiz;

    while (nodoActual !== null) {
      if (valor < nodoActual.valor) {
        if (nodoActual.izquierda === null) {
          nodoActual.izquierda = nodo.data.dpi;
          return;
        }
        nodoActual = nodoActual.izquierda;
      } else {
        if (nodoActual.derecha === null) {
          nodoActual.derecha = nodo.data.dpi;
          return;
        }
        nodoActual = nodoActual.derecha;
      }
    }
  }

  recorridoEnOrden(nodo = this.raiz) {
    if (nodo !== null) {
      this.recorridoEnOrden(nodo.data.dpi.izquierda);
      console.log(nodo.data.dpi.valor);
      this.recorridoEnOrden(nodo.data.dpi.derecha);
    } 
  }

  recorridoPreOrden(nodo = this.raiz, data) {
    if (nodo !== null) {
      console.log(nodo.valor);
      this.recorridoPreOrden(nodo.izquierda);
      this.recorridoPreOrden(nodo.derecha);
    }
  }

  recorridoPostOrden(nodo = this.raiz) {
    if (nodo !== null) {
      this.recorridoPostOrden(nodo.izquierda);
      this.recorridoPostOrden(nodo.derecha);
      console.log(nodo.valor);
    }
  }
  
}

const arbol = new ArbolBinario();

function heapSort(arr, data) {
  // Construir el heap máximo
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapify(arr, i, arr.length);
  }

  // Extraer elementos uno por uno del heap
  for (let i = arr.length - 1; i > 0; i--) {
    // Mover la raíz al final del arreglo
    [arr[0], arr[i]] = [arr[i], arr[0]];
    // Reducir el tamaño del heap para ignorar el último elemento
    heapify(arr, 0, i);
  }
  return arr;
}

function heapify(arr, index, heapSize) {
  let largest = index;
  let leftIndex = 2 * index + 1;
  let rightIndex = 2 * index + 2;

  if (leftIndex < heapSize && arr[leftIndex].budget > arr[largest].budget) {
    largest = leftIndex;
  }

  if (rightIndex < heapSize && arr[rightIndex].budget > arr[largest].budget) {
    largest = rightIndex;
  }

  if (largest !== index) {
    [arr[index], arr[largest]] = [arr[largest], arr[index]];
    heapify(arr, largest, heapSize);
  }
}

function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; 
  }
  return hash;
}
for (let i = 0 ; i < lecturaJason(); i++){
  if(i === 0){
    let arbol = Nodo(lecturaJason(i));
  }
  ArbolBinario(lecturaJason(i));
}
function prioridadClientes(lista){
  heapSort(lista);
  return lista;
}

function ObtenerCliente(listaPrioridad, rejections){
  return listaPrioridad.rejections

}

/*for (let i = 0 ; i < lecturaJason(); i++){
  const listaOrdenada = prioridadClientes(lecturaJason[i].customers);
  const sorteoGanador = ObtenerCliente(listaOrdenada, lecturaJason[i].rejections);
  const elegido = ArbolBinario(arbol, sorteoGanador.dpi)
  const hash = hashCode(elegido);
  let output = [];
  output.dpi = elegido.dpi;
  output.budget = sorteoGanador.budget;
  output.date = datetime();
  output.firstName = elegido.firstName;
  output.lastName = elegido.lastName;
  output.birthDate = elegido.birthDate;
  output.job = elegido.job;
  output.placeJob = elegido.placeJob;
  output.salary = elegido.salary;
  output.property = lecturaJason[i];
  output.signature = hash;
  
  console.log(output);
}*/







