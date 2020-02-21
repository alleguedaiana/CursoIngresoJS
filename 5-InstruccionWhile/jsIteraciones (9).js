function mostrar()
{

	var flag=0;
	var numero;	
	var maximo;
	var minimo;
	var seguir='s';
	// declarar variables
	do
	{
		numero=parent(prompt("ingrese un número: "));
		while (isNaN(numero))
		{
			numero=parseInt(prompt("Eso no es un número. Por favor ingrese un número nuevamente"));
		}
		if (flag == 0 || numero > maximo )
		{
			maximo= numero;
		}
		if (flag == 0 || numero < minimo)
		{
			minimo = numero;
			flag = 1;
		}
		seguir= prompt("Quiere ingresar otro número?");
	}while (seguir=="s")





}//FIN DE LA FUNCIÓN