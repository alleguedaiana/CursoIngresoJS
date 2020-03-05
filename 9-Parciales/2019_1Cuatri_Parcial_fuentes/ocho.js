function mostrar()
{
    var letra;
    var numero;
    var contadorPar=0;
    var contadorImpar=0;
    var contadorCeros=0;
    var acumuladorPos=0;
    var contadorPos=0;
    var promedio=0;
    var acumuladorNeg=0;
    var numeroMax;
    var letraMax;
    var numeroMin;
    var letraMin;
    var seguir;
    var flag=0;

    do
    {
        letra=prompt("Por favor ingrese una letra")
        while(!((letra>="A" && letra<="Z") || (letra>="a" && letra<= "z")))
        {
            letra=prompt("Inválido.Por favor ingrese una letra")
        }

        numero=parseInt(prompt("Ingrese un número entre -100 y 100"));
        while(numero<-100 || numero>100 || isNaN(numero))
        {
            numero=parseInt(prompt("Error. Ingrese un número entre -100 y 100"));
        }

        if (numero%2==0)
        {
            contadorPar=contadorPar+1;
        }
        else
        {
            contadorImpar=contadorImpar+1;
        }

        if (numero==0)
        {
            contadorCeros=contadorCeros+1;
        }

        if(numero>0)
        {
            acumuladorPos=acumuladorPos+numero;
            contadorPos=contadorPos+1;
        }
        else
        {
            acumuladorNeg=acumuladorNeg+numero;
        }

        if (flag==0 || numero>numeroMax)
        {
            numeroMax=numero;
            letraMax=letra;
        }

        if (flag==0 || numero<numeroMin)
        {
            numeroMin=numero;
            letraMin=letra;
            flag=1;
        }
        seguir=prompt("Quiere continuar?").toLowerCase();
    }while(seguir=="s");

    if(contadorPos !=0)
    {
        promedio=acumuladorPos/contadorPos;
    }
document.write("a) La cantidad de números pares: " + contadorPar + "</br>");
document.write("b) La cantidad de números impares: " + contadorImpar + "</br>");
document.write("c) La cantidad de ceros:  " + contadorCeros + "</br>");
document.write("d) El promedio de todos los números positivos ingresados: " + promedio + "</br>");
document.write("e) La suma de todos los números negativos: " + acumuladorNeg + "</br>");
document.write("El número y la letra del máximo: " + numeroMax + letraMax + "</br>");
document.write("El número y la letra del mínimo: " + numeroMin + letraMin + "</br>");

}
/*Realizar el algoritmo que permita iterar el ingreso de dos datos, 
una letra y un número entre -100 y 100 (validar) hasta que el usuario 
quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.*/