function mostrar()
{
var numero;
var contadorDiv=0;


numero=parseInt(prompt("Ingrese un numero: "));
while (isNaN(numero))
{
    numero=parseInt(prompt("Error. Ingrese un numero: "));
}
for (var i=1; i<=numero; i++)
{
    if (numero % i==0)
    {
        console.log(i);
        contadorDiv=contadorDiv+1;
    }
}
console.log("Numeros divisores encontrados:"+contadorDiv);
}//FIN DE LA FUNCIÓN