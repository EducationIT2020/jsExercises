//8. Realiza un script que cuente el número de vocales que tiene un texto.
var texto = prompt("Ingrese un texto");
var count = 0;
for (let i = 0; i < texto.length; i++) 
{
    var letra = texto.charAt(i);
    letra = letra.toLowerCase();
    if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u")
    {
        count++;
    }
}
alert("Hay " + count + " vocales.");