/* ********** ********** ********** ********** ********** ********** ********** */
// FUNCIONES "CALCULADORA ESTANDAR JAVASCRIPT" 
/* ********** ********** ********** ********** ********** ********** ********** */

// VARIABLES GLOBALES //
let numero = 0;
  memoria = 0;
  operacion = "";  // INDICA CUAL FUE EL ÚLTIMO OPERADOR QUE SE UTILIZO.
  ultima = "";     // INDICA CUAL FUE EL ÚTLIMO BOTON QUE SE PRESIONO.


// RESETEAR //
function resetear() {
  // AL PRESIONAR EL BOTON "C" LA pantalla_memoria SE BORRA.
  document.getElementById("pantalla_memoria").value = "";
  // AL PRESIONAR EL BOTON "C" LA pantalla_actual SE BORRA.
  document.getElementById("pantalla_actual").value = 0;
  // AL PRESIONAR EL BOTON "C" SE RESTABLECE EL VALOR DE TODAS LAS VARIABLES GLOBALES.
  numero = 0;
  memoria = 0;
  operacion = "";
  ultima = "";
}


// DIGITAR NUMERO //
function digitar(boton) {
  // SI EL ÚLTIMO BOTON QUE SE PRESIONO FUE "=, ²√, x², ¹/x, % ó π" HACE UN RESETEO Y CONTINUA.
  if(operacion === "=" || ultima === "r" || ultima === "c" || ultima === "i" || ultima === "p" || ultima === "π") {
    numero = 0;
    memoria = 0;
    document.getElementById("pantalla_memoria").value = "";
    document.getElementById("pantalla_actual").value = numero + boton;
    numero = document.getElementById ("pantalla_actual").value;
    operacion = "";    
  } 
  // SI EL VALOR DE pantalla_actual ES IGUAL A "-0" ELIMINA EL "0" Y CONTINUA.
  else if (numero === "-0") {
    numero = "-";
    document.getElementById("pantalla_actual").value = numero + boton;
    numero = document.getElementById ("pantalla_actual").value;
  } 
  // SI EL VALOR DE pantalla_actual ES IGUAL A "0" NO PERMITE ESCRIBIR MÁS CEROS.
  else if (numero === "0") {
    numero = "";
    document.getElementById("pantalla_actual").value = numero + boton;
    numero = document.getElementById ("pantalla_actual").value;  
  } else {  // SI NO SE PRESENTA NINGUNO DE LOS CASOS ANTERIORES PERMITE ESCRIBIR NUMEROS DEL 0 AL 9.
    document.getElementById("pantalla_actual").value = numero + boton;
    numero = document.getElementById ("pantalla_actual").value;
  }    
  ultima = "";
}


// PUNTO DECIMAL //
function punto() {
  // SI EL ÚLTIMO BOTON QUE SE PRESIONO FUE "=, ²√, x², ¹/x, % ó π" HACE UN RESETEO Y CONTINUA.
  if(operacion === "=" || ultima === "r" || ultima === "c" || ultima === "i" || ultima === "p" || ultima === "π") {
    numero = 0;
    memoria = 0;
    document.getElementById("pantalla_memoria").value = "";
    document.getElementById("pantalla_actual").value = numero + ".";
    numero = numero + ".";
    operacion = "";
    ultima = "";   
  } 
  // SI EL ÚLTIMO BOTON QUE SE PRESIONO FUE "+, -, x ó ÷" pantalla_actual SERA IGUAL A "0."
  else if(ultima === "+" || ultima === "-" || ultima === "*" || ultima === "/") {
    document.getElementById("pantalla_actual").value = numero + ".";
    numero = numero + ".";
  }
  // SI pantalla_actual CONTIENE UN "." LA FUNCIÓN NO HACE NADA.
  else if(document.getElementById("pantalla_actual").value.includes(".")) {
    document.getElementById("pantalla_actual").value = document.getElementById("pantalla_actual").value;
  } else {  // SI pantalla_actual NO CONTIENE UN "." SE AGREGA AL FINAL DEL NÚMERO.
    document.getElementById("pantalla_actual").value = numero + ".";
    numero = numero + ".";
  }  
}


