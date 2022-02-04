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
eventTarget.addEventListener("keydown", compararLetra(logKey));

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

//Funcion para dibujar ahorcado***********************************************************************

function dibujar() {
  var pantalla = document.querySelector("canvas");
  var dibujo = pantalla.getContext("2d");

  if (intentos == 6) {
    dibujo.beginPath();
    dibujo.moveTo(150, 100);
    dibujo.lineTo(150, 50);
    dibujo.lineTo(300, 50);
    dibujo.lineTo(300, 300);
    dibujo.lineTo(250, 300);
    dibujo.lineTo(350, 300);
    dibujo.lineWidth = 5;
    dibujo.strokeStyle = "#000";
    dibujo.stroke();
    dibujo.closePath();
  }

  if (intentos == 5) {
    dibujo.beginPath();
    dibujo.arc(150, 140, 40, 0, Math.PI * 2, false);
    dibujo.strokeStyle = "black";
    dibujo.lineWidth = 5;
    dibujo.stroke();
    dibujo.closePath();
  }
  if (intentos == 4) {
    dibujo.beginPath();
    dibujo.moveTo(150, 180);
    dibujo.lineTo(150, 250);
    dibujo.strokeStyle = "black";
    dibujo.lineWidth = 5;
    dibujo.stroke();
    dibujo.closePath();
  }
  if (intentos == 3) {
    dibujo.beginPath();
    dibujo.moveTo(120, 220);
    dibujo.lineTo(150, 180);
    dibujo.strokeStyle = "black";
    dibujo.lineWidth = 5;
    dibujo.stroke();
    dibujo.closePath();
  }
  if (intentos == 2) {
    dibujo.beginPath();
    dibujo.moveTo(120, 220);
    dibujo.lineTo(150, 180);
    dibujo.lineTo(180, 220);
    dibujo.strokeStyle = "black";
    dibujo.lineWidth = 5;
    dibujo.stroke();
    dibujo.closePath();
  }
  if (intentos == 1) {
    dibujo.beginPath();
    dibujo.moveTo(120, 290);
    dibujo.lineTo(150, 250);
    dibujo.strokeStyle = "black";
    dibujo.lineWidth = 5;
    dibujo.stroke();
    dibujo.closePath();
  }
  if (intentos == 0) {
    dibujo.beginPath();
    dibujo.moveTo(120, 290);
    dibujo.lineTo(150, 250);
    dibujo.lineTo(180, 290);
    dibujo.strokeStyle = "black";
    dibujo.lineWidth = 5;
    dibujo.stroke();
    dibujo.closePath();

    document.getElementById("palabraSecreta").textContent =
      palabraSecreta;
    document.getElementById("cantdeIntentos").textContent = "Fin del Juego";
    document.getElementById("cantdeIntentos").id = "cantdeIntentosRojo";

    document.getElementById("restantes").textContent = "";

    document.getElementById("input-texto").value = "";
    document.getElementById("input-texto").placeholder = "Fin del juego";

    document.getElementById("input-texto").disabled = true;
  }
}

//Funcion para jugar de nuevo*************************************************************************

function jugardeNuevo() {

  if (intentos>0){

    document.getElementById("cantdeIntentosVerde").id = "cantdeIntentos";


  }else{
    document.getElementById("cantdeIntentosRojo").id = "cantdeIntentos";

  }
  intentos=6;


  document.getElementById("input-texto").disabled = false;
  letrasElegidas="";
  elegirPalabra();



}

// EVITAR RECARGA DE FORMULARIO*********************************************************************

function evitarRecarga(event) {
  event.preventDefault();
  return false;
}
