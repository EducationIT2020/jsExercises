/*9. Realiza un script que pida una cadena de texto y la devuelva al
revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq
aloh”.*/
var texto = prompt("Ingrese un texto");
for (let i = 0; i < texto.length; i++) 
{
    document.write(texto.charAt(texto.length - (i + 1)));
}