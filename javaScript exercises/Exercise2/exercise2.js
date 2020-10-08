/*2. Pide una nota (número). Muestra la calificación según la nota:
	0-3: Muy deficiente
	3-5: Insuficiente
	5-6: Suficiente
	6-7: Bien
	7-9: Notable
    9-10: Sobresaliente*/
var nota = prompt("Ingrese el resultado de su exámen");
if(nota > 0 && nota < 4)
{
    alert("La nota es Muy deficiente");
}
else if(nota > 3 && nota < 6)
{
    alert("La nota es Insuficiente");
}
else if(nota > 5 && nota < 8)
{
    alert("La nota es Bien");
}
else if(nota > 7 && nota < 10)
{
    alert("La nota es Notable")
}
else if( nota == 10)
{
    alert("La nota es Sobresaliente");
}
else
{
    alert("La nota ingresada es inválida");
}
