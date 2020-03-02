function mostrar()
{
    var nombre;
    var edad;
    var sexo;
    var notafinal;
    var seguir;
    var contadorVaronAprobado=0;
    var acumuladorMenorEdad=0;
    var contadorMenorEdad=0;
    var promedioMenorEdad=0;
    var acumuladorAdolescente=0;
    var contadorAdolescente=0;
    var promedioAdolescente=0;
    var acumuladorMayores=0;
    var contadorMayores=0;
    var promedioMayores=0;
    var acumuladorVaron=0;
    var contadorVaron=0;
    var promedioVaron=0;
    var acumuladorMujer=0;
    var contadorMujer=0;
    var promedioMujer=0;
    var flag=0;
    var notaMayorAdolescente;
    var sexoNotaMayor;
    var nombreNotaMayor;

    do
    {
        nombre=prompt("Ingrese el nombre del alumno").toLowerCase();

        edad= parseInt(prompt("Ingrese la edad del alumno"));
        while(isNaN(edad))
        {
            edad= parseInt(prompt("Dato inválido. Ingrese la edad del alumno"));
        }

        sexo=prompt("Ingrese sexo del alumno (f o m)").toLowerCase();
        while(sexo !="f" && sexo !="m")
        {
            sexo=prompt("Inválido. Ingrese sexo del alumno (f o m)").toLowerCase();
        }

        notafinal=parseInt(prompt("Ingrese nota final"));
        while(isNaN(notafinal))
        {
            notafinal=parseInt(prompt("Dato invalido.Ingrese nota final"));
        }

        //a) La cantidad de varones aprobados 
        if(sexo=="m" && notafinal>= 4)
        {
            contadorVaronAprobado=contadorVaronAprobado+1;
        }

        //b) El promedio de notas de los menores de edad 
        if (edad >= 18)
        {
            acumuladorMayores=acumuladorMayores+notafinal;
            contadorMayores=contadorMayores+1;
        }

        //c) El promedio de notas de los adolescentes. 
        else if (edad>=13 && edad<=17)
        {
            acumuladorAdolescente=acumuladorAdolescente+notafinal;
            contadorAdolescente=contadorAdolescente+1;
        }

        //d) El promedio de notas de los mayores	
        else 
        {
            acumuladorMenorEdad=acumuladorMenorEdad+notafinal;
            contadorMenorEdad=contadorMenorEdad+1;
        }

        //f) El promedio de notas por sexo masculino y femenino*/

        if (sexo=="m")
        {
            acumuladorVaron=acumuladorVaron+notafinal;
            contadorVaron=contadorVaron+1;
        }

        else 
        {
            acumuladorMujer=acumuladorMujer+notafinal;
            contadorMujer=contadorMujer+1;
        }

        if((flag==0 || notafinal>notaMayorAdolescente && edad>=13) && edad <=17)
        {
            notaMayorAdolescente=notafinal;
            sexoNotaMayor=sexo;
            nombreNotaMayor=nombre;
            flag=1;
        }
        seguir= prompt("Quiere continuar?").toLowerCase();
    }while (seguir=="s");

//b) El promedio de notas de los menores de edad 
if(contadorMenorEdad!=0)
{
    promedioMenorEdad=acumuladorMenorEdad/contadorMenorEdad;
}

//c) El promedio de notas de los adolescentes. 
if(contadorMenorEdad!=0)
{promedioAdolescente=acumuladorAdolescente/contadorAdolescente;}

//d) El promedio de notas de los mayores	
if(contadorMenorEdad!=0)
{promedioMayores=acumuladorMayores/contadorMayores;}

//f) El promedio de notas por sexo masculino
if(contadorMenorEdad!=0)
{promedioVaron=acumuladorVaron/contadorVaron;}

//f) El promedio de notas por sexo femenino
if(contadorMenorEdad!=0)
{promedioMujer=acumuladorMujer/contadorMujer;}

document.write("a) La cantidad de varones aprobados : "+ contadorVaronAprobado + "</br>");
document.write("b) El promedio de notas de los menores de edad : "+ promedioMenorEdad + "</br>");
document.write("c) El promedio de notas de los adolescentes : "+ promedioAdolescente + "</br>");
document.write("d) El promedio de notas de los mayores : "+ promedioMayores + "</br>");
document.write("f) El promedio de notas por sexo masculino : "+ promedioVaron + "</br>");
document.write("f) El promedio de notas por sexo femenino : "+ promedioMujer + "</br>");

if(contadorAdolescente==0)
{
    document.write("No se ingreso ningun adolescente");
}
document.write("g) Nombre del adolescente con mayor nota: "+ nombreNotaMayor +" y sexo: " + sexoNotaMayor + "</br>");

}
/*Realizar el algoritmo que permita ingresar el nombre de un estudiante, la edad (validar) , 
el sexo (validar) y la nota del final (validar) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de varones aprobados 
b) El promedio de notas de los menores de edad 
c) El promedio de notas de los adolescentes. 
d) El promedio de notas de los mayores	
f) El promedio de notas por sexo masculino y femenino*/