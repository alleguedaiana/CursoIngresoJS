/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var numero;
var contadorIntentos=0;

function comenzar()
{
	numeroSecreto=Math.floor(Math.random()*(100-1)+1);
	//Genero el número RANDOM entre 1 y 100
	numero=0;
	document.getElementById("numero").value=numero;
	contadorIntentos=0;
	document.getElementById("intentos").value=contadorIntentos;
	console.log(numeroSecreto);
}

function verificar()
{
	numero=parseInt(document.getElementById("numero").value);

	contadorIntentos=contadorIntentos+1;
	
	if (numero== numeroSecreto)
	{
		switch(contadorIntentos)
		{
			case 1:
				alert("Ustes es un psìquico");
				break;

			case 2:
				alert("Excelente percepciòn");
				break;
			case 3:
				alert("Esto es suerte");
				break;
			case 4:
				alert("Excelente tecnica");
				break;
			case 5:
				alert("Ustes està en la media");
				break;
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
				alert("Falta tècnica");
				break;
			default:
				alert("Afortunado en el amor");
		}
	}
	else if (numero>numeroSecreto)
  {
    alert("Se paso!");
  }

  else
  {
    alert("Falta!");
  }
	document.getElementById("intentos").value=contadorIntentos;

}