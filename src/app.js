/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const palos = ["♦", "♥", "♠", "♣"];
  const numeros = [
    "A",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let randomPalos = Math.floor(Math.random() * palos.length);
  let randomNumeros = Math.floor(Math.random() * numeros.length);

  let returnPalotop = (document.getElementById("palotop").innerHTML =
    palos[randomPalos]);

  let returnNumber = (document.getElementById("number").innerHTML =
    numeros[randomPalos]);

  let returnPalobottom = (document.getElementById("palobottom").innerHTML =
    palos[randomPalos]);

  return {
    returnPalotop,
    returnNumber,
    returnPalobottom
  };
};
