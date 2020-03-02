function mostrar()
{
    var marca;
    var peso;
    var contador=0;
    var temperatura;
    var contPares=0;
    var marcaPesada;
    var contBajoCero=0;
    var promedio; 
    var acumuladorPeso=0;
    var pesoMaximo;
    var pesoMinimo;
    var seguir;
    var flag=0;

    //mientras usuario quiera

    do
    {
        //pido datos 

        marca= prompt("Por favor, ingresar la marca del producto");
        peso= parseInt(prompt("Por favor, ingrese el peso del producto entre 1 y 100"));

        while( peso<1 || peso>100 || isNaN(peso))
        {
            peso= parseInt(prompt("Incorrecto. Por favor, ingrese un peso entre 1 y 100"));
        }

        temperatura= parseInt(prompt("Por favor, ingrese una temperatura entre -30 y 30"));

        while( temperatura<-30 || temperatura>30 || isNaN(temperatura) )
        {
            temperatura= parseInt(prompt("Incorrecto. Por favor, ingrese una temperatura entre -30 y 30"));
        }

        //analizo datos
        //a) La cantidad de temperaturas pares.

        if ((temperatura%2)==0)
        {
            contPares=contPares+1;
        }

        //b) La marca del producto más pesado que no sea congelado.

        if ((flag==0 || peso>pesoMaximo) && temperatura>0)
        {
            pesoMaximo=peso;
            marcaPesada=marca;
            flag=1;
        }

        //c) La cantidad de productos que se conservan a menos de 0 grados.

        if (temperatura<0)
        {
            contBajoCero=contBajoCero+1;
        }

        //f) El peso máximo y el mínimo.*

        if(contador==0 || peso>pesoMaximo)
        {
            pesoMaximo=peso;
        }

        if (contador==0 || peso<pesoMinimo)
        {
            pesoMinimo=peso;
        }

        contador=contador+1;
        acumuladorPeso=acumuladorPeso+peso;
        seguir= prompt("Quiere agregar más información?").toLowerCase();
    }while (seguir=="s");


    // d) El promedio del peso de todos los productos.
    promedio=acumuladorPeso/contador;


document.write("A) Cantidad de temperaturas pares: "+contPares+"</br>"+
                "B) Marca del producto màs pesado: " + marcaPesada+ "</br>"+
                 "C) Cantidad de productos que se conservan bajo 0: " + contBajoCero + "</br>"+
                 "Promedio de peso de todos los productos: " + promedio + "</br>"+
                 "Peso máximo: " + pesoMaximo + "</br>"+
                 "Peso minimo: " + pesoMinimo + "</br>")

}

/*a) La cantidad de temperaturas pares.
b) La marca del producto más pesado que no sea congelado.
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.*/
