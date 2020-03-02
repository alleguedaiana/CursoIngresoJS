function mostrar()
{
    var nombreAnimal;
    var pesoAnimal;
    var tempAnimal;
    var contadorPar=0;
    var animalPesado;
    var pesoMaximo;
    var temperaturaPesado;
    var contadorBajoCero=0;
    var promedio;
    var maximoBajoCero;
    var minimoBajoCero;
    var seguir;
    var contador=0;
    var acumuladorPeso=0;

    do
    {
        nombreAnimal=prompt("Ingresar el nombre del animal");
        pesoAnimal=parseInt(prompt("Ingrese el peso del animal entre 1 y 1000"));
        while(pesoAnimal<1 || pesoAnimal>1000 || isNaN(pesoAnimal))
        {
            pesoAnimal=parseInt(prompt("Error. Ingrese el peso del animal entre 1 y 1000"));
        }

        tempAnimal= parseInt(prompt("Ingrese la temperatura del animal entre -30 y 30"));
        while(pesoAnimal<-30 || pesoAnimal>30 || isNaN(pesoAnimal))
        {
            pesoAnimal=parseInt(prompt("Error. Ingrese la temperatura del animal entre -30 y 30"));
        }

            console.log("hola")
        //a) La cantidad de temperaturas pares. 
        if(tempAnimal%2==0)
        {
            contadorPar++;
        }

        //b) El nombre y temperatura del animal más pesado 
        if(contador==0 || pesoAnimal>pesoMaximo)
        {
            pesoMaximo=pesoAnimal;
            animalPesado=nombreAnimal;
            temperaturaPesado=tempAnimal;
        }
        //c) La cantidad de animales que viven a menos de 0 grados. 

        if(tempAnimal<0)
        {
            contadorBajoCero++;
        }

        //f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.

        if(contador == 0 || pesoAnimal<minimoBajoCero && tempAnimal <0 )
        {
            minimoBajoCero=pesoAnimal;
        }

        if (contador==0 || pesoAnimal>maximoBajoCero && tempAnimal <0)
        {
            maximoBajoCero=pesoAnimal;
        }

        contador++;
        acumuladorPeso=acumuladorPeso+pesoAnimal;
        seguir= prompt("Quiere continuar?").toLowerCase();

    }while(seguir=="s");
    promedio=acumuladorPeso/contador;

    document.write("a) La cantidad de temperaturas pares: " + contadorPar + "</br>");
    document.write("b) El nombre : " + animalPesado + "temperatura del animal más pesado: "+ temperaturaPesado +"</br>");
    document.write("c) La cantidad de animales que viven a menos de 0 grados: " + contadorBajoCero + "</br>");
    document.write("d) El promedio del peso de todos los animales: " + promedio + "</br>");
    document.write("f) El peso máximo cuyas temperaturas sean bajo cero. " + maximoBajoCero + "</br>");
    document.write("f) El peso mínimo cuyas temperaturas sean bajo cero. " + minimoBajoCero + "</br>");

}
/*Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico, 
el peso el cual debe ser entre 1 y 1000 y 
la temperatura del hábitat (entre -30 y 30) hasta que el usuario quiera e informar al terminar 
el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) El nombre y temperatura del animal más pesado 
c) La cantidad de animales que viven a menos de 0 grados. 
d) El promedio del peso de todos los animales.	
f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.*/