// CAMBIAR SIGNO //
function signo() {
  // SI pantalla_actual ES IGUAL A "0" O EL ULTIMO BOTON QUE SE PRESIONO FUE "+, -, x ó ÷" pantalla_actual SERA IGUAL A "-0".
  if (document.getElementById("pantalla_actual").value === "0" || ultima === "+" || ultima === "-" || ultima === "*" || ultima === "/") {
    document.getElementById("pantalla_actual").value = "-0";
    numero = "-0";
  }
  // SI EL ÚLTIMO BOTON QUE SE PRESIONO FUE "=, ²√, x², ¹/x ó %" HACE UN RESETEO Y CONTINUA.
  else if (operacion === "=" || ultima === "r" || ultima === "c" || ultima === "i" || ultima === "p") {
    document.getElementById("pantalla_memoria").value = "";
    document.getElementById("pantalla_actual").value = "-0";
    numero = "-0";
    operacion = "";
  }
  // SI pantalla_actual INICIA CON EL SIGNO "-" RETIRA EL SIGNO Y CONTINUA.
  else if(document.getElementById("pantalla_actual").value.startsWith("-")) {
    document.getElementById("pantalla_actual").value = numero.slice(1);   
    numero = document.getElementById("pantalla_actual").value;         
  } 
  // SI pantalla_actual NO INICIA CON EL SIGNO "-" AGREGA EL SIGNO Y CONTINUA.
  else if(document.getElementById("pantalla_actual").value.startsWith("-") === false) {
    document.getElementById("pantalla_actual").value = "-" + document.getElementById ("pantalla_actual").value;
    numero = document.getElementById("pantalla_actual").value;
  }   
  ultima = "";
}


// SUMAR //
function sumar() {
  // SI pantalla_memoria ESTA VACIA Y pantalla_actual ES IGUAL A "0" UTILIZA "0" COMO PRIMER SUMANDO.
  if(document.getElementById("pantalla_memoria").value === "" && document.getElementById("pantalla_actual").value === "0") {
    document.getElementById("pantalla_memoria").value = 0 + " +";
  }
  // SI EL ULTIMO BOTON QUE SE PRESIONO FUE "+, -, x ó ÷" MANTIENE O CONVIERTE LA SIGUIENTE OPERACIÓN EN UNA SUMA.
  else if(ultima === "+" || ultima === "-" || ultima === "*" || ultima === "/") {
    document.getElementById("pantalla_memoria").value = memoria + " +";
    document.getElementById("pantalla_actual").value = memoria;
  }
  // SI NO SE A REALIZADO NINGUNA OPERACIÓN LA SIGUIENTE OPERACIÓN SERA UNA SUMA.
  else if(operacion === "") {
    document.getElementById("pantalla_memoria").value = parseFloat(numero) + " +";
    document.getElementById("pantalla_actual").value = parseFloat(numero);
    memoria = numero;
  }
  // SI EL ÚLTIMO OPERADOR QUE SE PRESIONO FUE "+" REALIZA LA SUMA Y PREPARA LA SIGUIENTE OPERACIÓN QUE SERA UNA SUMA.
  else if(operacion === "+") {
    document.getElementById("pantalla_memoria").value = parseFloat(memoria) + parseFloat(numero) + " +";
    document.getElementById("pantalla_actual").value = parseFloat(memoria) + parseFloat(numero);
    memoria = parseFloat(memoria) + parseFloat(numero);
  }
  // SI EL ÚLTIMO OPERADOR QUE SE PRESIONO FUE "-" REALIZA LA RESTA Y PREPARA LA SIGUIENTE OPERACIÓN QUE SERA UNA SUMA.
  else if(operacion === "-") {
    document.getElementById("pantalla_memoria").value = parseFloat(memoria) - parseFloat(numero) + " +";
    document.getElementById("pantalla_actual").value = parseFloat(memoria) - parseFloat(numero);
    memoria = parseFloat(memoria) - parseFloat(numero);
  }
  // SI EL ÚLTIMO OPERADOR QUE SE PRESIONO FUE "x" REALIZA LA MULTIPLICACIÓN Y PREPARA LA SIGUIENTE OPERACIÓN QUE SERA UNA SUMA.
  else if(operacion === "*") {
    document.getElementById("pantalla_memoria").value = parseFloat(memoria) * parseFloat(numero) + " +";
    document.getElementById("pantalla_actual").value = parseFloat(memoria) * parseFloat(numero);
    memoria = parseFloat(memoria) * parseFloat(numero);
  }
  // SI EL ÚLTIMO OPERADOR QUE SE PRESIONO FUE "÷" REALIZA LA DIVISIÓN Y PREPARA LA SIGUIENTE OPERACIÓN QUE SERA UNA SUMA.
  else if(operacion === "/") {
    document.getElementById("pantalla_memoria").value = parseFloat(memoria) / parseFloat(numero) + " +";
    document.getElementById("pantalla_actual").value = parseFloat(memoria) / parseFloat(numero);
    memoria = parseFloat(memoria) / parseFloat(numero);
  }
  // SI EL ÚLTIMO OPERADOR QUE SE PRESIONO FUE "=" UTILIZA EL RESULTADO COMO PRIMER SUMANDO Y PREPARA LA SIGUIENTE OPERACIÓN.
  else if(operacion === "=") {
    document.getElementById("pantalla_memoria").value = parseFloat(memoria) + " +";
    document.getElementById("pantalla_actual").value = parseFloat(memoria);
  }
  numero = 0;
  operacion = "+";  
  ultima = "+";
}


