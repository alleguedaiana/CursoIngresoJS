/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
var nombre;
//cuando se trata de guardar el valor de una caja de texto traida por html se le coloca .value
nombre= document.getElementById("elNombre").value;

alert(nombre);

}


