function mostrar()
{

	var numero = parseInt (prompt("ingrese un número entre 0 y 9."));
	//falto aclarar que tampoco sea un texto
	while (numero<0 || numero>9 || isNaN(numero))
	{
		numero= parseInt (prompt("El numero debe ser entre 0 y 9. Ingrese nuevamente el numero: "));
	}
	
	document.getElementById("Numero").value=numero;

}//FIN DE LA FUNCIÓN