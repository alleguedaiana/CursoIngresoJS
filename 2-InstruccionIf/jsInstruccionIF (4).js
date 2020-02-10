function mostrar()
{
//tomo la edad  
var edad;
edad= parseInt(document.getElementById("edad").value);

if(edad>=13 && edad<=17)
    {
        alert("Es adolescente")
    }
/*tambien se puede hacer de la siguiente manera, a pensamiento inverso: 
if (!(edad <13 || edad >17))
{
    alert("Es adolescente");
}

}//FIN DE LA FUNCIÓN