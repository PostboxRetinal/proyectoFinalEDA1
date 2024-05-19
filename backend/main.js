import { busquedaBinaria } from "./busqueda.js";
import { calcularScoreBoard } from "./util.js";

/*
 *  Archivo main.js
 *  Creado por: Sebastian Balanta
 *
 *  Descripción:
 *  Este archivo se encarga de calcular el ScoreBoard de un concurso de programación.
 */

let cadena = document.getElementById("laPlacaBuscada").value;
let btnListar = document.getElementById("listar");
btnBuscar = document.getElementById("btnBuscar");
let cadenaBuscar = document.getElementById("buscar").value;
let scoreBoard = calcularScoreBoard(cadena).map(result => `${result.contest} ${result.problemsSolved} ${result.penaltyTime}`).join('\n');

// se asignan eventos
btnListar.addEventListener("click", calcularScoreBoard(cadena));
btnBuscar.addEventListener("click", busquedaBinaria(calcularScoreBoard(cadena),0,calcularScoreBoard().length-1,busqueda));

let salida = document.getElementById("salida");

salida.value = scoreBoard;



