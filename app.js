//variable de la Funcion de generar número secreto:
let numeroSecreto = 0;

let intentos = 0;

let listaNumerosSorteados = [];
let numeroMaximo = 10;
// con document accedes a la información del html, despues con queryselector seleccionas lo que desees modificar o agregar en html
// despues al ser declarado la variable como titulo, si pones un innerHTML, se puede agregar un texto al html y se verá reflejado en la web
//BASICAMENTE, DOCUMENT.QUERYSELECTOR: SELECCIONA 
//SE LLAMA A LA VARIABLE Y EL INNERHTML, DEFINE EL MENSAJE EN ESTE CASO, JUEGO DEL NUMERO SECRETO
let titulo = document.querySelector('h1');
titulo.innerHTML = 'juego del número secreto';

//Se puede elegir la clase
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';



//Forma de resumir todo el proceso de let titulo, document, queryselector, etc a traves de una función y automatizarlo
//HACER FUNCIÓN GENERICA CON EL CONCEPTO DE PARÁMETROS, OSEA DENTRO DEL PARENTESIS, AHÍ VAMOS DEFINIENDO LO QUE SE VA A CAMBIAR
function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; //ESTA FUNCIÓN ES GENÉRICA, EN SUS PARÁMETROS RECIBE UN ELEMENTO Y UN TEXTO.
    return;

}



function verificarIntento(){
    //Función para buscar el identificador en html, el id. 
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto)

    console.log(numeroDeUsuario);

    console.log('Usuario lleva: '+ intentos)

    if ( numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', 'Acertaste el número secreto en '+ intentos +(intentos == 1 ? ' intento' : ' intentos'));
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        //El usuario no acertó
         if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento ('p','El número secreto es menor');
         }else{
            asignarTextoElemento ('p', 'El número secreto es mayor');
         }
         intentos +=1;
         limpiarCaja();
    }

    return;
}

function limpiarCaja (){
   document.querySelector('#valorUsuario').value='';
}



function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;; //Nos retorna el valor de numero secreto
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //En esta cpndicion es para arreglar el error de que cuando se llega al número máximo de numeros dentro del arreglo, este javascript comienzza a buscar mas opciones y al no encontrarlas se bloquea
// Con el punto length estamos diciendo que si el numero de elementos del arreglo es igual al numeero máximo que es 10 
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todo los números posibles');
    }else{

   
    
    //Si el numero generado está incluido en la lista
    //Para saber si está incluido o no se puede utilizar un método llamado includes( El include recorre y verifica si el valor ya existe)
    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();

    }else{
        listaNumerosSorteados.push(numeroGenerado);

        return numeroGenerado;
    }
    
}
}
function condicionesIniciales (){
    asignarTextoElemento('h1', 'Juego del número secreto' );
    asignarTextoElemento('p', 'Indica el número del 1 al '+numeroMaximo );
    numeroSecreto = generarNumeroSecreto();
    intentos =1 ;


}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
        //Inicializar el número de intentos
        condicionesIniciales();
    //Deshabilitar el bóton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();


                    //LA FUNCION RECIBE EL ELEMENTO, QUE ES H1, Y EL TEXTO QUE QUIERES QUE TENGA, SIENDO JUEGO DEL NÚMERO, ETC
                    //CON ESTO LA FUNCIÓN QUEDA GENÉRICA Y SE PUEDE OCUPAR LAS VECES QUE SEAN NECESARIAS.









/*
EJERCICIOS
saludo ("Hi");
function saludo (nombre){
    console.log("Hola" + nombre);
}

   numero ('10');
function numero (x){
    let doble = parseInt(x);
    doble = x * 2;
    console.log(doble);
    return;
}

promedio ('10', '10', '10');

function promedio(a, b,c){
    let enteroA = parseInt(a);
    let enteroB = parseInt(b);
    let enteroC = parseInt(c);

    let suma = (enteroA + enteroB + enteroC);
    let promedio = suma / 3;
    console.log(promedio);
    return;
}



numeroMayor();
function numeroMayor(){
    let num1 = parseInt(prompt ("1"));
    let num2 = parseInt(prompt("2"));

    if (num1> num2){
        console.log("El número es mayor")
    }
    else if (num1 < num2){
        console.log ("El numero "+ num2+ " es mayor a "+ num1);
    }
}



numeroMayorRegreso ('4', '20');
function numeroMayorRegreso (menor, mayor){
    let numero1 = parseInt(menor);
    let numero2 = parseInt(mayor);

    if(numero1 < numero2){
        console.log ("El numero 5 es mayor");
    }
    else {
        alert("Es menor bro");
    }


}



multplicaMismo ('2');

//Funcion para automatizar el entero
function numeroEntero(j){
    let numero = parseInt(j);
    console.log(j);
    return numero;
}



function multplicaMismo (j){
    numeroEntero(j * 2);
    return;
}




/*Ejercicios de Práctica
let listaGenerica = [];
let lenguajesDeProgramacion = [ 'JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];

lenguajesDeProgramacion.push('Java', 'Ruby' , 'GoLang')

function elementosLista (){
    for (let i = lenguajesDeProgramacion.length -1; i >= 0; i-- ){
        console.log(lenguajesDeProgramacion[i]);
    }

}

elementosLista();


function calcularPromedio(lista) {
    if (lista.length === 0) {
      return 0; // Manejar caso de lista vacía
    }
  
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
  
    let promedio = suma / lista.length;
    return promedio;
  }
  
  let numeros = [10, 20, 30, 40, 50];
  let promedio = calcularPromedio(numeros);
  console.log("El promedio es: " + promedio);





function operacionSuma (elementos){
    if ( elementos.length === 0){
        return 0;
    }
    let suma = 0;
    for (let i = 0; i < elementos.length; i++){
        suma +=elementos[i];
    }
    return suma;
}
let sumaElementos = [2, 2, 2];
let result = operacionSuma (sumaElementos);
console.log("La suma es "+ result);




function listasSumas (elemento1, elemento2){
    if(elemento1.length ===0 || elemento2 === 0){
        return 0;
    }
    let suma = 0;

    for (let i = 0; i < elemento1.length; i++){
        for(let j = 0; j < elemento2.length; j++){
            suma += elemento1[i] + elemento2[j];
        }
    }
    return suma;

}

let primerLista = [2];
let segundaLista =[3];
let mandarLista = listasSumas (primerLista, segundaLista);
console.log("Resultado de la suma de los dos arreglos: "+ mandarLista);


function cuadradoNumero (x){
    if(x.length == 0){
        return 0;
    }
    let cuadrado = 0;
    for ( let i = 0; i <x.length; i++){
        cuadrado = x[i] * x[i];
    }
    return cuadrado;
}

let numeroNormal = [5];
let NumeroAlCuadrado = cuadradoNumero (numeroNormal);
console.log("El cuadrado del numero es: "+ NumeroAlCuadrado);






  function grandeMenor(element) {
    let numeroMayor = element[0];
    let numeroMenor = element[0];
  
    for (let i = 1; i < element.length; i++) {
      if (element[i] > numeroMayor) {
        numeroMayor = element[i];
      }
      if (element[i] < numeroMenor) {
        numeroMenor = element[i];
      }
    }
  
    console.log('Número mayor: ' + numeroMayor);
    console.log('Número menor: ' + numeroMenor);
  }
  
  let numeroGm = [1, 2];
  grandeMenor(numeroGm);*/
  
