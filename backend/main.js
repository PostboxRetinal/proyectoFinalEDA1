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
let scoreBoard = calcularScoreBoard(cadena);

// se asignan eventos
btnListar.addEventListener("click", calcularScoreBoard(cadena));

let salida = document.getElementById("salida");

salida.value = scoreBoard;