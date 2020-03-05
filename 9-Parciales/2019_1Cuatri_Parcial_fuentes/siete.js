function mostrar()
{
    var alturas;
    var sexo;
    var promedio;
    var alturaMin;
    var sexoMin;
    var contadorMujeres=0;
    var acumuladorAltura=0;

    for (var i=0; i<5; i++)
    {
        alturas=parseInt(prompt("Ingrese la altura en centimetros (entre 0 y 250)"));
        while(alturas<0 || alturas >250 || isNaN(alturas))
        {
            alturas=parseInt(prompt("Invalido. Por favor, ingrese la altura en centimetros (entre 0 y 250"));
        }

        sexo=prompt("Ingrese el sexo del jugador (f o m)").toLowerCase();
        while(sexo != "f" && sexo != "m")
        {
            sexo=prompt("Invalido. Ingrese el sexo del jugador (f o m)").toLowerCase();
        }

        if(i==0 || alturas<alturaMin)
        {
            alturaMin=alturas;
            sexoMin=sexo;
        }

        if (sexo=="f" && alturas>190)
        {
            contadorMujeres=contadorMujeres+1;
        }

        acumuladorAltura=acumuladorAltura+alturas;
    }
    promedio=acumuladorAltura/5;

    alert("a) El promedio de las alturas totales: "+ promedio + 
         " \nb) La altura más baja: " +alturaMin + " y el sexo de esa persona: " + sexoMin + 
            "\nc) La cantidad de muheres que su altura supere los 190 centimetros: " + contadorMujeres)
}
/*Realizar el algoritmo que permita el ingreso por
 prompt de las alturas en centimetros(validar entre 0 y 250) , 
 el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de muheres que su altura supere los 190 centimetros.*/