/*Patrones con Loop anidados
Dibujar los siguientes patrones ocupando document.write, para rellenar los espacios vacíos se debe imprimir un espacio vacío.

Cuadrado lleno:

*****
*****
*****
*****
*****
Cuadrado hueco:

*****
*   *
*   *
*   *
*****
Tablero de Ajedrez:

* * * * * * * *
 * * * * * * * 
* * * * * * * *
 * * * * * * * 
* * * * * * * *
 * * * * * * * 
* * * * * * * *
 * * * * * * *

 Piramide Izquierda:

*     
**    
***   
****  
***** 
Pirámide centrada

*
***
*****
*******
*********
Pirámide invertida

*********
*******
*****
***
*
Diamante:

*
***
*****
*******
*********
*******
*****
***
*

*/
var lenght = 4;
filledSquare(lenght);
document.write("<br><br>");
emptySquare(10,5);
document.write("<br><br>");
ajedrez(5,3);
document.write("<br><br>");
leftPyramid(5);
document.write("<br><br>");
centerPyramid(5);
document.write("<br><br>");
invertedPyramid(5);
document.write("<br><br>");
diamond(5);

function filledSquare(length)
{
    for (let i = 0; i < length; i++) {
        document.write("****<br>");
    }
}

function emptySquare(rows, columns)
{
    var write = "";
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            if(i == 0 || i == columns - 1)
            {
                document.write("*");
            }
            else
            {
                if(j == 0 || j == rows - 1)
                {
                    document.write("*");
                }
                else
                {
                    document.write("1");
                }
            }
        }
        document.write("<br>")
    }
}

function ajedrez(rows, columns)
{
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows ; j++) {
            if(i % 2 != 0)
            {
                if(j % 2 != 0)
                {
                    document.write("1");
                }
                else
                {
                    document.write("0");
                }
            }
            else
            {
                if(j % 2 != 0)
                {
                    document.write("0");
                }
                else
                {
                    document.write("1");
                }
            }
        }
        document.write("<br>");
    }
}

function leftPyramid(length)
{
    for (let i = 0; i < length; i++) {
        document.write("*");
        for (let j = 0; j < i; j++) {
            document.write("*");
        }
        document.write("<br>");
    }
}

function centerPyramid(length)
{
    for (let i = 0; i < length; i++) {
        document.write("*");
        for (let j = 0; j < i; j++) {
            document.write("**");
        }
        document.write("<br>");
    }
}

function invertedPyramid(length)
{
    for (let i = length; i > 0; i--) {
        document.write("*");
        for (let j = i; j > 1; j--) {
            document.write("**");
        }
        document.write("<br>");
    }
}

function diamond(length)
{
    centerPyramid(lenght);
    invertedPyramid(lenght);
}
