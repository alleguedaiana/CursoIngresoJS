/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     var cantidad;
     var marca;
     var precio;
     var preciodescuento;
     var impuesto;
    
     cantidad= parseInt(document.getElementById("Cantidad").value);
     marca= parseInt(document.getElementById("Marca").value);

     precio= cantidad*35;

     if (cantidad>=6)
     {
        preciodescuento=precio-(precio*50/100);
        preciodescuento=parseInt(preciodescuento);
        document.getElementById("precioDescuento").value = preciodescuento;
     }
    switch(cantidad)
    {
    
        case 5:
        
            if(marca == "ArgentinaLuz")
            {
                preciodescuento=precio-(precio*40/100);
                preciodescuento=parseInt(preciodescuento);
                document.getElementById("precioDescuento").value = preciodescuento;
            }
            else 
            {
                preciodescuento=precio-(precio*30/100);
                preciodescuento=parseInt(preciodescuento);
                document.getElementById("precioDescuento").value = preciodescuento;
            } 
            break;

        case 4:
            if (marca=="FelipeLamparas")
            {
                preciodescuento=precio-(precio*25/100);
                preciodescuento=parseInt(preciodescuento);
                document.getElementById("precioDescuento").value = preciodescuento;
            }

            else if (marca== "ArgentinaLuz")
            {
                preciodescuento=precio-(precio*25/100);
                preciodescuento=parseInt(preciodescuento);
                document.getElementById("precioDescuento").value = preciodescuento;
            }        
            else 
            {
                preciodescuento=precio-(precio*20/100);
                preciodescuento=parseInt(preciodescuento);
                document.getElementById("precioDescuento").value = preciodescuento;
            }
            break;

        case 3:
                
            if (marca=="ArgentinaLuz")
            {
                preciodescuento=precio-(precio*15/100);
                preciodescuento=parseInt(preciodescuento);
                document.getElementById("precioDescuento").value = preciodescuento;
            }
            else if (marca="FelipeLamparas")
                {
                    preciodescuento=precio-(precio*10/100);
                    preciodescuento=parseInt(preciodescuento);
                    document.getElementById("precioDescuento").value = preciodescuento;
                }

            else
                {
                    preciodescuento=precio-(precio*5/100);
                    preciodescuento=parseInt(preciodescuento);
                    document.getElementById("precioDescuento").value = preciodescuento;
                }
                break;
            

    }
     
    if (preciodescuento>120)
    {
        impuesto=preciodescuento*10/100;
        alert("IIBB Usted pago "+impuesto);
    }
}
