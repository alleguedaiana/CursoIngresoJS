function mostrar()
{
var numero;
var negativos=0;
var positivos=0;
var contadorPositivos=0;
var contadorNegativos=0;
var contadorCeros=0;
var contadorPares=0;
var promedioPositivo=0;
var promedioNegativo=0;
var diferencia;
var seguir;

do
{
	numero=parseInt(prompt("Ingrese un numero"));

	while (isNaN(numero))
	{
		numero=parseInt(prompt("Error. Ingrese un numero"));
	}
	
	if (numero > 0)
	{
		positivos=positivos+numero;
		contadorPositivos= contadorPositivos+1;
	}
	else if (numero == 0)
	{
		contadorCeros=contadorCeros+1;
	}

	else 
	{
		negativos=negativos+numero;
		contadorNegativos=contadorNegativos+1;
	}

	if (numero%2==0)
	{
		contadorPares=contadorPares+1;
	}

	seguir=prompt("Quiere agregar otro numero?").toLowerCase();
}while(seguir =="s");

if(contadorPositivos > 0)
{
	promedioPositivo= positivos/contadorPositivos;
}

if (contadorNegativos > 0)
{
	promedioNegativo= negativos/contadorNegativos;
}

diferencia= positivos-negativos;

document.write("1- Suma de negativos: "+ negativos + "</br>" 
				+ "2- Suma de positivos: "+ positivos + "</br>" 
				+ "3- Cantidad de positivos:" + contadorPositivos + "</br>"
				+ "4- Cantidad de negativos: " + contadorNegativos + "</br>"
				+ "5- Cantidad de ceros: " + contadorCeros + "</br>"
				+ "6- Cantidad de número pares: " + contadorPares + "</br>"
				+ "7- Promedio de positivos: "+ promedioPositivo + "</br>"
				+ "8- Promedio de negativos: " + promedioNegativo + "</br>"
				+ "9- Diferencia entre positivos y negativos: " + diferencia);

}//FIN DE LA FUNCIÓN
/*1-Suma de los negativos. 
2-Suma de los positivos. 
3-Cantidad de positivos. 
4-Cantidad de negativos. 
5-Cantidad de ceros. 
6-Cantidad de números pares. 
7-Promedio de positivos. 
8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos).*/