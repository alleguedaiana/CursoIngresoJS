function mostrar()
{

var sexo = prompt("ingrese f ó m .").toLowerCase();
while (sexo !="f" && sexo !="m")
{
    sexo= prompt("Por favor ingrese si es f o m").toLowerCase();
}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN