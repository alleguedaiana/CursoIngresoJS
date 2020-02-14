function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	var maximo=10;
	var minimo=1;

	numero=Math.floor(Math.random()*((maximo+1)-minimo)+ minimo);

	if(numero>=9)
	{
		alert("Su nota es "+numero+ ". Excelente");
	}
	else if(numero>=4)
	{
		alert("Su nota es "+numero+" . Aprobo");
	}
	else
	{
		alert("Su nota es "+numero+ " . Vamos, la proxima se puede");	
	}

}//FIN DE LA FUNCIÓN