// RESTAR //
function restar() {
  // SI pantalla_memoria ESTA VACIA Y pantalla_actual ES IGUAL A "0" UTILIZA "0" COMO MINUENDO.
  if (document.getElementById("pantalla_memoria").value === "" && document.getElementById("pantalla_actual").value === "0") {
    document.getElementById("pantalla_memoria").value = 0 + " -";
  }
  // SI EL ULTIMO BOTON QUE SE PRESIONO FUE "+, -, x ó ÷" MANTIENE O CONVIERTE LA SIGUIENTE OPERACIÓN EN UNA RESTA.
  else if(ultima === "+" || ultima === "-" || ultima === "*" || ultima === "/") {
    document.getElementById("pantalla_memoria").value = memoria + " -";
    document.getElementById("pantalla_actual").value = memoria;
  }
  // SI NO SE A REALIZADO NINGUNA OPERACIÓN LA SIGUIENTE OPERACIÓN SERA UNA RESTA.
  else if(operacion === "") {
    document.getElementById("pantalla_memoria").value = parseFloat(numero) + " -";
    document.getElementById("pantalla_actual").value = parseFloat(numero);
    memoria = numero;
  }
  // SI EL ÚLTIMO OPERADOR QUE SE PRESIONO FUE "-" REALIZA LA RESTA Y PREPARA LA SIGUIENTE OPERACIÓN QUE SERA UNA RESTA.
  else if (operacion === "-") {
    document.getElementById("pantalla_memoria").value = parseFloat(memoria) - parseFloat(numero) + " -";
    document.getElementById("pantalla_actual").value = parseFloat(memoria) - parseFloat(numero);
    memoria = parseFloat(memoria) - parseFloat(numero);    
  }
  // SI EL ÚLTIMO OPERADOR QUE SE PRESIONO FUE "+" REALIZA LA SUMA Y PREPARA LA SIGUIENTE OPERACIÓN QUE SERA UNA RESTA.
  else if(operacion === "+") {
    document.getElementById("pantalla_memoria").value = parseFloat(memoria) + parseFloat(numero) + " -";
    document.getElementById("pantalla_actual").value = parseFloat(memoria) + parseFloat(numero);
    memoria = parseFloat(memoria) + parseFloat(numero);
  }
  // SI EL ÚLTIMO OPERADOR QUE SE PRESIONO FUE "x" REALIZA LA MULTIPLICACIÓN Y PREPARA LA SIGUIENTE OPERACIÓN QUE SERA UNA RESTA.
  else if(operacion === "*") {
    document.getElementById("pantalla_memoria").value = parseFloat(memoria) * parseFloat(numero) + " -";
    document.getElementById("pantalla_actual").value = parseFloat(memoria) * parseFloat(numero);
    memoria = parseFloat(memoria) * parseFloat(numero);
  }
  // SI EL ÚLTIMO OPERADOR QUE SE PRESIONO FUE "÷" REALIZA LA DIVISIÓN Y PREPARA LA SIGUIENTE OPERACIÓN QUE SERA UNA RESTA.
  else if(operacion === "/") {
    document.getElementById("pantalla_memoria").value = parseFloat(memoria) / parseFloat(numero) + " -";
    document.getElementById("pantalla_actual").value = parseFloat(memoria) / parseFloat(numero);
    memoria = parseFloat(memoria) / parseFloat(numero);
  }
  // SI EL ÚLTIMO OPERADOR QUE SE PRESIONO FUE "=" UTILIZA EL RESULTADO COMO MINUENDO Y PREPARA LA SIGUIENTE OPERACIÓN.
  else if(operacion === "=") {
    document.getElementById("pantalla_memoria").value = parseFloat(memoria) + " -";
    document.getElementById("pantalla_actual").value = parseFloat(memoria);
  }
  numero = 0;
  operacion = "-";
  ultima = "-";
}


