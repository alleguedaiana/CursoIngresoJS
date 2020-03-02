function mostrar()
{
    var numero;
    var letra;
    var contPares=0;
    var contImpares=0;
    var contCeros=0;
    var positivos=0;
    var contPositivos=0;
    var negativos=0;
    var contNegativos=0;
    var contador=0;
    var promedio=0;
    var numMinimo;
    var letraMinimo;
    var numMaximo;
    var letraMaximo;
    var seguir;

   do
   {
        letra= prompt("Ingrese una letra");
        while( !((letra>= "A" && letra<="Z") || (letra>= "a" && letra<="z") ))
        {
            letra= prompt("No es una letra. Ingrese una letra")
        }

        numero=parseInt(prompt("Ingrese un número entre -100 y 100"));
        while (numero < -100 || numero > 100 || isNaN (numero) )
        {
            numero=parseInt(prompt("Error. Ingrese un número entre -100 y 100"));
        }

        if(numero%2==0)
        {
            contPares=contPares+1;
        }

        else
        {
            contImpares=contImpares+1;
        }

        if(numero==0)
        {
            contCeros=contCeros+1;
        }

        else if(numero>0)
        {
            positivos=positivos+numero;
            contPositivos=contPositivos+1;

        }
        else
        {
            negativos=negativos+numero;
            contNegativos=contNegativos+1;
        }

        if(contador==0 || numero>numMaximo)
        {
            numMaximo=numero;
            letraMaximo=letra;

        }
        if(contador==0 || numero<numMinimo)
        {
            numMinimo=numero;
            letraMinimo=letra;
        }

        seguir=prompt("Quiere seguir?");

        contador=contador +1;

   }while(seguir== "s");
    
   if (contPositivos!=0)
   {
    promedio=positivos/contPositivos;
   }

   document.write("a) Cantidad de numeros pares: "+ contPares + "</br>"
                    + "b) Cantidad de números impares: " + contImpares + "</br>"
                    + "c) Cantidad de ceros: " + contCeros + "</br>"
                    + "Promedio de los numeros positivos ingresados: " + promedio + "</br>"
                    + "Suma de los negativos: "+ negativos + "</br>"
                    + "Numero máximo: " + numMaximo + "y su letra es: " + letraMaximo + "</br>"
                    + "Numero minimo: " + numMinimo + "y su letra es: " + letraMinimo);
}
/* 
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.
*/