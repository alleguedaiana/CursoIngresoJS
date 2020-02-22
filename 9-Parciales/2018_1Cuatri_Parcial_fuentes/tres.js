function mostrar()
{
    var precio;
    var descuento;
    var preciofinal;

    precio= parseInt(prompt("Ingrese el precio"));
    descuento= parseInt(prompt("Ingrese el descuento"));

    preciofinal=precio-(precio*descuento/100)

    document.getElementById("elPrecioFinal").value=preciofinal;
}