// MULTIPLICAR //
function multiplicar() {
  // SI pantalla_memoria ESTA VACIA Y pantalla_actual ES IGUAL A "0" UTILIZA "0" COMO PRIMER FACTOR.
  if (document.getElementById("pantalla_memoria").value === "" && document.getElementById("pantalla_actual").value === "0") {
    document.getElementById("pantalla_memoria").value = 0 + " x";
  }
  // SI EL ULTIMO BOTON QUE SE PRESIONO FUE "+, -, x ó ÷" MANTIENE O CONVIERTE LA SIGUIENTE OPERACIÓN EN UNA MULTIPLICACIÓN.
  else if(ultima === "+" || ultima === "-" || ultima === "*" || ultima === "/") {
    document.getElementById("pantalla_memoria").value = memoria + " x";
    document.getElementById("pantalla_actual").value = memoria;
  }
  // SI NO SE A REALIZADO NINGUNA OPERACIÓN LA SIGUIENTE OPERACIÓN SERA UNA MULTIPLICACIÓN.
  else if(operacion === "") {
    document.getElementById("pantalla_memoria").value = parseFloat(numero) + " x";
    document.getElementById("pantalla_actual").value = parseFloat(numero);
    memoria = numero;
  }
  // SI EL ÚLTIMO OPERADOR QUE SE PRESIONO FUE "x" REALIZA LA MULTIPLICACIÓN Y PREPARA LA SIGUIENTE OPERACIÓN QUE SERA UNA MULTIPLICACIÓN.
  else if (operacion === "*") {
    document.getElementById("pantalla_memoria").value = parseFloat(memoria) * parseFloat(numero) + " x";
    document.getElementById("pantalla_actual").value = parseFloat(memoria) * parseFloat(numero);
    memoria = parseFloat(memoria) * parseFloat(numero);    
  }
  // SI EL ÚLTIMO OPERADOR QUE SE PRESIONO FUE "+" REALIZA LA SUMA Y PREPARA LA SIGUIENTE OPERACIÓN QUE SERA UNA MULTIPLICACIÓN.
  else if(operacion === "+") {
    document.getElementById("pantalla_memoria").value = parseFloat(memoria) + parseFloat(numero) + " x";
    document.getElementById("pantalla_actual").value = parseFloat(memoria) + parseFloat(numero);
    memoria = parseFloat(memoria) + parseFloat(numero);
  }
  // SI EL ÚLTIMO OPERADOR QUE SE PRESIONO FUE "-" REALIZA LA RESTA Y PREPARA LA SIGUIENTE OPERACIÓN QUE SERA UNA MULTIPLICACIÓN.
  else if(operacion === "-") {
    document.getElementById("pantalla_memoria").value = parseFloat(memoria) - parseFloat(numero) + " x";
    document.getElementById("pantalla_actual").value = parseFloat(memoria) - parseFloat(numero);
    memoria = parseFloat(memoria) - parseFloat(numero);
  }
  // SI EL ÚLTIMO OPERADOR QUE SE PRESIONO FUE "÷" REALIZA LA DIVISIÓN Y PREPARA LA SIGUIENTE OPERACIÓN QUE SERA UNA MULTIPLICACIÓN.
  else if(operacion === "/") {
    document.getElementById("pantalla_memoria").value = parseFloat(memoria) / parseFloat(numero) + " x";
    document.getElementById("pantalla_actual").value = parseFloat(memoria) / parseFloat(numero);
    memoria = parseFloat(memoria) / parseFloat(numero);
  }
  // SI EL ÚLTIMO OPERADOR QUE SE PRESIONO FUE "=" UTILIZA EL RESULTADO COMO PRIMER FACTOR Y PREPARA LA SIGUIENTE OPERACIÓN.
  else if(operacion === "=") {
    document.getElementById("pantalla_memoria").value = parseFloat(memoria) + " x";
    document.getElementById("pantalla_actual").value = parseFloat(memoria);
  }
  numero = 0;
  operacion = "*";
  ultima = "*"
}


