function mostrar()
{
    var numero1;
    var numero2;
    var resta;
    var suma;

    numero1=parseInt(prompt("Ingrese un número"));
    numero2=parseInt(prompt("Ingrese otro número"));

    if (numero1==numero2)
    {
        alert("El número es "+ numero1 + numero2);
    }

    else if (numero1>numero2)
    {
        resta= numero1-numero2;
        alert("El primer numero es mayor al segundo. Su resta es: " + resta);
    }

    else
    {
        suma= numero1+numero2;
        alert("El primer numero es menor al segundo. Su suma es: " + suma);

        if (suma>10)
        {
            alert("La suma es " + suma + "y supero el 10");
        }
    }

}
