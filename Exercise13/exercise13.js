// 13. Realiza un juego de Piedra Papel Tijera contra el Pc.
var jugador = prompt("Elija piedra, papel o tijera").toUpperCase();
var pc = ["PIEDRA", "PAPEL", "TIJERA"];
var random = Math.floor(Math.random() * 3); // random entre 0 y 2
document.write("Jugador: " + jugador + " .<br>");
document.write("Pc : " + pc[random] + " .<br>");
if(jugador == "PIEDRA" && pc[random] == "PAPEL")
{
    document.write("Gana la pc");
}
else if(jugador == "PIEDRA" && pc[random] == "TIJERA")
{
    document.write("Gana el jugador");
}
else if(jugador == "TIJERA" && pc[random] == "PAPEL")
{
    document.write("Gana el jugador");
}
else if(jugador == "TIJERA" && pc[random] == "PIEDRA")
{
    document.write("Gana la pc");
}
else if(jugador == "PAPEL" && pc[random] == "TIJERA")
{
    document.write("Gana la pc");
}
else if( jugador == "PAPEL" && pc[random] == "PIEDRA")
{
    document.write("Gana el jugador");
}
else
{
    document.write("Empate");
}