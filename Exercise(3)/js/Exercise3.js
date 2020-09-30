/* 3. Realiza un script que escriba una pirámide del 1 al 30 de la
siguiente forma :

1
22
333
4444
55555
666666*/

var valor = 30;
for (let i = 0; i < valor; i++) 
{
    for (let j = 1; j <= i + 1; j++) 
    {
        document.write(i+1);      
    }
    document.write("<br>");
}