/*10. Realiza un script que pida un texto e indique si es un palíndromo.
Ejemplo de palíndromo: “Dabale arroz a la zorra el abad”.*/
var texto = prompt("Ingrese un texto");
texto = texto.trim().toLowerCase().replace(/ /g, "");
var palindromo = true;
for (let i = 0; i < texto.length; i++) 
{
    if(texto.charAt(i) != texto.charAt(texto.length - (i +1)))
    {
        palindromo = false;
    }
}
if(palindromo == true)
{
    alert("Es palíndromo");
}
else
{
    alert("No es palíndromo");
}