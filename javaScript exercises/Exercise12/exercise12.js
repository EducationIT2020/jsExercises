/*12. Realiza un script que muestre la serie de fibonacci hasta un
número entre 1 y 100 pedido por teclado*/
var iteraciones = prompt("Ingrese la cantidad de veces que desea ejecutar fibonacci");
if(iteraciones < 101 && iteraciones > 0)
{
    var a=0;
    var b=1;
    for( i=0 ; i < iteraciones ; i++)   
    {
        var aux = a;
        a = b;
        b = aux + b;
        document.write( a + " <br>");
    }
}
else
{
    alert("El número ingresado debe estar entre 1 y 100");
}
