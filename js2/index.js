'use strict';

/*
  Crear un bucle for que imprima los mensajes:
  Valor de i: 0
  Valor de i: 1
  ... hasta ...
  Valor de i: 9
*/
var i = 0;
for(i; i <= 9; i++){
  console.log("Valor de i: " + i);
}


/*
  Crear un bucle for que imprima los mensajes: con números pares
  Valor de i: 0
  Valor de i: 2
  Valor de i: 4
  ... hasta ...
  Valor de i: 8
*/
var i = 0;
for(i; i <= 8; i += 2){
  console.log("Valor de i: " + i);
}


/*
  Crear un bucle dentro de otro (anidados) que imprima
  Valor de i: 0
  Valor de j: 0
  
  Valor de i: 0
  Valor de j: 1
  
  Valor de i: 0
  Valor de j: 2
  
  ... hasta ...
  
  Valor de i: 9
  Valor de j: 9
*/
var i = 0;
for(i; i <= 9; i++){
  var j = 0;
  for(j; j <= 9; j++){
    console.log("Valor de i,j: " + i + "," + j)
  }
}