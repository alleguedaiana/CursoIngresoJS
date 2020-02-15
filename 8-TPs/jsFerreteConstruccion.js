/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo;
var ancho;
var perimetro;

largo= parseInt(document.getElementById("Largo").value);
ancho= parseInt(document.getElementById("Ancho").value);
perimetro= (((largo+ancho)*2)*3);

alert("Debe comprar "+perimetro+" m de alambre");
}
function Circulo () 
{
var radio;
var perimetro;

radio= parseInt(document.getElementById("Radio").value);
perimetro= (2*3.14*radio)*3;

alert("Debe comprar "+perimetro+ "m de alambre");
}
function Materiales () 
{
var largo;
var ancho;
var perimetro;
var cal;
var arena;

largo= parseInt(document.getElementById("Largo").value);
ancho= parseInt(document.getElementById("Ancho").value);

perimetro= (largo+ancho)*2;
cal= perimetro*3;
arena= perimetro*2;

alert("Necesita "+cal+"bolsas de cal y "+arena+" bolsa de arena");

}