function mostrar()
{
    var nombrePais;
    var habitantes;
    var temperaruta;
    var contadorPar=0;
    var paisMenosHabitantes;
    var contadorPaises40=0;
    var promedio;
    var temperarutaMinima;
    var paisTemperaturaMinima;
    var acumuladorHabitantes=0;
    var contador=0;
    var seguir;

    do
    {
        nombrePais=prompt("Ingrese el nombre de un país");
        habitantes=parseInt(prompt("Ingrese la cantidad de habitantes (entre 1 y 7000"));
        while(habitantes<1 || habitantes>7000 || isNaN(habitantes))
        {
            habitantes=parseInt(prompt("Invalido.Ingrese la cantidad de habitantes (entre 1 y 7000"));
        }

        temperaruta=parseInt(prompt("Ingrese la temperatura (entre -50 y 50"));
        while(temperaruta<-50 || temperaruta>50 || isNaN(temperaruta))
        {
            temperaruta=parseInt(prompt("Invalido. Ingrese la temperatura (entre -50 y 50"));
        }

        if(temperaruta%2==0)
        {
            contadorPar=contadorPar+1;
        }

        if(contador==0 || habitantes<paisMenosHabitantes)
        {
            paisMenosHabitantes=nombrePais;
        }

        if (temperaruta>40)
        {
            contadorPaises40=contadorPaises40+1;
        }

        if (contador==0 || temperaruta<temperarutaMinima)
        {
            temperarutaMinima=temperaruta;
            paisTemperaturaMinima=nombrePais;
        }

        contador=contador+1;
        acumuladorHabitantes=acumuladorHabitantes+habitantes;
            
        seguir=prompt("Quiere continuar?");
    }while(seguir=="s");

    promedio=acumuladorHabitantes/contador;

    document.write("a) La cantidad de temperaturas pares: "+contadorPar+ "</br>");
    document.write("b) El nombre del pais con menos habitantes: "+paisMenosHabitantes+ "</br>");
    document.write("c) la cantidad de paises que superan los 40 grados: "+contadorPaises40+ "</br>");
    document.write("d) el promedio de habitantes entre los paises ingresados: "+ promedio+ "</br>");
    document.write("a) La cantidad de temperaturas pares: "+contadorPar+ "</br>");
    document.write("f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura: "+ temperarutaMinima + paisTemperaturaMinima);
}

/*Realizar el algoritmo que permita ingresar el nombre de un país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50)
 hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre del pais con menos habitantes
c) la cantidad de paises que superan los 40 grados.
d) el promedio de habitantes entre los paises ingresados
f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.*/
