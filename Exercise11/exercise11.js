/*11. Realiza un script que muestre la posición de la primera vocal de
un texto introducido por teclado*/
var texto = prompt("Ingrese texto");
for (let i = 0; i < texto.length; i++) 
{
    var letter = texto.charAt(i).toLowerCase()
    if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u")
    {
        alert("La primer vocal es " + texto.charAt(i) + " y se encuentra en la posición " + texto.indexOf(letter));
        break;
    }
}