// DIVIDIR //
function dividir() {
  // SI pantalla_memoria ESTA VACIA Y pantalla_actual ES IGUAL A "0" UTILIZA "0" COMO DIVIDENDO.
  if (document.getElementById("pantalla_memoria").value === "" && document.getElementById("pantalla_actual").value === "0") {
    document.getElementById("pantalla_memoria").value = 0 + " ÷";
  }
  // SI EL ULTIMO BOTON QUE SE PRESIONO FUE "+, -, x ó ÷" MANTIENE O CONVIERTE LA SIGUIENTE OPERACIÓN EN UNA DIVISIÓN.
  else if(ultima === "+" || ultima === "-" || ultima === "*" || ultima === "/") {
    document.getElementById("pantalla_memoria").value = memoria + " ÷";
    document.getElementById("pantalla_actual").value = memoria;
  }
  // SI NO SE A REALIZADO NINGUNA OPERACIÓN LA SIGUIENTE OPERACIÓN SERA UNA DIVISIÓN.
  else if(operacion === "") {
    document.getElementById("pantalla_memoria").value = parseFloat(numero) + " ÷";
    document.getElementById("pantalla_actual").value = parseFloat(numero);
    memoria = numero;
  }
  // SI EL ÚLTIMO OPERADOR QUE SE PRESIONO FUE "÷" REALIZA LA DIVISIÓN Y PREPARA LA SIGUIENTE OPERACIÓN QUE SERA UNA DIVISIÓN.
  else if (operacion === "/") {
    document.getElementById("pantalla_memoria").value = parseFloat(memoria) / parseFloat(numero) + " ÷";
    document.getElementById("pantalla_actual").value = parseFloat(memoria) / parseFloat(numero);
    memoria = parseFloat(memoria) / parseFloat(numero);    
  }
  // SI EL ÚLTIMO OPERADOR QUE SE PRESIONO FUE "+" REALIZA LA SUMA Y PREPARA LA SIGUIENTE OPERACIÓN QUE SERA UNA DIVISIÓN.
  else if(operacion === "+") {
    document.getElementById("pantalla_memoria").value = parseFloat(memoria) + parseFloat(numero) + " ÷";
    document.getElementById("pantalla_actual").value = parseFloat(memoria) + parseFloat(numero);
    memoria = parseFloat(memoria) + parseFloat(numero);
  }
  // SI EL ÚLTIMO OPERADOR QUE SE PRESIONO FUE "-" REALIZA LA RESTA Y PREPARA LA SIGUIENTE OPERACIÓN QUE SERA UNA DIVISIÓN.
  else if(operacion === "-") {
    document.getElementById("pantalla_memoria").value = parseFloat(memoria) - parseFloat(numero) + " ÷";
    document.getElementById("pantalla_actual").value = parseFloat(memoria) - parseFloat(numero);
    memoria = parseFloat(memoria) - parseFloat(numero);
  }
  // SI EL ÚLTIMO OPERADOR QUE SE PRESIONO FUE "x" REALIZA LA MULTIPLICACIÓN Y PREPARA LA SIGUIENTE OPERACIÓN QUE SERA UNA DIVISIÓN.
  else if(operacion === "*") {
    document.getElementById("pantalla_memoria").value = parseFloat(memoria) * parseFloat(numero) + " ÷";
    document.getElementById("pantalla_actual").value = parseFloat(memoria) * parseFloat(numero);
    memoria = parseFloat(memoria) * parseFloat(numero);
  }
  // SI EL ÚLTIMO OPERADOR QUE SE PRESIONO FUE "=" UTILIZA EL RESULTADO COMO PRIMER FACTOR Y PREPARA LA SIGUIENTE OPERACIÓN.
  else if(operacion === "=") {
    document.getElementById("pantalla_memoria").value = parseFloat(memoria) + " ÷";
    document.getElementById("pantalla_actual").value = parseFloat(memoria);
  }
  numero = 0;
  operacion = "/";  
  ultima = "/";
}


