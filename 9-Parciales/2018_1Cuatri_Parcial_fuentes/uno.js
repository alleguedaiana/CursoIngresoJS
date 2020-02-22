
function mostrar()
{
    var ancho;
    var largo; 
    var area;

    ancho= parseInt(prompt("Ingrese el ancho del rectangulo"));

    largo= parseInt(prompt("Ingrese el largo del rectangulo"));

    area= 2*(ancho+largo);

    alert("El perímetro del rectángulo es: "+area);
    
}
