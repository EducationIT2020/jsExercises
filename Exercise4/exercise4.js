/*4. Crea script para generar pirámide siguiente con los números del 1
al número que indique el usuario (no mayor de 50) :

1
12
123
1234
12345
123456*/
var cant = prompt("Ingrese un número entre 1 y 50");
if(cant > 0 && cant < 51)
{
    for (let i = 0; i < cant; i++) 
    {
        for (let j = 0; j <= i; j++) 
        {
            document.write(j+1);
        }
        document.write("<br>");
    }
}
else
{
    alert("El número ingresado es inválido")
}