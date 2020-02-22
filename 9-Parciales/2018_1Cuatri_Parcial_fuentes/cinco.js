function mostrar()
{
    var planeta;

    planeta= prompt("Ingrese el nombre de un planeta");
    switch(planeta.toLowerCase())
        {
            case "tierra":
                alert("Acá vivimos");
                break;
            
            case "mercurio":
            case "venus":
            case "marte": 
                alert("Acá hace más calor");
                break;

            case "jupiter":
            case "saturno":
            case "urano":
            case "neptuno":
            case "pluton":
                alert("Acá hace más frío");
                break;

            default:
                alert("El planeta no es válido");
        }
}