// RESULTADO //
function resultado(){
  // SI pantalla_memoria ESTA VACIA Y pantalla_actual ES IGUAL A "0" NO HACE NADA.
  if(document.getElementById("pantalla_memoria").value === "" && document.getElementById("pantalla_actual").value === "0") {
    document.getElementById("pantalla_memoria").value = "";
    document.getElementById("pantalla_actual").value = 0;   
  }
  // SI NO SE A REALIZADO NINGUNA OPERACIÓN NO HACE NADA.
  else if (operacion === "") {
    document.getElementById("pantalla_memoria").value = document.getElementById("pantalla_memoria").value;
    document.getElementById("pantalla_actual").value = document.getElementById("pantalla_actual").value;
    memoria = numero;
  }
  // SI EL ÚLTIMO OPERADOR QUE SE PRESIONO FUE "+" REALIZA LA SUMA Y GUARDA EL VALOR EN LA MEMORIA.
  else if (operacion === "+") {
    document.getElementById("pantalla_memoria").value = parseFloat(memoria) + " + " + parseFloat(numero) + " =";
    document.getElementById("pantalla_actual").value = parseFloat(memoria) + parseFloat(numero);
    memoria = parseFloat(memoria) + parseFloat(numero);
  }
  // SI EL ÚLTIMO OPERADOR QUE SE PRESIONO FUE "-" REALIZA LA RESTA Y GUARDA EL VALOR EN LA MEMORIA.
  else if (operacion === "-") {
    document.getElementById("pantalla_memoria").value = parseFloat(memoria) + " - " + parseFloat(numero) + " =";
    document.getElementById("pantalla_actual").value = parseFloat(memoria) - parseFloat(numero);
    memoria = parseFloat(memoria) - parseFloat(numero);
  }
  // SI EL ÚLTIMO OPERADOR QUE SE PRESIONO FUE "x" REALIZA LA MULTIPLICACIÓN Y GUARDA EL VALOR EN LA MEMORIA.
  else if (operacion === "*") {
    document.getElementById("pantalla_memoria").value = parseFloat(memoria) + " x " + parseFloat(numero) + " =";
    document.getElementById("pantalla_actual").value = parseFloat(memoria) * parseFloat(numero);
    memoria = parseFloat(memoria) * parseFloat(numero);
  }
  // SI EL ÚLTIMO OPERADOR QUE SE PRESIONO FUE "÷" REALIZA LA DIVISIÓN Y GUARDA EL VALOR EN LA MEMORIA.
  else if (operacion === "/") {
    document.getElementById("pantalla_memoria").value = parseFloat(memoria) + " ÷ " + parseFloat(numero) + " =";
    document.getElementById("pantalla_actual").value = parseFloat(memoria) / parseFloat(numero);
    memoria = parseFloat(memoria) / parseFloat(numero);
  }   
  numero = 0;
  operacion = "=";
}


// RAIZ //
function raiz(){
  // SI EL ÚLTIMO OPERADOR QUE SE PRESIONO FUE "=" UTILIZA EL RESULTADO COMO VALOR PARA OBTENER SU RAIZ CUADRADA.
  if(operacion === "=") {
    document.getElementById("pantalla_memoria").value = "²√ " + parseFloat(memoria) + " =";
    document.getElementById("pantalla_actual").value = Math.sqrt(memoria);
    memoria = Math.sqrt(memoria);
  }
  // SI EL ÚLTIMO BOTON QUE SE PRESIONO FUE "+, -, x ó ÷" Ó SI EL VALOR DE pantalla_actual ES MENOR QUE "0" MARCA UN ERROR Y REALIZA UN RESETEO.
  else if(ultima === "+" || ultima === "-" || ultima === "*" || ultima === "/" || numero < 0) {
    document.getElementById("pantalla_memoria").value = "EXPRESIÓN INCORRECTA";
    document.getElementById("pantalla_actual").value = "ERROR";
    numero = 0;
    memoria = 0;
    operacion = "";
    ultima = "";
  }
  // SI EL ÚLTIMO BOTON QUE SE PRESIONO FUE "²√, x², ¹/x ó %" UTILIZA EL RESULTADO COMO VALOR PARA OBTENER SU RAIZ CUADRADA.
  else if(ultima === "c" || ultima === "r" || ultima === "i" || ultima === "p") {
    document.getElementById("pantalla_memoria").value = "²√ " + parseFloat(numero) + " =";
    document.getElementById("pantalla_actual").value = Math.sqrt(numero);
    numero = Math.sqrt(numero);
  }
  // SI SE ESTA REALIZANDO UN CADENA DE OPERACIONES OBTIENE LA RAIZ CUADRADA DEL ULTIMO NUMERO Y LA AGREGA A LA CADENA.
  else if(document.getElementById("pantalla_memoria").value !== "") {
    document.getElementById("pantalla_memoria").value = document.getElementById("pantalla_memoria").value + " ²√ " + parseFloat(numero);
    document.getElementById("pantalla_actual").value = "²√" + parseFloat(numero);
    numero = Math.sqrt(numero);  
  } else {  // SI NO SE PRESENTA NINGUNO DE LOS CASOS ANTERIORES UTILIZA EL VALOR DE pantalla_actual PARA OBTENER SU RAIZ CUADRADA.
    document.getElementById("pantalla_memoria").value = "²√ " + parseFloat(numero) + " =";
    document.getElementById("pantalla_actual").value = Math.sqrt(numero);
    numero = Math.sqrt(numero);
  }
  ultima = "r";
}


