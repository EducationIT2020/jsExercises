/*7. Realiza un script que pida una cadena de texto y la muestre
poniendo el signo – entre cada carácter sin usar el método replace.
Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e-
-t-a-l”.*/
var texto = prompt("Ingrese un texto");
for (let i = 0; i < texto.length - 1; i++) 
{
    document.write(texto.charAt(i) + "-");    
}
document.write(texto.charAt(texto.length - 1));