import { calcularScoreBoard } from "/backend/util.js";

const btnCalcularSB = document.getElementById("CalcularSB");

/*
 *  Archivo main.js
 *  Creado por Nicolás Gonzáles y Sebastian Balanta
 *
 *  Descripción:
 *  Este archivo se encarga de llamar la función calcularScoreBoard del archivo util.js y
 *  mostrar los resultados en la página web.
 */


function handlerCalcular(){
    // Obtiene el valor del input con id "valorBuscar"
    let cadenaBuscar = document.getElementById("valorBuscar").value;
    
    let result = calcularScoreBoard(cadenaBuscar);

    let datos = result.map(result => `${result.contest} ${result.problemsSolved} ${result.penaltyTime}`).join('\n');

    // Muestra el resultado en el input con id "salida"
    document.getElementById("salida").value = datos;
}

document.getElementById("CalcularSB").addEventListener("click", handlerCalcular);