// CUADRADO //
function cuadrado(){
  // SI EL ÚLTIMO OPERADOR QUE SE PRESIONO FUE "=" UTILIZA EL RESULTADO COMO VALOR PARA OBTENER SU CUADRADO.
  if(operacion === "=") {
    document.getElementById("pantalla_memoria").value = parseFloat(memoria) + "²" + " =";
    document.getElementById("pantalla_actual").value = memoria * memoria;
    memoria = memoria * memoria;
  }
  // SI EL ÚLTIMO BOTON QUE SE PRESIONO FUE "+, -, x ó ÷" MARCA UN ERROR Y REALIZA UN RESETEO.
  else if(ultima === "+" || ultima === "-" || ultima === "*" || ultima === "/") {
    document.getElementById("pantalla_memoria").value = "EXPRESIÓN INCORRECTA";
    document.getElementById("pantalla_actual").value = "ERROR";
    numero = 0;
    memoria = 0;
    operacion = "";
    ultima = "";
  }
  // SI EL ÚLTIMO BOTON QUE SE PRESIONO FUE "²√, x², ¹/x ó %" UTILIZA EL RESULTADO COMO VALOR PARA OBTENER SU CUADRADO.
  else if(ultima === "c" || ultima === "r" || ultima === "i" || ultima === "p") {
    document.getElementById("pantalla_memoria").value = parseFloat(numero) + "²" + " =";
    document.getElementById("pantalla_actual").value = numero * numero;
    numero = numero * numero;
  }
  // SI SE ESTA REALIZANDO UN CADENA DE OPERACIONES OBTIENE EL CUADRADO DEL ULTIMO NUMERO Y LO AGREGA A LA CADENA.
  else if(document.getElementById("pantalla_memoria").value !== "") {
    document.getElementById("pantalla_memoria").value = document.getElementById("pantalla_memoria").value + " " + parseFloat(numero) + "²";
    document.getElementById("pantalla_actual").value = parseFloat(numero) + "²";
    numero = numero * numero;
  } else {  // SI NO SE PRESENTA NINGUNO DE LOS CASOS ANTERIORES UTILIZA EL VALOR DE pantalla_actual PARA OBTENER SU CUADRADO.
    document.getElementById("pantalla_memoria").value = parseFloat(numero) + "²" + " =";
    document.getElementById("pantalla_actual").value = numero * numero;
    numero = numero * numero;
  }
  ultima = "c";
}


// INVERSO //
function inverso() {
  // SI EL ÚLTIMO OPERADOR QUE SE PRESIONO FUE "=" UTILIZA EL RESULTADO COMO VALOR PARA OBTENER SU INVERSO.
  if(operacion === "=") {
    document.getElementById("pantalla_memoria").value = "¹/ " + parseFloat(memoria) + " =";
    document.getElementById("pantalla_actual").value = 1 / memoria;
    memoria = 1 / memoria;
  }
  // SI EL ÚLTIMO BOTON QUE SE PRESIONO FUE "+, -, x ó ÷" MARCA UN ERROR Y REALIZA UN RESETEO.
  else if(ultima === "+" || ultima === "-" || ultima === "*" || ultima === "/") {
    document.getElementById("pantalla_memoria").value = "EXPRESIÓN INCORRECTA";
    document.getElementById("pantalla_actual").value = "ERROR";
    numero = 0;
    memoria = 0;
    operacion = "";
    ultima = "";
  }
  // SI EL ÚLTIMO BOTON QUE SE PRESIONO FUE "²√, x², ¹/x ó %" UTILIZA EL RESULTADO COMO VALOR PARA OBTENER SU INVERSO.
  else if(ultima === "c" || ultima === "r" || ultima === "i" || ultima === "p") {
    document.getElementById("pantalla_memoria").value = "¹/ " + parseFloat(numero) + " =";
    document.getElementById("pantalla_actual").value = 1 / numero;
    numero = 1 / numero;
  }
  // SI SE ESTA REALIZANDO UN CADENA DE OPERACIONES OBTIENE EL INVERSO DEL ULTIMO NUMERO Y LO AGREGA A LA CADENA.
  else if(document.getElementById("pantalla_memoria").value !== "") {
    document.getElementById("pantalla_memoria").value = document.getElementById("pantalla_memoria").value + " ¹/ " + parseFloat(numero);
    document.getElementById("pantalla_actual").value = "¹/" + parseFloat(numero);
    numero = 1 / numero;  
  } else {  // SI NO SE PRESENTA NINGUNO DE LOS CASOS ANTERIORES UTILIZA EL VALOR DE pantalla_actual PARA OBTENER SU INVERSO.
    document.getElementById("pantalla_memoria").value = "¹/ " + parseFloat(numero) + " =";
    document.getElementById("pantalla_actual").value = 1 / numero;
    numero = 1 / numero;
  }
  ultima = "i";
}


