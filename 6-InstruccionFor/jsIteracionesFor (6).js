function mostrar()
{
var numero;
var contadorPar=0;


numero=parseInt(prompt("Ingrese un numero: "));
while (isNaN(numero))
{
    numero=parseInt(prompt("Error. Ingrese un numero: "));
}
for (var i=1; i<=numero; i++)
{
    if (i %2==0)
    {
        console.log(i);
        contadorPar=contadorPar+1;
    }
}
console.log("Numeros pares encontrados:"+contadorPar);


}//FIN DE LA FUNCIÓN