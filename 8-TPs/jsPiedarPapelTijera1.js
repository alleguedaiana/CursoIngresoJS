/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var numero;
var piedra=1;
var papel=2;
var tijera=3;

function comenzar()
{
	eleccionMaquina=Math.floor(Math.random()*(3-1)+1);

}//FIN DE LA FUNCIÓN

function piedra()
{

    if(eleccionMaquina==1)
    {
        alert("empate!");
    }
    else if (eleccionMaquina==tijera)
    {
        alert("ganaste!");
    }
    else
    {
        alert("perdiste");
    }

}//FIN DE LA FUNCIÓN

function papel()
{
    if(eleccionMaquina==papel)
    {
        alert("empate!");
    }
    else if (eleccionMaquina==piedra)
    {
        alert("ganaste!");
    }
    else
    {
        alert("perdiste");
    }

}//FIN DE LA FUNCIÓN

function tijera()
{
	if(eleccionMaquina==tijera)
    {
        alert("empate!");
    }
    else if (eleccionMaquina==papel)
    {
        alert("ganaste!");
    }
    else
    {
        alert("perdiste");
    }

}//FIN DE LA FUNCIÓN