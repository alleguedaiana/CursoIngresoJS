/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero1;
	var numero2;
	var resultado;

	numero1= document.getElementById("numeroUno").value;
	numero1=parseInt(numero1);

	numero2= document.getElementById("numeroDos").value;
	numero2= parseInt(numero2);

	resultado= numero1+numero2;


	alert("La suma es "+ resultado);

}

function restar()
{
	var numero1;
	var numero2;
	var resultado;

	numero1= document.getElementById("numeroUno").value;
	numero1=parseInt(numero1);

	numero2= document.getElementById("numeroDos").value;
	numero2= parseInt(numero2);

	resultado= numero1-numero2;

	alert("La resta es "+ resultado);
	
}

function multiplicar()
{ 
	var numero1;
	var numero2;
	var resultado;

	numero1= document.getElementById("numeroUno").value;
	numero1=parseInt(numero1);

	numero2= document.getElementById("numeroDos").value;
	numero2= parseInt(numero2);

	resultado= numero1*numero2;

	alert("La multiplicaciòn es "+ resultado);
}

function dividir()
{
	var numero1;
	var numero2;
	var resultado;

	numero1= document.getElementById("numeroUno").value;
	numero1=parseInt(numero1);

	numero2= document.getElementById("numeroDos").value;
	numero2= parseInt(numero2);

	resultado= numero1/numero2;

	alert("La divisiòn es "+ resultado);	
}

