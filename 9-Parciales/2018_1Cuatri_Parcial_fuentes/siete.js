function mostrar()
{
    var numero;
    var notas=0;
    var sexo;
    var contador=0;
    var promedio;
    var notaminima;
    var sexonotaminima;
    var contadorvaron=0;

    while (contador<5)
    {
        numero= parseInt(prompt("Ingresar una nota entre 0 y 10"));
        while (numero < 0 || numero > 10 || isNaN(numero))
        {
            numero= parseInt(prompt("Nota incorrecta. Ingrese nuevamente"));
        }

        sexo= prompt("Ingresar f o m según sexo del alumno").toLowerCase();
        while (sexo != "m" && sexo != "f")
        {
            sexo= prompt("Sexo incorrecto. Por favor, ingresar nuevamente").toLowerCase();
        }

        if (contador== 0 || numero <notaminima)
        {
            notaminima=numero;
            sexonotaminima=sexo;
        }

        if (sexo=="m" && numero >= 6)
        {
            contadorvaron=contadorvaron+1;
        }

        contador=contador+1;
        notas= notas + numero;
    }

    promedio= notas/contador;
    alert("El promedio de las notas totales son: "+ promedio 
            +"\n La nota más baja es: " + notaminima 
            + "y su sexo " + sexonotaminima
            +"\n La cantidad de varones con nota igual o mayor a 6 es: "+contadorvaron);


}
