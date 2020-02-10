function mostrar()
{
//tomo la edad  
var edad;
edad=parseInt(document.getElementById("edad").value);

if(edad>=18)
{
    alert("Es mayor de edad");
}
else if(edad>=13 && edad<=17)
{
    alert("Es adolescente");
}
else
{
    alert("Es un niño");
}

//Puedo poner cuanto Else If quiera hasta que queden dos opciones y tenga que utilizar el else. 
}//FIN DE LA FUNCIÓN