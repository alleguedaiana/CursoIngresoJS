/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importe;
    var Descuento;

    importe=parseInt(document.getElementById("importe").value);

    descuento= importe-(importe*25/100);

    document.getElementById("resultado").value= descuento;

}

/* También se podría haber hecho: 
var sueldo;
var aumento;
var sueldofinal;

sueldo=parseInt(document.getElementById("sueldo").value);
aumento=sueldo*10/100;
sueldo final= sueldo+aumento;
document.getElementById("resultado").value=sueldo final;