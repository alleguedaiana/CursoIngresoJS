function mostrar()
{

	var flag=0;
	var positivo=0;
	var negativo=1;
	var seguir;
	var numero;

	do
	{
		numero=parseInt(prompt("Ingrese un numero"));
		while (isNaN(numero))
		{
			numero=parseInt(prompt("Error. Ingrese un número"));
		}

		if(numero<0)
		{
			negativo= negativo*numero;
			flag = 1;
		}

		else
		{
			positivo=positivo+numero;
		}

		seguir= prompt("Quiere ingresar otro número?");

	} while (seguir =="s");

	if (flag == 0)
	{
		negativo=0;
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN