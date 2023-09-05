//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."


const $definirLargo = document.querySelector('#definir-largo');

$definirLargo.onclick = function () {
    const $largoLista = document.querySelector('#largo-lista').value;
    const $lista = document.querySelector('ol');
    for(let i = 0; i < $largoLista; i++ ){
        const nuevoLi = document.createElement('li');
        const nuevoInput = document.createElement('input');
        nuevoInput.type = 'number';
        nuevoInput.className = 'numeros-i';
        nuevoLi.appendChild(nuevoInput);
        $lista.appendChild(nuevoLi);
    }
    return false;
}

const $calcular = document.querySelector('#calcular-boton');

$calcular.onclick = function() {
    let arrayNumeros = [];
    const numerosLista = document.getElementsByClassName('numeros-i');
    for(let i = 0; i < numerosLista.length; i ++){
        arrayNumeros.push(Number(numerosLista[i].value));
    }

    let sumaNumeros = 0;
    for(let i = 0; i < arrayNumeros.length; i++){
        sumaNumeros += arrayNumeros[i];
    }
    
    function numeroMasRepetido(arrayNumeros) {

        let contador = {};
        let numeroMasRepetido = arrayNumeros[0];
        let maxRepeticiones = 1;
      
        for (let i = 0; i < arrayNumeros.length; i++) {
          const numero = arrayNumeros[i];

          if (contador[numero] === undefined) {
            contador[numero] = 1;
          } else {
            contador[numero]++;
          }
          if (contador[numero] > maxRepeticiones) {
            maxRepeticiones = contador[numero];
            numeroMasRepetido = numero;
          }
        }
        return numeroMasRepetido;
      }

    let maximoNumero = Math.max(...arrayNumeros);
    let minimoNumero = Math.min(...arrayNumeros);
    let promedioNumeros = Number(sumaNumeros / arrayNumeros.length);
    let numeroRepetido = numeroMasRepetido(arrayNumeros);

    document.querySelector('#maximo').value = "El maximo es: " + maximoNumero;
    document.querySelector('#minimo').value = "El minimo es: " + minimoNumero;
    document.querySelector('#media').value = "El promedio es: " + promedioNumeros;
    document.querySelector('#moda').value = "El mas repetido es: " + numeroRepetido;

    return false;
}