function mostrar()
{

	var flag=0;
	var numero;
	var positivo=0;
	var contadorpositivo=0;
	var negativo=1;
	var contadornegativo=0;
	var contadorcero= 0;
	var seguir="s";
	//declarar contadores y variables 
do 
{
	numero= parseInt(prompt("Ingrese un numero:"))
	while (isNaN(numero))
	{
		numero= parseInt(prompt("Error. Por favor, ingrese un número: "))
	}

	if (numero<0)
	{
		negativo=negativo+numero;
		contadornegativo= contadornegativo+1;

	}
	else if (numero==0) 
	{
		contadorcero= contadorcero+1;
	}
	else
	{
		positivo=positivo+numero;
		contadorpositivo= contadorpositivo+1;
	}

seguir= prompt ("Quiere ingresar otro número?")
} while(seguir=="s");

document.write(
	" 1- La suma de negativos es: " + negativo + "</br>" + 
	"2- La suma de positivos es: </br>"+positivo+
	"3- La cantidad de negativos es "+contadornegativo)+

}//FIN DE LA FUNCIÓN