// PORCENTAJE //
function porcentaje() {
  // SI EL ÚLTIMO OPERADOR QUE SE PRESIONO FUE "+" REALIZA UNA SUMA ENTRE EL VALOR DE MEMORIA Y EL PORCENTAJE DADO.
  if(operacion === "+") {
    document.getElementById("pantalla_memoria").value = parseFloat(memoria) + " + " + parseFloat(numero) + "% =";
    document.getElementById("pantalla_actual").value = parseFloat(memoria) + parseFloat(memoria) * parseFloat(numero) / 100;
    numero = parseFloat(memoria) + parseFloat(memoria) * parseFloat(numero) / 100;
  }  
  // SI EL ÚLTIMO OPERADOR QUE SE PRESIONO FUE "-" REALIZA UNA RESTA ENTRE EL VALOR DE MEMORIA Y EL PORCENTAJE DADO.
  else if(operacion === "-") {
    document.getElementById("pantalla_memoria").value = parseFloat(memoria) + " - " + parseFloat(numero) + "% =";
    document.getElementById("pantalla_actual").value = parseFloat(memoria) - parseFloat(memoria) * parseFloat(numero) / 100;
    numero = parseFloat(memoria) - parseFloat(memoria) * parseFloat(numero) / 100;
  }
  // SI EL ÚLTIMO OPERADOR QUE SE PRESIONO FUE "x" REALIZA UNA MULTIPLICACIÓN ENTRE EL VALOR DE MEMORIA Y EL PORCENTAJE DADO.
  else if(operacion === "*") {
    document.getElementById("pantalla_memoria").value = parseFloat(memoria) + " x " + parseFloat(numero) + "% =";
    document.getElementById("pantalla_actual").value = parseFloat(memoria) * parseFloat(memoria) * parseFloat(numero) / 100;
    numero = parseFloat(memoria) * parseFloat(memoria) * parseFloat(numero) / 100;
  }
  // SI EL ÚLTIMO OPERADOR QUE SE PRESIONO FUE "÷" REALIZA UNA DIVISIÓN ENTRE EL VALOR DE MEMORIA Y EL PORCENTAJE DADO.
  else if(operacion === "/") {
    document.getElementById("pantalla_memoria").value = parseFloat(memoria) + " ÷ " + parseFloat(numero) + "% =";
    document.getElementById("pantalla_actual").value = parseFloat(memoria) / (parseFloat(memoria) * parseFloat(numero) / 100);
    numero = parseFloat(memoria) / (parseFloat(memoria) * parseFloat(numero) / 100);
  } 
  operacion = "";
  ultima = "p";
}


// VALOR PI //
function valorPI() {
  // SI NO SE A REALIZADO NINGUNA OPERACIÓN Y/O pantalla_actual ES IGUAL A "-0" ESCRIBE EL VALOR DE PI NEGATIVO EN LA pantalla_actual.
  if(operacion === "" && numero === "-0" || numero === "-0") {
    numero = "-";
    document.getElementById("pantalla_actual").value = numero + Math.PI;
    numero = document.getElementById ("pantalla_actual").value;
  }
  // SI EL ÚLTIMO BOTON QUE SE PRESIONO FUE "=,²√, x², ¹/x ó %" HACE UN RESETEO Y CONTINUA.
  else if(operacion === "=" || ultima === "r" || ultima === "c" || ultima === "i" || ultima === "p" || ultima === "") {
    document.getElementById("pantalla_memoria").value = "";
    document.getElementById("pantalla_actual").value = Math.PI;
    numero = Math.PI;    
    operacion = ""; 
  } else {  // ESCRIBE EL VALOR DE PI EN LA pantalla_actual.
    document.getElementById("pantalla_actual").value = Math.PI;
    numero = Math.PI;        
  }
  ultima = "π";
}

/* ********** ********** ********** ********** ********** ********** ********** */
/* ********** ********** ********** ********** ********** ********** ********** */