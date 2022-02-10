// DECLARACION DE VARIABLES GLOBALES***********************************************************

var palabraSecreta;
var palabraPantalla;
var letrasElegidas = "";

var arrayPalabraSecreta;
var arrayPalabraPantalla;

var cantdeLetras;
var letra;
var intentos = 6;

var indice;
var indiceDiccionario = 9;
var arrayDiccionario = [
  "FUNCION",
  "METODO",
  "VARIABLE",
  "ALGORITMO",
  "LOGICA",
  "BUCLE",
  "JAVASCRIPT",
  "PROGRAMA",
  "ALURA",
  "ORACLE",
];

// AGREGAR PALABRA AL ARRAY DICCIONARIO*********************************************************************

function agregarPalabra() {
  nuevaPalabra = document.getElementById("input-nueva-palabra").value;

  if (/[A-Z]/.test(nuevaPalabra)) {
    arrayDiccionario.push(nuevaPalabra);
    indiceDiccionario = indiceDiccionario + 1;

    document.getElementById("input-nueva-palabra").value = "";
    document.getElementById("input-nueva-palabra").placeholder =
      "La palabra fue agregada correctamente";
  } else {
    document.getElementById("input-nueva-palabra").value = "";
    document.getElementById("input-nueva-palabra").placeholder =
      "Solo se permiten letras mayusculas";
  }
}

//SELECCIONAR PALABRA SECRETA DEL ARRAY DICCIONARIO************************************************

function elegirPalabra() {
  (indice = Math.round(Math.random() * indiceDiccionario)), 0;

  palabraSecreta = arrayDiccionario[indice];

  cantdeLetras = palabraSecreta.length;

  arrayPalabraSecreta = Array.from(palabraSecreta);
  palabraPantalla = "_".repeat(cantdeLetras);
  arrayPalabraPantalla = Array.from(palabraPantalla);

  document.getElementById("palabraSecreta").textContent = " _ ".repeat(
    cantdeLetras
  );

  document.getElementById("cantdeIntentos").textContent = intentos;

  document.getElementById("letrasElegidas").textContent =
    "Letras Elegidas:" + letrasElegidas;

  document.getElementById("input-texto").placeholder = "Escriba una letra";

  document.getElementById("btn").disabled = true;
}

//VERIFICAR SI LA LETRA INGRESADA SE ENCUENTRA PRESENTE EN LA PALABRA SECRETA**********************************

function compararLetra() {
  letra = document.getElementById("input-texto").value;

  if (/[A-Z]/.test(letra)) {
    if (palabraSecreta.includes(letra)) {
      for (i = 0; i < cantdeLetras; i++) {
        if (arrayPalabraSecreta[i] == letra) {
          arrayPalabraPantalla[i] = letra;

          document.getElementById("palabraSecreta").textContent =
            arrayPalabraPantalla.join(" ");

          palabraPantalla = arrayPalabraPantalla.join("");

          document.getElementById("input-texto").value = "";
          document.getElementById("input-texto").placeholder =
            "Escriba otra letra";

          if (palabraPantalla == palabraSecreta) {
            document.getElementById("palabraSecreta").textContent =
              palabraSecreta;

            document.getElementById("cantdeIntentos").textContent =
              "Usted adivino la palabra";

            document.getElementById("cantdeIntentos").id =
              "cantdeIntentosVerde";
            document.getElementById("restantes").textContent = "";
            document.getElementById("input-texto").value = "";
            document.getElementById("input-texto").placeholder =
              "Fin del juego";
            document.getElementById("input-texto").disabled = true;
            document.getElementById("btn").disabled = false;
          }
        }
      }
    } else {
      if (!letrasElegidas.includes(letra)) {
        letrasElegidas = letrasElegidas + letra;
        document.getElementById("letrasElegidas").textContent =
          "Letras Elegidas:" + letrasElegidas;

        intentos = intentos - 1;
        console.log(intentos);

        document.getElementById("cantdeIntentos").textContent = intentos;

        document.getElementById("input-texto").value = "";

        dibujar();
      } else {
        document.getElementById("input-texto").value = "";
        document.getElementById("input-texto").placeholder =
          "Esa letra ya fue elegida";
      }
    }
  } else {
    document.getElementById("input-texto").value = "";
    document.getElementById("input-texto").placeholder =
      "Ingrese solo mayusculas";
  }
}

//Funcion para jugar de nuevo*************************************************************************

function jugardeNuevo() {
  if (intentos > 0) {
    document.getElementById("cantdeIntentosVerde").id = "cantdeIntentos";
  } else {
    document.getElementById("cantdeIntentosRojo").id = "cantdeIntentos";
  }

  intentos = 6;
  dibujar();

  document.getElementById("restantes").textContent = "Intentos restantes:";

  document.getElementById("input-texto").disabled = false;

  letrasElegidas = "";

  elegirPalabra();
}

// EVITAR RECARGA DE FORMULARIO*********************************************************************

function evitarRecarga(event) {
  event.preventDefault();
  return false;
}
